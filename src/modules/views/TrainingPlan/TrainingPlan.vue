<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  <div v-if="isLoading === false" id="center" class="main center bg-white">
    <section class="showcase-2" id="showcase">
      <video
        v-bind:src="require('../../../assets/video/training_loop.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="txt-video-2" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="oExtraBold">TRAINING PLAN</h1>
        <center>
          <h5>
            Standardized repository of critical pdf files <br />
            for training by department and work <br />
            system
          </h5>
        </center>
      </div>
    </section>
    <div class="mt-2 mb-2">
      <div class="container-fluid p-0">
        <div class="row py-3">
          <div class="col-11"></div>
          <div class="col-1">
            <div
              class="add-update"
              :class="[
                { active: artic, color_artic: clase_artic },
                { active: cushman, color_cushman: clase_cushman },
                { active: jacobsen, color_jacobsen: clase_jacobsen },
                { active: gse, color_gse: clase_gse },
              ]"
            >
              <a
                class="a_none_style text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-update"
              >
                <font-awesome-icon icon="fa-solid fa-plus" class="fa-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalCreateTraining />
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <!-- Filtros -->
        <div class="row">
          <div class="col">
            <div class="">
              <label class="mb-2" for="">Work System</label>
              <select
                v-model="searchWork"
                class="form-select filters-select oRegular"
                aria-label="Default select example"
              >
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
          </div>
          <div class="col">
            <div class="">
              <label class="mb-2" for="">Company</label>
              <select
                v-model="searchDepatment"
                class="form-select filters-select oRegular"
                aria-label="Default select example"
              >
                <option value="">See all</option>
                <option value="All">All companies</option>
                <option value="Artic cat">Artic cat</option>
                <option value="Cushman">Cushman</option>
                <option value="Textron GSE">Textron GSE</option>
                <option value="Jacobsen">Jacobsen</option>
                <option value="EZGO">EZGO</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="">
              <label class="mb-2" for="">Title</label>
              <input
                type="text"
                class="form-control input-search"
                placeholder="Please, enter a title"
                aria-label="Please, enter a title"
                aria-describedby="basic-addon2"
                v-model="searchTitle"
              />
            </div>
          </div>
        </div>
        <!-- Registros -->
        <hr class="hr-training mb-3" />
        <div class="row">
          <div
            v-for="item in filterData"
            v-bind:key="item.id"
            class="col-12 col-sm-12 col-md-12 col-lg-3 mb-3"
          >
            <div class="card">
              <img :src="item.data.img" class="card-img-top" alt="..." />
              <!-- <div class="category-second py-2">
                                <h6 class="oRegular mt-2">{{ item.data.departament }}</h6>
                            </div> -->
              <hr />
              <div class="card-body text-dark">
                <h5 class="card-title">{{ item.data.title }}</h5>
                <div class="row">
                  <div class="col-8">
                    <h6 class="txt-category-date">{{ item.data.work }}</h6>
                    <h6 class="txt-category-date">{{ item.data.date }}</h6>
                  </div>
                  <div class="col-4">
                    <div class="d-flex">
                      <div
                        class="me-3"
                        v-if="item.data.company === 'Artic cat'"
                      >
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-artic-black.png')
                          "
                          alt="ISC"
                          class="img-fluid"
                        />
                      </div>
                      <div
                        class="me-3"
                        v-if="item.data.company === 'Textron GSE'"
                      >
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-gse-black.png')
                          "
                          alt="ISC"
                          class="img-fluid"
                        />
                      </div>
                      <div class="me-3" v-if="item.data.company === 'Cushman'">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-cushman-black.png')
                          "
                          alt="ISC"
                          class="img-fluid"
                        />
                      </div>
                      <div class="me-3" v-if="item.data.company === 'Jacobsen'">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-jacobsen.png')
                          "
                          alt="ISC"
                          class="img-fluid"
                        />
                      </div>
                      <div class="me-3" v-if="item.data.company === 'EZGO'">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-ezgo.png')
                          "
                          alt="ISC"
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-3">
                  <a
                    :href="item.data.file"
                    target="_blank"
                    class="btn btn-primary btn-download-blue"
                    :class="[
                      { active: artic, color_artic: clase_artic },
                      { active: cushman, color_cushman: clase_cushman },
                      { active: jacobsen, color_jacobsen: clase_jacobsen },
                      { active: gse, color_gse: clase_gse },
                    ]"
                  >
                    <h6 class="pt-1 oRegular">
                      Download
                      <i class="fa-solid fa-circle-down ms-3"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <div v-else id="center" class="main center">
    <section class="showcase-2" id="showcase">
      <video
        v-bind:src="require('../../../assets/video/training_loop.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="txt-video-2" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="oExtraBold">TRAINING PLAN</h1>
        <center>
          <h5>
            Standardized repository of critical pdf files <br />
            for training by department and work <br />
            system
          </h5>
        </center>
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
import { training_collection } from "@/firebase/firebase";
import { defineAsyncComponent } from "@vue/runtime-core";
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  data() {
    return {
      searchTitle: "",
      searchDepatment: "",
      searchCompany: "",
      searchWork: "",
      isLoading: true,
      training: [],
      prueba: [],
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
  components: {
    ModalCreateTraining: defineAsyncComponent(() =>
      import("../../components/TrainingPlan/ModalCreateTraining.vue")
    ),
    Loading,
  },
  mounted() {
    this.training = [];
    training_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.training.push({ id: item.id, data: item.data() })
        )
      );
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  computed: {
    filterData: function () {
      return this.filterDataByTitle(
        this.filterDataByDepartament(this.filterDataByWork(this.training))
      );
    },
  },
  methods: {
    filterDataByTitle: function (training) {
      return training.filter((item) =>
        item.data.title.includes(this.searchTitle.toLowerCase())
      );
    },

    filterDataByDepartament: function (training) {
      return training.filter(
        (item) => !item.data.company.indexOf(this.searchDepatment)
      );
    },

    filterDataByWork: function (training) {
      return training.filter(
        (item) => !item.data.work.indexOf(this.searchWork)
      );
    },
  },
};
</script>

