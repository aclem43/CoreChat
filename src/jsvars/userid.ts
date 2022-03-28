import { Ref, ref } from "vue";

let userid: Ref = ref(null)

export const getUserid = (): Ref => {
    return userid
}

export const setUserid = (int: number): void => {
    userid.value = int;
}