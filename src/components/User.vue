<script setup>


defineProps({
  username: String,
})

</script>


<template>
  <div class="rounded-md p-1 text-sm">
    <h4>{{ username }}</h4>
  </div>
</template>