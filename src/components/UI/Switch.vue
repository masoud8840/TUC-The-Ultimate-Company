<template>
  <div class="switch-container">
    <input type="checkbox" value="true" />
    <span class="switch-thumb"></span>
  </div>
</template>

<script setup>
const props = defineProps(["label"]);
</script>
