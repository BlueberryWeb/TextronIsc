<template>
    <footer class="footer">
        <div class="container py-5">
            <div class="row pt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div class="">
                        <img v-bind:src="require('../../assets/images/logo-ISC-white.png')"
                            alt="ISC INTEGRATED SUPPLY CHAIN" class="img-fluid logo-isc-footer" />
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div class="">
                        <h3 class="oExtraBold h4 mb-4">Contact</h3>
                        <h6 class="mb-3">Kautexstrasse 52</h6>
                        <a href="mailto:support@textronisc.com" class="a_none_style text-white">
                            <h6 class="mb-3">support@textronisc.com</h6>
                        </a>
                        <a href="tel:+011492284880" class="a_none_style text-white">
                            <h6 class="mb-3">Phone: +011-49-228-4880</h6>
                        </a>
                        <a href="tel:+14014212800" class="a_none_style text-white">
                            <h6 class="mb-3">Phone: +1 (401) 421-2800</h6>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <h3 class="oExtraBold h4 mb-4">Legal</h3>
                    <a href="" class="a_none_style text-white">
                        <h6 class="mb-3">Privacy Policy</h6>
                    </a>
                    <a href="" class="a_none_style text-white">
                        <h6 class="mb-3">Terms & Conditions</h6>
                    </a>
                    <a href="" class="a_none_style text-white">
                        <h6 class="mb-3">Legal CA Transparency in Supply</h6>
                    </a>
                    <a href="" class="a_none_style text-white">
                        <h6 class="mb-3">Chains Act </h6>
                    </a>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div class="">
                        <h3 class="oExtraBold h4 mb-4">Users</h3>
                        <a @click="getToLogin" class="a_none_style text-white">
                            <h6 class="mb-3">Users Log in</h6>
                        </a>
                        <a @click="getToLogin" class="a_none_style text-white">
                            <h6 class="mb-3">Admin Log in</h6>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row pt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="d-flex">
                        <div class="">
                            <img v-bind:src="require('../../assets/images/textron-logo-2.png')"
                                alt="TEXTRON Specialized Vehicles" class="img-fluid logo-textron" />
                        </div>
                        <div class="txt-rights">
                            <h4 class="hLight h6">© 2023 TEXTRON SPECIALIZED VEHICLES, All Rights Reserved</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class="text-end">
                        <a href="https://blueberry.mx/" class="a_none_style" target="_blank">
                            <img src="https://res.cloudinary.com/dej55trpk/image/upload/v1675785643/we-are-Bb_black_hsaadw.gif"
                                alt="Materialized by Blueberry" class="img-fluid bb-logo" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
    getToLogin() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>
.a_none_style {
    text-decoration: none;
}

.logo-isc-footer {
    width: 220px;
}

.footer h6 {
    font-family: 'Helvetica Nue Ligth';
}

.logo-textron {
    width: 180px;
}
</style>