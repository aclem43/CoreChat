import { Ref, ref } from "vue";

const username:Ref = ref('Log In')


export const getusername = ():Ref => {
    return username
}

export const setusername = (name:string):void => {
    username.value = name;
}