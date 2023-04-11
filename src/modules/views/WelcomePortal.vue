<template>
  <div id="center" class="main center">
    <!-- <div class="bg-main" v-bind:src="require('../../assets/images/bg-artic.png')">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="text-center txt-welcome">
                            <h1 class="oLight display-5">Hello <b class="oExtraBold">Andrew Miller</b></h1>
                            <h1 class="space-text oRegular h2">WELCOME TO</h1>
                            <img v-bind:src="require('../../assets/images/logo-ISC-white.png')"
                                alt="INTEGRATED SUPPLY CHAIN" class="img-fluid logo-isc-welcome">
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3"></div>
                </div>
            </div>
        </div> -->
    <section  v-if="user" class="showcase-welcome" id="showcase">
      
      <video v-if="user.email == 'artic_cat@gmail.com'" 
        v-bind:src="require('../../assets/video/Index_artic.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'cushman@gmail.com'" 
        v-bind:src="require('../../assets/video/index_cushman.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'jacobsen@gmail.com'" 
        v-bind:src="require('../../assets/video/index_jacobsen.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'textron@gmail.com'" 
        v-bind:src="require('../../assets/video/dashboard_textron.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'gse@gmail.com'" 
        v-bind:src="require('../../assets/video/index_gse.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else
        v-bind:src="require('../../assets/video/ezgo.mp4')"
        muted
        loop
        autoplay
      ></video>

      <div class="txt-welcome">
        <div class="">
          <h1 class="oLight display-5">
            Hello <b class="oExtraBold">Andrew Miller</b>
          </h1>
          <h1 class="space-text oRegular h2">WELCOME TO</h1>
          <img
            v-bind:src="require('../../assets/images/ISC-logo2.gif')"
            alt="INTEGRATED SUPPLY CHAIN"
            class="img-fluid logo-isc-welcome"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");

export default {
  data() {
    return {
      user: null,
      clase_artic: false,
      artic: false,
      clase_cushman: false,
      cushman: false,
      clase_jacobsen: false,
      jacobsen: false,
      clase_gse: false,
      gse: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.user = user;

        if (user.email == "artic_cat@gmail.com") {
          this.artic = true;
          this.clase_artic = true;
        }
        if (user.email == "cushman@gmail.com") {
          this.cushman = true;
          this.clase_cushman = true;
        }
        if (user.email == "jacobsen@gmail.com") {
          this.jacobsen = true;
          this.clase_jacobsen = true;
        }
        if (user.email == "gse@gmail.com") {
          this.gse = true;
          this.clase_gse = true;
        }
      } else {
        console.log("Nulo");
        this.user = null;
      }
    });
  },
};
</script>

<style scoped lang="css">
.showcase-welcome {
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
.showcase-welcome video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt-welcome {
  position: absolute;
  top: 20%;
  left: 10%;
  transform: calc(-50%, -50%);
}

.logo-isc-welcome {
  width: 260px;
}
.bg-main {
  background-image: url("~@/assets/images/bg-artic.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.main {
  width: 100%;
  display: block;
}
.txt-welcome {
  margin-top: 10rem;
}
.space-text {
  letter-spacing: 0.9rem;
}
</style>
