<template>
  <div
    class="modal fade"
    id="add-update"
    tabindex="-1"
    aria-labelledby="add-updateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, color_artic: clase_artic },
            { active: cushman, color_cushman: clase_cushman },
            { active: jacobsen, color_jacobsen: clase_jacobsen },
            { active: gse, color_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-2">
              <div class="d-flex justify-content-start">
                <div v-if="user" class="">
                  <img
                    v-if="user.email == 'artic_cat@gmail.com'"
                    v-bind:src="
                      require('../../../assets/images/artic-logo.gif')
                    "
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'cushman@gmail.com'"
                    v-bind:src="
                      require('../../../assets/images/cushman-logo.gif')
                    "
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'jacobsen@gmail.com'"
                    v-bind:src="require('../../../assets/images/jacobsen.gif')"
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else-if="user.email == 'gse@gmail.com'"
                    v-bind:src="require('../../../assets/images/tx2.gif')"
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                  <img
                    v-else
                    v-bind:src="require('../../../assets/images/ezgo.gif')"
                    alt="ARTIC CAT"
                    class="img-fluid"
                    width="100"
                  />
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="text-center">
                <h3 class="oExtraBold text-light">
                  Submit your Sharepoint link
                </h3>
              </div>
            </div>
            <div class="col-1">
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn-close p-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img
                    v-bind:src="require('../../../assets/images/close-btn.png')"
                    alt="close"
                    class="img"
                  />
                </button>
              </div>
            </div>
          </div>

        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                <div class="">
                  <form
                    @submit.prevent="addBusiness"
                    class="form-add-update oRegular"
                  >
                    <div class="mb-3">
                      <label for="title" class="form-label"
                        >Sharepoint title:</label
                      >
                      <input
                        v-model="title"
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="link" class="form-label">Category:</label>
                      <select
                        v-model="category"
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
                    <div class="mb-3">
                      <label for="link" class="form-label"
                        >Sharepoint link:</label
                      >
                      <input
                        v-model="link"
                        type="text"
                        class="form-control"
                        id="link"
                        name="link"
                        required
                      />
                    </div>
                    <br />
                    <div class="row mt-4">
                      <div class="text-center">
                        <button
                          type=""
                          class="btn btn-primary btn-green"
                          :class="[
                            { active: artic, color_artic: clase_artic },
                            { active: cushman, color_cushman: clase_cushman },
                            {
                              active: jacobsen,
                              color_jacobsen: clase_jacobsen,
                            },
                            { active: gse, color_gse: clase_gse },
                          ]"
                        >
                          <h6 class="pt-1 hRegular">Submit</h6>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sharepoints_collection } from "@/firebase/firebase";
import { date } from "../../helpers/TakeToday";
import Swal from "sweetalert2";
import { firebase } from "@/firebase/firebase";
require("firebase/compat/auth");

export default {
  data() {
    return {
      title: null,
      link: null,
      category: "",
      sharepoints: [],
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
  mounted() {
    this.sharepoints = [];
    sharepoints_collection
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.sharepoints.push({ id: item.id, data: item.data() })
        )
      );
  },
  methods: {
    getToBusinessUpdate() {
      this.$router.push({ name: "training_plan" });
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
    },
    // <----- CREATE NEW ENTRY ---->
    async addBusiness() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      sharepoints_collection
        .add({
          title: this.title,
          link: this.link,
          category: this.category,
          date: date,
          status: "publish",
        })
        .then(() => this.$mount());
      Swal.fire("Saved", "Entry registered successfully", "success");
      setTimeout(() => {
        this.$router.go(0);
      }, 5000);
    },
  },
};
</script>

<style scoped>
.modal-header {
  display: block !important;
  background: #1b406e;
  background: linear-gradient(180deg, #1b406e 0%, #1b406e 48%, #1b406e 100%);
  color: #ffffff;
  border-radius: 0;
  border: transparent;
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

.modal-content {
  background-color: #ffffff;
  border-radius: 0;
  color: #5a5a5a;
  border: transparent;
}

.logo-add-update {
  width: 90px;
  margin-right: 6rem;
}

.btn-close {
  background-image: none;
  color: #fff;
  opacity: 1;
}

.form-add-update input {
  border-radius: 0;
}

.images-add-update {
  width: 400px;
  overflow: hidden;
  background: #ffffff;
}

.images-add-update label {
  margin: 0;
  padding: 10px;
  margin-left: 18.6rem;
  width: auto;
  max-width: 300px;
  background-color: #5a5a5a;
  border: none;
  color: #fff;
  cursor: pointer;
  text-align: center;
  border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
}

.images-add-update label:hover {
  background: #adadad;
}

.btn-green {
  background-color: #1b406e;
  border: transparent;
  color: #fff;
  border-radius: 0;
  width: 150px;
}
</style>
