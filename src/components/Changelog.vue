<script setup>

import { getchangelogs } from '../jsvars/changelog'

const changelogs = getchangelogs()

</script>

<template>
    <h1 class="text-xl px-5 py-2">Changelogs</h1>
    <div class="bg-gradient-to-r to-secondary from-gray-900 mx-5 h-1 rounded-lg"></div>
    <div class="mx-5">
        <div v-for="changelog in changelogs.CHANGELOGS" :key="changelog.version" class="px-2 py-3">
            <h1 class="text-lg">{{ changelog.version }}</h1>
            <h5>{{ changelog.changelog }}</h5>
        </div>
    </div>
</template>