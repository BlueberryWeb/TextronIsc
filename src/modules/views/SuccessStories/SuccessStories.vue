<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  <div
    v-if="isLoading === false"
    id="center"
    class="main center bg-white"
    :class="[
      { active: artic, color_artic: clase_artic },
      { active: cushman, color_cushman: clase_cushman },
      { active: jacobsen, color_jacobsen: clase_jacobsen },
      { active: gse, color_gse: clase_gse },
      { active: textron, color_textron: clase_textron },
    ]"
  >
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-11">
          <div class="">
            <h2 class="oExtraBold h3">Success Stories</h2>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div
                class="border-box pt-4 mb-4"
                :class="[
                  { active: artic, border_artic: clase_artic },
                  { active: cushman, border_cushman: clase_cushman },
                  { active: jacobsen, border_jacobsen: clase_jacobsen },
                  { active: gse, border_gse: clase_gse },
                ]"
              >
                <div class="mx-5">
                  <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <div class="user-post">
                        <img
                          v-bind:src="
                            require('../../../assets/images/andrew-user.png')
                          "
                          alt="ISC user"
                          class="img-fluid float-start me-4"
                        />
                        <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                        <span>Techincal Analyst</span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                      <div class="me-5 ms-5 words-post">
                        <span class="oRegular">0/500</span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-ezgo.png')
                          "
                          alt=""
                          class="img-fluid logo-feed"
                        />
                      </div>
                    </div>
                  </div>
                  <form @submit.prevent="addSuccess" action="">
                    <div class="form-floating">
                      <textarea
                        v-model="text"
                        class="form-control -potextareast-user"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style="height: 100px"
                      ></textarea>
                      <label for="floatingTextarea2"
                        >Share your success story with us:</label
                      >
                    </div>
                    <div class="row my-3">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="mb-3 add-post-user">
                          <label for="file"
                            ><img
                              v-bind:src="
                                require('../../../assets/images/paperclip.png')
                              "
                              alt="add"
                              class="img-fluid paperclip"
                            />
                            Attach your photo or video
                          </label>
                          <input
                            @change="SelectImage"
                            ref="imgSelector"
                            accept="image/png, image/jpeg"
                            type="file"
                            name="file"
                            id="file"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="text-end">
                          <button
                            class="btn btn-primary btn-green"
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
                            <h6 class="oRegular mt-1">Submit</h6>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- LAST SUCCESS STORIES -->
              <div class="d-flex mb-3">
                <div class="">
                  <h3 class="oRegular h4">
                    <b class="oExtraBold">Last</b> Success Stories
                  </h3>
                </div>
                <div class="">
                  <select
                    v-model="searchCompany"
                    class="form-select filters-select filter-select-favorites oRegular"
                    aria-label="Default select example"
                    v-bind:src="
                      require('../../../assets/images/arrow-down-w.png')
                    "
                  >
                    <option value="">See all</option>
                    <option value="Artic cat">Artic cat</option>
                    <option value="Cushman">Cushman</option>
                    <option value="Textron GSE">Textron GSE</option>
                    <option value="Jacobsen">Jacobsen</option>
                    <option value="EZGO">EZGO</option>
                  </select>
                </div>
                <div class=""></div>
              </div>
              <div
                v-for="itemS in success"
                v-bind:key="itemS.id"
                class="border-box pt-4 mb-3"
                :class="[
                  { active: artic, border_artic: clase_artic },
                  { active: cushman, border_cushman: clase_cushman },
                  { active: jacobsen, border_jacobsen: clase_jacobsen },
                  { active: gse, border_gse: clase_gse },
                ]"
              >
                <div class="favorite-success">
                  <div class="row mb-3">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <div class="user-post">
                        <img
                          v-bind:src="
                            require('../../../assets/images/andrew-user.png')
                          "
                          alt="ISC user"
                          class="img-fluid float-start me-4"
                        />
                        <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                        <span>Techincal Analyst</span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <div class="text-end">
                        <h6 class="oRegular">{{ itemS.data.date }}</h6>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-ezgo.png')
                          "
                          alt="ISC logo"
                          class="img-fluid logo-feed"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p>
                      {{ itemS.data.text }}
                    </p>
                  </div>
                  <div class="mb-3">
                    <img
                      v-if="itemS.data.file != 'S/D'"
                      :src="itemS.data.file"
                      alt="Last success stories"
                      class="img-fluid"
                    />
                  </div>
                  <div class="text-end mb-4">
                    <h1 class="oExtraBold h5">
                      <img
                        v-bind:src="
                          require('../../../assets/images/black-star.png')
                        "
                        alt="Favorite"
                        class="img-fluid star-favorite"
                      />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <!-- FAVORITES SUCCESS -->
              <div class="d-flex mb-3">
                <div class="">
                  <h3 class="oRegular h4">
                    <b class="oExtraBold">Favorite</b> Success Stories
                  </h3>
                </div>
                <div class="ms-4">
                  <select
                    class="form-select filter-select-favorites"
                    aria-label="Default select example"
                  >
                    <option selected>Company</option>
                    <option value="">See all</option>
                    <option value="Artic cat">Artic cat</option>
                    <option value="Cushman">Cushman</option>
                    <option value="Textron GSE">Textron GSE</option>
                    <option value="Jacobsen">Jacobsen</option>
                    <option value="EZGO">EZGO</option>
                  </select>
                </div>
                <div class="">
                  <select
                    class="form-select filter-select-favorites"
                    aria-label="Default select example"
                  >
                    <option selected>Sort by</option>
                    <option value="last">Latest to most recent</option>
                    <option value="">Most recent to latest</option>
                  </select>
                </div>
              </div>
              <div
                class="border-box pt-4 mb-3"
                :class="[
                  { active: artic, border_artic: clase_artic },
                  { active: cushman, border_cushman: clase_cushman },
                  { active: jacobsen, border_jacobsen: clase_jacobsen },
                  { active: gse, border_gse: clase_gse },
                ]"
              >
                <div class="favorite-success">
                  <div class="row mb-3">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <div class="user-post">
                        <img
                          v-bind:src="
                            require('../../../assets/images/andrew-user.png')
                          "
                          alt="ISC user"
                          class="img-fluid float-start me-4"
                        />
                        <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                        <span>Techincal Analyst</span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <div class="text-end">
                        <h6 class="oRegular">May 11, 2022</h6>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-ezgo.png')
                          "
                          alt="ISC logo"
                          class="img-fluid logo-feed"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas necessitatibus aut sit quis omnis eaque, fugiat
                      fuga autem quibusdam nulla consectetur tenetur, illo
                      dolorum quas quos porro assumenda ab sunt! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Voluptas
                      necessitatibus aut sit quis omnis eaque, fugiat fuga autem
                      quibusdam nulla consectetur tenetur, illo dolorum quas
                      quos porro assumenda ab sunt!
                    </p>
                  </div>
                  <div class="">
                    <video controls class="" height="300" width="500">
                      <source
                        v-bind:src="
                          require('../../../assets/video/belive-that.mp4')
                        "
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div class="text-end mb-4">
                    <h1 class="oExtraBold h5">
                      <img
                        v-bind:src="
                          require('../../../assets/images/star-favorites.png')
                        "
                        alt="Favorite"
                        class="img-fluid star-favorite"
                      />
                      14
                    </h1>
                  </div>
                </div>
              </div>
              <div
                class="border-box pt-4 mb-3"
                :class="[
                  { active: artic, border_artic: clase_artic },
                  { active: cushman, border_cushman: clase_cushman },
                  { active: jacobsen, border_jacobsen: clase_jacobsen },
                  { active: gse, border_gse: clase_gse },
                ]"
              >
                <div class="favorite-success">
                  <div class="row mb-3">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <div class="user-post">
                        <img
                          v-bind:src="
                            require('../../../assets/images/andrew-user.png')
                          "
                          alt="ISC user"
                          class="img-fluid float-start me-4"
                        />
                        <h6 class="oExtraBold mb-0">Andrew Miller</h6>
                        <span>Techincal Analyst</span>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                      <div class="text-end">
                        <h6 class="oRegular">May 11, 2022</h6>
                      </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                      <div class="text-center">
                        <img
                          v-bind:src="
                            require('../../../assets/images/logo-ezgo.png')
                          "
                          alt="ISC logo"
                          class="img-fluid logo-feed"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas necessitatibus aut sit quis omnis eaque, fugiat
                      fuga autem quibusdam nulla consectetur tenetur, illo
                      dolorum quas quos porro assumenda ab sunt! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Voluptas
                      necessitatibus aut sit quis omnis eaque, fugiat fuga autem
                      quibusdam nulla consectetur tenetur, illo dolorum quas
                      quos porro assumenda ab sunt!
                    </p>
                  </div>
                  <div class="">
                    <img
                      v-bind:src="
                        require('../../../assets/images/blog-cushman.png')
                      "
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="text-end mb-4">
                    <h1 class="oExtraBold h5">
                      <img
                        v-bind:src="
                          require('../../../assets/images/star-favorites.png')
                        "
                        alt="Favorite"
                        class="img-fluid star-favorite"
                      />
                      14
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else id="center" class="main center">
    <div class="bg-training">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-10">
            <div class="">
              <h2 class="oExtraBold h3">Success Stories</h2>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-5">
      <div class="text-center mt-5"></div>
    </div>
  </div>
