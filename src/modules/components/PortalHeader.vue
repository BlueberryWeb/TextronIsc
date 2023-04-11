<template>
  <!-- <div v-if="user.email == 'artic_cat@gmail.com'">
  <div v-if="user.email == 'ezgo@gmail.com'" class="header">
  <div v-if="user.email == 'cushman@gmail.com'">
  <div v-if="user.email == 'jacobsen@gmail.com'">
  <div v-if="user.email !== 'jacobsen@gmail.com' || 'artic_cat@gmail.com' ||'ezgo@gmail.com' || 'cushman@gmail.com'" class="header">
  </div>
  </div>
  </div>
  </div>
  </div> -->

  <div
    class="header"
    :class="[
      { active: artic, color_artic: clase_artic },
      { active: cushman, color_cushman: clase_cushman },
      { active: jacobsen, color_jacobsen: clase_jacobsen },
      { active: gse, color_gse: clase_gse },
      { active: textron, color_textron: clase_textron },
    ]"
  >
    <div class="container pt-3">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-1">
          <h4 class="text-light">MENU</h4>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-1">
          <img
            v-bind:src="require('../../assets/images/logo-ISC-white.png')"
            alt="ISC INTEGRATED SUPPLY CHAIN"
            class="img-fluid"
          />
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-3"></div>

        <div v-if="user"
          class="col-12 col-sm-12 col-md-12 col-lg-2 d-flex justify-content-start"
        >
          <img  v-if="user.email == 'artic_cat@gmail.com'" 
            v-bind:src="require('../../assets/images/artic-logo.gif')"
            alt="ARTIC CAT"
            class="img-fluid"
            width="100"
          />
          <img  v-else-if="user.email == 'cushman@gmail.com'" 
            v-bind:src="require('../../assets/images/cushman-logo.gif')"
            alt="ARTIC CAT"
            class="img-fluid"
            width="150"
          />
          <img  v-else-if="user.email == 'jacobsen@gmail.com'" 
            v-bind:src="require('../../assets/images/jacobsen.gif')"
            alt="ARTIC CAT"
            class="img-fluid"
            width="100"
          />
          <img  v-else-if="user.email == 'gse@gmail.com'" 
            v-bind:src="require('../../assets/images/gse-logo.gif')"
            alt="ARTIC CAT"
            class="img-fluid"
            width="180"
          />
          <img  v-else-if="user.email == 'textron@gmail.com'" 
            v-bind:src="require('../../assets/images/tx2.gif')"
            alt="ARTIC CAT"
            class="img-fluid"
            width="150"
          />
          <img  v-else
            v-bind:src="require('../../assets/images/ezgo.gif')"
            alt="ARTIC CAT"
            class="img-fluid"
            width="100"
          />
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
          <div v-if="user">
            <img
              v-bind:src="require('../../assets/images/andrew-user.png')"
              alt="ISC"
              class="img-fluid float-start icon-user"
            />
            <h6 class="oRegular h6 pt-2 text-light">{{ user.email }}</h6>
          </div>
          <div v-else>No se cambio</div>
        </div>
      </div>
    </div>
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
      clase_textron: false,
      textron: false,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
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
        if (user.email == "textron@gmail.com") {
          this.textron = true;
          this.clase_textron = true;
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
.header {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background: #1b406e;
  height: 70px !important;
  overflow: hidden;
  z-index: 10;
}

.color_artic {
  background: #599a30 !important;
}

.color_cushman {
  background: #edcc45 !important;
}

.color_jacobsen {
  background: #d67443 !important;
}

.color_gse {
  background: #ef954c !important;
}

.color_textron {
  background: #1A3668 !important;
}
</style>
