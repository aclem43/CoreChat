<script setup>
import { computed, ref } from "vue"
import { getconnectionstate } from "../jsvars/connectionstate";
import { getServerVersion } from "../jsvars/version";

const colour = ref()

const text = computed(() => {
    const state = getconnectionstate()
    if (state.value == 0) {
        colour.value = "text-orange"
        return "Connecting"
    } else if (state.value == 1) {
        colour.value = "text-green"
        return "Connected"
    } else if (state.value == 2) {
        colour.value = "text-red"
        return "Disconected"
    }
})

const version = computed(() => {
    return getServerVersion().value
})

const connected = () => {
    if (getconnectionstate().value == 1) return true
    else return false
}


</script>

<template>
    <div class="flex gap-3 pt-1">
        <div class="text-xs text-left" :class="colour">{{ text }}</div>
        <div v-if="connected()" class="text-xs text-light">Server Version - {{ version }}</div>
    </div>
</template>