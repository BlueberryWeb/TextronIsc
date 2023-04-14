<template>
    <section class="showcase-vision" id="showcase">
        <video v-bind:src="require('../../../assets/video/loop-mission.mp4')" muted loop autoplay ></video>    
        <div class="edit">
            <i class="fa-regular fa-pen-to-square"></i>
        </div>  
        <div class="txt-mission" data-aos="fade-down"  data-aos-duration="1500">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                        <div class="subtitle-vision text-center">
                            <h2 class="oLight h4">WHAT IS OUR CURRENT FIELD OF ACTION?</h2>
                        </div>
                    </div>
                        
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                        <hr class="hr-title">
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div class="title-vision">
                            <h1 class="oLight h2">OUR MSSION</h1>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                        <hr class="hr-title">
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                        <img v-bind:src="require('../../../assets/images/logo-textronx.png')" alt="Logo Textron" class="img-fluid  mb-5"/>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 mt-4">
                        <div class="text-end pb-5">
                            <hr class="hr-vertical">
                        </div>
                        <h1 class="oExtraBold h2">
                            Meet takt time on evert cycle on every process
                        </h1>
                        <h3 class="oLight h4">
                            “Resilient supply chain, leaders that understand the work, embrace scientific thinking – be a data organization”
                        </h3>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8"></div>
                        
                </div>
                    
            </div>
        </div>
        <div class="hr-bottom">
            <div class="container">
                <div class="row">
                    <hr/>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                        <div class="d-flex" @click="getAbout">
                            <div class="me-4">
                                <div class="circle">
                                    <img v-bind:src="require('../../../assets/images/left-arrow.png')" alt="" class="img-fluid "/>
                                </div>
                            </div>
                            <div class="mt-1">
                                <h5 class="oLight h6">Back to <b class="oExtraBold">Our Company</b> </h5>
                            </div>
                                
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                        <div class="d-flex cursor" @click="getVision">
                            <div class="me-4">
                                <div class="circle">
                                    <img v-bind:src="require('../../../assets/images/left-arrow.png')" alt="" class="img-fluid "/>
                                </div>
                            </div>
                            <div class="mt-1">
                                <h5 class="oLight h6">Back to <b class="oExtraBold">Vision</b> </h5>
                            </div>
                                
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                        <div class="d-flex cursor" @click="getValues">
                            <div class="mt-1">
                                <h5 class="oLight h6">Go to <b class="oExtraBold">Values</b> </h5>
                            </div>
                            <div class="ms-4">
                                <div class="circle">
                                    <img v-bind:src="require('../../../assets/images/right-arrow.png')" alt="" class="img-fluid "/>
                                </div>
                            </div>
                                
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods:{
        getVision() {
            this.$router.push({ name: "Vision" });
        },
        getMission() {
            this.$router.push({ name: "Mission" });
        },
        getValues() {
            this.$router.push({ name: "Values" });
        },
        getAbout(){
            this.$router.push({ name: "About_Company" });
        },
    }
}
</script>

<style scoped>
    .edit{
        position: absolute;
        top: 2%;
        right: 3%;
        transform: calc(-50%, -50%);
        text-align: start;
    }
    .edit i{
        font-size: 1.3rem;
    }
    .showcase-mission{
        position: relative;
        right: 0;
        width: 100%;
        min-height: 100vh;
        padding: 100px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        background: #111;
        color: #fff;
        z-index: 2;
    }
    .showcase-mission video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .txt-mission{
        position: absolute;
        top: 15%;
        left: 0;
        width: 100%;
        transform: calc(-50%, -50%);
        text-align: start;
    }
    .hr-vertical{
        rotate: 90deg;
        width: 110px;
        opacity: 0.9;
        margin-left: 6rem;
        border: 0.5px solid #FFFFFF;
    }
    .hr-bottom{
        position: absolute;
        width: 100%;
        transform: calc(-50%, -50%);
        bottom: 3%;
        left: 0;
    }
    .hr-title{
        border: 0.5px solid #FFFFFF;
        opacity: 0.5;
    }
    .cursor{
        cursor: pointer;
    }
    .circle{
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        width: 30px;
        text-align: center;
        height: 30px;
        align-items: center;
    }
    .circle img{
        width: 30%;
    }
</style>