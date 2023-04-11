<template>
    <div>
        <header class="">
            <div class="container-fluid menu pt-4">
                <div class="row pt-2">
                    <div class="col-12 col-lg-1 col-sm-12 col-md-12 justify-content-center">
                        <div class="text-center">
                            <a href="" class="a_none_style text-white">
                                <h1 class="DAGGERSQUARE">ISC</h1>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 col-sm-12 col-md-12"></div>
                    <div class="col-12 col-lg-2 col-sm-12 col-md-12 pt-1">
                        <div class="text-end">
                            <a class="text-white pointer" @click="getToIndex">
                                <h6 class="oRegular">Back to Index <font-awesome-icon
                                        icon="fa-solid fa-chevron-right ms-2 pt-1" /> </h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                        <div class="">
                            <h1 class="oExtraBold mb-0 h2">Login</h1>
                            <h1 class="oRegular h2">to your account</h1>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
                </div>
            </div>
        </header>
        <div class="vid-login">
            <div class="txt-login">
                <div class="containe-fluid">
                    <div class="row">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-5"></div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 pt-5">
                                        <div class="mb-4 text-center">
                                            <img v-bind:src="require('../assets/images/logo-textron-blue.png')"
                                                alt="TEXTRON" class="img-fluid logo-textron-login" />
                                        </div>
                                        <div class="text-center">
                                            <img v-bind:src="require('../assets/images/logo-ISC-white.png')"
                                                alt="ISC: INTEGRATED SUPPLY CHAIN" class="img-fluid logo-isc-login" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                        <div class="">
                                            <form class="form-login" @submit.prevent="login">
                                                <div class="mb-3">
                                                    <label for="user" class="form-label">Email:</label>
                                                    <input v-model="email" type="email" class="form-control" id="user" name="user"
                                                        required />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="password" class="form-label">Password:</label>
                                                    <input v-model="password" type="password" class="form-control" id="password"
                                                        name="password" required />
                                                </div>
                                                <div class="mb-3 forget-pass">
                                                    <a href="" class="text-white">
                                                        <h6 class="oRegular">Did you forget your password?</h6>
                                                    </a>
                                                </div>
                                                <div v-if="error" class="mb-3 ">
                                                    <small class="text-danger">{{ error }}</small>
                                                </div>
                                                <div class="text-end me-5">
                                                    <button type="submit" class="btn btn-primary btn-login">
                                                        <h6 class="oRegular">Login</h6>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <video v-bind:src="require('../assets/video/vid-login.mp4')" muted loop autoplay></video>
        </div>
    </div>
</template>

<script>
import { firebase } from '@/firebase/firebase'

require('firebase/compat/auth')

export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        getToPortal() {
            this.$router.push({ name: 'welcomePortal' })
        },
        getToIndex() {
            this.$router.push({ name: 'home' })
        },
        login() {
            // console.log(this.email, this.password)
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    this.$router.push({ name: 'welcomePortal' })
                    console.log(user)
                }).catch(err => {
                    this.error = err.message
                })
        }
    }
}
</script>

<style scoped>
.a_none_style {
    text-decoration: none;
}

.vid-login {
    position: relative;
    right: 0;
    width: 100%;
    min-height: 70vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    background: #111;
    color: #fff;
    z-index: 2;
}

.vid-login video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

.txt-login {
    position: absolute;
    top: 27%;
    left: 0;
    z-index: 10000;
    width: 100%;
}

.logo-isc-login {
    width: 250px;
}

.logo-textron-login {
    width: 150px;
}

.form-login {
    font-family: 'Open Sans Regular';
}

.form-login input {
    background: transparent;
    width: 300px;
    border: 0.5px solid #707070;
    height: 45px;
    color: white;
}

.form-login label {
    font-family: 'Open Sans Regular';
}

.pointer {
    cursor: pointer;
}
</style>