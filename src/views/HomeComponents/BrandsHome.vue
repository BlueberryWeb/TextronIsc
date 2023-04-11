<template>
    <div class="vid-brands">
        <video v-bind:src="require('../../assets/video/brands.mp4')" muted loop autoplay></video>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .vid-brands{
        position: relative;
        right: 0;
        width: 100%;
        min-height:80vh;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #111;
        color: #fff;
        z-index: 2;
    }
    .vid-brands video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    
</style>