<template>
  <div style="background-color:#E4E6EF;height: 100vh;">
    <Sidebar />
    <b-navbar
      variant="dark"
      type="light"
      style="flex-direction: row-reverse; padding: 1px"
    >
      <b-navbar-brand href="#" class="px-3 py-2" style="color: white">
        <img
          src="../assets/images/indir.png"
          style="weight: 30px; height: 30px"
          class="d-inline-block align-top"
        />
      </b-navbar-brand>
      <div
        class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
        id="kt_quick_user_toggle"
      >
        <span
          class="text font-weight-bold font-size-base d-none d-md-inline mr-1 primary" style="color: white"
          >Merhaba   ,    
        </span>
        <span
          class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3" style="color: white"
          >{{ text2 }}
        </span>
        <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
          <span
            class="symbol-label font-size-h5 font-weight-bold"    
             style="background-image: url(../assets/images/indir.png)"
            
          ></span>
        </span>
      </div>
      <R />
    </b-navbar>
   
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
				<!--Content area here-->
				<div class="col-lg-12 col-xxl-12">
    <div class="row">
        <div class="col-lg-12 col-xxl-12">
                <div class="card card-custom card-stretch gutter-b p-5 mx-4 mb-2 mt-4">
                    <div class="card-header align-items-center border-0 mt-4 bg-white">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="font-weight-bolder text-dark ">Devices</span>
                        </h3>
                    </div>
                    <div class="card-body pt-4 h-100 overflow-auto">
                        <hr>
                        <div class="row">

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="javascript:void(0);" onclick="load_alarm_detail('791')" class="no-underline">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header border border-light bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label" >sontest</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                             
                                          <div style="position: absolute; left: 0; width: 100%;" class="img-dim">
    <span class="label blink inline  mx-2" >
      <font-awesome-icon :icon="['fas', 'battery-half']" class="mr-2" style="color: white;"></font-awesome-icon>
      <span  class="label blink ">Düşük Batarya</span>
    </span>
    <span class="label blink inline mx-2">
      <font-awesome-icon :icon="['fas', 'plug']" class="mr-2" style="color: white;"></font-awesome-icon>
      <span class="label blink">AC Gücü Kapalı</span>
    </span>
  </div>
                                            
                                            <img src="../assets/images/midline.svg" class="img-dim">

                                        </div>
                                        <div class="card-footer justify-content-between text-center border border-light bg-white">
                                            <span>MidlineWifi</span>
                                        </div>
                                    </div>
                                </a>

                                

                                
                            </div>
 <!-- 82satırda onclick="load_smart_lock_detail('988') -->
                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">
                                <a @click="goToHome()" href="javascript:void(0);" class="no-underline">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header border border-light bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Af</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="../assets/images/utopic.svg" class="img-dim">
                                        </div>
                                        <div class="card-footer justify-content-between text-center border border-light bg-white">
                                            <span>UtopicR</span>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                

                                <a href="javascript:void(0);" onclick="load_access_point_detail('408')" class="no-underline">
                                <div class="card card-custom gutter-b" style="height: 350px;">
                                    <div class="card-header border border-light bg-white">
                                        <div class="card-title text-center">
                                            <h3 class="card-label">test</h3>
                                        </div>
                                    </div>
                                    <div class="card-body text-center">
                                        <img src="../assets/images/hub.svg" class="img-dim">
                                    </div>
                                    <div class="card-footer justify-content-between text-center border border-light bg-white" >
                                        <span>Hub</span>
                                    </div>
                                </div>
                                </a>

                                
                            </div>


                        </div>
                        
                    </div>
                </div>
            </div>





    </div>
</div>

			</div>
  </div>
  
</template>
<script>
import axios from "axios";


import Sidebar from "../components/Sidebar.vue";
import R from "../components/R.vue";

export default {
  name: "HomeView",
  components: {
    R,
    Sidebar,
  },
  data() {
    return {
      userLoginText: this.userLoginText, // Kullanıcı adınızı buraya ekleyin
      profilePicture: "", // Profil resmi URL'sini buraya ekleyin
      password: this.password,
      languageMenuOpen: false,
      profileMenuOpen: false,
      text2:"",
      
    };
  },
  async created () {
      
      var userProfileData = localStorage.getItem("user");
      if (userProfileData) {      
         var userProfile = JSON.parse(userProfileData);
     const response = await axios.post("https://desisteely.com/api/web/v1/profile",{webUserToken:userProfile.data.webUserToken},{
          withCredentials: true
        });
          this.text2=response.data.data.name;
          
      }
    },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
   goToHome(){
      this.$router.push('/controller');
    },
    toggleLanguageMenu() {
      this.languageMenuOpen = !this.languageMenuOpen;
    },
    async created() {
      const response = await axios.post(
        "https://desisteely.com/api/web/v1/login",
        {
          userLoginText: this.userLoginText,
          password: this.password,
        }
      );
      if (response.data.status === "success" && this.$route.path !== "/home") {
        this.$router.push("/home");
      }
    },
    toggleProfileMenu() {
      this.profileMenuOpen = !this.profileMenuOpen;
    },
  },
};
</script>
<style scoped>
/* Bootstrap ve özelleştirme sınıfları için stil tanımlamaları */
.header {
  background-color: #f5f5f5;
  padding: 10px 0;
}
.no-underline{
  text-decoration: none;
}
.logo {
  font-weight: bold;
  font-size: 24px;
}
.img-dim{
    max-width: 200px;
     max-height:200px;
}

   .blink {
        animation: blink-animation 1s steps(5, start) infinite;
        -webkit-animation: blink-animation 1s steps(5, start) infinite;
     
        background-color:#ecd8d8;
        padding: 1px;
        text-align: center;
        line-height: 1px;
      }

      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
      @-webkit-keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }

