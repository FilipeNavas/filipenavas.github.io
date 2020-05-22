<template>
  <div class="container">
     
        <!-- <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
                <div class="card card-lift--hover shadow border-0">
                    <router-link to="/landing" title="Landing Page">
                        <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                    </router-link>
                </div>
            </div>
            <div class="col-md-6 mb-5 mb-lg-0">
                <div class="card card-lift--hover shadow border-0">
                    <router-link to="/profile" title="Profile Page">
                        <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                    </router-link>
                </div>
            </div>
        </div> -->

        <ShowcaseLolaguide />

        <ShowcaseAachi />

        <!-- <ShowcasePersonal /> -->
        
      
    </div>
</template>

<script>
import ShowcaseLolaguide from "./ShowcaseLolaguide"
import ShowcaseAachi from "./ShowcaseAachi"
import ShowcasePersonal from "./ShowcasePersonal"
export default {
    name: "Showcase",
    components: {
        ShowcaseLolaguide,
        ShowcaseAachi,
        ShowcasePersonal
    }
}
</script>

<style>

</style>