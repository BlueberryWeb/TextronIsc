<template>
    <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true" />
    <div v-if="isLoading === false" id='center' class="main center">
        <div class="bg-training">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="text-start pt-3">
                            <h4 class="oExtraBold ">Training Plan</h4>
                        </div>
                        <div class="text-center pt-5">
                            <h3 class="oRegular h4">Standardized repository of critical pdf files</h3>
                            <h3 class="oRegular h4">for training by department and work </h3>
                            <h3 class="oRegular h4">system</h3>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
        </div>
        <div class="mt-2 mb-2">
            <div class="container-fluid p-0">
                <div class="row py-3">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1">
                        <div class="add-update">
                            <a class="a_none_style text-white" data-bs-toggle="modal" data-bs-target="#add-update">
                                <font-awesome-icon icon="fa-solid fa-plus" class="fa-plus" />
                            </a>
                        </div>
                        <ModalCreateTraining />
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-5">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-11">
                    <!-- FILTERS -->
                    <div class="row mb-3">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                            <div class="d-flex">
                                <div class="me-3">
                                    <label class="mb-2" for="">Work System</label>
                                    <select v-model="searchWork" class="form-select filters-select oRegular"
                                        aria-label="Default select example">
                                        <option value="">See all</option>
                                        <option value="Quality Process">Quality Process</option>
                                        <option value="Administration">Administration</option>
                                    </select>
                                </div>
                                <div class="">
                                    <label class="mb-2" for="">Depatment</label>
                                    <select v-model="searchDepatment" class="form-select filters-select oRegular"
                                        aria-label="Default select example">
                                        <option value="">See all</option>
                                        <option value="Administration">Administration</option>
                                        <option value="Financial">Financial</option>
                                        <option value="Education">Education</option>
                                    </select>
                                </div>
                                <div class="">
                                    <label class="mb-2" for="">Company</label>
                                    <select v-model="searchCompany" class="form-select filters-select oRegular"
                                        aria-label="Default select example">
                                        <option value="">See all</option>
                                        <option value="Artic cat">Artic cat</option>
                                        <option value="Cushman">Cushman</option>
                                        <option value="Textron GSE">Textron GSE</option>
                                        <option value="Jacobsen">Jacobsen</option>
                                        <option value="EZGO">EZGO</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-2"></div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                            <form action="">
                                <div class="input-group mb-3 mt-4">
                                    <input v-model="searchTitle" type="text" class="form-control input-search-2"
                                        placeholder="Please, enter a title" aria-label="Please, enter a keyword"
                                        aria-describedby="basic-addon2">
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr class="hr-training mb-3">
                    <h1>Result:</h1>
                    <br>
                    <div class="row">
                        <div v-for="item in filterData" v-bind:key="item.id"
                            class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div v-if="item.id === id">
                                <div class="mx-3">
                                    <div class="card mb-4">
                                        <img :src="item.data.img" class="card-img-top img-fluid" alt="..." />
                                        <div class="category-second py-2">
                                            <h6 class="oRegular">{{ item.data.departament }}</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="mx-3">
                                                <div class="d-flex">
                                                    <div class="me-5 pt-2">
                                                        <h5 class="oExtraBold text-dark">{{ item.data.title }}</h5>
                                                    </div>
                                                    <div class="me-3" v-if="item.data.company === 'Artic cat'">
                                                        <img v-bind:src="require('../../../../assets/images/logo-artic-black.png')"
                                                            alt="ISC" class="img-fluid" />
                                                    </div>
                                                    <div class="me-3" v-if="item.data.company === 'Textron GSE'">
                                                        <img v-bind:src="require('../../../../assets/images/logo-gse-black.png')"
                                                            alt="ISC" class="img-fluid" />
                                                    </div>
                                                    <div class="me-3" v-if="item.data.company === 'Cushman'">
                                                        <img v-bind:src="require('../../../../assets/images/logo-cushman-black.png')"
                                                            alt="ISC" class="img-fluid" />
                                                    </div>
                                                    <div class="me-3" v-if="item.data.company === 'Jacobsen'">
                                                        <img v-bind:src="require('../../../../assets/images/logo-jacobsen.png')"
                                                            alt="ISC" class="img-fluid" />
                                                    </div>
                                                    <div class="me-3" v-if="item.data.company === 'EZGO'">
                                                        <img v-bind:src="require('../../../../assets/images/logo-ezgo.png')"
                                                            alt="ISC" class="img-fluid" />
                                                    </div>
                                                </div>
                                                <div class="mb-3 oRegular">
                                                    <h6 class="txt-category-date">{{ item.data.work }}</h6>
                                                    <h6 class="txt-category-date">{{ item.data.date }}</h6>
                                                </div>
                                                <div class="txt-desc-training">
                                                    <p>
                                                        {{ item.data.text }}
                                                    </p>
                                                </div>
                                                <div class="mb-3">
                                                    <button class="btn btn-primary btn-download-green">
                                                        <h6 class="pt-1 oRegular">Download Training Plan <i
                                                                class="fa-solid fa-circle-down ms-3"></i></h6>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="hr-training mb-3">
                    <h1>Other results:</h1>
                    <br>
                    <div class="row">
                        <div v-for="item in filterData" v-bind:key="item.id"
                            class="col-12 col-sm-12 col-md-12 col-lg-4 mb-3">
                            <div class="mx-3">
                                <div class="card mb-4">
                                    <img :src="item.data.img" class="card-img-top img-fluid" alt="..." />
                                    <div class="category-second py-2">
                                        <h6 class="oRegular">{{ item.data.departament }}</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="mx-3">
                                            <div class="d-flex">
                                                <div class="me-5 pt-2">
                                                    <h5 class="oExtraBold text-dark">{{ item.data.title }}</h5>
                                                </div>
                                                <div class="me-3" v-if="item.data.company === 'Artic cat'">
                                                    <img v-bind:src="require('../../../../assets/images/logo-artic-black.png')"
                                                        alt="ISC" class="img-fluid" />
                                                </div>
                                                <div class="me-3" v-if="item.data.company === 'Textron GSE'">
                                                    <img v-bind:src="require('../../../../assets/images/logo-gse-black.png')"
                                                        alt="ISC" class="img-fluid" />
                                                </div>
                                                <div class="me-3" v-if="item.data.company === 'Cushman'">
                                                    <img v-bind:src="require('../../../../assets/images/logo-cushman-black.png')"
                                                        alt="ISC" class="img-fluid" />
                                                </div>
                                                <div class="me-3" v-if="item.data.company === 'Jacobsen'">
                                                    <img v-bind:src="require('../../../../assets/images/logo-jacobsen.png')"
                                                        alt="ISC" class="img-fluid" />
                                                </div>
                                                <div class="me-3" v-if="item.data.company === 'EZGO'">
                                                    <img v-bind:src="require('../../../../assets/images/logo-ezgo.png')"
                                                        alt="ISC" class="img-fluid" />
                                                </div>
                                            </div>
                                            <div class="mb-3 oRegular">
                                                <h6 class="txt-category-date">{{ item.data.work }}</h6>
                                                <h6 class="txt-category-date">{{ item.data.date }}</h6>
                                            </div>
                                            <div class="txt-desc-training">
                                                <p>
                                                    {{ item.data.text }}
                                                </p>
                                            </div>
                                            <div class="mb-3">
                                                <button class="btn btn-primary btn-download-green">
                                                    <h6 class="pt-1 oRegular">Download Training Plan <i
                                                            class="fa-solid fa-circle-down ms-3"></i></h6>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="row" v-else>
                        <div class="mt-5 text-center">
                            <h3>NO RESULTS FOUND FOR THIS SEARCH: {{ searchValue }}</h3>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <div v-else id='center' class="main center">
        <div class="bg-training">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                        <div class="text-start pt-3">
                            <h4 class="oExtraBold ">Training Plan</h4>
                        </div>
                        <div class="text-center pt-5">
                            <h3 class="oRegular h4">Standardized repository of critical pdf files</h3>
                            <h3 class="oRegular h4">for training by department and work </h3>
                            <h3 class="oRegular h4">system</h3>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                </div>
            </div>
        </div>
        <div class="container-fluid py-5">
            <div class="text-center mt-5">
                <h3>Loading data ...</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { training_collection } from '@/firebase/firebase'
