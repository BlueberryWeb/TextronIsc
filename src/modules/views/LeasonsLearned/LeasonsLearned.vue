<template>
  <div id="center">
    <section class="showcase-knowledge" id="showcase">
      <video
        v-bind:src="require('../../../assets/video/Knowledge.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="txt-knowledge">
        <div class="">
          <h1 class="oExtraBold display-5">Knowledge database</h1>
          <h1 class="oLight h4">
            Search all of ISC webpage <br />
            content below
          </h1>
          <div class="d-flex mb-3 justify-content-center my-4">
            <input
              v-model="textSearch"
              type="text"
              class="form-control input-keyword"
              placeholder="Please, enter a keyword"
              aria-label="Please, enter a keyword"
              aria-describedby="basic-addon2"
            />
            <button
              class="btn btn-search"
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <div
      class="bg-white"
      :class="[
        { active: artic, color_artic: clase_artic },
        { active: cushman, color_cushman: clase_cushman },
        { active: jacobsen, color_jacobsen: clase_jacobsen },
        { active: gse, color_gse: clase_gse },
      ]"
    >
      <div class="container">
        <h3>Results:</h3>
        <div
          v-for="itemPR in filterProjects"
          v-bind:key="itemPR.id"
          class="mt-4"
        >
          <div v-for="itemXM in xmatrix" v-bind:key="itemXM.id" class="mt-4">
            <div v-if="itemPR.data.master == itemXM.id">
              <a
                class="a_none_style"
                @click="
                  $router.push({
                    name: 'master_plan-detail',
                    params: { category: itemXM.data.category },
                  })
                "
                target="_blank"
              >
                <div
                  class="card card-results pointer"
                  :class="[
                    { active: artic, card_artic: clase_artic },
                    { active: cushman, card_cushman: clase_cushman },
                    { active: jacobsen, card_jacobsen: clase_jacobsen },
                    { active: gse, card_gse: clase_gse },
                  ]"
                >
                  <div class="card-body">
                    <div class="d-flex">
                      <h5>XMatrix | Projects</h5>
                    </div>
                    <div class="d-flex date-logo-post mb-2">
                      <div class="p-3">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-matrix.png')
                          "
                          width="100"
                          alt=""
                        />
                      </div>
                      <h6 class="mt-4">{{ itemPR.data.name }}</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          v-for="itemXM in filterMasterPlan"
          v-bind:key="itemXM.id"
          class="mt-4"
        >
          <a
            class="a_none_style"
            @click="
              $router.push({
                name: 'master_plan-detail',
                params: { category: itemXM.data.category },
              })
            "
            target="_blank"
          >
            <div
              class="card card-results pointer"
              :class="[
                { active: artic, card_artic: clase_artic },
                { active: cushman, card_cushman: clase_cushman },
                { active: jacobsen, card_jacobsen: clase_jacobsen },
                { active: gse, card_gse: clase_gse },
              ]"
            >
              <div class="card-body">
                <div class="d-flex">
                  <h5>XMatrix | Master Plan</h5>
                  <p style="margin-left: 20px">
                    Category: {{ itemXM.data.category }}
                  </p>
                </div>
                <div class="d-flex date-logo-post mb-2">
                  <div class="p-3">
                    <img
                      v-bind:src="
                        require('../../../assets/images/logo-matrix.png')
                      "
                      width="100"
                      alt=""
                    />
                  </div>
                  <h6 class="mt-4">{{ itemXM.data.name }}</h6>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div v-for="itemB in filterBusiness" v-bind:key="itemB.id" class="mt-4">
          <div
            class="card card-results pointer"
            :class="[
              { active: artic, card_artic: clase_artic },
              { active: cushman, card_cushman: clase_cushman },
              { active: jacobsen, card_jacobsen: clase_jacobsen },
              { active: gse, card_gse: clase_gse },
            ]"
            @click="
              $router.push({
                name: 'business_updates-detail',
                params: { id: itemB.id },
              })
            "
          >
            <div class="card-body">
              <div class="d-flex">
                <h5>Business Updates</h5>
                <p style="margin-left: 20px">{{ itemB.data.date }}</p>
              </div>
              <div class="d-flex date-logo-post mb-2">
                <div class="me-3" v-if="itemB.data.company === 'Artic cat'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-artic-black.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemB.data.company === 'Textron GSE'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-gse-black.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemB.data.company === 'Cushman'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-cushman-black.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemB.data.company === 'Jacobsen'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-jacobsen.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemB.data.company === 'EZGO'">
                  <img
                    v-bind:src="require('../../../assets/images/logo-ezgo.png')"
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
              </div>
              <h6 class="mt-4">{{ itemB.data.title }}</h6>
            </div>
          </div>
        </div>
        <div v-for="itemT in filterTraining" v-bind:key="itemT.id" class="mt-4">
          <div
            @click="
              $router.push({
                name: 'leasons_learned-training',
                params: { id: itemT.id },
              })
            "
            class="card card-results pointer"
            :class="[
              { active: artic, card_artic: clase_artic },
              { active: cushman, card_cushman: clase_cushman },
              { active: jacobsen, card_jacobsen: clase_jacobsen },
              { active: gse, card_gse: clase_gse },
            ]"
          >
            <div class="card-body">
              <div class="d-flex">
                <h5>Training Plan</h5>
                <p style="margin-left: 20px">{{ itemT.data.date }}</p>
              </div>
              <div class="d-flex date-logo-post mb-2">
                <div class="me-3" v-if="itemT.data.company === 'Artic cat'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-artic-black.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemT.data.company === 'Textron GSE'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-gse-black.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemT.data.company === 'Cushman'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-cushman-black.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemT.data.company === 'Jacobsen'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-jacobsen.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
                <div class="me-3" v-if="itemT.data.company === 'EZGO'">
                  <img
                    v-bind:src="require('../../../assets/images/logo-ezgo.png')"
                    alt="ISC"
                    class="img-fluid"
                    width="90"
                  />
                </div>
              </div>
              <h6 class="mt-4">{{ itemT.data.title }}</h6>
            </div>
          </div>
        </div>
        <div
          v-for="itemSH in filterSharepoints"
          v-bind:key="itemSH.id"
          class="mt-4"
        >
          <a class="a_none_style" :href="itemSH.data.link" target="_blank">
            <div
              class="card card-results pointer"
              :class="[
                { active: artic, card_artic: clase_artic },
                { active: cushman, card_cushman: clase_cushman },
                { active: jacobsen, card_jacobsen: clase_jacobsen },
                { active: gse, card_gse: clase_gse },
              ]"
            >
              <div class="card-body">
                <div class="d-flex">
                  <h5>Sharepoints</h5>
                  <p style="margin-left: 20px">{{ itemSH.data.date }}</p>
                </div>
                <div class="d-flex date-logo-post mb-2">
                  <div class="p-3">
                    <img
                      v-bind:src="
                        require('../../../assets/images/sharepoint.png')
                      "
                      width="70"
                      alt=""
                    />
                  </div>
                </div>
                <h6 class="mt-4">{{ itemSH.data.title }}</h6>
              </div>
            </div>
          </a>
        </div>
        <div
          v-for="itemSU in filterSuccess"
          v-bind:key="itemSU.id"
          class="mt-4"
        >
          <div
            @click="
              $router.push({
                name: 'leasons_learned-success',
                params: { id: itemSU.id },
              })
            "
            class="card card-results pointer"
            :class="[
              { active: artic, card_artic: clase_artic },
              { active: cushman, card_cushman: clase_cushman },
              { active: jacobsen, card_jacobsen: clase_jacobsen },
              { active: gse, card_gse: clase_gse },
            ]"
          >
            <div class="card-body">
              <div class="d-flex">
                <h5>Success stories</h5>
                <p style="margin-left: 20px">{{ itemSU.data.date }}</p>
              </div>
              <div class="date-logo-post mb-2">
                <div class="">
                  <div class="user-post">
                    <img
                      v-bind:src="
                        require('../../../assets/images/andrew-user.png')
                      "
                      alt="ISC user"
                      class="img-fluid float-start me-4"
                    />
                    <h6 class="oExtraBold">Andrew Miller</h6>
                    <span>Techincal Analyst</span>
                  </div>
                </div>
              </div>
              <h6 class="mt-4">{{ itemSU.data.text }}</h6>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { business_collection } from "@/firebase/firebase";
