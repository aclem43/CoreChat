import { Ref, ref } from "vue";

let groupid = ref("0000")

export const getGroupId = (): Ref => {
    return groupid;
}
export const setGroupId = (id: string): void => {
    groupid.value = id;
}