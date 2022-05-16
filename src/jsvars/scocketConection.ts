
import { ref } from "vue";
import { setLoginBool } from "./connection";
import { setconnectionstate } from "./connectionstate";
import { getGroupId, setGroupId } from "./groupid";
import { addmessages, clearmessages } from "./messages"
import { setusername } from "./username";
import { getUserid, setUserid } from './userid'
import { setNotifcationContent, setNotifcationVisibilty } from "./notification";

const socket: WebSocket = new WebSocket('ws://localhost:8080')//`ws://${window.location.host}/ws/`);


let username: string = "NULL"

enum eventTypes {
    CONNECTION = "connection",
    LOGIN = "login",
    REGISTER = "register",
    MESSAGE = "message",
    CHANGEGROUP = "changegroup"

}

const objStr = (object: object): string => {
    return JSON.stringify(object)
}

const strObj = (string: string): any => {
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
    console.log(data)
    switch (data.type) {
        case eventTypes.CONNECTION:
            setUserid(data.id);
            break
        case eventTypes.LOGIN:
            if (data.return) {
                setLoginBool(true)
                setusername(username)
                setNotifcationContent("Welcome - " + username)
                setNotifcationVisibilty(true)
            } else {
                setNotifcationContent("Invalid Username Or Password - " + username)
                setNotifcationVisibilty(true)
            }

            break
        case eventTypes.MESSAGE:
            addmessages({ msgid: data.msgid, message: data.message, sendername: data.senderusername, senttime: data.senttime, groupid: data.groupid })
            break
        case eventTypes.CHANGEGROUP:
            if (data.return) {
                clearmessages()
                setGroupId(data.groupid)
            }
    }


});

const sendObject = (obj: Object): void => {
    socket.send(objStr(obj))
}

export const getSocket = (): WebSocket => {
    return socket;
}
export const sendMessage = (message, groupid): void => {
    sendObject({ id: getUserid().value, type: eventTypes.MESSAGE, message: message, username: username, senttime: Date.now(), groupid: groupid })

}
export const changeGroup = (groupid) => {
    sendObject({ id: getUserid().value, type: eventTypes.CHANGEGROUP, groupid: groupid, username: username })
}
export const login = (usrname: string, password: string): void => {
    sendObject({ type: eventTypes.LOGIN, id: getUserid().value, username: usrname, password: password })
    username = usrname;

}

export const register = (usrname: string, password: string): void => {
    sendObject({ type: eventTypes.REGISTER, id: getUserid().value, username: usrname, password: password })
    username = usrname;
}