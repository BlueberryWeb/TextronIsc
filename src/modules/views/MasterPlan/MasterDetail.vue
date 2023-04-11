<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
  />
  <div
    v-if="isLoading === false"
    class="bg-white"
    :class="[
      { active: artic, color_artic: clase_artic },
      { active: cushman, color_cushman: clase_cushman },
      { active: jacobsen, color_jacobsen: clase_jacobsen },
      { active: gse, color_gse: clase_gse },
    ]"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="mt-5 text-uppercase">{{ category }} X-Matrix</h2>
        </div>
        <div class="col">
          <div class="d-flex justify-content-end mt-4">
            <h5 class="mt-4" style="margin-right: 40px">Add a departament</h5>
            <div
              class="add-update mt-3"
              :class="[
                { active: artic, btn_artic: clase_artic },
                { active: cushman, btn_cushman: clase_cushman },
                { active: jacobsen, btn_jacobsen: clase_jacobsen },
                { active: gse, btn_gse: clase_gse },
              ]"
            >
              <a
                class="a_none_style text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-master"
              >
                <font-awesome-icon icon="fa-solid fa-plus" class="fa-plus" />
              </a>
            </div>
            <!-- Modal create -->
            <div
              class="modal fade"
              id="add-master"
              tabindex="-1"
              aria-labelledby="add-updateLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div
                    class="modal-header"
                    :class="[
                      { active: artic, header_artic: clase_artic },
                      { active: cushman, header_cushman: clase_cushman },
                      { active: jacobsen, header_jacobsen: clase_jacobsen },
                      { active: gse, header_gse: clase_gse },
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
                              v-bind:src="
                                require('../../../assets/images/jacobsen.gif')
                              "
                              alt="ARTIC CAT"
                              class="img-fluid"
                              width="100"
                            />
                            <img
                              v-else-if="user.email == 'gse@gmail.com'"
                              v-bind:src="
                                require('../../../assets/images/tx2.gif')
                              "
                              alt="ARTIC CAT"
                              class="img-fluid"
                              width="100"
                            />
                            <img
                              v-else
                              v-bind:src="
                                require('../../../assets/images/ezgo.gif')
                              "
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
                            Submit your new Master Plan
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
                              v-bind:src="
                                require('../../../assets/images/close-btn.png')
                              "
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
                              @submit.prevent="addMasterPlan"
                              class="form-add-update oRegular"
                            >
                              <div class="mb-3">
                                <label for="title" class="form-label">
                                  Title:</label
                                >
                                <input
                                  v-model="nameMP"
                                  type="text"
                                  class="form-control"
                                  id="nameMP"
                                  name="nameMP"
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
                                      {
                                        active: artic,
                                        header_artic: clase_artic,
                                      },
                                      {
                                        active: cushman,
                                        header_cushman: clase_cushman,
                                      },
                                      {
                                        active: jacobsen,
                                        header_jacobsen: clase_jacobsen,
                                      },
                                      { active: gse, header_gse: clase_gse },
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
            <!-- End Modal Create -->
          </div>
        </div>
      </div>
      <hr />
      <div class="d-flex">
        <h5 class="mt-4" style="margin-right: 40px">Submit new project</h5>
        <div
          class="add-update mt-3"
          :class="[
            { active: artic, btn_artic: clase_artic },
            { active: cushman, btn_cushman: clase_cushman },
            { active: jacobsen, btn_jacobsen: clase_jacobsen },
            { active: gse, btn_gse: clase_gse },
          ]"
        >
          <a
            class="a_none_style text-white"
            data-bs-toggle="modal"
            data-bs-target="#add-project"
          >
            <font-awesome-icon icon="fa-solid fa-plus" class="fa-plus" />
          </a>
        </div>
      </div>
      <!-- Modal create -->
      <div
        class="modal fade"
        id="add-project"
        tabindex="-1"
        aria-labelledby="add-updateLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div
              class="modal-header"
              :class="[
                { active: artic, header_artic: clase_artic },
                { active: cushman, header_cushman: clase_cushman },
                { active: jacobsen, header_jacobsen: clase_jacobsen },
                { active: gse, header_gse: clase_gse },
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
                        v-bind:src="
                          require('../../../assets/images/jacobsen.gif')
                        "
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
                      Submit your new Project
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
                        v-bind:src="
                          require('../../../assets/images/close-btn.png')
                        "
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
                        @submit.prevent="addProject"
                        class="form-add-update oRegular"
                      >
                        <div class="mb-3">
                          <label for="title" class="form-label"> Title:</label>
                          <input
                            v-model="nameP"
                            type="text"
                            class="form-control"
                            id="nameP"
                            name="nameP"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <label for="title" class="form-label">
                            Duration:</label
                          >
                          <input
                            v-model="durationP"
                            type="text"
                            class="form-control"
                            id="durationP"
                            name="durationP"
                            required
                          />
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="mb-3">
                              <label for="title" class="form-label">
                                Start:</label
                              >
                              <input
                                v-model="startP"
                                type="date"
                                class="form-control"
                                id="startP"
                                name="startP"
                                required
                              />
                            </div>
                          </div>
                          <div class="col">
                            <div class="mb-3">
                              <label for="title" class="form-label">
                                Finish:</label
                              >
                              <input
                                v-model="finishP"
                                type="date"
                                class="form-control"
                                id="finishP"
                                name="finishP"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="title" class="form-label">
                            Master Plan:</label
                          >
                          <select
                            v-model="selectedMasterPlan"
                            class="form-control"
                            required
                          >
                            <option selected value="">
                              Select Master Plans ....
                            </option>
                            <option
                              v-for="item in filterMaster"
                              v-bind:key="item.id"
                              :value="item.id"
                            >
                              {{ item.data.name }}
                            </option>
                          </select>
                        </div>
                        <br />
                        <div class="row mt-4">
                          <div class="text-center">
                            <button
                              type=""
                              class="btn btn-primary btn-green"
                              :class="[
                                { active: artic, header_artic: clase_artic },
                                {
                                  active: cushman,
                                  header_cushman: clase_cushman,
                                },
                                {
                                  active: jacobsen,
                                  header_jacobsen: clase_jacobsen,
                                },
                                { active: gse, header_gse: clase_gse },
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
      <!-- End Modal Create -->
      <div v-for="item in master" v-bind:key="item.id">
        <div v-if="item.data.category == category" class="row">
          <div class="col-3 mt-5 d-flext">
            <div class="row">
              <div class="col-11">
                <div
                  class="card text-center p-3 card-green"
                  :class="[
                    { active: artic, btn_artic: clase_artic },
                    { active: cushman, btn_cushman: clase_cushman },
                    { active: jacobsen, btn_jacobsen: clase_jacobsen },
                    { active: gse, btn_gse: clase_gse },
                  ]"
                >
                  <h5>{{ item.data.name }}</h5>
                </div>
              </div>
              <div class="col"></div>
            </div>
          </div>
          <div class="col-9">
            <!-- <div class="row">
                        <div class="col-11">
                            <div class="slidecontainer">
                                <input type="range" min="1" max="100" value="70" class="slider" id="myRange">
                            </div>
                        </div>
                        <div class="col-1">
                            <img v-bind:src="require('../../../assets/images/finish.png')" alt="ISC user"
                                class="img-fluid float-start " width="50" />
                        </div>
                    </div> -->
            <table
              class="table table_color align-middle mt-5 mb-5"
              :class="[
                { active: artic, table_artic: clase_artic },
                { active: cushman, table_cushman: clase_cushman },
                { active: jacobsen, table_jacobsen: clase_jacobsen },
                { active: gse, table_gse: clase_gse },
              ]"
            >
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <!-- <th scope="col">Duration(d)</th> -->
                  <th scope="col">Start</th>
                  <th scope="col">Finish</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody v-for="itemP in procects" v-bind:key="itemP.id">
                <!--  -->
                <tr v-if="itemP.data.master == item.id">
                  <th scope="row">{{ itemP.data.name }}</th>
                  <!-- <td>{{ itemP.data.duration }}</td> -->
                  <td>{{ itemP.data.start }}</td>
                  <td>{{ itemP.data.finish }}</td>
                  <td>
                    <img
                      v-bind:src="
                        require('../../../assets/images/andrew-user.png')
                      "
                      alt="ISC user"
                      class="img-fluid float-start"
                      width="30"
                    />
                  </td>
                  <td>{{ itemP.data.status }} %</td>
                  <td class="">
                    <div class="d-flex justify-content-start">
                      <div class="">
                        <button
                          @click="openModalUpdateProject(itemP.id)"
                          type="button"
                          class="btn btn-blue"
                          data-bs-toggle="modal"
                          data-bs-target="#updateProject"
                          :class="[
                            { active: artic, btn_artic: clase_artic },
                            { active: cushman, btn_cushman: clase_cushman },
                            { active: jacobsen, btn_jacobsen: clase_jacobsen },
                            { active: gse, btn_gse: clase_gse },
                          ]"
                        >
                          <img
                            v-bind:src="
                              require('../../../assets/images/icon-edit.png')
                            "
                            alt="ISC user"
                            width="13"
                            class="img-fluid"
                          />
                        </button>
                      </div>
                      <!-- @click="deleteData(itemB.id)" -->
                      <div class="">
                        <button
                          @click="deleteProject(itemP.id)"
                          class="btn btn-blue"
                          :class="[
                            { active: artic, btn_artic: clase_artic },
                            { active: cushman, btn_cushman: clase_cushman },
                            { active: jacobsen, btn_jacobsen: clase_jacobsen },
                            { active: gse, btn_gse: clase_gse },
                          ]"
                        >
                          <img
                            v-bind:src="
                              require('../../../assets/images/icon-trah.png')
                            "
                            alt="ISC user"
                            width="13"
                            class="img-fluid"
                          />
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
      <!-- Code X matrix -->
      <div class="d-flex mt-5">
        <h5 class="mt-4" style="margin-right: 40px">Update x-matrix</h5>
        <div
          class="add-update mt-3"
          :class="[
            { active: artic, btn_artic: clase_artic },
            { active: cushman, btn_cushman: clase_cushman },
            { active: jacobsen, btn_jacobsen: clase_jacobsen },
            { active: gse, btn_gse: clase_gse },
          ]"
        >
          <a
            class="a_none_style text-white"
            data-bs-toggle="modal"
            data-bs-target="#add-xmatrix"
          >
            <font-awesome-icon icon="fa-solid fa-plus" class="fa-plus" />
          </a>
        </div>
      </div>
      <!-- X MATRIX -->
      <div v-if="user" style="zoom: 60%">
        <center>
          <div class="row mt-matrix">
            <div class="col-4 p-0">
              <div v-for="item in xmatrix" v-bind:key="item.id">
                <div
                  v-if="
                    item.data.category == category && item.data.position == 'up'
                  "
                >
                  <div class="d-flex justify-content-end">
                    <div v-for="item2 in xmatrix" v-bind:key="item2.id">
                      <div
                        v-if="
                          item2.data.category == category &&
                          item2.data.position == 'left'
                        "
                      >
                        <!-- Cuadriculas -->
                        <div
                          class="cuadricula-matrix"
                          :class="[
                            { active: artic, cuadricula_artic: clase_artic },
                            {
                              active: cushman,
                              cuadricula_cushman: clase_cushman,
                            },
                            {
                              active: jacobsen,
                              cuadricula_jacobsen: clase_jacobsen,
                            },
                            { active: gse, cuadricula_gse: clase_gse },
                          ]"
                        >
                          <div v-for="cord in xconection" v-bind:key="cord.id">
                            <div
                              v-if="
                                cord.data.conection ==
                                'ul-' + item.id + '-' + item2.id
                              "
                            >
                              <div v-if="cord.data.option == '1'">
                                <button
                                  @click="openModalUpdate(cord.id)"
                                  style="background-color: #1b406e"
                                  type="button"
                                  class="btn rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#openModalUpdate"
                                ></button>
                              </div>
                              <!-- openModalUpdate -->
                              <div v-if="cord.data.option == '2'">
                                <button
                                  @click="openModalUpdate(cord.id)"
                                  type="button"
                                  class="btn btn-secondary rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#openModalUpdate"
                                ></button>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            @click="openModal(item.id, item2.id, (pos = 'ul'))"
                            class="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#editarRegistro"
                          ></button>
                        </div>
                        <!-- End Cuadriculas -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <div v-for="item in xmatrix2" v-bind:key="item.id">
                <div
                  v-if="
                    item.data.category == category && item.data.position == 'up'
                  "
                >
                  <div
                    style="
                      background-color: #eaeded;
                      cursor: pointer;
                      border-top: solid black 1px;
                    "
                    class="p-0 text-center"
                    data-bs-toggle="modal"
                    data-bs-target="#updateXmatrix"
                    @click="openModalMatrix(item.id)"
                  >
                    <p class="p-1 m-0 text-dark text-size">
                      <strong>{{ item.data.title }}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <div v-for="item in xmatrix" v-bind:key="item.id">
                <div
                  v-if="
                    item.data.category == category && item.data.position == 'up'
                  "
                >
                  <div class="d-flex justify-content-start">
                    <div v-for="item2 in xmatrix" v-bind:key="item2.id">
                      <div
                        v-if="
                          item2.data.category == category &&
                          item2.data.position == 'right'
                        "
                      >
                        <!-- Cuadriculas -->
                        <div
                          class="cuadricula-matrix"
                          :class="[
                            { active: artic, cuadricula_artic: clase_artic },
                            {
                              active: cushman,
                              cuadricula_cushman: clase_cushman,
                            },
                            {
                              active: jacobsen,
                              cuadricula_jacobsen: clase_jacobsen,
                            },
                            { active: gse, cuadricula_gse: clase_gse },
                          ]"
                        >
                          <div v-for="cord in xconection" v-bind:key="cord.id">
                            <div
                              v-if="
                                cord.data.conection ==
                                'ur-' + item.id + '-' + item2.id
                              "
                            >
                              <div v-if="cord.data.option == '1'">
                                <button
                                  @click="openModalUpdate(cord.id)"
                                  style="background-color: #1b406e"
                                  type="button"
                                  class="btn rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#openModalUpdate"
                                ></button>
                              </div>
                              <!-- openModalUpdate -->
                              <div v-if="cord.data.option == '2'">
                                <button
                                  @click="openModalUpdate(cord.id)"
                                  type="button"
                                  class="btn btn-secondary rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#openModalUpdate"
                                ></button>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            @click="openModal(item.id, item2.id, (pos = 'ur'))"
                            class="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#editarRegistroUR"
                          ></button>
                        </div>
                        <!-- End Cuadriculas -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4 p-0 vertical">
              <div class="text-end">
                <div v-for="item in xmatrix" v-bind:key="item.id">
                  <div
                    v-if="
                      item.data.category == category &&
                      item.data.position == 'left'
                    "
                  >
                    <div
                      style="
                        background-color: #e5e8e8;
                        border-left: solid black 1px;
                        width: auto;
                        cursor: pointer;
                      "
                      class="p-1 text-center"
                      data-bs-toggle="modal"
                      data-bs-target="#updateXmatrix"
                      @click="openModalMatrix(item.id)"
                    >
                      <p class="text-dark text-transform text-size">
                        <strong>{{ item.data.title }}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 p-0 height-xm"></div>
            <div class="col-4 p-0 vertical2">
              <div class="text-end">
                <div v-for="item in xmatrix" v-bind:key="item.id">
                  <div
                    v-if="
                      item.data.category == category &&
                      item.data.position == 'right' &&
                      item.data.subcategory == 'matrices'
                    "
                  >
                    <div
                      style="
                        background-color: #567993;
                        border-right: solid black 1px;
                        width: auto;
                        cursor: pointer;
                      "
                      class="p-1 text-center"
                      data-bs-toggle="modal"
                      data-bs-target="#updateXmatrix"
                      @click="openModalMatrix(item.id)"
                    >
                      <p class="text-light text-transform text-size">
                        <strong>{{ item.data.title }}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div v-for="item in xmatrix" v-bind:key="item.id">
                  <div
                    v-if="
                      item.data.category == category &&
                      item.data.position == 'right' &&
                      item.data.subcategory == 'resources'
                    "
                  >
                    <div
                      style="
                        background-color: #9fb7c9;
                        border-right: solid black 1px;
                        width: auto;
                        cursor: pointer;
                      "
                      class="p-1 text-center"
                      data-bs-toggle="modal"
                      data-bs-target="#updateXmatrix"
                      @click="openModalMatrix(item.id)"
                    >
                      <p class="text-dark text-transform text-size">
                        <strong>{{ item.data.title }} a</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div v-for="item in xmatrix" v-bind:key="item.id">
                  <div
                    v-if="
                      item.data.category == category &&
                      item.data.position == 'right' &&
                      item.data.subcategory == null
                    "
                  >
                    <div
                      style="
                        background-color: #d6dbdf;
                        border-right: solid black 1px;
                        width: auto;
                        cursor: pointer;
                      "
                      class="p-1 text-center"
                      data-bs-toggle="modal"
                      data-bs-target="#updateXmatrix"
                      @click="openModalMatrix(item.id)"
                    >
                      <p class="text-dark text-transform text-size">
                        <strong>{{ item.data.title }}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4 p-0">
              <div v-for="item in xmatrix" v-bind:key="item.id">
                <div
                  v-if="
                    item.data.category == category &&
                    item.data.position == 'down'
                  "
                >
                  <div class="d-flex justify-content-end">
                    <div v-for="item2 in xmatrix" v-bind:key="item2.id">
                      <div
                        v-if="
                          item2.data.category == category &&
                          item2.data.position == 'left'
                        "
                      >
                        <!-- Cuadriculas -->
                        <div
                          class="cuadricula-matrix"
                          :class="[
                            { active: artic, cuadricula_artic: clase_artic },
                            {
                              active: cushman,
                              cuadricula_cushman: clase_cushman,
                            },
                            {
                              active: jacobsen,
                              cuadricula_jacobsen: clase_jacobsen,
                            },
                            { active: gse, cuadricula_gse: clase_gse },
                          ]"
                        >
                          <div v-for="cord in xconection" v-bind:key="cord.id">
                            <div
                              v-if="
                                cord.data.conection ==
                                'dl-' + item.id + '-' + item2.id
                              "
                            >
                              <div v-if="cord.data.option == '1'">
                                <button
                                  @click="openModalUpdate(cord.id)"
                                  style="background-color: #1b406e"
                                  type="button"
                                  class="btn rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#openModalUpdate"
                                ></button>
                              </div>
                              <!-- openModalUpdate -->
                              <div v-if="cord.data.option == '2'">
                                <button
                                  @click="openModalUpdate(cord.id)"
                                  type="button"
                                  class="btn btn-secondary rounded-pill"
                                  data-bs-toggle="modal"
                                  data-bs-target="#openModalUpdate"
                                ></button>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            @click="openModal(item.id, item2.id, (pos = 'dl'))"
                            class="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#editarRegistroDL"
                          ></button>
                        </div>
                        <!-- End Cuadriculas -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 p-0">
              <div v-for="item in xmatrix" v-bind:key="item.id">
                <div
                  v-if="
                    item.data.category == category &&
                    item.data.position == 'down'
                  "
                >
                  <div
                    style="
                      background-color: #d5d8dc;
                      border-bottom: solid black 1px;
                      cursor: pointer;
                    "
                    class="p-0 text-center"
                    data-bs-toggle="modal"
                    data-bs-target="#updateXmatrix"
                    @click="openModalMatrix(item.id)"
                  >
                    <p class="p-1 m-0 text-dark text-size">
                      <strong>{{ item.data.title }}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 p-3">
              <div class="text-start">
                <div class="d-flex">
                  <div class="circulo"></div>
                  <p style="margin-left: 10px">No subcategory selected</p>
                </div>
                <div class="d-flex">
                  <div class="circulo2"></div>
                  <p style="margin-left: 10px">Metrics</p>
                </div>
                <div class="d-flex">
                  <div class="circulo3"></div>
                  <p style="margin-left: 10px">Resources</p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  </div>
  <!-- Loader -->
  <div v-else id="center" class="main center">
    <div class="row">
      <div class="col">
        <h2 class="mt-5 text-uppercase">{{ category }} X-Matrix</h2>
      </div>
      <div class="col">
        <div class="d-flex justify-content-end">
          <div
            class="add-update mt-5"
            :class="[
              { active: artic, btn_artic: clase_artic },
              { active: cushman, btn_cushman: clase_cushman },
              { active: jacobsen, btn_jacobsen: clase_jacobsen },
              { active: gse, btn_gse: clase_gse },
            ]"
          >
            <a
              class="a_none_style text-white"
              data-bs-toggle="modal"
              data-bs-target="#add-master"
            >
              <font-awesome-icon icon="fa-solid fa-plus" class="fa-plus" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-5">
      <div class="text-center mt-5"></div>
    </div>
  </div>
  <!-- Modals Projects -->
  <div
    class="modal fade"
    id="update-project"
    tabindex="-1"
    aria-labelledby="add-updateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <div v-if="user" class="">
                <img
                  v-if="user.email == 'artic_cat@gmail.com'"
                  v-bind:src="require('../../../assets/images/artic-logo.gif')"
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
            <div class="col-2">
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
          <div class="d-flex">
            <div v-if="user" class="">
              <img
                v-if="user.email == 'artic_cat@gmail.com'"
                v-bind:src="require('../../../assets/images/artic-logo.gif')"
                alt="ARTIC CAT"
                class="img-fluid"
                width="100"
              />
              <img
                v-else-if="user.email == 'cushman@gmail.com'"
                v-bind:src="require('../../../assets/images/cushman-logo.gif')"
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
            <div class="text-center">
              <h3 class="oExtraBold">Update entry</h3>
            </div>
          </div>
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
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-12 col-lg-1"></div>
              <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                <div class="">
                  <form class="form-add-update oRegular">
                    <div class="mb-3">
                      <label for="title" class="form-label"> Progress:</label>
                      <input
                        v-model="progress"
                        type="text"
                        class="form-control"
                        id="durationP"
                        name="durationP"
                        required
                      />
                    </div>
                    <div class="row mt-4">
                      <div class="text-center">
                        <button
                          @click="updateOption(ProjectData.id)"
                          type=""
                          class="btn btn-primary btn-green"
                          :class="[
                            { active: artic, header_artic: clase_artic },
                            { active: cushman, header_cushman: clase_cushman },
                            {
                              active: jacobsen,
                              header_jacobsen: clase_jacobsen,
                            },
                            { active: gse, header_gse: clase_gse },
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
  <!-- Modals X matrix -->
  <!-- New X matrix -->
  <div
    class="modal fade"
    id="add-xmatrix"
    tabindex="-1"
    aria-labelledby="add-updateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
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
                <h3 class="oExtraBold text-light">New register X matrix</h3>
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
                    @submit.prevent="addXmatrix"
                    class="form-add-update oRegular"
                  >
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Select category</label
                      >
                      <select
                        @change="ShowSelected()"
                        id="select_position"
                        v-model="xcategory"
                        required
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">Options ...</option>
                        <option value="up">Tactics</option>
                        <option value="left">Strategy</option>
                        <option value="down">Mission</option>
                        <option value="right">Process</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label"
                        >Select subcategory</label
                      >
                      <select
                        v-model="xsubcategory"
                        required
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="">Options ...</option>
                        <option value="matrices">Metrics</option>
                        <option value="resources">Resources</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label for="title" class="form-label"> Title:</label>
                      <input
                        v-model="xtitle"
                        type="text"
                        class="form-control"
                        id="durationP"
                        name="durationP"
                        required
                      />
                    </div>
                    <div v-if="cod == 'up'" class="mb-3">
                      <label for="title" class="form-label"> File:</label>
                      <input
                        type="file"
                        class="form-control"
                        id="durationP"
                        name="durationP"
                        ref="cedulaTrabajador"
                        accept="application/pdf"
                      />
                    </div>
                    <div class="row mt-4">
                      <div class="text-center">
                        <button
                          type="submit"
                          class="btn btn-primary btn-green"
                          :class="[
                            { active: artic, header_artic: clase_artic },
                            { active: cushman, header_cushman: clase_cushman },
                            {
                              active: jacobsen,
                              header_jacobsen: clase_jacobsen,
                            },
                            { active: gse, header_gse: clase_gse },
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
  <!-- UL -->
  <div
    class="modal fade"
    id="editarRegistro"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <h5 class="modal-title" id="exampleModalLabel">Correlation</h5>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="dataSelected != null">
            <form action="">
              <div class="">
                <label class="mb-2" for="">Relation</label>
                <select
                  required
                  v-model="xconectopt"
                  class="form-select filters-select-status oRegular"
                  aria-label="Default select example"
                  v-bind:src="
                    require('../../../assets/images/arrow-down-w.png')
                  "
                >
                  <option selected value="">Select ...</option>
                  <option value="1">Direct / primary</option>
                  <option value="2">Complementary</option>
                </select>
              </div>

              <div class="row mt-4">
                <div class="text-center">
                  <button
                    @click="
                      NewCords(dataSelected.id, dataSelected2.id, (pos = 'ul'))
                    "
                    type=""
                    class="btn btn-primary btn-green"
                    :class="[
                      { active: artic, header_artic: clase_artic },
                      { active: cushman, header_cushman: clase_cushman },
                      { active: jacobsen, header_jacobsen: clase_jacobsen },
                      { active: gse, header_gse: clase_gse },
                    ]"
                  >
                    <h6 class="pt-1 hRegular">Add Correlation</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- UR -->
  <div
    class="modal fade"
    id="editarRegistroUR"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <h5 class="modal-title" id="exampleModalLabel">Correlation</h5>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="dataSelected != null">
            <form action="">
              <div class="">
                <label class="mb-2" for="">Relation</label>
                <select
                  required
                  v-model="xconectopt"
                  class="form-select filters-select-status oRegular"
                  aria-label="Default select example"
                  v-bind:src="
                    require('../../../assets/images/arrow-down-w.png')
                  "
                >
                  <option selected value="">Seleccione</option>
                  <option value="1">Direct / primary</option>
                  <option value="2">Complementary</option>
                </select>
              </div>

              <div class="row mt-4">
                <div class="text-center">
                  <button
                    @click="
                      NewCords(dataSelected.id, dataSelected2.id, (pos = 'ur'))
                    "
                    type=""
                    class="btn btn-primary btn-green"
                    :class="[
                      { active: artic, header_artic: clase_artic },
                      { active: cushman, header_cushman: clase_cushman },
                      { active: jacobsen, header_jacobsen: clase_jacobsen },
                      { active: gse, header_gse: clase_gse },
                    ]"
                  >
                    <h6 class="pt-1 hRegular">Add Correlation</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- DL -->
  <div
    class="modal fade"
    id="editarRegistroDL"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <h5 class="modal-title" id="exampleModalLabel">Correlation</h5>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="dataSelected != null">
            <form action="">
              <div class="">
                <label class="mb-2" for="">Relation</label>
                <select
                  required
                  v-model="xconectopt"
                  class="form-select filters-select-status oRegular"
                  aria-label="Default select example"
                  v-bind:src="
                    require('../../../assets/images/arrow-down-w.png')
                  "
                >
                  <option selected value="">Seleccione</option>
                  <option value="1">Direct / primary</option>
                  <option value="2">Complementary</option>
                </select>
              </div>

              <div class="row mt-4">
                <div class="text-center">
                  <button
                    @click="
                      NewCords(dataSelected.id, dataSelected2.id, (pos = 'dl'))
                    "
                    type=""
                    class="btn btn-primary btn-green"
                    :class="[
                      { active: artic, header_artic: clase_artic },
                      { active: cushman, header_cushman: clase_cushman },
                      { active: jacobsen, header_jacobsen: clase_jacobsen },
                      { active: gse, header_gse: clase_gse },
                    ]"
                  >
                    <h6 class="pt-1 hRegular">Add Correlation</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- DR -->
  <div
    class="modal fade"
    id="editarRegistroDR"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <h5 class="modal-title" id="exampleModalLabel">Correlation</h5>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="dataSelected != null">
            <form action="">
              <div class="">
                <label class="mb-2" for="">Relation</label>
                <select
                  required
                  v-model="xconectopt"
                  class="form-select filters-select-status oRegular"
                  aria-label="Default select example"
                  v-bind:src="
                    require('../../../assets/images/arrow-down-w.png')
                  "
                >
                  <option selected value="">Seleccione</option>
                  <option value="1">Direct / primary</option>
                  <option value="2">Complementary</option>
                </select>
              </div>

              <div class="row mt-4">
                <div class="text-center">
                  <button
                    @click="
                      NewCords(dataSelected.id, dataSelected2.id, (pos = 'dr'))
                    "
                    type=""
                    class="btn btn-primary btn-green"
                    :class="[
                      { active: artic, header_artic: clase_artic },
                      { active: cushman, header_cushman: clase_cushman },
                      { active: jacobsen, header_jacobsen: clase_jacobsen },
                      { active: gse, header_gse: clase_gse },
                    ]"
                  >
                    <h6 class="pt-1 hRegular">Add Correlation</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Update conection -->
  <div
    class="modal fade"
    id="openModalUpdate"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <h5 class="modal-title" id="exampleModalLabel">
                Update register
              </h5>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="updateData != null">
            <form action="">
              <div class="">
                <label class="mb-2" for="">Relation</label>
                <select
                  required
                  v-model="xconectopt"
                  class="form-select filters-select-status oRegular"
                  aria-label="Default select example"
                  v-bind:src="
                    require('../../../assets/images/arrow-down-w.png')
                  "
                >
                  <option selected value="">Seleccione</option>
                  <option value="1">Direct / primary</option>
                  <option value="2">Complementary</option>
                </select>
              </div>
              <div class="row mt-4">
                <div class="text-center">
                  <button
                    @click="updateOption(updateData.id)"
                    type=""
                    class="btn btn-primary btn-green"
                    :class="[
                      { active: artic, header_artic: clase_artic },
                      { active: cushman, header_cushman: clase_cushman },
                      { active: jacobsen, header_jacobsen: clase_jacobsen },
                      { active: gse, header_gse: clase_gse },
                    ]"
                  >
                    <h6 class="pt-1 hRegular">Update Correlation</h6>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr />

          <div class="row mt-4">
            <div class="text-center">
              <h5>Delete correlation</h5>
              <button
                @click="deleteData(updateData.id)"
                type=""
                class="btn btn-primary btn-red mt-2 mb-5"
              >
                <h6 class="pt-1 hRegular">Delete Correlation</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- MODALS DE X MATRIX -->
  <!-- Update Xmatrix -->
  <div
    class="modal fade"
    id="updateXmatrix"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <h5 class="modal-title" id="exampleModalLabel">
                Update register
              </h5>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="XmatrixSelected != null">
            <h5>
              Project selected:
              <strong>{{ XmatrixSelected.data.title }}</strong>
            </h5>
            <div v-if="XmatrixSelected.data.position == 'up'">
              <div
                v-if="
                  XmatrixSelected.data.url == null ||
                  XmatrixSelected.data.url == 'null'
                "
              >
                <h5>File: <strong>No data</strong></h5>
              </div>
              <div v-else>
                <h5>
                  File:
                  <strong
                    ><a
                      class="a_none_style"
                      :href="XmatrixSelected.data.url"
                      target="_blank"
                      >Go to file</a
                    ></strong
                  >
                </h5>
              </div>
            </div>

            <div class="mb-3 mt-5">
              <label for="title" class="form-label"> Update Title:</label>
              <input
                v-model="xtitleUpdate"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div v-if="XmatrixSelected.data.position == 'up'" class="mb-3">
              <label for="title" class="form-label"> Update File:</label>
              <input
                ref="cedulaTrabajadorU"
                accept="application/pdf"
                type="file"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Update subcategory</label
              >
              <select
                v-model="xsubcategoryUpdate"
                required
                class="form-select"
                aria-label="Default select example"
              >
                <option value="">Options ...</option>
                <option value="matrices">Matrices</option>
                <option value="resources">Resources</option>
              </select>
            </div>
            <div class="row mt-4">
              <div class="text-center">
                <button
                  @click="updateMatrix(XmatrixSelected.id)"
                  class="btn btn-primary btn-green"
                  :class="[
                    { active: artic, header_artic: clase_artic },
                    { active: cushman, header_cushman: clase_cushman },
                    { active: jacobsen, header_jacobsen: clase_jacobsen },
                    { active: gse, header_gse: clase_gse },
                  ]"
                >
                  <h6 class="pt-1 hRegular">Update</h6>
                </button>
              </div>
            </div>
            <hr />
            <div class="row mt-4">
              <div class="text-center">
                <h5>Delete entry</h5>
                <button
                  @click="deleteMatrix(XmatrixSelected.id)"
                  type=""
                  class="btn btn-primary btn-red mt-2 mb-5"
                >
                  <h6 class="pt-1 hRegular">
                    Delete {{ XmatrixSelected.data.title }}
                  </h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- MODALS PROJECTS -->
  <!-- Update Project -->
  <div
    class="modal fade"
    id="updateProject"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div
          class="modal-header"
          :class="[
            { active: artic, header_artic: clase_artic },
            { active: cushman, header_cushman: clase_cushman },
            { active: jacobsen, header_jacobsen: clase_jacobsen },
            { active: gse, header_gse: clase_gse },
          ]"
        >
          <div class="row">
            <div class="col-10">
              <h5 class="modal-title" id="exampleModalLabel">
                Update register
              </h5>
            </div>
            <div class="col-2">
              <button
                type="button"
                class="btn-close p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  v-bind:src="require('../../../assets/images/close-btn.png')"
                  width="15"
                  alt="close"
                  class="img"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body container">
          <div v-if="ProjectData != null">
            <h5>
              Project selected: <strong>{{ ProjectData.data.name }}</strong>
            </h5>
            <p>
              Progress: <strong>{{ ProjectData.data.status }}%</strong>
            </p>
            <div class="mb-3 mt-5">
              <label for="title" class="form-label"> Update Progress:</label>
              <input
                v-model="prjuStatus"
                type="number"
                class="form-control"
                required
              />
            </div>
            <div class="row mt-4">
              <div class="text-center">
                <button
                  @click="updateProject(ProjectData.id)"
                  class="btn btn-primary btn-green"
                  :class="[
                    { active: artic, header_artic: clase_artic },
                    { active: cushman, header_cushman: clase_cushman },
                    { active: jacobsen, header_jacobsen: clase_jacobsen },
                    { active: gse, header_gse: clase_gse },
                  ]"
                >
                  <h6 class="pt-1 hRegular">Update progress</h6>
                </button>
              </div>
            </div>
            <hr />
            <h5>Other data</h5>
            <!-- <form action="">
                            <div class="">
                                <label class="mb-2" for="">Relation</label>
                                <select required v-model="xconectopt" class="form-select filters-select-status oRegular"
                                    aria-label="Default select example"
                                    v-bind:src="require('../../../assets/images/arrow-down-w.png')">
                                    <option selected value="">Seleccione</option>
                                    <option value="1">Direct / primary</option>
                                    <option value="2">Complementary</option>
                                </select>
                            </div>
                            <div class="row mt-4">
                                <div class="text-center">

                                    <button @click="NewCords(dataSelected.id, dataSelected2.id, pos = 'ul')" type=""
                                        class="btn btn-primary btn-green">
                                        <h6 class="pt-1 hRegular">Add Correlation</h6>
                                    </button>
                                </div>
                            </div>
                        </form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
