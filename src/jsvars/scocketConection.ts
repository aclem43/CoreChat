
import { ref } from "vue";
import { setLoginBool } from "./connection";
import { setconnectionstate } from "./connectionstate";
import {addmessages} from "./messages"
import { setusername } from "./username";

const socket:WebSocket = new WebSocket('ws://localhost:8080')//`ws://${window.location.host}/ws/`);


let id:string;
let username:string = "NULL"

const objStr = (object:object)=>{
    return JSON.stringify(object)
  }

const strObj = (string:string) => {
return JSON.parse(string)
}


socket.addEventListener('open', function (event) {
    
    socket.send(objStr({type:"connection" }));
});

socket.onopen =  (event) => {
    setconnectionstate(1)
}
socket.onclose = (event) => {
    setconnectionstate(2)
}
socket.addEventListener('error', (event) => {
    console.log(event)
} )
// Listen for messages
socket.addEventListener('message', (event) => {
    const data = strObj(event.data)
    switch (data.type){
        case "connection":
            id = data.id;
            break
        case "login":
            if (data.return){
                setLoginBool(true)
            }
            break
        case "message":
            addmessages({msgid:data.msgid,message:data.message,sendername:data.senderusername,senttime:data.senttime})
            break
    }
   

}); 
export const getSocket = ():WebSocket => {
    return socket;
}
export const sendMessage = (message,groupid):void => {
    socket.send(objStr({id:id,type:"message",message:message,username:username,senttime:Date.now(),groupid:"int"}))
    
}
export const login = (usrname:string,password:string) => {
    username = usrname;
    setusername(username)
    console.log(id)
    socket.send(objStr({type:"login",id:id,username:usrname,password:password}))
}