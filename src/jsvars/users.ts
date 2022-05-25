import { Ref, ref } from "vue";
import { getGroupId } from "./groupid";


const currentUsers = ref([])

export const getCurrentUsers = (): Ref => {
    return currentUsers
}

export const updateUsers = (groups): void => {
    const id = getGroupId().value
    console.log(groups)
    groups.forEach((group) => {
        if (group.id == id) {
            currentUsers.value = group.members

        }
    })

}