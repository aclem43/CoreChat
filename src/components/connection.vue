<script setup>
import { computed, ref } from "vue"
import { getconnectionstate } from "../jsvars/connectionstate";

const colour = ref()

const text = computed(() => {
    const state = getconnectionstate()
    if (state.value == 0) {
        colour.value = "text-orange-800"
        return "Connecting"
    } else if (state.value == 1) {
        colour.value = "text-green-800"
        return "Connected"
    } else if (state.value == 2) {
        colour.value = "text-red-800"
        return "Disconected"
    }
})


</script>

<template>
    <div class="text-tetiary text-xs text-left" :class="colour">{{ text }}</div>
</template>