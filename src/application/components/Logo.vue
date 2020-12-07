<template>
  <div class="logo">
    <img src="/images/stranerd_logo.png" alt="stranerd logo" class="logo--img" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Logo"
});
</script>

<style lang="scss" scoped>
.logo {
  &--img {
    width: 100px;
    max-height: 70px;
  }
}
</style>