<style scoped>
/* Zoom control */

#wrapper {
  position: relative;
  border: 1px solid #9c9898;
  width: 578px;
  height: 200px;
}

#buttonWrapper {
  position: absolute;
  width: 30px;
  top: 2px;
  right: 2px;
}

input[type="button"] {
  padding: 5px;
  width: 30px;
  margin: 0px 0px 2px 0px;
}

.bg-white {
  background-color: #fff;
  color: #ffffff;
}

.card-img-top {
  height: 200px;
}

.showcase-2 {
  position: relative;
  right: 0;
  width: 100%;
  min-height: 530px;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background: #111;
  color: #fff;
  z-index: 2;
}
.showcase-2 video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt-video-2 {
  position: absolute;
  top: 35%;
  left: 40%;
  transform: calc(-50%, -50%);
}

.add-update {
  background: #1b406e;
  background: linear-gradient(180deg, #1b406e 0%, #1b406e 48%, #1b406e 100%);
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
  background-image: url("~@/assets/images/bg-training.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30vh;
  color: #fff;
}

.category-second {
  background-color: #000000;
  width: 150px;
  top: 10%;
  left: 0;
  position: absolute;
  text-align: center;
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

.search-input-2 {
  background-color: transparent;
  color: #fff;
  border-radius: 0;
  border: 3px solid #000000;
}

.hr-training {
  opacity: 1;
}

.txt-results {
  color: #b7b7b7;
  font-size: 14px;
}

.card {
  background-color: #f7f7f7;
  border-radius: 20px 20px 20px 20px;
  position: relative;
}

.txt-category-date {
  color: #6c6c6c;
  font-size: 12px;
}

.txt-desc-training {
  color: #6c6c6c;
}

.btn-download-green {
  background-color: #599a30;
  border: transparent;
  border-radius: 0;
  width: auto;
  text-align: center;
}

.btn-download-yellow {
  background-color: #ceb125;
  border: transparent;
  border-radius: 0;
  width: 350px;
  text-align: center;
}

.btn-download-orange {
  background-color: #db6f15;
  border: transparent;
  border-radius: 0;
  width: 350px;
  text-align: center;
}

.btn-download-blue {
  background-color: #1a3668;
  border: transparent;
  border-radius: 0;
  width: auto;
  text-align: center;
}

.btn-download-green:hover {
  background-color: #599a30b0;
  border: transparent;
  border-radius: 0;
  text-align: center;
}

.btn-download-yellow:hover {
  background-color: #ceb125;
  border: transparent;
  border-radius: 0;
  width: 350px;
  text-align: center;
}

.btn-download-orange:hover {
  background-color: #db6f15;
  border: transparent;
  border-radius: 0;
  width: 350px;
  text-align: center;
}

.btn-download-blue:hover {
  background-color: #1a3668;
  border: transparent;
  border-radius: 0;
  /* width: 350px; */
  text-align: center;
}

.btn-download-green:focus {
  background-color: #599a30;
  border: transparent;
  border-radius: 0;
  text-align: center;
}

.btn-download-yellow:focus {
  background-color: #ceb125;
  border: transparent;
  border-radius: 0;
  width: 350px;
  text-align: center;
}

.btn-download-orange:focus {
  background-color: #db6f15;
  border: transparent;
  border-radius: 0;
  width: 350px;
  text-align: center;
}

.btn-download-blue:focus {
  background-color: #1a3668;
  border: transparent;
  border-radius: 0;
  /* width: 350px; */
  text-align: center;
}

.filters-select {
  background-color: #ffffff;
  color: #000000;
  border: solid black 1px;
  /* border-radius: 15px; */
  /* width: 150px; */
  /* background-image: url('../../../assets/images/arrow-down-w.png'); */
}

.color_artic {
  background: #599a30 !important;
  color: white !important;
}

.color_cushman {
  background: #edcc45 !important;
  color: white !important;
}

.color_jacobsen {
  background: #d67443 !important;
  color: white !important;
}

.color_gse {
  background: #ef954c !important;
  color: white !important;
}

.card-body img {
  width: 90px;
}

.card-body {
  height: auto;
}

.icon-search {
  width: 14px;
}
</style>
