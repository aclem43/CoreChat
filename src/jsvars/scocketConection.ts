import { setLoginBool } from "./connection";
import { setconnectionstate } from "./connectionstate";
import { setGroupId } from "./groupid";
import { addmessages, clearmessages } from "./messages"
import { setusername } from "./username";
import { getUserid, setUserid } from './userid'
import { setNotifcationColor, setNotifcationContent, setNotifcationVisibilty } from "./notification";
import { AddColourUser, getColour } from "./colours";
import { setServerVersion } from "./version";
import { updateUsers } from "./users";

const socket: WebSocket = new WebSocket("ws://localhost:42069")//'ws://indrocraft.hopto.org:42069')//`ws://${window.location.host}/ws/`);


let username: string = "NULL"

enum eventTypes {
    CONNECTION = "connection",
    LOGIN = "login",
    REGISTER = "register",
    MESSAGE = "message",
    CHANGEGROUP = "changegroup",
    GROUPS = "group"

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
    switch (data.type) {
        case eventTypes.CONNECTION:
            setUserid(data.id);
            setServerVersion(data.version)
            break
        case eventTypes.LOGIN:
            if (data.return) {
                setLoginBool(true)
                setusername(username)
                setNotifcationColor(false)
                setNotifcationContent("Welcome - " + username)
                setNotifcationVisibilty(true)
            } else {
                setNotifcationColor(true)
                setNotifcationContent("Invalid Username Or Password - " + username)
                setNotifcationVisibilty(true)
            }

            break
        case eventTypes.MESSAGE:
            addmessages({ msgid: data.msgid, message: data.message, sendername: data.senderusername, senttime: data.senttime, groupid: data.groupid })
            if (getColour(data.senderusername) == null) {
                AddColourUser(data.senderusername, username)
            }
            break
        case eventTypes.CHANGEGROUP:
            if (data.return) {
                clearmessages()
                setGroupId(data.groupid)
            }
            break
        case eventTypes.GROUPS:
            console.log(data)
            updateUsers(data.groups)
            break
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
export const changeGroup = (groupid, oldid) => {
    sendObject({ id: getUserid().value, type: eventTypes.CHANGEGROUP, oldgroupid: oldid, groupid: groupid, username: username })
}
export const login = (usrname: string, password: string): void => {
    sendObject({ type: eventTypes.LOGIN, id: getUserid().value, username: usrname, password: password })
    username = usrname;

}

export const register = (usrname: string, password: string): void => {
    sendObject({ type: eventTypes.REGISTER, id: getUserid().value, username: usrname, password: password })
    username = usrname;
}