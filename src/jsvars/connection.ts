import { ref } from "vue";

let loginBool = ref(false)

export const getLoginBool = () => {
    return loginBool;
}

export const setLoginBool = (bool) => {
    loginBool.value = bool;
}
