<template>
  <card class="mb-5" shadow>
    <section class>
      <div class="container">
        <div class="row row-grid align-items-center">
            <div class="col-md-6">
                <h3>Lolaguide Internet
                    <img v-lazy="'img/theme/lolaguide-logo.png'" class="img-fluid">
                </h3>
            </div>
                <div class="col-md-6 text-lg-right mt-0">
                <h6 class="">
                    From 2018-2020 in Vancouver, BC
                    <br />From 2015-2017 in Sao Paulo, Brazil
                </h6>
            </div>
          <!-- <div class="col-md-6 order-md-2">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              ></iframe>
            </div>
          </div> -->
          <div class="col-md-12 order-md-1">
            <div class="pr-md-5 text-justify">
              <p>At Lolaguide I was the lead software developer, and also a co-founder. The team was just me and my partner. In the video on the right I showcase the web-apps developed by me.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                    <h6 class="mb-0">First MVP built with Java EE, MySQL, AWS</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="fa fa-codepen"></badge>
                    <h6 class="mb-0">Second built with VueJs, NodeJs, AWS</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                    <h6
                      class="mb-0"
                    >Other duties included talking to the customer, business related tasks such as accounting, legal and banking</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </card>
</template>

<script>
export default {

}
</script>

<style scoped>
    img{
        max-width: 120px;
        max-height: 80px;
    }
</style>