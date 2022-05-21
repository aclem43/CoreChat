import { computed, Ref, ref } from "vue"

const connectionstate = ref(0)

export const getconnectionstate = (): Ref => {
    return connectionstate
}
export const setconnectionstate = (x: number): void => {
    connectionstate.value = x
}
