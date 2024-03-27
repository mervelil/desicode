<template>
  <div>
  
   <b-button variant="dark" v-b-toggle.sidebar-right style="padding:20px;float:right; height: 100%;
 min-height: min-content;" > 
       <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
         
 <img class="h-20px w-20px rounded-sm" src="../assets/images/img.svg" style="height:30px;width:30px" alt="">
   </div>
 </b-button>
   <b-sidebar id="sidebar-right" right shadow>
   <div class="d-flex align-items-center mt-5">
            <div class="symbol symbol-100 mr-5">
              <img src="assets/images/desi.png" alt="">
                <div class="symbol-label" style="background-image:url(assets/images/desi.png);"></div>
                <i class="symbol-badge bg-success"></i>
            </div>
            <div class="d-flex flex-column">
                <a href="#" class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">Emrecan  Kurtçu</a>
<!--                <div class="text-muted mt-1">Application Developer</div>-->
                <div class="navi mt-2">
								<span class="navi-item p-0 pb-2">
									<span class="navi-icon mr-1">
										<span class="svg-icon svg-icon-lg svg-icon-primary">

											<!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg-->
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24"></rect>
													<path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000"></path>
													<circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5"></circle>
												</g>
											</svg>

                                            <!--end::Svg Icon-->
										</span>
									</span>
									<span class="navi-text text-muted">emrecan@desi.com.tr</span>
								</span>
                    <form class="form" enctype="multipart/form-data" action="/web/panel/logout" method="POST"><input type="hidden" name="_csrf" value="fbdbeb3c-e1b0-4531-bbc0-ad75c80b572e">
                        <button class="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Log Out</button>
<!--                    <a th:href="@{/web/panel/logout}" class="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5" th:text="#{login.logout}" ></a>-->
                    </form>

                </div>
            </div>
        </div>
     
    
   </b-sidebar>
   
 
 </div>
</template>

<script>
export default {
    data () {
    return {
      userLoginText: this.userLoginText, // Kullanıcı adınızı buraya ekleyin
      profilePicture: '', // Profil resmi URL'sini buraya ekleyin
      password: this.password,
      languageMenuOpen: false,
      profileMenuOpen: false
    }
  }
}
</script>

<style>

</style>