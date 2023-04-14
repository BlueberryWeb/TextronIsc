<template>
  <section v-if="user" class="showcase-matrix" id="showcase">
    <video v-if="user.email == 'artic_cat@gmail.com'" 
        v-bind:src="require('../../../assets/video/artic-matrix.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'cushman@gmail.com'" 
        v-bind:src="require('../../../assets/video/cushman.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'jacobsen@gmail.com'" 
        v-bind:src="require('../../../assets/video/jacobsen.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'gse@gmail.com'" 
        v-bind:src="require('../../../assets/video/gse.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else-if="user.email == 'textron@gmail.com'" 
        v-bind:src="require('../../../assets/video/dashboard-textron.mp4')"
        muted
        loop
        autoplay
      ></video>
      <video v-else
        v-bind:src="require('../../../assets/video/ezgo-matrix.mp4')"
        muted
        loop
        autoplay
      ></video>
      
    <div class="container box-matrix">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
          <div class="mx-5">
            <div class="bg-matrix py-5">
              <div class="txt-matrix">
                <div class="container py-5">
                  <div class="row">
                    <h1 class="h6 title-matrix">Select the X-Matrix:</h1>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                      <div class="row me-4 mt-3">
                        <!-- FIRST LINE-->
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'global' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3 mt-1">
                                <h1 class="oExtraBold h6">Global</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'artic cat' },
                              })
                            "
                          >
                            <div class="text-center content-matrix">
                              <img
                                v-bind:src="
                                  require('../../../assets/images/logo-artic.png')
                                "
                                alt=""
                                class="img-fluid logo-2-mat"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'ezgo/cushman' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/logo-ezgo.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-3-mat"
                                />
                              </div>
                              <div class="text-center ms-3">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/logo-cushman.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-4-mat"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- SECOND LINE-->
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'jacobsen' },
                              })
                            "
                          >
                            <div class="text-center mt-2">
                              <img
                                v-bind:src="
                                  require('../../../assets/images/logo-jacobsen.png')
                                "
                                alt="Logo JACOBSEN"
                                class="img-fluid logo-5-mat"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'gse' },
                              })
                            "
                          >
                            <div class="text-center content-matrix">
                              <img
                                v-bind:src="
                                  require('../../../assets/images/logo-gse.png')
                                "
                                alt="Logo Textron GSE"
                                class="img-fluid logo-6-mat"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'safety' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3 mt-1">
                                <h1 class="oLight h6">Safety</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- THIRD LINE-->
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'logistics' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3 mt-1">
                                <h1 class="oLight h6">Logistics</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'fulfillment' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3 mt-1">
                                <h1 class="oLight h6">Fulfillment</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'facilities' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3 mt-1">
                                <h1 class="oLight h6">Facilities</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- QUART LINE -->
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'supply chain' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3">
                                <h1 class="oLight h6">
                                  SUPPLY <br />
                                  Chain
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'planning' },
                              })
                            "
                          >
                            <div
                              class="d-flex justify-content-center content-matrix"
                            >
                              <div class="text-center">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3 mt-1">
                                <h1 class="oLight h6">Planning</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                          <div
                            class="brand"
                            @click="
                              $router.push({
                                name: 'master_plan-detail',
                                params: { category: 'quality' },
                              })
                            "
                          >
                            <div class="d-flex justify-content-center">
                              <div class="text-center ms-2 content-matrix">
                                <img
                                  v-bind:src="
                                    require('../../../assets/images/textron-logo-2.png')
                                  "
                                  alt=""
                                  class="img-fluid logo-1-mat"
                                />
                              </div>
                              <div class="text-center ms-3">
                                <h1 class="oLight txt-large">
                                  Quality & <br />
                                  Manufacturing <br />
                                  Enginnering
                                </h1>
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
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
      </div>
    </div>
  </section>
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

<style scoped>
  .padre-flex {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .card-results {
    background-color: black;
    color: white;
    border: solid rgb(59, 59, 59) 2px;
    height: 130px;
    border-radius: 20px;
  }

  .margin-top {
    margin-top: 30px;
  }

  .bold {
    font-weight: 600;
  }

  .pointer {
    cursor: pointer;
  }

  .video {
    height: 100vh;
    width: 630px;
  }

  .showcase-matrix {
    position: relative;
    right: 0;
    width: 100%;
    min-height: 140vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111;
    color: #fff;
    z-index: 2;
  }
  .showcase-matrix video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
  .bg-matrix {
    background-image: url("../../../assets/images/bg-matrix.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .box-matrix {
    position: absolute;
    top: 20%;
    left: 6%;
    transform: calc(-50%, -50%);
    z-index: 200;
  }
  .brand {
    border: 0.5px solid #fff;
    border-radius: 10px;
    height: 55px;
    cursor: pointer;
  }
  .logo-1-mat {
    width: 80px;
  }
  .logo-2-mat {
    width: 70px;
  }
  .logo-3-mat {
    width: 60px;
  }
  .logo-4-mat {
    width: 80px;
  }
  .logo-5-mat {
    width: 90px;
  }
  .logo-6-mat {
    width: 100px;
  }
  .content-matrix {
    margin-top: 0.8rem;
  }
  .content-matrix h1 {
    font-size: 14px;
  }
  .txt-large {
    font-size: 12px !important;
    margin-top: 0.3rem;
  }
  .txt-matrix {
    position: relative;
  }
  .title-matrix {
    position: absolute;
    top: -3.5%;
    left: 14%;
  }
  /* ENDS TRAINING VIEW */
  @media only screen and (min-width: 1600px) and (max-width: 2000px) {
    .box-matrix {
      position: absolute;
      top: 52%;
      left: 15%;
      transform: calc(-50%, -50%);
      z-index: 200;
    }
  }
</style>
