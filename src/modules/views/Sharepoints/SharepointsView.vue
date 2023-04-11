<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  <div v-if="isLoading === false" id="center" class="main center">
    <section class="showcase-points" id="showcase">
      <video
        v-bind:src="require('../../../assets/video/sharepoints_loop.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="add-point">
        <div class="text-end">
          <a
            class="a_none_style"
            data-bs-toggle="modal"
            data-bs-target="#add-update"
          >
            <img
              v-bind:src="require('../../../assets/images/add.png')"
              alt="Add new sharepoint"
              class="img-fluid"
            />
          </a>
        </div>
      </div>
      <div class="txt-points">
        <h1 class="oExtraBold">Sharepoints</h1>
        <h3 class="oLight">Repository of sharepoints link</h3>
      </div>
    </section>
    <ModalCreateTraining />
    <section v-if="user" class="showcase-share">
      <video
        v-if="user.email == 'artic_cat@gmail.com'"
        v-bind:src="require('../../../assets/video/sharepoint_arctic_cat.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video
        v-else-if="user.email == 'cushman@gmail.com'"
        v-bind:src="require('../../../assets/video/sharepoints-cushman.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video
        v-else-if="user.email == 'jacobsen@gmail.com'"
        v-bind:src="require('../../../assets/video/sharepoints-jacobsen.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video
        v-else-if="user.email == 'gse@gmail.com'"
        v-bind:src="require('../../../assets/video/sharepoints-jacobsen.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video
        v-else-if="user.email == 'textron@gmail.com'"
        v-bind:src="require('../../../assets/video/sharepoints-textron.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video
        v-else
        v-bind:src="require('../../../assets/video/sharepoints-ezgo-2.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="sharepoints">
        <div class="container">
          <div class="row mb-4">
            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-10">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="d-flex justify-content-start">
                    <div class="me-5">
                      <select
                        v-model="searchWork"
                        class="form-select filters-select"
                        aria-label="Default select example"
                      >
                        <option value="" selected>Category</option>
                        <option value="">See all</option>
                        <option value="global">GLOBAL</option>
                        <option value="artic cat">ARTIC CAT</option>
                        <option value="ezgo/cushman">EZGO | CUSHMAN</option>
                        <option value="jacobsen">JACOBSEN</option>
                        <option value="gse">GSE</option>
                        <option value="safety">SAFETY</option>
                        <option value="global">GLOBAL</option>
                        <option value="logistics">LOGISTICS</option>
                        <option value="fulfillment">FULIFILLMENT</option>
                        <option value="facilities">FACILITIES</option>
                        <option value="supply chain">SUPPLY CHAIN</option>
                        <option value="planning">PLANNING</option>
                        <option value="quality">
                          QUALITY & MANUFACTURING ENGINEERING
                        </option>
                      </select>
                    </div>
                    <div class=""></div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div class="d-flex mb-3 justify-content-start">
                    <input
                      v-model="searchTitle"
                      type="text"
                      class="form-control input-search-2"
                      placeholder="Please, enter a keyword"
                      aria-label="Please, enter a keyword"
                      aria-describedby="basic-addon2"
                    />
                    <button
                      class="btn btn-primary btn-search"
                      :class="[
                        { active: artic, btn_artic: clase_artic },
                        {
                          active: cushman,
                          btn_cushman: clase_cushman,
                        },
                        {
                          active: jacobsen,
                          btn_jacobsen: clase_jacobsen,
                        },
                        { active: gse, btn_gse: clase_gse },
                      ]"
                    >
                      <svg
                        style="fill: white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-10 container-points">
              <div class="row">
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-2 mb-3"
                  v-for="item in filterData"
                  v-bind:key="item.id"
                >
                  <div
                    class="sharepoint text-center py-3"
                    :class="[
                      { active: artic, sharepoint_artic: clase_artic },
                      { active: cushman, sharepoint_cushman: clase_cushman },
                      { active: jacobsen, sharepoint_jacobsen: clase_jacobsen },
                      { active: gse, sharepoint_gse: clase_gse },
                      { active: textron, sharepoint_textron: clase_textron },
                    ]"
                  >
                    <img
                      v-bind:src="
                        require('../../../assets/images/icon-sharepoints.png')
                      "
                      alt="Icon sharepoint"
                      class="img-fluid icon-share"
                    />
                    <h4 class="oExtraBold h5">
                      {{ item.data.title }}
                    </h4>
                    <h4 class="oLight h6">
                      {{ item.data.category }}
                    </h4>
                    <div class="mx-4">
                      <hr class="hr-point" />
                    </div>
                    <div class="d-flex justify-content-center">
                      <!-- <div class="logo-share me-5">
                                                <img src="img/logo-jacobsen.png" alt="Logo brand" class="img-fluid"/>
                                            </div> -->
                      <div class="">
                        <a
                          :href="item.data.link"
                          class="a_none_style"
                          target="_blank"
                        >
                          <img
                            v-bind:src="
                              require('../../../assets/images/arrow-negro.png')
                            "
                            alt=""
                            class="img-fluid icon-arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else id="center" class="main center">
    <section class="showcase-points" id="showcase">
      <video
        v-bind:src="require('../../../assets/video/sharepoints_loop.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="add-point">
        <div class="text-end">
          <a
            class="a_none_style"
            data-bs-toggle="modal"
            data-bs-target="#add-update"
          >
            <img
              v-bind:src="require('../../../assets/images/add.png')"
              alt="Add new sharepoint"
              class="img-fluid"
            />
          </a>
        </div>
      </div>
      <div class="txt-points">
        <h1 class="oExtraBold">Sharepoints</h1>
        <h3 class="oLight">Repository of sharepoints link</h3>
      </div>
    </section>
    <div class="container-fluid py-5">
      <div class="text-center mt-5">
        <!-- <h3>Loading data ...</h3> -->
      </div>
    </div>
  </div>
