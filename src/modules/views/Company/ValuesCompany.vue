<template>
    <section class="showcase-values" id="showcase">
        <video v-bind:src="require('../../../assets/video/loop-values.mp4')" muted loop autoplay ></video>    
        <div class="edit">
            <i class="fa-regular fa-pen-to-square"></i>
        </div>  
        <div class="values">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-4 values-additional">
                                <div class="txt-values" data-aos="fade-down"  data-aos-duration="1500">
                                    <h1 class="oLight space-words">MAIN <br/> VALUES</h1>
                                    <div class="oLight txt-main">
                                        <p>&#x2022; Integrity</p>
                                        <p>&#x2022; Trust</p>
                                        <p>&#x2022; Respect</p>
                                        <p>&#x2022; Pursue of excellence</p>
                                    </div>
                                </div>
                                <div class="txt-additional" data-aos="fade-down"  data-aos-duration="1500">
                                    <h1 class="oLight space-words">ADDITIONAL <br/> VALUES</h1>
                                    <div class="oLight txt-main">
                                        <p>We do what we say</p>
                                        <p>We listen to decide</p>
                                        <p>We act with confidence</p>
                                        <p>We have the will to win</p>
                                        <p>We win when we work together</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-2 values-additional-2"></div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="txt-principles" data-aos="fade-down"  data-aos-duration="1500" >
                                    <h1 class="oLight space-words">PRINCIPLES</h1>
                                    <h6 class="oItalic">(Please click on each principle to learn more)</h6>
                                    <div class="oLight txt-main ms-4">
                                        <p>&#x2022; Respect Every Individual</p>
                                        <p>&#x2022; Lead with Humility</p>
                                        <p>&#x2022; Seek Perfection</p>
                                        <p>&#x2022; Embrace Scientific Thinking</p>
                                        <p>&#x2022; Focus on Process</p>
                                        <p>&#x2022; Assure Quality at the Source</p>
                                        <p>&#x2022; Improve Flow & Pull</p>
                                        <p>&#x2022; Think Systemically</p>
                                        <p>&#x2022; Create Constancy of Purpose</p>
                                        <p>&#x2022; Create Value for the Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="txt-strategic">
                            <div class="text-center pb-4">
                                <h1 class="space-words oLight">STRATEGIC ENABLERS</h1>
                            </div>
                            <div class="row mt-5">
                                <div class="">
                                    <div class="row">
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                                            <div class="">
                                                <h4 class="oExtraBold">People</h4>
                                                <h5 class="oRegular">Institute tech training</h5>
                                                <h6 class="oLight">- Talent – respect doers</h6>
                                                <h6 class="oLight">- System thinking </h6>
                                            </div>
                                            <div class="txt-priority">
                                                <h4 class="oExtraBold">Priority</h4>
                                                <h5 class="oRegular">Meet TAKT every cycle</h5>
                                                <h6 class="oLight">- Safest workplace</h6>
                                                <h6 class="oLight">- Best quality </h6>
                                                <h6 class="oLight">- Shortest lead time</h6>
                                                <h6 class="oLight">- Lowest cost</h6>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                                            <div class="text-center txt-strategic-img">
                                                <img v-bind:src="require('../../../assets/images/strategic-enablers.png')" alt="" class="img-fluid "/>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                                            <div class="">
                                                <h4 class="oExtraBold">Process</h4>
                                                <h5 class="oRegular">Institute tech training</h5>
                                                <h6 class="oLight">- E2E material flow</h6>
                                                <h6 class="oLight">- Design for mfg product variant</h6>
                                                <h6 class="oLight">- Quality at source</h6>
                                            </div>
                                            <div class="txt-pi">
                                                <h4 class="oExtraBold">PI</h4>
                                                <h5 class="oRegular">Problem solving and innovation</h5>
                                                <h6 class="oLight">- Resilient supply chain</h6>
                                                <h6 class="oLight">- Mfg. of the future</h6>
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
        <div class="hr-bottom">
            <div class="container">
                <div class="row">
                    <hr/>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                        <div class="d-flex cursor" @click="getAbout">
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
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                        <div class="d-flex cursor" @click="getMission">
                            <div class="me-4">
                                <div class="circle">
                                    <img v-bind:src="require('../../../assets/images/left-arrow.png')" alt="" class="img-fluid "/>
                                </div>
                            </div>
                            <div class="mt-1">
                                <h5 class="oLight h6">Back to <b class="oExtraBold">Mission</b> </h5>
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
        getMission() {
            this.$router.push({ name: "Mission" });
        },
        getAbout(){
            this.$router.push({ name: "About_Company" });
        },
    }
}
</script>

<style scoped>
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
    .cursor{
        cursor: pointer;
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
    .showcase-values{
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
    .showcase-values video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0.8;
    }
    .values{
        position: absolute;
        width: 100%;
        top: 10%;
        left: 0;
        transform: calc(-50%, -50%);
    }
    .txt-values{
        margin-top: 5rem;
        text-align: end;
    }
    .txt-values p{
        font-size: 13px;
    }
    .txt-values h1{
        font-size: 25px;
    }
    .space-words{
        letter-spacing: .8rem;
    }
    .txt-main{
        line-height: 80%;
    }
    .txt-additional{
        margin-top: 8rem;
        left: 3%;
        transform: calc(-50%, -50%);
        text-align: end;
    }
    .txt-additional p{
        font-size: 13px;
    }
    .txt-additional h1{
        font-size: 20px;
    }
    .txt-principles{
        margin-top: 10rem;
        text-align: start;
        overflow-y: scroll;
        scroll-behavior: smooth;
        z-index: 1000;
        scrollbar-gutter: stable both-edges;
        width: 400px;
        height: 380px;
    }
    .txt-principles p, h6{
        font-size: 13px;
    }
    .txt-principles h1{
        font-size: 25px;
    }
    .txt-strategic{
        z-index: 100;
    }
    .txt-strategic-img{
        position: absolute;
        width: 100%;
        right: 16.5%;
        top: 20%;
        z-index: 1;
    }
    .txt-strategic h1{
        font-size: 25px;
    }
    .txt-strategic h6{
        font-size: 13px;
    }
    .txt-strategic h5{
        font-size: 18px;
    }
    .txt-priority{
        margin-top: 16rem;
    }
    .txt-pi{
        margin-top: 15rem;
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
    @media only screen and (min-width: 19000px) and (max-width: 2500px){
        .showcase-values video{
            object-fit: cover;
        }
        .values-additional-2{
            display: none;
        }
        .values-additional{
            margin-left: 5rem;
        }
        .txt-principles{
            margin-left: 10rem;
            margin-top: 13rem;
        }
        .txt-additional{
            margin-top: 10rem;
        }
    }

</style>