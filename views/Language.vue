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
        <li class="breadcrumb-item pe-3 text-muted mt-4 mb-2">Smart Locks</li>
      </ol>
    </div>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--Content area here-->
      <div class="col-lg-12 col-xxl-12">
        <div class="row">
          <div class="col-lg-12 col-xxl-12">
            <div
              class="card card-custom card-stretch gutter-b p-5 mx-4 mb-2 mt-4"
            >
            <div class="mb-7 my-1 mb-5">
                    <div class="mt-1 mx-1 my-1">
                        <div class="col-lg-9 col-xl-8">
                            <div>
                                <div class="col-md-4 my-1 mt-1 mt-0 my-md-0">
                              
                              <button class="rad">Upload Language File</button>
                          
                                </div>

                                <div style=" padding:30px;text-align:left">
                                   
                                    <span> Dosya formatı : languagecode_COUNTRYCODE.json</span>
                                    <br>
                                    <span>Örnek : tr_TR.json</span>
                                </div>
                                <div class="card-body" style=" padding:30px;text-align:left">
                                    <span id="file_names_span" class="fileuploadspan">No file selected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            </div>
              <hr style="padding:10px;">
          <div class="col-lg-12 col-xxl-12">
                <div class="card card-custom card-stretch gutter-b p-5">
                    <div class="card-header bg-white align-items-center border-0 mt-4">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="font-weight-bolder text-dark">Languages</span>
                        </h3>
                    </div>
                    <div class="card-body pt-4 h-100 overflow-auto">
                        <hr>
                        <div class="row">

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3 border-light">

                                <a href="languages/tr_TR.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Türkçe | tr-TR</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/006-turkey.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/en_US.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white  bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">English | en-US</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/226-united-states.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/de_DE.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white ">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Deutsch | de-DE</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/017-germany.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/it_IT.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Italiano | it-IT</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/013-italy.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/ru_RU.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white ">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Russian | ru-RU</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/013-russia.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/nl_NL.json" class=" no-underline"  target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Dutch | nl-NL</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/237-netherlands.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/he_IL.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Hebraic | he-IL</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/155-israel.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/fr_FR.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">French | fr-FR</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/019-france.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/es_ES.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white ">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Spanish | es-ES</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/016-spain.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/uk_UA.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Ukrainian | uk-UA</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/145-ukraine.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/sk_SK.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Slovak | sk-SK</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/091-slovakia.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/sl_SI.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Slovene | sl-SI</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/010-slovenia.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/hr_HR.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Croatian | hr-HR</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/164-croatia.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/sq_AL.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Albanian | sq-AL</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/099-albania.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/pt_PT.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Portuguese | pt-PT</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/005-portugal.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/ar_SA.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Arabic | ar-SA</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/008-saudi-arabia.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/pl_PL.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Polski | pl-PL</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/211-poland.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/cs_CZ.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Čeština | cs-CZ</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/149-czech-republic.svg" style="max-width:100%;max-height: 100%;">
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-3">

                                <a href="languages/az_AZ.json" class=" no-underline" target="_blank">
                                    <div class="card card-custom gutter-b" style="height: 350px;">
                                        <div class="card-header bg-white">
                                            <div class="card-title text-center">
                                                <h3 class="card-label">Azərbaycanca | az-AZ</h3>
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            <img src="assets/media/svg/flags/141-azerbaijan.svg" style="max-width:100%;max-height: 100%;">
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
  </div>
</template>
<script>
import axios from "axios";

import Sidebar from "../components/Sidebar.vue";
import R from "../components/R.vue";

export default {
  name: "Language",
  components: {
    R,
    Sidebar,
  },
  data() {
    return {
      userLoginText: this.userLoginText, // Kullanıcı adınızı buraya ekleyin
      profilePicture: "", // Profil resmi URL'sini buraya ekleyin
      password: this.password,
      searchText:'',
      text2:"",
       person: {},
       people: [
        { id: 1, name: 'Test(1 devices)', status: 'No device connected', details:'details' },
        { id: 2, name: 'Jacob', status: 'Connected', details: '20' },
        { id: 3, name: 'Larry', status: 'No device connected', details: '28' },
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
    computed: {
    filteredPeople() {
      return this.people.filter(person => this.matchesSearch(person));
    }
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
    matchesSearch(person) {
      const fullName = person.name + ' ' + person.status;
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
.rad{
  background-color: #f7fafd;
  border-color: #f7fafd;
  color: #4e95db;
  font-size: 16px;
  padding: 6px 15px;
  border-radius: 5px;
}
.card.card-custom > .card-header bg-white .card-title .card-label {
    font-weight: 500;
    font-size: 1.275rem;
    color: #181C32;
}
.card.card-custom > .card-header bg-white .card-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0.5rem;
    margin-left: 0;
}
.card .card-header bg-white .card-title {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    margin-left: 0;
}
.text-center {
    text-align: center !important;
}
.card-title {
    margin-bottom: 2rem;
}
.online{
 background-color: #18b96e;
  border-color: #1ad72d;
  color: #fff;
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 10px;
  
}
.header bg-white {
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
.card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 2.25rem;
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
#header bg-white {
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #e6ecf5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}

#header bg-white .header bg-white-left {
  padding-left: 300px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

#header bg-white .header bg-white-right {
  padding-right: 40px;
}

#header bg-white .header bg-white-right i,
#header bg-white .header bg-white-left i {
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
#header bg-white .header bg-white-left.small-left-menu {
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
  #header bg-white .header bg-white-left {
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
