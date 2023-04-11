<template>
    <!-- @click="$router.push({ name: 'business_updates-detail', params: { id: item.id } })" -->
    <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="true" />
    <div v-if="isLoading === false" class="business-panel">
        <div class="container p-0">
            <h1 class="oExtraBold h3 mt-5">Admin Panel</h1>
            <!-- Navbar menú -->
            <nav class="nav mt-5">
                <a class="nav-link text-light pointer"
                    @click="$router.push({ name: 'admin_panel-business_updates' })">Business
                    Updates</a>
                <a @click="$router.push({ name: 'admin_panel-success_stories' })"
                    class="nav-link text-light pointer">Success Stories</a>
                <a @click="$router.push({ name: 'admin_panel-training_plan' })"
                    class="nav-link text-light pointer">Training Plan</a>
                <a @click="$router.push({ name: 'admin_panel-sharepoints' })"
                    class="nav-link text-light pointer">Sharepoints</a>
            </nav>
            <!-- Endx Navbar menú -->
            <hr>
            <h5 class="oExtraBold mt-5">Sharepoints</h5>
            <div class="row mt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div class="d-flex">
                        <div class="me-3">
                            <label class="mb-2" for="">Status</label>
                            <select v-model="searchStatus" class="form-select filters-select oRegular"
                                aria-label="Default select example"
                                v-bind:src="require('../../../../assets/images/arrow-down-w.png')">
                                <option value="">See all</option>
                                <option value="publish">publish</option>
                                <option value="pending">pending</option>
                                <option value="hidden">hidden</option>
                                <option value="rejected">rejected</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <form action="">
                        <div class="input-group mb-5 mt-4">
                            <input type="text" class="form-control input-search" placeholder="Please, enter a title"
                                aria-label="Please, enter a keyword" aria-describedby="basic-addon2"
                                v-model="searchTitle">
                        </div>
                    </form>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-2">
                </div>
            </div>
            <div class="boreder-table mt-3 p-4">
                <div class="table-responsive">
                    <table class="table text-light text-center align-middle border-dark">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Title</th>
                                <th scope="col">Link</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in filterResults" v-bind:key="item.id">
                                <th class="p-2" scope="row">{{ item.data.date }}</th>
                                <td class="p-2">{{ item.data.title }}</td>
                                <td class="p-2">
                                    <a class="a_none_style" :href="item.data.link" target="_blank">Redirect sharepoint</a>
                                </td>
                                <td class="p-2">{{ item.data.status }}</td>
                                <td class="p-2">
                                    <div class="d-flex justify-content-center">
                                        <div class="p-1">
                                            <button @click="showModalData(item.id)" type="button" class="btn"
                                                data-bs-toggle="modal" data-bs-target="#editarRegistro">
                                                <img v-bind:src="require('../../../../assets/images/icon-edit.png')"
                                                    alt="ISC user" width="13" class="img-fluid" />
                                            </button>
                                        </div>
                                        <div class="p-1">
                                            <button @click="deleteData(item.id)" class="btn">
                                                <img v-bind:src="require('../../../../assets/images/icon-trah.png')"
                                                    alt="ISC user" width="13" class="img-fluid" />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div v-else id='center' class="main center">
        <div class="container p-0">
            <h1 class="oExtraBold h3 mt-5">Admin Panel</h1>
            <!-- Navbar menú -->
            <nav class="nav mt-5">
                <a class="nav-link text-light pointer"
                    @click="$router.push({ name: 'admin_panel-business_updates' })">Business
                    Updates</a>
                <a class="nav-link text-light pointer" href="#">Success Stories</a>
                <a class="nav-link text-light pointer" href="#">Training Plan</a>
                <a class="nav-link text-light pointer" href="#">Sharepoints</a>
            </nav>
            <!-- Endx Navbar menú -->
            <hr>
            <h5 class="oExtraBold mt-5">Sharepoints</h5>
        </div>
        <div class="py-5">
            <div class="text-center mt-5">
                <h3>Loading data ...</h3>
            </div>
        </div>
    </div>

    <!-- MODALS -->
    <div class="modal fade" id="editarRegistro" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update status</h5>
                    <button type="button" class="btn-close p-3" data-bs-dismiss="modal" aria-label="Close">
                        <img v-bind:src="require('../../../../assets/images/close-btn.png')" width="15" alt="close"
                            class="img" />
                    </button>
                </div>
                <div class="modal-body container">
                    <div v-if="dataSelected != null">
                        <form action="">
                            <div class="">
                                <label class="mb-2" for="">Update Status</label>
                                <select v-model="statusUpdate" class="form-select filters-select-status oRegular"
                                    aria-label="Default select example"
                                    v-bind:src="require('../../../../assets/images/arrow-down-w.png')">
                                    <option selected value="">Select status</option>
                                    <option value="publish">publish</option>
                                    <option value="pending">pending</option>
                                    <option value="hidden">hidden</option>
                                    <option value="rejected">rejected</option>
                                </select>
                            </div>
                            <div class="row mt-4">
                                <div class="text-center">
                                    <button @click="updateStatus(dataSelected.id)" type=""
                                        class="btn btn-primary btn-green">
                                        <h6 class="pt-1 hRegular">Update</h6>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { sharepoints_collection } from '@/firebase/firebase'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2'


