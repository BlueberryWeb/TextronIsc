<template>
    <div class="container-fluid p-0">
        <div class="d-flex">
            <div class="ezgo">
                <div class="brands">
                    <img v-bind:src="require('../../assets/images/ezgo-gray.png')"  alt="EZGO" class="img-fluid" />
                    <div class="logo">
                        <img  v-bind:src="require('../../assets/images/logo-ezgo.png')" alt="EZGO" class="img-fluid mb-4" />
                    </div>
                    <div class="hover">
                        <img  v-bind:src="require('../../assets/images/ezgo-color.png')"  alt="EZGO" class="img-fluid " />
                        <div class="logo-link">
                            <div class="text-center">
                                <img  v-bind:src="require('../../assets/images/logo-ezgo.png')" alt="EZGO" class="img-fluid mb-4" />
                                <a href="https://ezgo.txtsv.com/" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page
                                    </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cushman">
                <div class="brands">
                    <img v-bind:src="require('../../assets/images/cushman-gray.png')"  alt="EZGO" class="img-fluid" />
                    <div class="logo">
                        <img v-bind:src="require('../../assets/images/logo-cushman.png')"  alt="EZGO" class="img-fluid mb-4" />
                    </div>
                    <div class="hover">
                        <img v-bind:src="require('../../assets/images/cushman-color.png')"  alt="EZGO" class="img-fluid " />
                        <div class="logo-link">
                            <div class="text-center">
                                <img v-bind:src="require('../../assets/images/logo-cushman.png')" alt="EZGO" class="img-fluid mb-4" />
                                <a href="https://cushman.txtsv.com/" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page
                                    </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="artic">
                <div class="brands">
                    <img v-bind:src="require('../../assets/images/artic-gray.png')"  alt="EZGO" class="img-fluid" />
                    <div class="logo">
                        <img v-bind:src="require('../../assets/images/logo-artic.png')"  alt="EZGO" class="img-fluid mb-4 " />
                    </div>
                    <div class="hover">
                        <img v-bind:src="require('../../assets/images/arctic-color.png')"  alt="EZGO" class="img-fluid " />
                        <div class="logo-link">
                            <div class="text-center">
                                <img v-bind:src="require('../../assets/images/logo-artic.png')" alt="EZGO" class="img-fluid mb-4" />
                                <a href="https://arcticcat.txtsv.com/" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page
                                    </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jacobsen">
                <div class="brands">
                    <img v-bind:src="require('../../assets/images/jacobsen-gray.png')"  alt="EZGO" class="img-fluid" />
                    <div class="logo">
                        <img v-bind:src="require('../../assets/images/logo-jacobsen.png')" alt="EZGO" class="img-fluid mb-4" />
                    </div>
                    <div class="hover">
                        <img v-bind:src="require('../../assets/images/jacobsen-color.png')" alt="EZGO" class="img-fluid" />
                        <div class="logo-link">
                            <div class="text-center">
                                <img v-bind:src="require('../../assets/images/logo-jacobsen.png')" alt="EZGO" class="img-fluid mb-4" />
                                <a href="https://www.jacobsen.com/" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page
                                    </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gse">
                <div class="brands">
                    <img v-bind:src="require('../../assets/images/gse-gray.png')"  alt="EZGO" class="img-fluid" />
                    <div class="logo">
                        <img v-bind:src="require('../../assets/images/logo-gse.png')"  alt="EZGO" class="img-fluid mb-4" />
                    </div>
                    <div class="hover">
                        <img v-bind:src="require('../../assets/images/gse-color.png')"  alt="EZGO" class="img-fluid " />
                        <div class="logo-link">
                            <div class="text-center">
                                <img v-bind:src="require('../../assets/images/logo-gse.png')" alt="EZGO" class="img-fluid mb-4" />
                                <a href="https://textrongse.txtsv.com/" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page
                                    </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gse">
                <div class="brands">
                    <img v-bind:src="require('../../assets/images/tracker-grey.png')" height="50"  alt="EZGO" class="img-fluid" />
                    <div class="logo">
                        <img v-bind:src="require('../../assets/images/tracker.png')"  alt="EZGO" class="img-fluid mb-4" />
                    </div>
                    <div class="hover">
                        <img v-bind:src="require('../../assets/images/tracker-color.png')"  alt="EZGO" class="img-fluid " />
                        <div class="logo-link">
                            <div class="text-center">
                                <img v-bind:src="require('../../assets/images/tracker.png')" alt="EZGO" class="img-fluid mb-4" />
                                <a href="https://www.trackeroffroad.com" class="a_none_style text-white">
                                    <h6 class="oRegular">Visit page
                                    </h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.brands {
    position: relative;
    height: 470px;
    width: 247px;
}

.logo-link {
    position: absolute;
    bottom: 20%;
    left: 20%;
}

.logo {
    position: absolute;
    bottom: 10%;
    left: 20%;
}

.logo img {
    width: 183px;
    height: 43px;
}

.logo-link img {
    width: 182px;
    height: 43px;
}

.hover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    color: #FAFBFC;
    text-align: center;
    align-items: center;
    transition: opacity 1.5s ease-in-out;
}

.brands:hover .hover {
    opacity: 1;
}

@media only screen and (min-width: 1600px) and (max-width: 2000px){
    .brands{
        position: relative;
        width: 380px;
        height: 470px ;
        margin-bottom: 150px;
    }
    .logo-link{
        position: absolute;
        bottom: 20%;
        left: 20%;
    }
    .logo{
        position: absolute;
        bottom: 10%;
        left: 20%;
    }
    .logo img{
        width: 183px;
        height: 43px;
    }
    .logo-link img{
        width: 182px;
        height: 43px;
    }

}
</style>