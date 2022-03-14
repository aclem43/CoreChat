import { Ref, ref } from "vue";

const username:Ref = ref('LogIn')


export const getusername = ():Ref => {
    return username
}

export const setusername = (name:string):void => {
    username.value = name;
}