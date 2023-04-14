<template>
    <div class="bg-black">
        <div class="container py-5">
            <br>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                    <div class="d-flex">
                        <div class="ms-5 me-5">
                            <img v-bind:src="require('../../assets/images/logo-ezgo.png')" class="img-fluid logo-1" />
                        </div>
                        <div class="ms-5 me-5">
                            <img v-bind:src="require('../../assets/images/logo-cushman.png')" alt="CUSHMAN"
                                class="img-fluid logo-2" />
                        </div>
                        <div class="ms-5 me-5">
                            <img v-bind:src="require('../../assets/images/logo-artic.png')" alt="ARTIC CAT"
                                class="img-fluid logo-3" />
                        </div>
                        <div class="ms-5 me-5">
                            <img v-bind:src="require('../../assets/images/logo-jacobsen.png')" alt="JACOBSEN"
                                class="img-fluid logo-4" />
                        </div>
                        <div class="ms-5 me-5">
                            <img v-bind:src="require('../../assets/images/logo-gse.png')" alt="TEXTRON GSE"
                                class="img-fluid logo-5" />
                        </div>
                        <div class="ms-5 me-5">
                            <img v-bind:src="require('../../assets/images/tracker.png')" alt="TEXTRON GSE"
                                class="img-fluid logo-5" />
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
            </div>
        </div> 
    </div>
    
    <!-- <section class="showcase-footer" id="showcase">
        <video v-bind:src="require('../../assets/video/footer_textron.mp4')" muted loop autoplay ></video>    
        <div class="txt-video-footer">
            <div class="container py-5">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="d-flex">
                            <div class="ms-5 me-5">
                                <img v-bind:src="require('../../assets/images/logo-ezgo.png')" alt="EZGO" class="img-fluid logo-1"/>
                            </div>
                            <div class="ms-5 me-5">
                                <img v-bind:src="require('../../assets/images/logo-cushman.png')" alt="CUSHMAN" class="img-fluid logo-2"/>
                            </div>
                            <div class="ms-5 me-5">
                                <img v-bind:src="require('../../assets/images/logo-artic.png')" alt="ARTIC CAT" class="img-fluid logo-3"/>
                            </div>
                            <div class="ms-5 me-5">
                                <img v-bind:src="require('../../assets/images/logo-jacobsen.png')" alt="JACOBSEN" class="img-fluid logo-4"/>
                            </div>
                            <div class="ms-5 me-5">
                                <img v-bind:src="require('../../assets/images/logo-gse.png')" alt="TEXTRON GSE" class="img-fluid logo-5"/>
                            </div>
                            <div class="ms-5 me-5">
                                <img v-bind:src="require('../../assets/images/tracker.png')" alt="TEXTRON GSE" class="img-fluid logo-5"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
        </div>
    </section> -->
</template>

<script>
export default {

}
</script>

<style scoped lang="css">
    .showcase-footer{
        position: relative;
        right: 0;
        width: 100%;
        min-height: 220px;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #111;
        color: #fff;
        z-index: 2;  
    }
    .showcase-footer video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .txt-video-footer{
        position: absolute;
        top: 20%;
        width: 100%;
        left: 0;
        transform: calc(-50%, -50%);
    }
    .logo-1 {
        width: 120px;
    }

    .logo-2 {
        width: 150px;
    }

    .logo-3 {
        width: 100px;
    }

    .logo-4 {
        width: 120px;
    }

    .logo-5 {
        width: 150px;
    }
    .bg-black{
        background-color: #000000;
    }
</style>