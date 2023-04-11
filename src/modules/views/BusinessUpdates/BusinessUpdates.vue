<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  <div v-if="isLoading === false">
    <!-- Header -->
    <!-- <section class="showcase" id="showcase">
            <video v-bind:src="require('../../../assets/video/business_updates_loop.mp4')" muted loop autoplay ></video>    
            <div class="txt-video-1"  data-aos="fade-down" data-aos-duration="1500">
                <h1 class="text-header">BUSINESS UPDATES</h1>
            </div>
        </section> -->
    <section class="showcase-2" id="showcase">
      <video
        v-bind:src="require('../../../assets/video/business_updates_loop.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="txt-video-2" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="oExtraBold">BUSINESS UPDATES</h1>
        <center>
          <h5>
            Good news, plans and updates <br />
            from the ISC Leaders
          </h5>
        </center>
      </div>
    </section>
    <div class="bg-white container-fluid p-0">
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
    <ModalCreateBusiness />
    <div class="row bg-white">
      <div class="col-1"></div>
      <div class="col-10">
        <!-- Filtros -->
        <div class="row">
          <div class="col">
            <div>
              <label class="mb-2" for="">Categories</label>
              <select
                v-model="searchCategory"
                class="form-select filters-select oRegular"
                aria-label="Default select example"
                v-bind:src="require('../../../assets/images/arrow-down-w.png')"
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
                v-model="searchCompany"
                class="form-select filters-select oRegular"
                aria-label="Default select example"
                v-bind:src="require('../../../assets/images/arrow-down-w.png')"
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
        <div class="row" v-if="filterProducts.length">
          <div
            v-for="item in filterProducts"
            v-bind:key="item.id"
            class="col-4 mb-3 mt-3"
          >
            <div class="mx-3">
              <div class="post">
                <img :src="item.data.image" alt="ISC" class="card-img-top" />
                <div class="category-second py-1">
                  <h6 class="oRegular mt-1">{{ item.data.category }}</h6>
                </div>
              </div>
              <div class="d-flex date-logo-post mb-2">
                <div class="me-3" v-if="item.data.company === 'Artic cat'">
                  <img
                    v-bind:src="
                      require('../../../assets/images/logo-artic-black.png')
                    "
                    alt="ISC"
                    class="img-fluid"
                  />
                </div>
                <div class="me-3" v-if="item.data.company === 'Textron GSE'">
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
                    v-bind:src="require('../../../assets/images/logo-ezgo.png')"
                    alt="ISC"
                    class="img-fluid"
                  />
                </div>
                <div>
                  <h6 class="oRegular">{{ item.data.date }}</h6>
                </div>
              </div>
              <div class="title-post">
                <h6 class="oExtraBold">
                  {{ item.data.title }}
                </h6>
              </div>
              <div class="text-end">
                <a
                  @click="
                    $router.push({
                      name: 'business_updates-detail',
                      params: { id: item.id },
                    })
                  "
                  class="a_none_style txt-text pointer"
                >
                  <h6 class="oRegular txt-text">
                    View more
                    <img
                      v-bind:src="
                        require('../../../assets/images/chevron-right-black.png')
                      "
                      alt="view more"
                      class="img-fluid ms-2"
                    />
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-else>
          <div class="mt-5 text-center mb-5">
            <h3>NO RESULTS FOUND FOR THIS SEARCH: {{ searchValue }}</h3>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <div v-else id="center" class="main center">
    <section class="showcase-2" id="showcase">
      <video
        v-bind:src="require('../../../assets/video/business_updates_loop.mp4')"
        muted
        loop
        autoplay
      ></video>
      <div class="txt-video-2" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="oExtraBold">BUSINESS UPDATES</h1>
        <center>
          <h5>
            Good news, plans and updates <br />
            from the ISC Leaders
          </h5>
        </center>
      </div>
    </section>
  </div>
</template>

<script>
import { business_collection_order } from "@/firebase/firebase";
import { defineAsyncComponent } from "@vue/runtime-core";
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

