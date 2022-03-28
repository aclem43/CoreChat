
import { ref } from "vue";
import { setLoginBool } from "./connection";
import { setconnectionstate } from "./connectionstate";
import { getGroupId, setGroupId } from "./groupid";
import { addmessages, clearmessages } from "./messages"
import { setusername } from "./username";
import { getUserid, setUserid } from './userid'

const socket: WebSocket = new WebSocket('ws://localhost:8080')//`ws://${window.location.host}/ws/`);


let username: string = "NULL"

const objStr = (object: object) => {
    return JSON.stringify(object)
}

const strObj = (string: string) => {
    return JSON.parse(string)
}


socket.addEventListener('open', function (event) {

    socket.send(objStr({ type: "connection" }));
});

socket.onopen = (event) => {
    setconnectionstate(1)
}
socket.onclose = (event) => {
    setconnectionstate(2)
}
socket.addEventListener('error', (event) => {
    console.log(event)
})
// Listen for messages
socket.addEventListener('message', (event) => {
    const data = strObj(event.data)
    switch (data.type) {
        case "connection":
            setUserid(data.id);
            break
        case "login":
            if (data.return) {
                setLoginBool(true)
                setusername(username)
            }
            break
        case "message":
            addmessages({ msgid: data.msgid, message: data.message, sendername: data.senderusername, senttime: data.senttime, groupid: data.groupid })
            break
        case "changegroup":
            if (data.return) {
                clearmessages()
                setGroupId(data.groupid)
            }
    }


});
export const getSocket = (): WebSocket => {
    return socket;
}
export const sendMessage = (message, groupid): void => {
    socket.send(objStr({ id: getUserid().value, type: "message", message: message, username: username, senttime: Date.now(), groupid: groupid }))

}
export const changeGroup = (groupid) => {
    socket.send(objStr({ id: getUserid().value, type: "changegroup", groupid: groupid, username: username }))
}
export const login = (usrname: string, password: string) => {
    socket.send(objStr({ type: "login", id: getUserid().value, username: usrname, password: password }))
    username = usrname;

}