import { training_collection } from "@/firebase/firebase";
import { sharepoints_collection } from "@/firebase/firebase";
import { success_collection } from "@/firebase/firebase";
import { master_plan } from "@/firebase/firebase";
import { procects_data } from "@/firebase/firebase";
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");

export default {
  data() {
    return {
      isLoading: true,
      textSearch: "",
      business: [],
      training: [],
      sharepoints: [],
      success: [],
      xmatrix: [],
      projects: [],
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
  mounted() {
    this.business = [];
    business_collection
      .get()
      .then((r) =>
        r.docs.map((itemB) =>
          this.business.push({ id: itemB.id, data: itemB.data() })
        )
      );

    this.training = [];
    training_collection
      .get()
      .then((r) =>
        r.docs.map((itemT) =>
          this.training.push({ id: itemT.id, data: itemT.data() })
        )
      );

    this.sharepoints = [];
    sharepoints_collection
      .get()
      .then((r) =>
        r.docs.map((itemSH) =>
          this.sharepoints.push({ id: itemSH.id, data: itemSH.data() })
        )
      );

    this.success = [];
    success_collection
      .get()
      .then((r) =>
        r.docs.map((itemSU) =>
          this.success.push({ id: itemSU.id, data: itemSU.data() })
        )
      );

    this.xmatrix = [];
    master_plan
      .get()
      .then((r) =>
        r.docs.map((itemXM) =>
          this.xmatrix.push({ id: itemXM.id, data: itemXM.data() })
        )
      );

    this.projects = [];
    procects_data
      .get()
      .then((r) =>
        r.docs.map((itemPR) =>
          this.projects.push({ id: itemPR.id, data: itemPR.data() })
        )
      );

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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
  computed: {
    filterBusiness: function () {
      return this.filterBusinessByText(this.business);
    },
    filterTraining: function () {
      return this.filterTrainingByText(this.training);
    },
    filterSharepoints: function () {
      return this.filterSharepointsByText(this.sharepoints);
    },
    filterSuccess: function () {
      return this.filterSuccessByText(this.success);
    },
    filterMasterPlan: function () {
      return this.filterMasterPlanByText(this.xmatrix);
    },
    filterProjects: function () {
      return this.filterProjectsByText(this.projects);
    },
  },
  methods: {
    filterBusinessByText: function (business) {
      return business.filter((itemB) =>
        itemB.data.title.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
    filterTrainingByText: function (training) {
      return training.filter((itemT) =>
        itemT.data.title.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
    filterSharepointsByText: function (sharepoints) {
      return sharepoints.filter((itemSH) =>
        itemSH.data.title.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
    filterSuccessByText: function (success) {
      return success.filter((itemSU) =>
        itemSU.data.text.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
    filterMasterPlanByText: function (xmatrix) {
      return xmatrix.filter((itemXM) =>
        itemXM.data.name.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
    filterProjectsByText: function (projects) {
      return projects.filter((itemPR) =>
        itemPR.data.name.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
  },
};
</script>

<style>
.bg-white {
  background-color: #fff;
  color: #6c6c6c;
}
.color_artic {
  background-color: #000000 !important;
  color: #b6b6b6 !important;
}

.color_cushman {
  background-color: #000000 !important;
  color: #b6b6b6 !important;
}

.color_jacobsen {
  background-color: #000000 !important;
  color: #b6b6b6 !important;
}

.color_gse {
  background-color: #000000 !important;
  color: #b6b6b6 !important;
}

.a_none_style {
  text-decoration: none;
}

.user-post h6 {
  font-size: 16px;
}

.user-post span {
  font-size: 12px;
  font-family: "Open Sans Regular";
}

.user-post img {
  border: 3px solid #1b406e;
  border-radius: 100%;
}

.pointer {
  cursor: pointer;
}

.card-results {
  background-color: #f7f7f7;
  color: #6c6c6c;
  border: solid black 0.5px;
}

.card_artic {
  background-color: #161616 !important;
  color: #d6d6d6 !important;
  border: solid white 0.5px !important;
}

.card_cushman {
  background-color: #161616 !important;
  color: #d6d6d6 !important;
  border: solid white 0.5px !important;
}

.card_jacobsen {
  background-color: #161616 !important;
  color: #d6d6d6 !important;
  border: solid white 0.5px !important;
}

.card_gse {
  background-color: #161616 !important;
  color: #d6d6d6 !important;
  border: solid white 0.5px !important;
}

.padre-flex {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.padre-flex > div {
  text-align: center;
}

.font-h6 {
  font-weight: 200;
}

.input-search {
  background-color: black;
  border: solid white 0.5px;
  color: white;
}

.input-search:focus {
  background-color: black;
  border: solid white 0.5px;
  color: white;
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

.input-search {
  border-radius: 0;
  border-color: #707070;
}

.search-input {
  background-color: #000000;
  color: #fff;
  border-radius: 0;
  border: 3px solid #000000;
}

/*  */
.showcase-knowledge {
  position: relative;
  right: 0;
  width: 100%;
  min-height: 75vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background: #111;
  color: #fff;
  z-index: 2;
}
.showcase-knowledge video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt-knowledge {
  position: absolute;
  top: 38%;
  left: 33%;
  transform: calc(-50%, -50%);
  text-align: center;
}

.input-keyword {
  width: 300px;
  background: transparent;
  height: 40px;
  border-radius: 0;
  border: 0.5px solid #fff;
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

/* ENDS TRAINING VIEW */
@media only screen and (min-width: 1600px) and (max-width: 2000px) {
  .txt-knowledge {
    left: 35%;
  }
}
</style>
