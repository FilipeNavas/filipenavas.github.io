<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-2 shape-default shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--500" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-4 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'img/theme/filipe-profile.jpg'" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a href="https://www.linkedin.com/in/filipenavas/" target="_blank">
                    <base-button type="linkedin" size class="mr-4">
                      <i class="fa fa-linkedin"></i>
                    </base-button>
                  </a>
                  <a href="https://github.com/FilipeNavas" target="_blank">
                    <base-button type="github" size class="float-right">
                      <i class="fa fa-github"></i>
                    </base-button>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">Want to hire me?</span>
                    <span class="description">
                      <b>filipenavas [at] hotmail.com</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-4">
              <h3>
                Filipe Navas
                <span class="font-weight-light">, {{profile.age}}</span>
              </h3>
              <div class="h6 font-weight-300">
                <i class="fa fa-map-marker mr-2"></i>
                {{profile.city}}
              </div>
              <div class="h6 mt-4">
                <i class="fa fa-briefcase mr-2"></i>
                {{profile.title}}
              </div>
              <div>
                <i class="fa fa-graduation-cap mr-2"></i>
                {{profile.education.school}}
                <br />
                Graduated in {{profile.education.program}}
              </div>
            </div>

            <div class="mt-3 text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <badge
                    :type="getColor(skill)"
                    v-for="(skill, index) in skills"
                    :key="index"
                  >{{skill}}
                  </badge>
                </div>
              </div>
            </div>

            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <h4>Welcome to my personal website.</h4>
                  <p>
                    Here I want to showcase some of my projects and show a little more about me that you may have not seen yet on my résumé.
                    Please scroll down to see more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <Showcase />
  </div>
</template>
<script>
import Showcase from "@/components/home/Showcase"
export default {
  components: { Showcase },
  data: function () {
    return {
      profile: {
        age: new Date().getFullYear() - 1993,
        city: "Vancouver, BC - Canada",
        title: 'Software Engineer, AWS Solutions Architect, Startup Founder',
        education: {
          school: "IFSP - Federal Institute of Technology of Sao Paulo",
          program: "Internet Systems"
        }

      },
      skills: [
        "Java", "AWS (Amazon Web Services)", "English", "Portuguese", "Startup", "Programming", "Agile Methodologies", "Project Management",
        "Leadership", "Database Design", "Solutions Architect", "JSP", "Hibernate", "MVC", "VRaptor", "MySQL", "Serverless", "JavaScript",
        "APIs", "GraphQL", "NodeJS", "VueJS", "Facebook Ads", "Google Ads", "Google Analytics", "A/B Testing", "Web Development", "Web Design",
        "HTML", "CSS", "Digital Marketing", "Sales", "WordPress", "CMS", "CRM", "SEO", "Microsoft Office"
      ]
    }
  },
methods: {
    getColor(title) {
      let n = parseInt((Math.floor(Math.random() * Math.floor(9))).toString().slice(0, 1));      
      switch (n) {
        case 1 :
        case 2 :
          return 'default';
          break;
        case 3:
        case 4:
          return 'primary';
          break;
        case 5: 
        case 6:
          return 'info';
          break;
        case 7: 
        case 8:
          return 'success';
          break;
        case 9:
        case 0:
          return 'warning';
          break;

      }
    }
  }
};
</script>
<style>
@media (max-width: 991.98px) {
  .section-profile-cover {
    height: 200px !important;
  }
}
</style>
