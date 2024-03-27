<template>
  <div style="background-color: #e4e6ef; height: 220vh">
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
          class="text font-weight-bold font-size-base d-none d-md-inline mr-1 primary"
          style="color: white"
          >Merhaba   ,
        </span>
        <span
          class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"  style="color: white"
          >{{ text2  }}
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
    <div class="card mt-3 mx-3 my-4" style="border-radius: 10px">
  <Breadcrumb :items="breadcrumbItems" />
    </div>
  <div class="col-lg-12 col-xxl-12">
                <div class="card card-custom card-stretch gutter-b p-5 mx-3">
                    <div class="card-header align-items-center border-0 mt-4">
                        <h3 class="card-title align-items-start flex-column">
<!--                            <span class="font-weight-bolder text-dark">Languages</span>-->
                        </h3>
                    </div>
                    <div class="card-body pt-4 h-100 overflow-auto">
                        <form id="auto_translate_form" class="form" action="/web/management/auto-translate/add" method="POST"><input type="hidden" name="_csrf" value="4f9b7734-d792-40ee-b9fd-4714d0e053ba">
                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7">
                                        <input type="text" class="form-control form-control-solid" id="key" name="key" placeholder="Key" autocomplete="off">
                                        <label for="key" >Key</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="tr_TR" name="language_tr_TR" placeholder="Türkçe" autocomplete="off">
                                        <label for="tr_TR">Türkçe</label>
                                    </div>
                                </div>
                                


                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="en_US" name="language_en_US" placeholder="English" autocomplete="off">
                                        <label for="en_US">English</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="de_DE" name="language_de_DE" placeholder="Deutsch" autocomplete="off">
                                        <label for="de_DE">Deutsch</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="it_IT" name="language_it_IT" placeholder="Italiano" autocomplete="off">
                                        <label for="it_IT">Italiano</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="ru_RU" name="language_ru_RU" placeholder="Russian" autocomplete="off">
                                        <label for="ru_RU">Russian</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="nl_NL" name="language_nl_NL" placeholder="Dutch" autocomplete="off">
                                        <label for="nl_NL">Dutch</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="he_IL" name="language_he_IL" placeholder="Hebraic" autocomplete="off">
                                        <label for="he_IL">Hebraic</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="fr_FR" name="language_fr_FR" placeholder="French" autocomplete="off">
                                        <label for="fr_FR">French</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="es_ES" name="language_es_ES" placeholder="Spanish" autocomplete="off">
                                        <label for="es_ES">Spanish</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="uk_UA" name="language_uk_UA" placeholder="Ukrainian" autocomplete="off">
                                        <label for="uk_UA">Ukrainian</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="sk_SK" name="language_sk_SK" placeholder="Slovak" autocomplete="off">
                                        <label for="sk_SK">Slovak</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="sl_SI" name="language_sl_SI" placeholder="Slovene" autocomplete="off">
                                        <label for="sl_SI">Slovene</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="hr_HR" name="language_hr_HR" placeholder="Croatian" autocomplete="off">
                                        <label for="hr_HR">Croatian</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="sq_AL" name="language_sq_AL" placeholder="Albanian" autocomplete="off">
                                        <label for="sq_AL">Albanian</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="pt_PT" name="language_pt_PT" placeholder="Portuguese" autocomplete="off">
                                        <label for="pt_PT">Portuguese</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="ar_SA" name="language_ar_SA" placeholder="Arabic" autocomplete="off">
                                        <label for="ar_SA">Arabic</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="pl_PL" name="language_pl_PL" placeholder="Polski" autocomplete="off">
                                        <label for="pl_PL">Polski</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="cs_CZ" name="language_cs_CZ" placeholder="Čeština" autocomplete="off">
                                        <label for="cs_CZ">Čeština</label>
                                    </div>
                                </div>



                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="form-floating mb-7 padding">
                                        <input type="text" class="form-control form-control-solid" id="az_AZ" name="language_az_AZ" placeholder="Azərbaycanca" autocomplete="off">
                                        <label for="az_AZ">Azərbaycanca</label>
                                    </div>
                                </div>


                            </div>
                            
                        </form>
                    </div>
                    <div class="card-footer d-flex justify-content-end py-6 px-9">
                        <button type="button" class="btn btn-primary" id="auto_translate_button" onclick="autoTranslate()">Ekle</button>
                    </div>
                </div>
            </div>
  </div>
</template>
<script>
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb.vue";
import Sidebar from "../components/Sidebar.vue";
import R from "../components/R.vue";

export default {
  name: "AccessPoint",
  components: {
    R,
    Sidebar,
    Breadcrumb,
  },
  data() {
    return {
      userLoginText: this.userLoginText, // Kullanıcı adınızı buraya ekleyin
      profilePicture: "", // Profil resmi URL'sini buraya ekleyin
      password: this.password,
      searchText: "",
        perPage: 10,
        text2:"",
         currentPage: 1,
          breadcrumbItems: [
        { label: "Ana Sayfa /", to: "/home" },
        { label: "OtoTranslate", to: "/translate" }
       
      ],
      person: {},
      people: [
        {
          id: 1,
          device: "UtopicR",
          software: "1.0.98",
          status: "online",
          hardware: "1.0",
          path:"utopic/93.zip"
        },
        {
          id: 2,
          device: "MidlineWifi",
          software: "1.0.23",
          status: "stable",
           hardware: "1.0",
          path: "midline/mid1-1.bin",
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

.rad {
  background-color: rgb(225, 240, 255);
  border-color: #87b4e3;
  font-weight: bold;
  color: #007bff;
  font-size: 16px;
  padding: 6px 15px;
  border-radius: 10px;
}

.form-control.form-control-solid::placeholder {
  color: white; /* Change to the desired color */
}
.padding{
    padding: 10px;
}
.dropdown-menu {
    left: 0 /*rtl:ignore*/;
}
.card.card-custom.card-stretch.gutter-b {
    height: calc(100% - 25px);
}
.card.card-custom.card-stretch {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
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
input {
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: field;
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -12.5px;
    margin-left: -12.5px;
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
.card.card-custom {
    -webkit-box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
    box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
    border: 0;
}
.gutter-b {
    margin-bottom: 25px;
}
.p-5 {
    padding: 1.25rem !important;
}
.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    border: 1px solid #EBEDF3;
    border-radius: 0.42rem;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 98;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #3F4254;
    text-align: left;
    list-style: none;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 0 solid rgba(0, 0, 0, 0.15);
    border-radius: 0.42rem;
    -webkit-box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
    box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15);
}
.dropdown-menu:before, .dropdown-menu:after {
    display: none !important;
}
.dropdown-menu:before, .dropdown-menu:after {
    display: none !important;
}
.rad-w{
  background-color: rgb(245, 245, 245);
  border-color: #e3bd87;
  font-weight: bold;
  color:#d8af77;
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

.border {
  border-radius: 20px;
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
