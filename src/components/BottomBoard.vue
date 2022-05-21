<script setup>
import { computed, ref } from 'vue';
import { getLoginBool } from '../jsvars/connection';
import { getGroupId } from '../jsvars/groupid';
import { sendMessage } from '../jsvars/scocketConection';
import { getusername } from '../jsvars/username';
import { getUserid } from '../jsvars/userid'
const messageInput = ref("")

function isBlank(str) {
    return (!str.replace(/\s/g, '').length);
}

const keyPress = () => {
    if (isBlank(messageInput.value)) {
        return
    }
    sendMessage(messageInput.value, getGroupId().value)
    messageInput.value = "";


}



const disabled = computed(() => !getLoginBool().value);
const userid = computed(() => {
    if (getUserid().value) {
        return getUserid().value
    } else return ""
})
</script>

<template>
    <div class="rounded-md bg-secondary w-2/12 mobile:hidden">
        <div class="text-sm flex">
            <img src="" class="w-6 h-6 rounded-full p-1 mx-1" />
            <h2 class="pt-0.5 text-base">{{ getusername().value }}</h2>
        </div>
        <div class="text-xs text-center">{{ userid }}</div>
    </div>
    
    <div class="md:w-10/12 mobile:w-full ml-1 flex bg-secondary">
        <input
        v-model="messageInput"
        class="border-solid border-2 border-secondary rounded-md text-lg  w-11/12 p-1 focus:outline-none"
        :disabled="disabled"
        :placeholder="'Message @' + getGroupId().value"
        v-on:keypress.enter="keyPress()"
        />
        <div class="w-1/12 bg-quaternary m-1 rounded-md  flex p-0.5 gap-0.5">
            <div class="w-1/2 bg-secondary rounded-md text-center hover:bg-button-hover">
                IMG
            </div>
            <div class="w-1/2 bg-secondary rounded-md text-center hover:bg-button-hover">
               
            </div>
        
        </div>
    </div>
    
</template>