export default {
  data() {
    return {
      searchTitle: "",
      searchCategory: "",
      searchCompany: "",
      title: null,
      company: null,
      category: null,
      content: null,
      isLoading: true,
      business: [],
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
    ModalCreateBusiness: defineAsyncComponent(() =>
      import("../../components/BusinessUpdates/ModalCreateBusiness.vue")
    ),
    Loading,
  },
  mounted() {
    this.business = [];
    business_collection_order
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.business.push({ id: item.id, data: item.data() })
        )
      );
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  computed: {
    filterProducts: function () {
      return this.filterProductsByRange(
        this.filterProductsByName(this.filterProductsByCategory(this.business))
      );
    },
  },
  methods: {
    filterProductsByCategory: function (business) {
      return business.filter(
        (item) => !item.data.category.indexOf(this.searchCategory)
      );
    },
    filterProductsByName: function (business) {
      return business.filter((item) =>
        item.data.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    },

    filterProductsByRange: function (business) {
      return business.filter(
        (item) => !item.data.company.indexOf(this.searchCompany)
      );
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
}
.showcase {
  position: relative;
  right: 0;
  width: 100%;
  min-height: 842px;
  padding: 100px;
  align-items: end;
  background: #111;
  color: #fff;
  z-index: 2;
}
.showcase video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}
.txt-video-1 {
  position: absolute;
  top: 250px;
  left: 28%;
  transform: calc(-50%, -50%);
}
.text-header {
  font-size: 80px;
}
.pointer {
  cursor: pointer;
}

.a_none_style {
  text-decoration: none;
}

.icon-search {
  width: 14px;
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

.add-update i {
  margin-top: 0.5rem;
}

.fa-plus {
  font-size: 1.5rem;
}

.images-add-update label:hover {
  background: #adadad;
}

[type="file"] {
  display: none;
}

.blog-first {
  position: relative;
}

.info-blog-first {
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  );
  bottom: 0;
  width: 100%;
  height: 100%;
}

.category {
  background-color: #000000;
  width: 150px;
  top: 50%;
  left: 10%;
  position: absolute;
  text-align: center;
}

.date {
  position: absolute;
  top: 57%;
  left: 10%;
}

.date img {
  width: 200px;
}

.title {
  position: absolute;
  bottom: 12%;
  width: 800px;
  left: 10%;
}

.link {
  position: absolute;
  right: 10%;
  bottom: 10%;
}

.blog-second {
  position: relative;
}

.info-blog-second {
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  );
  bottom: 0;
  width: 100%;
  height: 100%;
}

.category-second {
  background-color: #000000;
  width: 150px;
  top: 10%;
  left: 0;
  position: absolute;
  text-align: center;
}

.date-second {
  position: absolute;
  top: 56%;
  left: 10%;
}

.date-second img {
  width: 100px;
}

.title-second {
  position: absolute;
  bottom: 10%;
  width: 300px;
  left: 10%;
}

.blog-third {
  position: relative;
}

.info-blog-third {
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7)
  );
  bottom: 0;
  width: 100%;
  height: 100%;
}

.wallpaper-sm {
  height: 356px;
}

.wallpaper-lg {
  height: 714px;
}

.bg-white {
  background-color: #fff;
  color: #6c6c6c;
}

.filters-select {
  background-color: #000000;
  color: #fff;
  border-radius: 0;
  border: transparent;
  /* width: 150px; */
  background-image: url("~@/assets/images/arrow-down-w.png");
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

.date-logo-post img {
  width: 70px;
}

.date-logo-post h6 {
  color: #6c6c6c;
  font-size: 14px;
  padding-top: 0.5rem;
}

.post {
  position: relative;
  color: #fff;
}

.title-post h6 {
  font-size: 18px;
}

.txt-text {
  color: #9b9b9b;
}

.page-item.active .page-link {
  border-radius: 100%;
  background-color: #191919;
  border-color: #191919;
}

.page-item .page-link {
  border-radius: 100%;
  background-color: #f7f7f7;
  border-color: #f7f7f7;
  color: #919191;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
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
  top: 40%;
  left: 40%;
  transform: calc(-50%, -50%);
}
</style>
