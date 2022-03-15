<script setup>
import Message from './Message.vue'
import Sideboard from './Sideboard.vue';
import BottomBoard from './BottomBoard.vue'
import { computed, onMounted, ref } from 'vue';
import { getmessages } from '../jsvars/messages';
import {getVersion} from '../jsvars/version'
import { getconnectionstate } from '../jsvars/connectionstate';



const messageDiv = ref();
const message = ref(true)




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



</script>

<template >



<div class=" grow  pt-2 pr-4" style="height: 110vh;">
        <div class="flex grow gap-2  grid-cols-2 pl-3 pb-3 h-5/6" >
            <div class="w-2/12">
                <Sideboard />
            </div>
            <div id="messagecontainer" class="w-10/12 bg-secondary rounded-md overflow-y-scroll">
                <div class="pb-5">
                    <div v-if="message" v-for="messsage in getmessages().value" :key="messsage.msgid" ref="messageDiv">            
                        <Message :messagecontent="messsage" /> 
                    </div>
                    <div v-if="message == false" class="grid grid-cols-3 gap-4">
                        2nd Menu
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