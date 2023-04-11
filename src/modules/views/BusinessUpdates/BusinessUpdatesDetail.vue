<template>
    <div v-for="item in business" v-bind:key="item.id">
        <div v-if="item.id === id">
            <div id='center' class="main center">
                <div class="container-fluid p-0">
                    <div class="cont-img">
                        <div class="d-flex justify-content-center">
                            <img :src="item.data.image" alt="ISC" class="img-fluid" width="700" />
                        </div>
                    </div>
                    <div class="bg-white">
                        <div class="container py-5">
                            <br>
                            <button @click="$router.push({ name: 'business_updates' })"
                                class="btn btn-dark">
                                Return
                            </button>
                            <br>
                            <div class="row mt-5">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                                    <div class="category-post py-1">
                                        <h6 class="oRegular mt-1">{{ item.data.category }}</h6>
                                    </div>
                                    <div class="title-post  my-3">
                                        <h1 class="oExtraBold text-black h2">{{ item.data.title }}</h1>
                                        <h6 class="hLight">{{ item.data.date }}</h6>
                                    </div>
                                    <div class="logo-post mb-3">
                                        <img v-bind:src="require('../../../assets/images/logo-gse-black.png')" alt="ISC"
                                            class="img-fluid" />
                                    </div>
                                    <div class="oRegular">
                                        <div class="post-text" v-html=" item.data.description"></div>
                                        <!-- <p class="post-text">
                                            {{ item.data.description }}
                                        </p> -->
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { business_collection } from '@/firebase/firebase'

export default {
    data() {
        return {
            id: this.$route.params.id,
            localImage: null,
            title: null,
            company: null,
            category: null,
            content: null,
            file: null,
            business: []
        }
    },
    mounted() {
        this.business = []
        business_collection.get().then((r) => r.docs.map((item) => this.business.push({ id: item.id, data: item.data() })))
    },
    methods: {
        getToBusinessUpdate() {
            this.$router.push({ name: 'business_updates' })
        },
    }
}
</script>

<style scoped>
.cont-img {
   background-color: #cdcdcd;
}

.bg-white {
    background-color: #fff;
    color: #6C6C6C;
}

.category-post {
    background-color: #000000;
    width: 150px;
    text-align: center;
    color: #fff;
}

.logo-post {
    width: 200px;
}

.post-text {
    text-align: justify;
    line-height: 1.8;
}

.btn {
    margin-right: 10px;
}

.modal-header {
    background: rgb(89, 154, 48);
    background: linear-gradient(180deg, rgba(89, 154, 48, 1) 0%, rgba(89, 154, 48, 1) 48%, rgba(89, 154, 48, 1) 100%);
    border-radius: 0;
    border: transparent;
}

.modal-content {
    background-color: #000000;
    border-radius: 0;
    border: transparent;
}

.btn-green {
    background-color: #599A30;
    border: transparent;
    color: #fff;
    border-radius: 0;
    width: 150px;
}

.selectimage {
    display: none;
}
</style>