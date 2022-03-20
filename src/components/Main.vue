<script setup>
import Message from './Message.vue'
import Sideboard from './Sideboard.vue';
import BottomBoard from './BottomBoard.vue'
import { computed, onMounted, ref } from 'vue';
import { getmessages } from '../jsvars/messages';
import {getVersion} from '../jsvars/version'
import { getconnectionstate } from '../jsvars/connectionstate';
import MobileLogin from './MobileLogin.vue';
import { getLoginBool } from '../jsvars/connection';



const messageDiv = ref();
const mobilelogin = ref(false)


if (window.innerWidth <= 800) {
    mobilelogin.value = true;
}else {
    mobilelogin.value = false;
}

let connectionStatus = computed(()=> {
    let x = getconnectionstate()
    if (x.value == 0){  
        return "Connecting"
    }else if (x.value == 1){
        return "Connected"
    }else if (x.value == 2){
        return "Disconected"
    }
})

window.addEventListener(
    'resize',
    () => {
        if (window.innerWidth <= 800) {
            mobilelogin.value = true;
        }else {
            mobilelogin.value = false;
        }
    }

)


</script>

<template >



<div class=" grow  pt-2 pr-4" style="height: 110vh;">
        <div class="flex grow gap-2  grid-cols-2 pl-3 pb-3 md:h-5/6 mobile:h-4/5" >
            <div class="md:w-2/12 ">
                <Sideboard />
            </div>
            <div id="messagecontainer" class="w-10/12 mobile:w-full bg-secondary rounded-md overflow-y-scroll">
                <div class="pb-5">
                    <div v-if="mobilelogin == false || getLoginBool()" v-for="messsage in getmessages().value" :key="messsage.msgid" ref="messageDiv">            
                        <Message :messagecontent="messsage" /> 
                    </div>
                    <div v-if="mobilelogin" class="grid grid-cols-3 gap-4">
                        <MobileLogin />
                    </div>
                </div>
            
            </div>
        </div>
        <div class="flex grow pl-3  ">
            <BottomBoard/>
        </div>
        <div class="grid grid-cols-2 pl-3">
                <div class="text-tetiary text-xs ">{{connectionStatus}} </div>
            <div class="text-tetiary text-xs text-right">Version - {{getVersion()}}</div>
       </div>
    </div>

    
</template>

<style>
body {
background-color: #172121;
margin: 0; height: 100%; overflow: hidden
}
</style>