</template>

<script>
import {
  success_collection,
  calculatedCreatedAt,
  success_collection_post,
} from "@/firebase/firebase";
import uploadImage from "../../helpers/uploadImages";
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");
import Swal from "sweetalert2";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

const datenow = Date.now();
const today = new Date(datenow);
const date = today.toDateString();

export default {
  data() {
    return {
      localImage: null,
      text: null,
      file: null,
      isLoading: true,
      success: [],
      searchCompany: "",
      successpost: [],
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
  mounted() {
    this.success = [];
    success_collection
      .get()
      .then((r) =>
        r.docs.map((itemS) =>
          this.success.push({ id: itemS.id, data: itemS.data() })
        )
      );

    this.successpost = [];
    success_collection_post
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.successpost.push({ id: item.id, data: item.data() })
        )
      );

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  components: {
    Loading,
  },
  computed: {
    filterResults: function () {
      return this.filterProductsByRange();
    },
  },
  methods: {
    getToSuccessStories() {
      this.$router.push({ name: "success" });
    },
    filterProductsByRange: function (success) {
      return success.filter(
        (itemS) => !itemS.data.company.indexOf(this.searchCompany)
      );
    },
    async addSuccess() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      if (this.file == null) {
        success_collection_post
          .add({
            text: this.text,
            date: date,
            file: "S/D",
            status: "pending",
            company: "Artic cat",
            created: calculatedCreatedAt,
          })
          .then(() => this.$mount());
      } else {
        const picture = await uploadImage(this.file);
        success_collection_post
          .add({
            text: this.text,
            date: date,
            file: picture,
            status: "pending",
            company: "Artic cat",
            created: calculatedCreatedAt,
          })
          .then(() => this.$mount());
      }

      Swal.fire("Saved", "Entry registered successfully", "success");
      setTimeout(() => {
        this.$router.go(0);
      }, 1000);
    },
    SelectImage(event) {
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.bg-white {
  background-color: #fff;
  color: #4e4e4e;
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
.color_textron {
  background-color: #dfdfdf !important;
  color: #212121 !important;
}


.border-box {
  border: 2px solid #000000;
  border-radius: 25px;
}
.border_artic {
  border: 2px solid #cccccc !important;
}

.border_cushman {
  border: 2px solid #cccccc !important;
}

.border_jacobsen {
  border: 2px solid #cccccc !important;
}

.border_gse {
  border: 2px solid #cccccc !important;
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

.logo-feed {
  width: 70px;
}

.words-post span {
  font-size: 13px;
}

.textarea-post-user {
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  border-radius: 0;
}

.add-attach {
  background: transparent;
  color: #fff;
  border: none;
}

.input-add-attach {
  background: transparent;
  border: none;
  color: #fff;
}

.add-post-user {
  width: 400px;
  overflow: hidden;
  background: transparent;
}

.add-post-user label {
  margin: 0;
  padding: 10px;
  width: auto;
  max-width: 300px;
  background-color: transparent;
  font-family: "Open Sans Regular";
  border: none;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

.paperclip {
  width: 10px;
  margin-right: 0.5rem;
}

.filter-select-favorites {
  background-color: #000000;
  color: #fff;
  border-radius: 0;
  border: transparent;
  font-family: "Open Sans Regular";
  text-align: center;
  background-image: url("~@/assets/images/arrow-down-w.png");
}

.star-favorite {
  width: 25px;
  cursor: pointer;
}

.favorite-success {
  margin-left: 2.5rem;
  margin-right: 3rem;
}

.btn-green {
  background-color: #1b406e;
  border: transparent;
  color: #fff;
  border-radius: 0;
  width: 150px;
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
