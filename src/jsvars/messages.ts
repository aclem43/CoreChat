import { Ref, ref } from "vue";


let messages:Ref = ref([]);


const messageExample = {id:Number,message:String,sendername:String,senttime:String};



export const getmessages = () => {
    return messages;
}

export const addmessages = (x) => {
    messages.value.push(x);
}
  