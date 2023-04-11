<template>
    <div class="container-fluid p-0">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="mb-4">
                                    <h1 class="oRegular display-5"><b class="oExtraBold">Make a</b> difference</h1>
                                </div>
                                <div class="mb-5 txt-difference">
                                    <p>Show your talent through commitment, organization and </p>
                                    <p>innovation, make a difference.</p>
                                </div>
                                <div class="mb-4 txt-difference">
                                    <p>Together we will recreate a profesional and creative environment</p>
                                    <p>where you can share experiences, knowledge and expertise.</p>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-5 pt-5">
                                <div class="mb-3 text-end">
                                    <h1 class="oLight h3">Please log into</h1>
                                    <h1 class="oLight h3">your account:</h1>
                                </div>
                                <div class="text-end">
                                    <a @click="getToLogin" class="btn btn-primary btn-login">
                                        <img v-bind:src="require('../../assets/images/icono-login.png')" alt="Login"
                                            class="img-fluid float-start ms-3 icon-login" />
                                        <h6 class="oRegular">Login</h6>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
            <video v-bind:src="require('../../assets/video/light-cars.mp4')" muted loop autoplay ></video> 
            <!-- <img v-bind:src="require('../../assets/images/make-difference.png')" alt="Make the difference"
                class="img-fluid" /> -->
        </div>
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

<style>
.txt-difference p {
    line-height: 60%;
    font-family: 'Helvetica Nue Ligth';
    font-size: 17px;
}

.icon-login {
    width: 18px;
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
</style>