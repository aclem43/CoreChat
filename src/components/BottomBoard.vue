<script setup>
import { computed, ref } from 'vue';
import { getLoginBool } from '../jsvars/connection';
import { getGroupId } from '../jsvars/groupid';
import { sendMessage } from '../jsvars/scocketConection';
import { getusername } from '../jsvars/username';
const messageInput = ref("")

function isBlank(str) {
    return (!str.replace(/\s/g, '').length);
}

const keyPress = () => {
    if (isBlank(messageInput.value)){
        return
    }
    sendMessage(messageInput.value,getGroupId().value)
    messageInput.value = "";

  
}


const disabled =  computed(()=> !getLoginBool().value);
</script>

<template>
<div class="rounded-md bg-secondary w-2/12"> 

    <div class="text-sm flex">
        <img src="src/assets/avatar.png" class="w-6 h-6 rounded-full p-1 mx-1">
        <h2 class="pt-0.5 text-base">{{getusername().value}}</h2>
    </div>
    <div class="text-xs text-center">
        Monkey
    </div>

</div>

<input v-model="messageInput" class="border-solid border-2 border-secondary rounded-md text-lg p-1 w-10/12 ml-1 focus:outline-none" :disabled="disabled" 
    :placeholder="'Message @' +getGroupId().value" v-on:keypress.enter="keyPress()"/>



</template>
