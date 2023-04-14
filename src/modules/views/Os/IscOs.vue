<template>
    <section class="showcase-isc" id="showcase">
        <video v-bind:src="require('../../../assets/video/loop-ISC.mp4')" muted loop autoplay ></video> 
        <div class="edit">
            <i class="fa-regular fa-pen-to-square"></i>
        </div>     
        <div class="txt-isc" data-aos="fade-down"  data-aos-duration="1500">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-md-12 col-lg-2">
                        <div class="text-center">
                            <img v-bind:src="require('../../../assets/images/logo-textronx.png')" alt="" class="img-fluid logo-isc-os"/>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-md-12 col-lg-10">
                        <div class="text-center">
                            <h1 class="oExtraBold">Integrated Supply Chain</h1>
                            <h2 class="oRegular h1">Operating System</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                                <div class="logo-isc text-center">
                                    <img v-bind:src="require('../../../assets/images/logo-isc-vertical.png')" alt="Logo ISC" class="img-fluid"/>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-1 me-2"></div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-8 ">
                                <div class="title-modules">
                                    <h3 class="oLight">MODULES</h3>
                                </div>
                                <div class="buttons-modules">
                                    <ul class="nav nav-pills mb-3 flex-column flex-sm-row justify-content-center" id="pills-tab" role="tablist">
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link active" id="pills-people-tab" data-bs-toggle="pill" data-bs-target="#pills-people" type="button" role="tab" aria-controls="pills-people" aria-selected="true">PEOPLE</button>
                                        </li>
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-safety-tab" data-bs-toggle="pill" data-bs-target="#pills-safety" type="button" role="tab" aria-controls="pills-safety" aria-selected="false">SAFETY</button>
                                        </li>
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-quality-tab" data-bs-toggle="pill" data-bs-target="#pills-quality" type="button" role="tab" aria-controls="pills-quality" aria-selected="false">QUALITY</button>
                                        </li>
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-volume-tab" data-bs-toggle="pill" data-bs-target="#pills-volume" type="button" role="tab" aria-controls="pills-volume" aria-selected="false">VOLUME</button>
                                        </li>
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-cost-tab" data-bs-toggle="pill" data-bs-target="#pills-cost" type="button" role="tab" aria-controls="pills-cost" aria-selected="false">COST</button>
                                        </li>
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-material-tab" data-bs-toggle="pill" data-bs-target="#pills-material" type="button" role="tab" aria-controls="pills-material" aria-selected="false">MATERIAL MGMT </button>
                                        </li>
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-safety2-tab" data-bs-toggle="pill" data-bs-target="#pills-safety2" type="button" role="tab" aria-controls="pills-safety2" aria-selected="false">SAFETY</button>
                                        </li>
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-people2-tab" data-bs-toggle="pill" data-bs-target="#pills-people2" type="button" role="tab" aria-controls="pills-people2" aria-selected="true">PEOPLE</button>
                                        </li>  
                                        <li class="nav-item col-12 col-sm-12 col-md-12 col-lg-4" role="presentation">
                                            <button class="nav-link" id="pills-quality2-tab" data-bs-toggle="pill" data-bs-target="#pills-quality2" type="button" role="tab" aria-controls="pills-quality2" aria-selected="false">QUALITY</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5 info-modules">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-people" role="tabpanel" aria-labelledby="pills-people-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-safety" role="tabpanel" aria-labelledby="pills-safety-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-quality" role="tabpanel" aria-labelledby="pills-quality-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-volume" role="tabpanel" aria-labelledby="pills-volume-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-cost" role="tabpanel" aria-labelledby="pills-cost-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-material" role="tabpanel" aria-labelledby="pills-material-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-safety2" role="tabpanel" aria-labelledby="pills-safety2-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-people2" role="tabpanel" aria-labelledby="pills-people2-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-quality2" role="tabpanel" aria-labelledby="pills-quality2-tab">
                                <div class="row mb-4">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="ms-4">
                                            <h1 class="oLight title-vision h2 ms-5"> SAFETY</h1>
                                        </div>
                                            
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="text-center">
                                            <img v-bind:src="require('../../../assets/images/icon-download-file.png')" alt="" class="img-fluid icon-file"/>
                                        </div>
                                    </div>
                                        
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                        <div class="txt-info-modules">
                                            <p class="oLight mb-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                            <p class="oLight">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, quisquam est quibusdam assumenda 
                                                ratione cumque vel perspiciatis totam molestiae quaerat harum atque provident, recusandae reiciendis 
                                                exercitationem. Veniam dolore omnis facere.
                                            </p>
                                                
                                            <div class="text-center">
                                                <img v-bind:src="require('../../../assets/images/img-sample.png')" alt="" class="img-fluid"/>
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
    .showcase-isc{
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
    .showcase-isc video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    .txt-isc{
        position: absolute;
        top: 10%;
        left: 0;
        transform: calc(-50%, -50%);
        width: 100%;
    }
    .logo-isc-os{
        width: 200px;
    }
    .logo-isc{
        margin-top: 15.5rem;
    }
    .title-modules{
        margin-left: 5rem;
        margin-top: 2.5rem;
    }
    .title-modules h3{
        font-size: 21px;
        letter-spacing: .4rem;
    }
    .buttons-modules{
        margin-top: 0;
        overflow-y: scroll;
        scroll-behavior: smooth;
        z-index: 1000;
        scrollbar-gutter: stable both-edges;
        height: 420px;
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
        background-color: #FFFFFF;
        color: #000000;
        border-radius: 100%;
    }
    .nav-link{
        border: 2px solid #FFFFFF;
        width: 128px;
        height: 128px;
        border-radius: 100%;
        color: #FFFFFF;
        margin: 1rem;
    }
    .nav-item{
        width: 128px;
        height: 128px;
        margin: 1rem;
    }
    .nav-link:hover{
        border: 2px solid #FFFFFF;
        width: 140px;
        height: 140px;
        border-radius: 100%;
        color: #FFFFFF;
    }
    .nav-pills .nav-link{
        border: 2px solid #FFFFFF;
        border-radius: 100%;
    }
    .info-modules{
        margin-top: 5rem;
    }
    .icon-file{
        width: 10%;
    }
    .txt-info-modules{
        width: 80%;
        margin-left: 4rem;
        overflow-y: scroll;
        scroll-behavior: smooth;
        z-index: 1000;
        scrollbar-gutter: stable both-edges;
        height: 380px;
    }
    .txt-info-modules p{
        font-size: 13px;
    }
    .txt-info-modules img{
        width: 90%;
    }
    @media only screen and (min-width: 19000px) and (max-width: 2500px){        
        .logo-isc{
            margin-top: 18.5rem;
            text-align: end;
        }
        .buttons-modules{
            height: 500px;
        }
        .info-modules{
            margin-top: 8;
        }
        .txt-info-modules{
            height: 450px;
        }
    }
    
</style>