<script setup>
import { computed, ref } from 'vue';
import {setNotifcationVisibilty} from '../jsvars/notification.ts'
import {getNotifcationColor} from '../jsvars/notification.ts'

const close = () => {
    setNotifcationVisibilty(false)
}

const notificationcolor = computed(()=> {
   return getNotifcationColor();
})


</script>


<template>
<div v-if="notificationcolor.value" class="w-full px-4 py-1 border-black border bg-notifi-red grid grid-cols-2">
    <div class=""> <slot />  </div>
    <div class="text-right">
        <button
                type="button"
                class="bg-notifi-btn-red rounded-md px-2 py-0.5 border border-black hover:bg-notifi-btn-red-hover text-xs
                outline-none"
                v-on:click="close()"
                
            >Close</button>
    </div>

</div>
<div v-else class="w-full px-4 py-1 border-black border bg-notifi-green grid grid-cols-2" > 
    <div class=""> <slot />  </div>
    <div class="text-right">
        <button
                type="button"
                class="bg-notifi-btn-green rounded-md px-2 py-0.5 border border-black hover:bg-notifi-btn-green-hover text-xs
                outline-none"
                v-on:click="close()"
                
            >Close</button>
    </div>
</div>

</template>