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
            <h5 class="oExtraBold mt-5">Business Updates</h5>
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
                        <div class="">
                            <label class="mb-2" for="">Company</label>
                            <select v-model="searchCompany" class="form-select text-light filters-select oRegular"
                                aria-label="Default select example"
                                v-bind:src="require('../../../../assets/images/arrow-down-w.png')">
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
                                <th scope="col">Company</th>
                                <th scope="col">Main Title</th>
                                <th scope="col">Owner</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="itemB in filterResults" v-bind:key="itemB.id">
                                <th class="p-2" scope="row">{{ itemB.data.date }}</th>
                                <td class="p-2">
                                    <div class="d-flex justify-content-center">
                                        <div class="me-3" v-if="itemB.data.company === 'Artic cat'">
                                            <img v-bind:src="require('../../../../assets/images/logo-artic.png')"
                                                alt="ISC" class="img-fluid" width="90" />
                                        </div>
                                        <div class="me-3" v-if="itemB.data.company === 'Textron GSE'">
                                            <img v-bind:src="require('../../../../assets/images/logo-gse.png')"
                                                alt="ISC" class="img-fluid" width="90" />
                                        </div>
                                        <div class="me-3" v-if="itemB.data.company === 'Cushman'">
                                            <img v-bind:src="require('../../../../assets/images/logo-cushman.png')"
                                                alt="ISC" class="img-fluid" width="90" />
                                        </div>
                                        <div class="me-3" v-if="itemB.data.company === 'Jacobsen'">
                                            <img v-bind:src="require('../../../../assets/images/logo-jacobsen.png')"
                                                alt="ISC" class="img-fluid" width="90" />
                                        </div>
                                        <div class="me-3" v-if="itemB.data.company === 'EZGO'">
                                            <img v-bind:src="require('../../../../assets/images/logo-ezgo.png')"
                                                alt="ISC" class="img-fluid" width="90" />
                                        </div>
                                    </div>
                                </td>
                                <td class="p-2">{{ itemB.data.title }}</td>
                                <td class="p-2">
                                    <img v-bind:src="require('../../../../assets/images/andrew-user.png')"
                                        alt="ISC user" width="40" class="img-fluid" />
                                </td>
                                <td class="p-2">{{ itemB.data.status }}</td>
                                <td class="p-2">
                                    <div class="d-flex justify-content-center">
                                        <div class="p-1">
                                            <button @click="showModalData(itemB.id)" type="button" class="btn"
                                                data-bs-toggle="modal" data-bs-target="#editarRegistro">
                                                <img v-bind:src="require('../../../../assets/images/icon-edit.png')"
                                                    alt="ISC user" width="13" class="img-fluid" />
                                            </button>
                                        </div>
                                        <div class="p-1">
                                            <button @click="deleteData(itemB.id)" class="btn">
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
            <h5 class="oExtraBold mt-5">Business Updates</h5>
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
                                <select required v-model="statusUpdate" class="form-select filters-select-status oRegular"
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
                        <hr>
                        <h5 class="text-center mt-4 mb-3"><strong>Title: </strong>{{ dataSelected.data.title }}</h5>
                        <div class="d-flex justify-content-center">
                            <img :src="dataSelected.data.image" width="180" alt="ISC" class="img-fluid" />
                        </div>
                        <div class="text-center mt-4 mb-3">
                            <br>
                            <strong>Company:</strong>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div class="me-3" v-if="dataSelected.data.company === 'Artic cat'">
                                <img v-bind:src="require('../../../../assets/images/logo-artic.png')" alt="ISC"
                                    class="img-fluid" width="90" />
                            </div>
                            <div class="me-3" v-if="dataSelected.data.company === 'Textron GSE'">
                                <img v-bind:src="require('../../../../assets/images/logo-gse.png')" alt="ISC"
                                    class="img-fluid" width="90" />
                            </div>
                            <div class="me-3" v-if="dataSelected.data.company === 'Cushman'">
                                <img v-bind:src="require('../../../../assets/images/logo-cushman.png')" alt="ISC"
                                    class="img-fluid" width="90" />
                            </div>
                            <div class="me-3" v-if="dataSelected.data.company === 'Jacobsen'">
                                <img v-bind:src="require('../../../../assets/images/logo-jacobsen.png')" alt="ISC"
                                    class="img-fluid" width="90" />
                            </div>
                            <div class="me-3" v-if="dataSelected.data.company === 'EZGO'">
                                <img v-bind:src="require('../../../../assets/images/logo-ezgo.png')" alt="ISC"
                                    class="img-fluid" width="90" />
                            </div>
                        </div>
                        <div class="container mt-3">
                            <p><strong>Category: </strong>{{ dataSelected.data.category }}</p>
                            <p><strong>Published: </strong>{{ dataSelected.data.date }}</p>
                            <p><strong>Status: </strong>{{ dataSelected.data.status }}</p>
                            <p><strong>Description: </strong>{{ dataSelected.data.description }}</p>
                        </div>
                        <!-- <pre>
                            {{ dataSelected }}
                        </pre> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { business_collection } from '@/firebase/firebase'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2'


export default {
    data() {
        return {
            business: [],
            searchTitle: '',
            searchStatus: '',
            searchCompany: '',
            statusUpdate: '',
            isLoading: true,
            dataSelected: null
        }
    },
    components: {
        Loading,
    },
    mounted() {
        this.business = []
        business_collection.get().then((r) => r.docs.map((itemB) => this.business.push({ id: itemB.id, data: itemB.data() })))
        setTimeout(() => {
            this.isLoading = false
        }, 2000);
    },
    computed: {
        filterResults: function () {
            return this.filterProductsByCompany(this.filterProductsByName(this.filterProductsByStatus(this.business)))
        }
    },
    methods: {
        filterProductsByCompany: function (business) {
            return business.filter(itemB => !itemB.data.company.indexOf(this.searchCompany))
        },
        filterProductsByName: function (business) {
            return business.filter(itemB => !itemB.data.title.toLowerCase().indexOf(this.searchTitle.toLowerCase()))
        },
        filterProductsByStatus: function (business) {
            return business.filter(itemB => !itemB.data.status.indexOf(this.searchStatus))
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
                    business_collection.doc(id).delete().then(() => this.$mount())
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    this.$router.push({ name: 'admin_panel-business_updates' })
                }
            })
        },
        showModalData(id) {
            business_collection.doc(id).get().then(r => {
                this.dataSelected = {
                    id: r.id,
                    data: r.data()
                }
            })
        },
        updateStatus(id) {
            business_collection.doc(id).update({ status: this.statusUpdate }).then(() => this.$mount())
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