</template>

<script>
import {
  master_plan,
  procects_data,
  xmatrix_colection,
  calculatedCreatedAt,
  xmatrix_colectionorder,
  xmatrix_colectiondesc,
  xconection_colection,
} from "@/firebase/firebase";
require("firebase/compat/auth");
import Swal from "sweetalert2";
// import { defineAsyncComponent } from '@vue/runtime-core'
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export default {
  data() {
    return {
      category: this.$route.params.category,
      isLoading: true,
      nameMP: null,
      nameP: null,
      durationP: null,
      startP: null,
      finishP: null,
      selectedMasterPlan: "",
      // nameP: null,
      master: [],
      procects: [],
      // Xmatrix
      xmatrix: [],
      xmatrix2: [],
      xcategory: "",
      xtitle: "",
      xurl: "",
      xsubcategory: "",
      XmatrixSelected: null,
      xtitleUpdate: "",
      xtitleUrl: "",
      xsubcategoryUpdate: "",
      // Xconections
      xconection: [],
      dataSelected: null,
      dataSelected2: null,
      updateData: null,
      xconectopt: "",
      // projecs
      progress: "",
      ProjectData: null,
      prjuStatus: "",
      // user
      user: null,
      clase_artic: false,
      artic: false,
      clase_cushman: false,
      cushman: false,
      clase_jacobsen: false,
      jacobsen: false,
      clase_gse: false,
      gse: false,
      // select
      cod: "",
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
    this.master = [];
    master_plan
      .where("category", "==", this.category)
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.master.push({ id: item.id, data: item.data() })
        )
      );

    this.procects = [];
    procects_data
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.procects.push({ id: item.id, data: item.data() })
        )
      );

    this.xmatrix = [];
    xmatrix_colectionorder
      .where("category", "==", this.category)
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.xmatrix.push({ id: item.id, data: item.data() })
        )
      );

    this.xmatrix2 = [];
    xmatrix_colectiondesc
      .where("category", "==", this.category)
      .get()
      .then((r) =>
        r.docs.map((item) =>
          this.xmatrix2.push({ id: item.id, data: item.data() })
        )
      );

    this.xconection = [];
    xconection_colection
      .where("category", "==", this.category)
      .get()
      .then((r) =>
        r.docs.map((itemXC) =>
          this.xconection.push({ id: itemXC.id, data: itemXC.data() })
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
    filterMaster: function () {
      return this.filterProductsByCategory(this.master);
    },
  },
  methods: {
    ShowSelected() {
      /* Para obtener el valor */
      this.cod = document.getElementById("select_position").value;
      console.log(this.cod);
    },
    // Filtrar por categoria
    filterProductsByCategory: function (master) {
      return master.filter(
        (item) => !item.data.category.indexOf(this.category)
      );
    },
    // Create Master Plan
    async addMasterPlan() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      master_plan
        .add({
          name: this.nameMP,
          category: this.$route.params.category,
        })
        .then(() => this.$mount());

      Swal.fire("Saved", "Entry registered successfully", "success");

      setTimeout(() => {
        this.$router.go(0);
      }, 3000);
    },
    // Create Project
    async addProject() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      procects_data
        .add({
          duration: this.durationP,
          finish: this.finishP,
          master: this.selectedMasterPlan,
          name: this.nameP,
          start: this.startP,
          status: 0,
        })
        .then(() => this.$mount());

      Swal.fire("Saved", "Entry registered successfully", "success");

      setTimeout(() => {
        this.$router.go(0);
      }, 1000);
    },
    // Open Update Project Modal
    async openModalUpdateProject(id) {
      procects_data
        .doc(id)
        .get()
        .then((r) => {
          this.ProjectData = {
            id: r.id,
            data: r.data(),
          };
        });
    },
    // Update Project Data
    updateProject(id) {
      procects_data
        .doc(id)
        .update({ status: this.prjuStatus })
        .then(() => this.$mount());
      Swal.fire("Updated", "Entry update successfully", "success");
      setTimeout(() => {
        this.$router.go(0);
      }, 5000);
    },
    // Delete Project
    deleteProject(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          procects_data
            .doc(id)
            .delete()
            .then(() => this.$mount());
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setTimeout(() => {
            this.$router.go(0);
          }, 5000);
        }
      });
    },
    // Create X Matrix
    async addXmatrix() {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      try {
        // Cargar archivo
        const { files } = this.$refs.cedulaTrabajador;
        // this.loading = true;
        const file = files[0];
        if (file) {
          const isPdf = file.type === "application/pdf";
          if (isPdf) {
            const response = await firebase
              .storage()
              .ref(`pdfs/${file.name}`)
              .put(file);
            const url = await response.ref.getDownloadURL();
            console.log("archivo disponible en ", url);
            // this.downloadUrl = ;
            // Archivo cargado

            xmatrix_colection
              .add({
                category: this.$route.params.category,
                position: this.xcategory,
                title: this.xtitle,
                url: url,
                subcategory: this.xsubcategory,
                created: calculatedCreatedAt,
              })
              .then(() => this.$mount());
          } else {
            console.log("Archivo no valido");
          }
        } else {
          xmatrix_colection
            .add({
              category: this.$route.params.category,
              position: this.xcategory,
              title: this.xtitle,
              url: "null",
              subcategory: this.xsubcategory,
              created: calculatedCreatedAt,
            })
            .then(() => this.$mount());
          console.log("falta el archivo");
        }
      } catch (error) {
        xmatrix_colection
          .add({
            category: this.$route.params.category,
            position: this.xcategory,
            title: this.xtitle,
            url: "null",
            subcategory: this.xsubcategory,
            created: calculatedCreatedAt,
          })
          .then(() => this.$mount());
        console.log("falta el archivo");

        console.error(error);
      }

      Swal.fire("Saved", "Entry registered successfully", "success");

      setTimeout(() => {
        this.$router.go(0);
      }, 3000);
    },
    // Open X Matrix Modal
    async openModal(cord1, cord2, pos) {
      console.log(cord1);
      console.log(cord2);
      console.log(pos);

      xmatrix_colection
        .doc(cord1)
        .get()
        .then((r) => {
          this.dataSelected = {
            id: r.id,
            data: r.data(),
          };
        });

      xmatrix_colection
        .doc(cord2)
        .get()
        .then((r) => {
          this.dataSelected2 = {
            id: r.id,
            data: r.data(),
          };
        });
    },
    // Create X Cords
    async NewCords(cord1, cord2, pos) {
      new Swal({
        title: "Please wait",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      xconection_colection
        .add({
          category: this.$route.params.category,
          conection: pos + "-" + cord1 + "-" + cord2,
          position: pos,
          option: this.xconectopt,
        })
        .then(() => this.$mount());

      Swal.fire("Saved", "Entry registered successfully", "success");

      setTimeout(() => {
        this.$router.go(0);
      }, 3000);
    },
    // Open Update XCords Modal
    async openModalUpdate(id) {
      xconection_colection
        .doc(id)
        .get()
        .then((r) => {
          this.updateData = {
            id: r.id,
            data: r.data(),
          };
        });
    },
    // Update XCords
    updateOption(id) {
      xconection_colection
        .doc(id)
        .update({ option: this.xconectopt })
        .then(() => this.$mount());
      Swal.fire("Updated", "Entry update successfully", "success");
      setTimeout(() => {
        this.$router.go(0);
      }, 5000);
    },
    // Delete XCords
    deleteData(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          xconection_colection
            .doc(id)
            .delete()
            .then(() => this.$mount());
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setTimeout(() => {
            this.$router.go(0);
          }, 5000);
        }
      });
    },
    // Open Update XMatrix
    async openModalMatrix(id) {
      xmatrix_colection
        .doc(id)
        .get()
        .then((r) => {
          this.XmatrixSelected = {
            id: r.id,
            data: r.data(),
          };
        });
    },
    // Update XMatrix xsubcategoryUpdate
    async updateMatrix(id) {
      if (this.xtitleUpdate != "") {
        xmatrix_colection
          .doc(id)
          .update({ title: this.xtitleUpdate })
          .then(() => this.$mount());
        Swal.fire("Updated", "Entry update successfully", "success");
        setTimeout(() => {
          this.$router.go(0);
        }, 5000);
      }
      if (this.xsubcategoryUpdate != "") {
        xmatrix_colection
          .doc(id)
          .update({ subcategory: this.xsubcategoryUpdate })
          .then(() => this.$mount());
        Swal.fire("Updated", "Entry update successfully", "success");
        setTimeout(() => {
          this.$router.go(0);
        }, 5000);
      }
      if (this.$refs.cedulaTrabajadorU != "") {
        try {
          // Cargar archivo
          const { files } = this.$refs.cedulaTrabajadorU;
          // this.loading = true;
          const file = files[0];
          if (file) {
            const isPdf = file.type === "application/pdf";
            if (isPdf) {
              const response = await firebase
                .storage()
                .ref(`pdfs/${file.name}`)
                .put(file);
              const url = await response.ref.getDownloadURL();
              console.log("archivo disponible en ", url);
              // this.downloadUrl = ;
              // Archivo cargado

              xmatrix_colection.doc(id).update({ url: url });
            } else {
              console.log("Archivo no valido");
            }
          } else {
            console.log("falta el archivo");
          }
        } catch (error) {
          console.error(error);
        }
        Swal.fire("Updated", "Entry update successfully", "success");
        setTimeout(() => {
          this.$router.go(0);
        }, 5000);
      }
    },
    // Delete XMatrix
    deleteMatrix(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          xmatrix_colection
            .doc(id)
            .delete()
            .then(() => this.$mount());
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setTimeout(() => {
            this.$router.go(0);
          }, 5000);
        }
      });
    },
  },
};
</script>

