<script setup>
import { computed, ref } from 'vue';
import { getLoginBool } from '../jsvars/connection';
import {addmessages} from '../jsvars/messages'
import { sendMessage } from '../jsvars/scocketConection';
const messageInput = ref("")

function isBlank(str) {
    return (!str.replace(/\s/g, '').length);
}

const keyPress = () => {
    if (isBlank(messageInput.value)){
        return
    }
    sendMessage(messageInput.value,"0000")
    messageInput.value = "";

  
}


const disabled =  computed(()=> !getLoginBool().value);
</script>

<template>
<div class="rounded-md bg-secondary w-2/12"> 
    <div class="text-sm p-1">
        Username
    </div>
    <div class="text-xs text-center">
        Monkey
    </div>
</div>

<input v-model="messageInput" class="border-solid border-2 border-secondary rounded-md text-lg p-1 w-10/12 ml-1 " :disabled="disabled" 
    placeholder="Message..." v-on:keypress.enter="keyPress()"/>



</template>