.language-button {
  position: relative;
}

.language-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 150px;
  padding: 10px;
  display: none;
}
bg-white{
  background-color: #f6f7fb;
}

.language-item {
  cursor: pointer;
  padding: 5px 0;
}

.user {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.greeting {
  margin-right: 10px;
}

.profile-picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 10px;
}

.profile-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 150px;
  padding: 10px;
  display: none;
}
.profile-item {
  cursor: pointer;
  padding: 5px 0;
}
* {
  box-sizing: border-box;
}

body {
  background-color: #f6f7fb;
  color: #888da8;
  letter-spacing: 0.2px;
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}

a,
p,
span,
div,
li,
td {
  font-weight: 300 !important;
}

::placeholder {
  color: #ccc !important;
  font-weight: 300;
}

  .label {
    font-weight: bold;
    font-size: large;
    color: #ff0000; /* Kırmızı renk veya tercih ettiğiniz renk */
    display: inline-block;
    border-radius: 15px;
    border: #ff0000;
    margin-bottom: 2px;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #ccc !important;
  font-weight: 300;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #ccc !important;
  font-weight: 300;
}

input {
  border-color: #d8e0e5;
  border-radius: 2px !important;
  box-shadow: none !important;
  font-weight: 300 !important;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #f6f7fb;
}

button.btn {
  border-radius: 2px !important;
  box-shadow: none !important;
}

button.btn.btn-primary {
  background-color: #0e9aee !important;
}

button.btn.btn-primary:hover {
  background-color: #0879c8 !important;
}

#left-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  background-color: #313644;
  overflow-y: auto;
  height: 100vh;
  border-right: 1px solid #e6ecf5;
  margin-top: 60px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  overflow-x: hidden;
  z-index: 2;
}

#left-menu.small-left-menu,
#logo.small-left-menu {
  width: 60px;
}

#left-menu ul {
  padding: 0;
  margin: 0;
}

#left-menu ul li {
  padding: 0 10px;
  display: block;
  position: relative;
}

#left-menu > ul > li {
  margin: 15px 0;
}

#left-menu ul li a {
  color: #99abb4;
  width: 100%;
  display: inline-block;
  width: 260px;
  height: 37px;
  position: relative;
}

#left-menu ul li a i {
  font-size: 22px;
  text-align: center;
  width: 35px;
  height: 35px;
  display: inline-block;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
#left-menu ul li:hover a span {
  color: #0e9aee;
}
#left-menu ul li:hover a i {
  color: #0e9aee;
}

#left-menu ul li a span {
  width: 100%;
  height: 35px;
  padding-left: 10px;
  color: #99abb4;
  font-weight: 300;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#left-menu ul li.active a {
  border-bottom: 2px solid #0e9aee;
}

#left-menu ul li.active a span {
  color: #fff;
}

#left-menu ul li.active a i {
  background-color: #0e9aee;
  color: #fff;
}

#left-menu li.has-sub ul {
  background-color: #454e62;
  margin: 0 -10px;
  padding-left: 45px;
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#left-menu li ul.open {
  color: #0879c8;
}

#left-menu li.has-sub ul > li {
  padding-top: 10px;
}

a:hover {
  text-decoration: none;
}

#logo {
  position: fixed;
  top: 0;
  z-index: 2;
  left: 0;
  background-color: #464e62;
  border-color: #464e62;
  height: 60px;
  width: 280px;
  font-size: 30px;
  line-height: 2em;
  border-right: 1px solid #e6ecf5;
  z-index: 4;
  color: #fff;
  padding-left: 15px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
#header {
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #e6ecf5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}

#header .header-left {
  padding-left: 300px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#header .header-right {
  padding-right: 40px;
}

#header .header-right i,
#header .header-left i {
  font-size: 30px;
  line-height: 2em;
  padding: 0 5px;
  cursor: pointer;
}

#main-content {
  min-height: calc(100vh - 60px);
  clear: both;
}

#page-container {
  padding-left: 300px;
  padding-top: 80px;
  padding-right: 25px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#page-container.small-left-menu,
#header .header-left.small-left-menu {
  padding-left: 80px;
}

.card {
  border: 1px solid #e6ecf5;
  margin-bottom: 1em;
  font-weight: 300;
}

.card .title {
  padding: 15px 20px;
  border-bottom: 1px solid #e6ecf5;
  margin-bottom: 10px;
  color: #000;
  font-size: 18px;
}

#show-lable {
  opacity: 0;
  visibility: hidden;
  left: 80px;
  font-weight: 300;
  padding: 6px 15px;
  background-color: #0e9aee;
  position: fixed;
  color: #fff;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#left-menu.small-left-menu li.has-sub::after {
  content: "";
}
#left-menu.small-left-menu li.has-sub ul {
  position: fixed;
  width: 280px;
  z-index: 123;
  height: 0;
  left: 69px;
  padding-left: 15px;
}

@media only screen and (max-width: 992px) {
  #left-menu,
  #logo {
    width: 60px;
  }
  #page-container,
  #header .header-left {
    padding-left: 80px;
  }
  #toggle-left-menu,
  .big-logo {
    display: none;
  }
}
@media only screen and (min-width: 992px) {
  #left-menu li.has-sub::after {
    font-family: "Ionicons";
    content: "\f3d3";
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transform: rotate(0deg);
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  #left-menu li.has-sub.rotate:after {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .small-logo {
    display: none;
  }
}
</style>
