<template>
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
  <div
    id="sidebarMenu"
    class=""
    :class="[
      { active: artic, color_artic: clase_artic },
      { active: cushman, color_cushman: clase_cushman },
      { active: jacobsen, color_jacobsen: clase_jacobsen },
      { active: gse, color_gse: clase_gse },
      { active: ezgo, color_ezgo: clase_ezgo },
      { active: textron, color_textron: clase_textron },
    ]"
  >
    <ul class="sidebarMenuInner" v-if="user">
      <li>
        <img
          v-if="user.email == 'artic_cat@gmail.com'"
          v-bind:src="require('../../assets/images/artic-logo.gif')"
          alt="ARTIC CAT"
          class="img-fluid logo-artic"
        />
        <img
          v-else-if="user.email == 'cushman@gmail.com'"
          v-bind:src="require('../../assets/images/cushman-logo.gif')"
          alt="ARTIC CAT"
          class="img-fluid logo-artic"
        />
        <img
          v-else-if="user.email == 'jacobsen@gmail.com'"
          v-bind:src="require('../../assets/images/jacobsen.gif')"
          alt="ARTIC CAT"
          class="img-fluid logo-artic"
        />
        <img
          v-else-if="user.email == 'gse@gmail.com'"
          v-bind:src="require('../../assets/images/gse-logo.gif')"
          alt="ARTIC CAT"
          class="img-fluid logo-artic"
        />
        <img
          v-else-if="user.email == 'textron@gmail.com'"
          v-bind:src="require('../../assets/images/tx2_azul.gif')"
          alt="ARTIC CAT"
          class="img-fluid logo-artic"
        />
        <img
          v-else
          v-bind:src="require('../../assets/images/ezgo.gif')"
          alt="ARTIC CAT"
          class="img-fluid logo-artic"
        />
      </li>
      <li @click="getToHome" class="menu-login">
        <a>Home</a>
      </li>
      <li @click="getToBusinessUpdates" onclick="" class="menu-login">
        <a>Business Updates</a>
      </li>
      <li @click="getToSuccessStories" class="menu-login">
        <a>Success Stories</a>
      </li>
      <li @click="getToMasterPlan" class="menu-login">
        <a>Master Plan</a>
      </li>
      <li @click="getToTrainingPlan" class="menu-login">
        <a>Training Plan</a>
      </li>
      <li @click="getToLeasonsLearned" class="menu-login">
        <a>Knowledge Database</a>
      </li>
      <li @click="getToSharePoints" class="menu-login">
        <a>Sharepoints</a>
      </li>
      <li @click="getCompany"  class=" menu-login">
        <a>Company</a>
      </li>
      <li @click="getOS"  class="border- menu-login">
        <a>OS</a>
      </li>
      <li class="menu-login">
        <a>My Account</a>
      </li>
      <li @click="getToLogOut" class="border- menu-login">
        <a>Log Out</a>
      </li>
      <li class="menu-login">
        <a @click="getToAdminPanel">Admin Panel</a>
      </li>
      <!-- <li class="menu-login">
        <a @click="getToUsers">Users</a>
      </li> -->
      <li class="footer-welcome">
        <img
          v-bind:src="require('../../assets/images/logo-textron-blue.png')"
          alt="TEXTRON SPECIALIZED VEHICLES"
          class="img-fluid logo-textron-welcome mb-3"
        />
        <p class="oRegular">© 2023 TEXTRON</p>
        <p class="oRegular">SPECIALIZED VEHICLES,</p>
        <p class="oRegular">All Rights Reserved</p>
        <div class="mt-3">
          <a href="" class="a_none_style">
            <h6 class="hLight">Privacy Policy</h6>
          </a>
          <a href="" class="a_none_style">
            <h6 class="hLight">Terms & Conditions</h6>
          </a>
          <a href="" class="a_none_style">
            <h6 class="hLight">Legal CA Transparency</h6>
          </a>
          <a href="https://blueberry.mx/" target="_blank">
            <img
              src="https://res.cloudinary.com/dej55trpk/image/upload/v1675785643/we-are-Bb_black_hsaadw.gif"
              alt="Materialized by Blueberry"
              class="img-fluid bb-logo-welcome"
            />
          </a>
        </div>
      </li>
      <li class="footer-welcome"></li>
      <li class="footer-welcome"></li>
    </ul>
  </div>
