<template>
    <section class="showcase-about" id="showcase">
        <video v-bind:src="require('../../../assets/video/loop-about.mp4')" muted loop autoplay ></video>  
        <div class="edit">
            <i class="fa-regular fa-pen-to-square"></i>
        </div>  
        <div class="txt-about" data-aos="fade-down"  data-aos-duration="1500">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="">
                            <h6 class="oLight">About our company</h6>
                            <img v-bind:src="require('../../../assets/images/logo-textronx.png')" alt="Logo Textron" class="img-fluid logo-about mb-5"/>
                            <h1 class="oExtraBold display-6">
                                We believe in excellence <br/>
                                <b class="oLight">through organization and <br/> innovation</b>
                            </h1>
                                
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="border-bottom-about">
                            <div class="row my-3">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                    <div class="text-center">
                                        <img v-bind:src="require('../../../assets/images/vision-icon.png')" alt="Icon Vision" class="img-fluid vision-icon"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-7 mt-4">
                                    <div class="cursor" @click="getVision">
                                        <h1 class="oExtraBold h2">Our Vision</h1>
                                        <div class="d-flex">
                                            <div class="me-4">
                                                <h5 class="oLight">Where do we want to reach?</h5>
                                            </div>
                                            <div class="ms-5">
                                                <div class="circle">
                                                    <img v-bind:src="require('../../../assets/images/right-arrow.png')" alt="" class="img-fluid "/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border-bottom-about">
                            <div class="row my-3">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                    <div class="text-center">
                                        <img v-bind:src="require('../../../assets/images/mission-icon.png')" alt="Icon Vision" class="img-fluid mission-icon"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                                    <div class="cursor" @click="getMission">
                                        <h1 class="oExtraBold h2">Our Mission</h1>
                                        <div class="d-flex">
                                            <div class="">
                                                <h5 class="oLight">What is our current field of action?</h5>
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
                        <div class="">
                            <div class="row my-3">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                                    <div class="text-center">
                                        <img v-bind:src="require('../../../assets/images/values-icon.png')" alt="Icon Vision" class="img-fluid values-icon"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                                    <div class="cursor" @click="getValues">
                                        <h1 class="oExtraBold h2">Our Values</h1>
                                        <div class="d-flex">
                                            <div class="">
                                                <h5 class="oLight">What value tools
                                                are we working with?</h5>
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
    }
}
</script>

<style scoped>
    .cursor{
        cursor: pointer;
    }
    .showcase-about{
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
    .showcase-about video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .txt-about{
        position: absolute;
        top: 30%;
        left: 0;
        transform: calc(-50%, -50%);
        text-align: start;
        width: 100%;
    }
    .logo-about{
        width: 320px;
    }
    .vision-icon{
        width: 100%;
    }
    .mission-icon{
        width: 50%;
    }
    .values-icon{
        width: 60%;
    }
    .border-bottom-about{
        border-bottom: 0.5px solid #FFFFFF;
    }
    .circle{
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        width: 30px;
        text-align: center;
        height: 30px;
    }
    .circle img{
        width: 30%;
    }
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
</style>