<style scoped>
.cuadricula-matrix {
  border: solid black 0.001em;
  width: 36.3px;
  height: 36.3px;
}
.cuadricula_artic {
  border: solid white 0.001em !important;
}
.cuadricula_cushman {
  border: solid white 0.001em !important;
}

.cuadricula_jacobsen {
  border: solid white 0.001em !important;
}
.cuadricula_gse {
  border: solid white 0.001em !important;
}

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

.table_color {
  color: #373737;
}
.table_artic {
  color: #d6dbdf !important;
}

.table_cushman {
  color: #d6dbdf !important;
}

.table_jacobsen {
  color: #d6dbdf !important;
}
.table_gse {
  color: #d6dbdf !important;
}

.btn-blue {
  background-color: #1b406e;
  margin-left: 10px;
}
.circulo {
  background-color: #d6dbdf;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.circulo2 {
  background-color: #567993;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.circulo3 {
  background-color: #9fb7c9;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.card-green {
  background-color: #1b406e;
  color: #ffffff;
  font-weight: 500;
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

.add-update i {
  margin-top: 0.5rem;
}

.fa-plus {
  font-size: 1.5rem;
}

.modal-header {
  display: block !important;
  background: #1b406e;
  background: linear-gradient(180deg, #1b406e 0%, #1b406e 48%, #1b406e 100%);
  color: white;
  border-radius: 0;
  border: transparent;
}

.header_artic {
  background: #599a30 !important;
}

.header_cushman {
  background: #edcc45 !important;
}

.header_jacobsen {
  background: #d67443 !important;
}

.header_gse {
  background: #ef954c !important;
}

.modal-content {
  background-color: #ffffff;
  border-radius: 0;
  color: #5a5a5a;
  border: solid #e3e3e3 1px;
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

.btn-red {
  background-color: #9a3030;
  border: transparent;
  color: #fff;
  border-radius: 0;
  width: 150px;
}

.mt-matrix {
  margin-top: 100px;
}

.height-xm {
  height: 730px;
  background-image: url("https://res.cloudinary.com/dfxnfluly/image/upload/v1675434907/textron/Matrix-v2_m1xegm.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 730px;
}

.vertical {
  writing-mode: vertical-rl;
  /* text-orientation: upright; */
}

.text-transform {
  transform: rotate(180deg);
}

.text-size {
  font-size: 18px;
}

.vertical2 {
  writing-mode: vertical-lr;
  /* text-orientation: upright; */
}

.slidecontainer {
  width: 100%;
  /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;
  /* Override default CSS styles */
  appearance: none;
  width: 100%;
  /* Full-width */
  height: 5px;
  border-radius: 5px;
  background: #1f435d;
  /* Grey background */
  outline: none;
  /* Remove outline */
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 150px;
  height: 60px;
  border: 100%;
  background: url("../../../assets/images/progress.png");
  background-repeat: no-repeat;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 150px;
  height: 60px;
  border: 100%;
  background: url("../../../assets/images/progress.png");
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
