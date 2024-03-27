<template>
  <div style="background-color: #e4e6ef; height: 100vh">
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
          class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1 primary"
          style="color: white"
          >Merhaba  ,
        </span>
        <span
          class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
          >{{ text2 }}
        </span>
        <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
          <span
            class="symbol-label font-size-h5 font-weight-bold"
            style="background-image: url(../assets/indir.png)"
          ></span>
        </span>
      </div>
      <R />
    </b-navbar>
    <div class="card mt-3 mx-3 my-4" style="border-radius: 10px">
      <ol class="breadcrumb breadcrumb-dot text-muted fs-6 fw-semibold">
        <li class="breadcrumb-item pe-3 no-underline mt-4 mb-2 mx-4">
          Anasayfa
        </li>
        <li class="breadcrumb-item pe-3 text-muted mt-4 mb-2">Other Settings</li>
      </ol>
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content"><div>

        <div class="col-lg-12">
            <div class="card mt-10" style="border:none;">
                <div class="card-header bg-white padding mt-2">
                    <h3 class="card-title">Yönetim Ayarları</h3>
                </div>
                <form class="form" id="change_management_settings_form" action="/web/management/services/management-settings/change" method="POST"><input type="hidden" name="_csrf" >
               <div class="card-body mt-2">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-floating mb-7 mt-2" style="border-radius:30px;padding:20px;">
                                    <input type="text" class="form-control form-control-solid" id="mobile_app_version" name="mobileAppVersion" value="1.0.8" autocomplete="off">
                                    <label for="mobile_app_version">Mobil Uygulama Versiyon</label>
                                </div>

                                <div class="form-floating mb-7 mt-2" style="border-radius:30px;padding:20px;">
                                    <input type="text" class="form-control form-control-solid" id="mobile_app_build_number" name="mobileAppBuildVersion" value="90" autocomplete="off">
                                    <label for="mobile_app_build_number">Mobil Uygulama Build Number</label>
                                </div>

                                <div class="row-cols-md-6 mx-5 " style="padding:10px;border-radius:14px;">
                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                        <input class="form-check-input ch" type="checkbox" name="mobileAppMustUpdate" style="width:50px;height:25px;border:none;" value="1" checked="checked">
                                        <span class="form-check-label">Zorunlu Güncelleme</span>
                                    </label>
                                </div>
                                <div class="d-flex mx-4">
                                    <button type="button" class="btn btn-warning" onclick="sendNotificationAllUsers()">Tüm kullanıcılara uygulama güncelleme bildirim gönder</button>
                                </div>
                            </div>
                        <div class="col-md-2"></div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-end py-6 px-9">
                        <button type="button" class="btn btn-primary" id="change_management_settings_button" onclick="changeManagementSettings()">Save Changes</button>
                    </div>


                </form>
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
  name: "AccessPoint",
  components: {
    R,
    Sidebar,
  },
  data() {
    return {
      userLoginText: this.userLoginText, // Kullanıcı adınızı buraya ekleyin
      profilePicture: "", // Profil resmi URL'sini buraya ekleyin
      password: this.password,
      searchText: "",
      text2:"",
      person: {},
      people: [
        {
          id: 1,
          name: "Test(1 devices)",
          status: "details",
          status2: "edit",
          status3: "delete",
        },
        {
          id: 2,
          name: "Jacob",
          status: "details",
          status2: "edit",
          status3: "delete",
        },
        {
          id: 3,
          name: "Larry",
          status: "details",
          status2: "edit",
          details: "delete",
        },
        // ... diğer kişiler ...
      ],

      languageMenuOpen: false,
      profileMenuOpen: false,
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
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
  computed: {
    filteredPeople() {
      return this.people.filter((person) => this.matchesSearch(person));
    },
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
    matchesSearch(person) {
      const fullName = person.name + " " + person.status;
      return fullName.toLowerCase().includes(this.searchText.toLowerCase());
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
.rad {
  background-color: rgb(225, 240, 255);
  border-color: #87b4e3;
  font-weight: bold;
  color: #007bff;
  font-size: 16px;
  padding: 6px 15px;
  border-radius: 10px;
}
.ch{
    border-radius:20px;
}
.rad-w{
  background-color: rgb(255, 168, 0);
  border-color: #e3bd87;
  font-weight: bold;
  color:#dc8408;
  font-size: 16px;
  padding: 6px 15px;
  border-radius: 10px;

}
.rad-s{ 
   background-color: rgb(228, 251, 250);
  border-color: #afe3b0;
  font-weight: bold;
  color: green;
  font-size: 16px;
  padding: 6px 15px;
  border-radius: 10px;
}
.form-check-custom {
    display: flex;
    align-items: center;
    padding-left: 0;
    margin: 0;
}
.form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
}
.form-check-custom.form-check-solid .form-check-input:checked {
    background-color: #009ef7;
}


.rad-d{
  background-color: rgb(255, 120, 121);
  border-color: #ecb2d7;
  font-weight: bold;
  color: pink;
  font-size: 16px;
  padding: 6px 15px;
  border-radius: 10px; 

}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.btn.btn-warning {
    color: #ffffff;
    background-color: #FFA800;
    border-color: #FFA800;
}
.col-md-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.6666666667%;
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
}
.form-check-custom.form-check-solid .form-check-input:checked {
    background-color: #009ef7;
}



.form-switch .form-check-input:checked {
    background-position: right center;
}
 .form-control:not(:placeholder-shown) {
    padding-top: 2.15rem;
    padding-bottom: 0.625rem;
}
.form-check-custom {
    display: flex;
    align-items: center;
    padding-left: 0;
    margin: 0;
}
.form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
}
.form-floating > .form-control {
    padding: 1rem 1rem;
}
.form-floating > .form-control, .form-floating > .form-select {
    height: 50px;
    line-height: 1.25;
}
.form-control.form-control-solid {
    background-color: #F3F6F9;
    border-color: #F3F6F9;
    color: #3F4254;
    -webkit-transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, -webkit-box-shadow 0.15s ease;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, -webkit-box-shadow 0.15s ease;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, -webkit-box-shadow 0.15s ease;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.3rem + 2px);
    padding: 0.65rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3F4254;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #E4E6EF;
    border-radius: 0.42rem;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
button, input {
    overflow: visible;
}
input, button, select, optgroup, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}


.border {
  border-radius: 20px;
}
.online {
  background-color: #18b96e;
  border-color: #1ad72d;
  color: #fff;
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 10px;
}
.off {
  background-color: #bc1515;
  border-color: #d71a1a;
  color: #fff;
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 10px;
}
.header {
  background-color: #f5f5f5;
  padding: 10px 0;
}
.no-underline {
  text-decoration: none;
}
.logo {
  font-weight: bold;
  font-size: 24px;
}
.img-dim {
  max-width: 200px;
  max-height: 200px;
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
bg-white {
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
    font-family: "Poppins, Helvetica, " sans-serif ";";
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
