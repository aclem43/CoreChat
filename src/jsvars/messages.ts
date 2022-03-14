import { Ref, ref } from "vue";
import { getGroupId } from "./groupid";


let messages:Ref = ref([]);


const messageExample = {id:Number,message:String,sendername:String,senttime:String,groupid:Number};



export const getmessages = () => {
    return messages;
}

export const addmessages = (x) => {
    if (x.groupid != getGroupId().value) return;
    messages.value.push(x);
}

export const clearmessages = () => {
    messages.value = []
}