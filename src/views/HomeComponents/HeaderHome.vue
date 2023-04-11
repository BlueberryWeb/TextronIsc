<template>
    <div class="vid-index">
        <header class="">
            <div class="container-fluid menu pt-3">
                <div class="container-fluid">
                    <div class="row pt-2">
                        <div class="col-12 col-lg-1 col-sm-12 col-md-12 justify-content-center">
                            <a href="" class="a_none_style text-white">
                                <h1 class="DAGGERSQUARE">ISC</h1>
                            </a>
                        </div>
                        <div class="col-12 col-lg-9 col-sm-12 col-md-12"></div>
                        <div class="col-12 col-lg-2 col-sm-12 col-md-12 pt-1">
                            <div class="text-end">
                                <a class="btn btn-primary btn-login"  @click="getToLogin">
                                    <img v-bind:src="require('../../assets/images/icono-login.png')" alt="Login"
                                        class="img-fluid float-start ms-3 icon-login" />
                                    <h6 class="oRegular">Login </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="txt-index">
            <div class="text-center">
                <h1 class="space-text oRegular h4">WELCOME TO</h1>
                <img v-bind:src="require('../../assets/images/ISC-textron-logo.gif')" alt="TEXTRON"
                    class="img-fluid logo-textron my-4" />
            </div>
            <!-- <div class="text-center">
                <img v-bind:src="require('../../assets/images/logo-ISC-white.png')" alt="ISC: INTEGRATED SUPPLY CHAIN"
                    class="img-fluid logo-isc" />
            </div> -->
        </div>
        <div class="txt-index-2">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="mb-3 oRegular txt-what-is">
                                    <h4 class="oExtraBold h2">What is</h4>
                                    <h4 class="oRegular h2 mb-3">ISC system?</h4>
                                    <p>Textron ISC is an executive system for the </p>
                                    <p>management, administration and integration of </p>
                                    <p>projects focused on the supply chain of the “Textron </p>
                                    <p>Industrial” division through its Driving Technology </p>
                                    <p>Forward line of “Textron Specialized Vehicles”.</p>
                                </div>
                                <div class="text-end">
                                    <img v-bind:src="require('../../assets/images/line-index.png')" alt="ISC"
                                        class="img-fluid line-index" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="txt-what-we">
                                    <h4 class="oExtraBold h2">What we are</h4>
                                    <h4 class="oRegular h2 mb-3">looking for?</h4>
                                    <p>This ISC system has the objective of integrating and </p>
                                    <p>standardizing all the projects of our brands belonging</p>
                                    <p>to “Textron Specialized Vehicles”, as well as serving as a</p>
                                    <p>communication channel between all of them to achieve</p>
                                    <p>a more efficient standardization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
        </div>
        <video v-bind:src="require('../../assets/video/carro.mp4')" muted loop autoplay></video>
    </div>
</template>

<script>
export default {
  methods: {
    getToLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.a_none_style {
    text-decoration: none;
}

.vid-index {
    position: relative;
    right: 0;
    width: 100%;
    min-height: 150vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    background: #111;
    color: #fff;
    z-index: 2;
}

.vid-index header {
    background-color: linear-gradient(top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
    /*background-color: rgba(0, 0, 0, 0.5);*/
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0px 20px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.vid-index video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

.txt-index {
    position: absolute;
    top: 17%;
    left: 40%;
    text-align: center;
    align-items: center;
    z-index: 10000;
}

.txt-index-2 {
    position: absolute;
    top: 57%;
    left: 5%;
    z-index: 10000;
    width: 100%;
}

.txt-what-we {
    margin-top: 11rem;
}

.txt-what-we p {
    line-height: 70%;
    font-size: 14px;
}

.txt-what-is p {
    line-height: 70%;
    font-size: 14px;
}

.logo-isc {
    width: 350px;
}

.icon-login {
    width: 18px;
}

.logo-textron {
    width: 300px;
}

.space-text {
    letter-spacing: 0.9rem;
}

.btn-login {
    background: rgb(100, 193, 186);
    background: linear-gradient(152deg, rgba(100, 193, 186, 1) 0%, rgba(0, 34, 80, 1) 48%, rgba(0, 34, 80, 1) 100%);
    border: none;
    border-radius: 0;
    width: 135px;
    font-family: 'Open Sans Regular';
}

.btn-login:hover {
    background: rgb(100, 193, 186);
    background: linear-gradient(152deg, rgba(100, 193, 186, 1) 0%, rgba(0, 34, 80, 1) 48%, rgba(0, 34, 80, 1) 100%);
    border: none;
    border-radius: 0;
    width: 135px;
    font-family: 'Open Sans Regular';
}

.btn-login:focus {
    background: rgb(100, 193, 186);
    background: linear-gradient(152deg, rgba(100, 193, 186, 1) 0%, rgba(0, 34, 80, 1) 48%, rgba(0, 34, 80, 1) 100%);
    border: none;
    border-radius: 0;
    width: 135px;
    font-family: 'Open Sans Regular';
}

.btn-login h6 {
    margin-top: 0.2rem;
}

.line-index {
    width: 70%;
}

@media only screen and (min-width: 1600px) and (max-width: 2000px){
    .brands{
        position: relative;
        width: 380px;
        height: 470px ;
        margin-bottom: 150px;
    }
    .logo-link{
        position: absolute;
        bottom: 20%;
        left: 20%;
    }
    .logo{
        position: absolute;
        bottom: 10%;
        left: 20%;
    }
    .logo img{
        width: 183px;
        height: 43px;
    }
    .logo-link img{
        width: 182px;
        height: 43px;
    }

}
</style>