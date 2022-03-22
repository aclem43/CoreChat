import { computed, Ref, ref } from "vue"

const connectionstate = ref(0)

export const getconnectionstate = ():Ref => {
    return connectionstate
}
export const setconnectionstate = (x:number):void => {
    connectionstate.value = x
}

export const getconnectionStatus = computed(():string=> {
    let x = getconnectionstate()
    if (x.value == 0){  
        return "Connecting"
    }else if (x.value == 1){
        return "Connected"
    }else if (x.value == 2){
        return "Disconected"
    }
})