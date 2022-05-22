<script setup>
import { onMounted, ref } from 'vue';
import { getColour } from '../jsvars/colours';

const msgdiv = ref()
defineProps({
    messagecontent: Object,
})

const username = ref();

let colourcss;
onMounted(() => {
    msgdiv.value.scrollIntoView({ block: "end", inline: "nearest" });
})

const formatDate = (s) => {
    const strDate = new Date(s)
    let strig1 = strDate.toTimeString().split(' ')[0]
    return strig1;
}

const getColourCss = (messagecontent) => {
    return {
        'color': getColour(messagecontent.sendername)
    }
}

</script>

<template>
    <div ref="msgdiv" class="bg-messsageBG rounded-md w-auto p-2 m-2 animate-fade">
        <div class="grid grid-cols-2 relative">
            <div v-bind:style="getColourCss(messagecontent)">{{ messagecontent.sendername }}</div>
            <div class="text-xs">
                <div class="text-right">Sent at {{ formatDate(messagecontent.senttime) }}</div>
            </div>
            <div class="text-sm col-span-2 break-normal">{{ messagecontent.message }}</div>
        </div>
    </div>
</template>