export default {
    data() {
        return {
            sharepoints: [],
            searchTitle: '',
            searchStatus: '',
            statusUpdate: '',
            isLoading: true,
            dataSelected: null
        }
    },
    components: {
        Loading,
    },
    mounted() {
        this.sharepoints = []
        sharepoints_collection.get().then((r) => r.docs.map((item) => this.sharepoints.push({ id: item.id, data: item.data() })))
        setTimeout(() => {
            this.isLoading = false
        }, 2000);
    },
    computed: {
        filterResults: function () {
            return this.filterProductsByName(this.filterProductsByStatus(this.sharepoints))
        }
    },
    methods: {
        filterProductsByName: function (sharepoints) {
            return sharepoints.filter(item => !item.data.title.toLowerCase().indexOf(this.searchTitle.toLowerCase()))
        },
        filterProductsByStatus: function (sharepoints) {
            return sharepoints.filter(item => !item.data.status.indexOf(this.searchStatus))
        },
        deleteData(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    sharepoints_collection.doc(id).delete().then(() => this.$mount())
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setTimeout(() => {
                        this.$router.go(0);
                    }, 5000);
                }
            })
        },
        showModalData(id) {
            sharepoints_collection.doc(id).get().then(r => {
                this.dataSelected = {
                    id: r.id,
                    data: r.data()
                }
            })
        },
        updateStatus(id) {
            sharepoints_collection.doc(id).update({ status: this.statusUpdate }).then(() => this.$mount())
            Swal.fire('Updated', 'Entry update successfully', 'success')
            setTimeout(() => {
                this.$router.go(0);
            }, 5000);
        }
    },
}
</script>

<style scoped>
.pointer {
    cursor: pointer;
}

.boreder-table {
    border: solid #939393 0.8px;
    border-radius: 15px;
}

.input-search {
    border-radius: 0;
    border-color: #707070;
    background-color: #000000;
    color: #fff;
}

.filters-select {
    background-color: #000000;
    color: #fff;
    border-radius: 0;

    width: 150px;
    background-image: url('~@/assets/images/arrow-down-w.png');
}

.filters-select-status {
    background-color: #000000;
    color: #fff;
    border-radius: 10px;
    border: solid white 0.1px;
    background-image: url('~@/assets/images/arrow-down-w.png');
}

/* Modal styles */
.modal-content {
    background-color: #000000;
    border-radius: 15px;
    border: solid white 0.1px;
}

.btn-close {
    background-image: none;
    color: #fff;
    opacity: 1;
}

.btn-green {
    background-color: #203464;
    border: transparent;
    color: #fff;
    border-radius: 0;
    width: 150px;
}
</style>