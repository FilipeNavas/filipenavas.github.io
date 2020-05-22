<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center">
                <div class="col-lg-12">
                    <card class="mb-5" shadow>
                    <h3 class="text-primary font-weight-light mb-2 text-center">Maybe your company will be the next one featured here?</h3>
                    <h4 class="text-primary font-weight-light mb-2 text-center">But without an end date, of course 😉</h4>                                        
                    </card>
                </div>
                <div class="col-lg-12 text-center">
                    <h3 class="text-primary font-weight-light mb-2">Thank you for visiting!</h3>
                    <h4 class="mb-0 font-weight-light">Let's get in touch.</h4>
                    
                    <div class="btn-wrapper mt-2">
                         <a target="_blank" rel="noopener" href="mailto:filipenavas@hotmail.com"
                        class="btn btn-neutral btn-icon-only btn-youtube btn-lg btn-round " data-toggle="tooltip"
                        data-original-title="Connect with me">
                            <i class="fa fa-envelope"></i>
                        </a>
                        <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/filipenavas/"
                        class="btn btn-neutral btn-icon-only btn-linkedin btn-lg btn-round " data-toggle="tooltip"
                        data-original-title="Connect with me">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a target="_blank" rel="noopener" href="https://github.com/FilipeNavas"
                        class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Follow on Github">
                            <i class="fa fa-github"></i>
                        </a>
                    </div>

                </div>
                
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-12 text-center">
                    <p v-b-popover.hover.top="'Yes, developed by Filipe'">&copy; {{year}} Developed by myself</p>            
                    <a href="https://github.com/FilipeNavas/filipenavas.github.io"
                        class="nav-link footer-link" target="_blank" rel="noopener">Website Code Repository <i class="fa fa-external-link"></i></a>            
                </div>

            </div>
        </div>
    </footer>
</template>
<script>
import { VBTooltip } from "bootstrap-vue/esm/directives/tooltip/tooltip";
import { VBPopover } from "bootstrap-vue/esm/directives/popover/popover";

export default {    
  name: 'app-footer',
  directives: {
    BTooltip: VBTooltip,
    BPopover: VBPopover
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style scoped>
    .footer-link{
        font-size: 14px;
        font-weight: 300;
    }
</style>
