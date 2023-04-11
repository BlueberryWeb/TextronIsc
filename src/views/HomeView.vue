<template>
  <div class="area-scrollarea">
    <HeaderHome />
    <BeliveThat />
    <BrandsHome />
    <MakeDifference />
    <HoverImages />
    <FooterApp />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components: {
    HeaderHome: defineAsyncComponent(() => import('../views/HomeComponents/HeaderHome.vue')),
    BeliveThat: defineAsyncComponent(() => import('../views/HomeComponents/BeliveThat.vue')),
    BrandsHome: defineAsyncComponent(() => import('../views/HomeComponents/BrandsHome.vue')),
    MakeDifference: defineAsyncComponent(() => import('../views/HomeComponents/MakeDifference.vue')),
    HoverImages: defineAsyncComponent(() => import('../views/HomeComponents/HoverImages.vue')),
    FooterApp: defineAsyncComponent(() => import('../components/SiteComponents/FooterView.vue')),
  },
}
</script>

<style>

</style>