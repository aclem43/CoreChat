<script setup>


defineProps({
  username: Object,
})

</script>


<template>
  <div class="rounded-md p-1 text-sm">
    <h4>{{ username.user }}</h4>
  </div>
</template>