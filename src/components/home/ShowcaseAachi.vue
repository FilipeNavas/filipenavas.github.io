<template>
  <card class="mb-5" shadow>
    <section class="">        
      <div class="container ">
        <div class="row row-grid align-items-center">
            <div class="col-md-6">
                <h3>Aachi Vagas
                    <img v-lazy="'img/theme/aachi-logo.png'" class="img-fluid">
                </h3>
            </div>
            <div class="col-md-6 text-lg-right mt-0">
                <h6 class="">
                    From 2018-2020 remotely (company based in Brazil)
                </h6>
            </div>            

          <!-- <div class="col-md-6 order-md-1 ">          
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              ></iframe>
            </div>
          </div> -->
          <div class="col-md-12 order-md-2">
            <div class="pl-md-5 text-justify">
              <p>At Pride Human Resources, a Brazilian HR company, I was responsible for bringing to life a recruting software to make it easier for local companies and candidates to find the perfect match.
                  I was hired as a contractor to develop a web-application capable of ranking candidates to job postings.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                    <h6 class="mb-0">MVP built with Java EE, MySQL, AWS</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="fa fa-codepen"></badge>
                    <h6 class="mb-0">Home page built with VueJs</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                    <h6
                      class="mb-0"
                    >
                        This was a rewarding project in which the client was very satisfied in having their software startup up and running in a few months, and the follow up features of candidate matching and behaviorial testing.
                    </h6>
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