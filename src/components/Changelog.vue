
<script setup>

import {getchangelogs} from '../jsvars/changelog'

const changelogs = getchangelogs()
     
</script>

<template>

    <div v-for="changelog in changelogs.CHANGELOGS" :key="changelog.version">
        {{changelog}}
    </div>

</template>