<template>
    <div class="vid-belive">
        <div class="txt-belive-that">
            <h1 class="oLight display-5"><b class="oExtraBold">We belive that</b> standardization</h1>
            <h1 class="oLight display-5">is the cornerstone of any project.</h1>
        </div>
        <video v-bind:src="require('../../assets/video/belive-that.mp4')" muted loop autoplay></video>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.vid-belive {
    position: relative;
    right: 0;
    width: 100%;
    min-height: 80vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    background: #111;
    color: #fff;
    z-index: 2;
}

.vid-belive video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

.txt-belive-that{
        position: absolute;
        top: 10%;
        left: 26%;
        text-align: center;
        align-items: center;
        z-index: 10000;
    }
</style>