</template>

<script>
import { sharepoints_collection } from "@/firebase/firebase";
import { defineAsyncComponent } from "@vue/runtime-core";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");

export default {
  data() {
    return {
      isLoading: true,
      sharepoints: [],
      searchTitle: "",
      searchWork: "",
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
  components: {
    ModalCreateTraining: defineAsyncComponent(() =>
      import("../../components/Sharepoints/ModalCreateSharepoints.vue")
    ),
    Loading,
  },
  mounted() {
    this.sharepoints = [];
    sharepoints_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.sharepoints.push({ id: item.id, data: item.data() })
        )
      );

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  computed: {
    filterData: function () {
      return this.filterDataByTitle(
        this.filterDataByDepartament(this.sharepoints)
      );
    },
  },
  methods: {
    filterDataByTitle: function (sharepoints) {
      return sharepoints.filter(
        (item) =>
          !item.data.title.toLowerCase().indexOf(this.searchTitle.toLowerCase())
      );
    },

    filterDataByDepartament: function (sharepoints) {
      return sharepoints.filter(
        (item) => !item.data.category.indexOf(this.searchWork)
      );
    },
  },
};
</script>

<style scoped>
.a_none_style {
  text-decoration: none;
}

.add-update {
  background: rgb(116, 173, 80);
  background: linear-gradient(
    180deg,
    rgba(116, 173, 80, 1) 0%,
    rgba(116, 173, 80, 1) 48%,
    rgba(71, 128, 36, 1) 100%
  );
  width: 40px;
  height: 40px;
  border-radius: 100%;
  text-align: center;
  align-items: center;
  cursor: pointer;
}

.add-update i {
  margin-top: 0.5rem;
}

.fa-plus {
  font-size: 1.5rem;
}

.bg-training {
  background-image: url("~@/assets/images/bg-sharepoints.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30vh;
  color: #fff;
}

.filters-select {
  background-color: #000000;
  color: #fff;
  border-radius: 0;
  border: transparent;
  background-image: url("../../../assets/images/arrow-down-w.png");
}

.input-search-2 {
  border-radius: 0;
  border-color: #707070;
  background: transparent;
}

.input-search-2:focus {
  background-color: black;
  border: solid white 0.5px;
  color: white;
}

.showcase-points {
  position: relative;
  right: 0;
  width: 100%;
  min-height: 352px;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background: #111;
  color: #fff;
  z-index: 2;
}
.showcase-points video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt-points {
  position: absolute;
  top: 50%;
  left: 37.5%;
  text-align: center;
  transform: calc(-50%, -50%);
}
.add-point {
  position: absolute;
  top: 10%;
  right: 10%;
  transform: calc(-10%, 10%);
}
.add-point img {
  width: 30px;
}
.showcase-share {
  position: relative;
  right: 0;
  width: 100%;
  min-height: 120vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background: #111;
  color: #fff;
  z-index: 2;
}
.showcase-share video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.sharepoints {
  position: absolute;
  top: 15%;
  left: 0;
  width: 100%;
}
.container-points {
  height: 70vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  z-index: 1000;
  scrollbar-gutter: stable both-edges;
}
.container-points::-webkit-scrollbar {
  width: 10px; /* Tamaño del scroll en vertical */
  height: 10px; /* Tamaño del scroll en horizontal */
}
.container-points::-webkit-scrollbar-thumb {
  background: rgba(67, 67, 67, 0.5);
  border-radius: 20px;
}
.container-points::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
.container-points::-webkit-scrollbar-thumb:active {
  background-color: rgba(170, 170, 170, 0.1);
  height: 20px;
}
.container-points::-webkit-scrollbar-track {
  background: #e1e1e1;
  border-radius: 20px;
}
.container-points::-webkit-scrollbar-track:hover,
.container-points::-webkit-scrollbar-track:active {
  background: #d4d4d4;
}
.sharepoint {
  border: 0.001rem solid #707070;
  border-radius: 10px;
  width: 100%;
  height: 250px;
  color: black;
}
.sharepoint_artic {
  border: 0.001rem solid #599a30 !important;
  border-radius: 10px !important;
  width: 100% !important;
  height: 250px !important;
  color: white !important;
}
.sharepoint_cushman {
  border: 0.001rem solid #edcc45 !important;
  border-radius: 10px !important;
  width: 100% !important;
  height: 250px !important;
  color: white !important;
}
.sharepoint_jacobsen {
  border: 0.001rem solid #d67443 !important;
  border-radius: 10px !important;
  width: 100% !important;
  height: 250px !important;
  color: white !important;
}
.sharepoint_gse {
  border: 0.001rem solid #ef954c !important;
  border-radius: 10px !important;
  width: 100% !important;
  height: 250px !important;
  color: white !important;
}

.sharepoint_textron {
  border: 0.001rem solid #ffffff !important;
  border-radius: 10px !important;
  width: 100% !important;
  height: 250px !important;
  color: white !important;
}


.icon-share {
  width: 50px;
}
.icon-arrow {
  width: 20px;
}
.logo-share {
  width: 70px;
}
.select-share {
  background: transparent;
  color: #fff;
  border: none;
  background-image: url("~@/assets/images/arrow-down-w.png");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
}
.input-keyword {
  width: 300px;
  background: transparent;
  height: 40px;
  border-radius: 0;
  border: 0.5px solid #fff;
}
.btn-search {
  background-color: #1b406e;
  color: #fff;
  border-radius: 100%;
  border: none;
  width: 55px;
  height: 55px;
  z-index: 10;
  margin-left: -20px;
  margin-top: -10px;
}
.btn-search:hover {
  background-color: #1b406e;
  color: #fff;
  border-radius: 100%;
  border: none;
  width: 55px;
  height: 55px;
  z-index: 10;
  margin-left: -20px;
  margin-top: -10px;
}
.btn-search:focus {
  background-color: #1b406e;
  color: #fff;
  border-radius: 100%;
  border: none;
  width: 55px;
  height: 55px;
  z-index: 10;
  margin-left: -20px;
  margin-top: -10px;
}

.btn_artic {
  background: #599a30 !important;
}
.btn_cushman {
  background: #edcc45 !important;
}
.btn_jacobsen {
  background: #d67443 !important;
}
.btn_gse {
  background: #ef954c !important;
}
</style>