</template>

<script>
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");

export default {
  data() {
    return {
      user: null,
      clase_ezgo: false,
      ezgo: false,
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
      sidemenu: '' ,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.user = user;

        if (user.email == "ezgo@gmail.com") {
          this.ezgo = true;
          this.clase_ezgo = true;
        }
        if (user.email == "artic_cat@gmail.com") {
          this.artic = true;
          this.clase_artic = true;
        }
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
  methods: {
    getToLogOut() {
      this.$router.push({ name: "home" });
    },
    getToHome() {
      this.$router.push({ name: "welcomePortal" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToBusinessUpdates() {
      this.$router.push({ name: "business_updates" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToTrainingPlan() {
      this.$router.push({ name: "training_plan" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToSharePoints() {
      this.$router.push({ name: "sharepoints" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToSuccessStories() {
      this.$router.push({ name: "success_stories" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToLeasonsLearned() {
      this.$router.push({ name: "leasons_learned" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToMasterPlan() {
      this.$router.push({ name: "master_plan" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToAdminPanel() {
      this.$router.push({ name: "admin_panel" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getToUsers() {
      this.$router.push({ name: "users" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getCompany() {
      this.$router.push({ name: "About_Company" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    getOS() {
      this.$router.push({ name: "ISC_OS" });
      this.sidemenu = document.getElementById("openSidebarMenu");
      this.sidemenu.checked = false;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>

<style scoped lang="css">
.a_none_style {
  text-decoration: none;
}

.logo-textron-welcome {
  width: 120px;
}

.bb-logo-welcome {
  width: 350px;
}

.logo-artic {
  width: 100px;
  margin-left: 3rem;
}

/* .menu-login {
  color: #212121;
} */

#sidebarMenu {
  height: 100%;
  position: fixed;
  left: 0;
  width: 250px;
  transform: translateX(-250px);
  transition: transform 250ms ease-in-out;
  /* background: #ffffff; */
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-gutter: stable both-edges;
  z-index: 10;
}

.color_ezgo {
  background: #ffffff !important;
}
.color_artic {
  background: #000000 !important;
}

.color_cushman {
  background: #000000 !important;
}

.color_jacobsen {
  background: #000000 !important;
}

.color_gse {
  background: #000000 !important;
}
.color_textron {
  background: #d8d8d8 !important;
}

#sidebarMenu::-webkit-scrollbar {
  width: 10px; /* Tamaño del scroll en vertical */
  height: 10px; /* Tamaño del scroll en horizontal */
}

#sidebarMenu::-webkit-scrollbar-thumb {
  background: rgba(67, 67, 67, 0.5);
  border-radius: 20px;
}

#sidebarMenu::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

#sidebarMenu::-webkit-scrollbar-thumb:active {
  background-color: rgba(170, 170, 170, 0.1);
  height: 20px;
}

#sidebarMenu::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 20px;
}

#sidebarMenu::-webkit-scrollbar-track:hover,
#sidebarMenu::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
.sidebarMenuInner {
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebarMenuInner li {
  list-style: none;
  /* color: #fff; */
  color: #767e86;
  font-weight: normal;
  font-family: "Open Sans Regular";
  padding: 20px;
  cursor: pointer;
}

.container-points {
  height: 70vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 1000;
  scrollbar-gutter: stable both-edges;
}

.border- {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebarMenuInner li span {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.sidebarMenuInner li a {
  font-family: "Open Sans Regular";
  /* color: #fff; */
  color: #848484;
  font-weight: normal;
  cursor: pointer;
  text-decoration: none;
}

.footer-welcome p {
  font-size: 12px;
  line-height: 20%;
}

.footer-welcome h6 {
  font-size: 12px;
}

.active-tit {
  background: #212121;
  font-family: "Open Sans Extra Bold";
}
</style>
