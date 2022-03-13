<script setup>
import { onMounted, ref } from 'vue';


const msgdiv = ref()
defineProps({
    messagecontent:Object,
})

onMounted(()=>{
    msgdiv.value.scrollIntoView( {block: "end", inline: "nearest"});
})


const formatDate = (s) => {
    const strDate = new Date(s)
    let strig1 = strDate.toTimeString().split(' ')[0]
    return strig1;
}
</script>

<template>
    <div ref="msgdiv" class="bg-quaternary rounded-md w-auto p-2 m-2 animate-fade" >
        
            <div class="grid grid-rows-2 grid-cols-2">
            <div>{{messagecontent.sendername}}</div>
            <div class="text-xs text-right" > Sent at {{formatDate(messagecontent.senttime)}}</div>
            <div class="text-sm col-span-2"  >{{messagecontent.message}} </div>            
        </div>
    </div>

</template>