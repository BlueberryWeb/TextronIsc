<template>
    <HeaderHome />
    <SliderPortal />
    <div class="area-scrollarea">
        <router-view />
        <FooterPortal/>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
    components: {
        HeaderHome: defineAsyncComponent(() => import('../components/PortalHeader.vue')),
        SliderPortal: defineAsyncComponent(() => import('../components/SliderPortal.vue')),
        FooterPortal: defineAsyncComponent(() => import('../components/FooterPortal.vue')),

    }
}
</script>

<style scoped lang="css">
input[type="checkbox"]:checked~#sidebarMenu {
    transform: translateX(0);
}

input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}

.area-scrollarea {
    height: calc(95.5vh - 40px);
    overflow: scroll;
    overflow-x: hidden;
    
}

.area-scrollarea::-webkit-scrollbar {
    -webkit-appearance: none;
}

.area-scrollarea::-webkit-scrollbar:vertical {
    width:10px;
}

.area-scrollarea::-webkit-scrollbar-button:increment,.area-scrollarea::-webkit-scrollbar-button {
    display: none;
} 

.area-scrollarea::-webkit-scrollbar:horizontal {
    height: 10px;
}

.area-scrollarea::-webkit-scrollbar-thumb {
    background-color: #797979;
    /* border-radius: 20px; */
}

.area-scrollarea::-webkit-scrollbar-track {
    border-radius: 10px;  
}
</style>