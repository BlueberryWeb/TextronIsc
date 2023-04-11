<template>
  <!-- @click="$router.push({ name: 'business_updates-detail', params: { id: item.id } })" -->
  <div class="users-panel">
    <div class="container p-0">
      <div class="row">
        <div class="col">
          <h1 class="oExtraBold h3 mt-5">Users</h1>
        </div>
        <div class="col">
          <div class="d-flex justify-content-end mt-5">
            <div class="add-update">
              <a
                class="a_none_style text-white"
                data-bs-toggle="modal"
                data-bs-target="#add-user"
              >
                <font-awesome-icon icon="fa-solid fa-plus" class="fa-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>

  <!-- Create user -->
  <div
    class="modal fade"
    id="add-user"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create user</h5>
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
        <div class="modal-body container">
          <form action="#" @submit.prevent="register">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                v-model="name"
                required
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                v-model="email"
                required
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Password</label
              >
              <input
                v-model="password"
                required
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Select user type</label
              >
              <select
                v-model="level"
                required
                class="form-select"
                aria-label="Default select example"
              >
                <option selected value="">Options ...</option>
                <option value="Administrator">Administrator</option>
                <option value="User">User</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Select company</label
              >
              <select
                v-model="company"
                required
                class="form-select"
                aria-label="Default select example"
              >
                <option value="">Options ...</option>
                <option value="Artic cat">Artic cat</option>
                <option value="Cushman">Cushman</option>
                <option value="Textron GSE">Textron GSE</option>
                <option value="Jacobsen">Jacobsen</option>
                <option value="EZGO">EZGO</option>
              </select>
            </div>
            <div class="row mt-4">
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-green">
                  <h6 class="pt-1 hRegular">Save</h6>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase/firebase";

require("firebase/compat/auth");

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      level: "",
      company: "",
    };
  },
  methods: {
    register() {
      if (this.name && this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            if (user) {
              user
                .updateProfile({
                  displayName: this.name,
                })
                .then((u) => {
                    console.log(u)
                  this.name = "";
                  this.email = "";
                  this.password = "";
                  this.level = "";
                  this.company = "";
                //   console.log(user);
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }
          })
          .catch(console.log("error"));
      }
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.a_none_style {
  text-decoration: none;
}

.add-update {
  background: rgb(100, 193, 186);
  background: linear-gradient(
    152deg,
    rgba(100, 193, 186, 1) 0%,
    rgba(0, 34, 80, 1) 48%,
    rgba(0, 34, 80, 1) 100%
  );
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