import { defineAsyncComponent } from '@vue/runtime-core'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
    data() {
        return {
            id: this.$route.params.id,
            searchTitle: '',
            searchDepatment: '',
            searchCompany: '',
            searchWork: '',
            isLoading: true,
            training: []
        }
    },
    components: {
        ModalCreateTraining: defineAsyncComponent(() => import('../../../components/TrainingPlan/ModalCreateTraining.vue')),
        Loading,
    },
    mounted() {
        this.training = []
        training_collection.get().then((r) => r.docs.map((item) => this.training.push({ id: item.id, data: item.data() })))
        setTimeout(() => {
            this.isLoading = false
        }, 2000);

    },
    computed: {
        filterData: function () {
            return this.filterDataByTitle(this.filterDataByDepartament(this.filterDataByCompany(this.filterDataByWork(this.training))))
        }
    },
    methods: {
        filterDataByTitle: function (training) {
            return training.filter(item => !item.data.title.indexOf(this.searchTitle))
        },

        filterDataByDepartament: function (training) {
            return training.filter(item => !item.data.departament.indexOf(this.searchDepatment))
        },

        filterDataByCompany: function (training) {
            return training.filter(item => !item.data.company.indexOf(this.searchCompany))
        },

        filterDataByWork: function (training) {
            return training.filter(item => !item.data.work.indexOf(this.searchWork))
        }
    },
}
</script>

<style scoped>
.add-update {
    background: rgb(116, 173, 80);
    background: linear-gradient(180deg, rgba(116, 173, 80, 1) 0%, rgba(116, 173, 80, 1) 48%, rgba(71, 128, 36, 1) 100%);
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
    background-image: url('~@/assets/images/bg-training.png');
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
    color: #B7B7B7;
    font-size: 14px;
}

.card {
    border: none;
    border-radius: 0 0 25px 25px;
    position: relative;
}

.txt-category-date {
    color: #6C6C6C;
    font-size: 12px;
}

.txt-desc-training {
    color: #6C6C6C;
}

.btn-download-green {
    background-color: #599A30;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-yellow {
    background-color: #CEB125;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-orange {
    background-color: #DB6F15;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-blue {
    background-color: #1A3668;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-green:hover {
    background-color: #599A30;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-yellow:hover {
    background-color: #CEB125;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-orange:hover {
    background-color: #DB6F15;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-blue:hover {
    background-color: #1A3668;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-green:focus {
    background-color: #599A30;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-yellow:focus {
    background-color: #CEB125;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-orange:focus {
    background-color: #DB6F15;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.btn-download-blue:focus {
    background-color: #1A3668;
    border: transparent;
    border-radius: 0;
    width: 350px;
    text-align: center;
}

.filters-select {
    background-color: #000000;
    color: #fff;
    border-radius: 0;
    border: transparent;
    width: 150px;
    background-image: url('../../../../assets/images/arrow-down-w.png');
}

.card-body img {
    width: 90px;
}

.icon-search {
    width: 14px;
}
</style>