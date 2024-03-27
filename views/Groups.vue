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
          class="text font-weight-bold font-size-base d-none d-md-inline mr-1 primary"
          style="color: white;"
          >Hi,
        </span>
        <span
          class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"   style="color: gray;"
          >{{ text2 }}
        </span>
        <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
          <span
            class="symbol-label font-size-h5 font-weight-bold"
            style="background-image: url(../assets/images/indir.png)"
          >
          <div class="dropdown">

				<!--begin::Toggle-->
				<div class="topbar-item" data-toggle="dropdown" data-offset="10px,0px" aria-expanded="false">
					<div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
						<img class="h-20px w-20px rounded-sm" src="assets/media/svg/flags/226-united-states.svg" alt="">
					</div>
				</div>

				<!--end::Toggle-->

				<!--begin::Dropdown-->
				<div class="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right" style=""><!--begin::Nav-->
<ul class="navi navi-hover py-4">

    <!--begin::Item-->
    <li class="navi-item">


        

        <a href="/web/panel/change-language/1" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/006-turkey.svg" alt="">
            </span>
            <span class="navi-text">Türkçe</span>
        </a>
    </li>
    <li class="navi-item">


        <a href="javascript:;" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/226-united-states.svg" alt="">
            </span>
            <span class="navi-text">English</span>
        </a>

        
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/3" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/017-germany.svg" alt="">
            </span>
            <span class="navi-text">Deutsch</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/4" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/013-italy.svg" alt="">
            </span>
            <span class="navi-text">Italiano</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/5" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/013-russia.svg" alt="">
            </span>
            <span class="navi-text">Russian</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/6" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/237-netherlands.svg" alt="">
            </span>
            <span class="navi-text">Dutch</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/7" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/155-israel.svg" alt="">
            </span>
            <span class="navi-text">Hebraic</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/8" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/019-france.svg" alt="">
            </span>
            <span class="navi-text">French</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/9" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/016-spain.svg" alt="">
            </span>
            <span class="navi-text">Spanish</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/10" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/145-ukraine.svg" alt="">
            </span>
            <span class="navi-text">Ukrainian</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/11" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/091-slovakia.svg" alt="">
            </span>
            <span class="navi-text">Slovak</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/12" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/010-slovenia.svg" alt="">
            </span>
            <span class="navi-text">Slovene</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/13" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/164-croatia.svg" alt="">
            </span>
            <span class="navi-text">Croatian</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/14" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/099-albania.svg" alt="">
            </span>
            <span class="navi-text">Albanian</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/15" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/005-portugal.svg" alt="">
            </span>
            <span class="navi-text">Portuguese</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/16" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/008-saudi-arabia.svg" alt="">
            </span>
            <span class="navi-text">Arabic</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/17" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/211-poland.svg" alt="">
            </span>
            <span class="navi-text">Polski</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/18" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/149-czech-republic.svg" alt="">
            </span>
            <span class="navi-text">Čeština</span>
        </a>
    </li>
    <li class="navi-item">


        

        <a href="/web/panel/change-language/19" class="navi-link">
            <span class="symbol symbol-20 mr-3">
                <img src="assets/media/svg/flags/141-azerbaijan.svg" alt="">
            </span>
            <span class="navi-text">Azərbaycanca</span>
        </a>
    </li>

    <!--end::Item-->

</ul>

<!--end::Nav--></div>

				<!--end::Dropdown-->
			</div>
          </span>
        </span>
      </div>
      <R />
    </b-navbar>
    <div class="card mt-3 mx-3 my-4" style="border-radius: 10px">
  <Breadcrumb :items="breadcrumbItems" />
    </div>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--Content area here-->
      <div class="col-lg-12 col-xxl-12">
        <div class="row">
          <div class="col-lg-12 col-xxl-12">
            <div
              class="card card-custom card-stretch gutter-b p-5 mx-4 mb-2 mt-4"
            >
              <div class="mb-7 my-4 mb-5">
                <div class="row align-items-center">
                  <div class="col-lg-9 col-xl-8">
                    <div class="row align-items-center">
                      <div class="col-md-4 my-2 my-md-0">
                        <div class="input-icon">
                          <input
                            type="text"
                            class="form-control"
                            v-model="searchText"
                            placeholder="Ara"
                            id="kt_datatable_access_point_search_query"
                          />
                          <span style="border-radius: 15px">
                            <i class="flaticon2-search-1 text-muted"></i>
                          </span>
                        </div>
                      </div>
                      <div
                        class="col-md-4 my-2 my-md-0 dropdown dropdown-inline mr-2"
                      >
                      <!-- onclick="open_add_group_modal()"  -->
                        <button
                          type="button" id="add_group_modal"
                       
                          @click="modalShow = !modalShow"
                          class="btn rad btn-outline-primary"
                        >
                          <span>New Group</span>
                        </button>
                        <b-modal style="display: block;width: 400px;max-width: 400px;" size="lg" v-model="modalShow" id="modalPopover" title=" Grup Ekle">
                          <div>
                            <b-row>
                      <b-col md="6">
                     <label for="text" class="mt-1">Grup Adı:</label>
                     </b-col>
                      <b-col md="6">
                    <b-input id="input-2" v-model="form.name" placeholder="Enter name" required>
                    </b-input>
                    </b-col>
                        </b-row>

                        <b-row style="margin-top: 6px;">
                      <b-col md="6">
                     <label for="text" class="mt-1">Grup seçenekleri:</label>
                     </b-col>
                      <b-col md="6">
                        <b-form-select  class="form-select custom-select-lg" style:="" v-model="selected" :options="options"></b-form-select>
                    </b-col>
                        </b-row>
                          </div>
                      
                        </b-modal>
                      </div>
                      <!-- Button trigger modal -->
                      <div>
   
  </div>


                    </div>
                  </div>
                </div>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="person in filteredPeople" :key="person.id">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td
                      data-field="Actions"
                      data-autohide-disabled="false"
                      aria-label="null"
                      class="datatable-cell">
                      <span style="overflow: visible;position: relative; width: 273px;">
                        <button onclick="load_group_detail(527)" class="rad-w btn-sm btn-warning" title="Details">
                          <span>Detaylar</span>
                          </button>
                          &nbsp;
                          <button onclick="open_edit_group_modal(527)" class="rad-s btn-sm btn-success" title="Edit">
                          <span>Düzenle</span></button>
                          &nbsp;
                          <button onclick="deleteGroup(527)" class="rad-d btn-sm btn-danger" title="Delete">
                          <span>Sil</span>
                        </button>
                         &nbsp;
                        </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="d-sm-flex align-items-sm-center justify-content-sm-between"
              >
                <b-pagination
                  v-model="currentPage"
                  :total-rows="people"
                  :totalRows=10
                  :per-page="perPage"
                  aria-controls="my-table"
                  class="mt-5"
                ></b-pagination>
                <div
                  class="mt-4"
                  style="display: flex; align-items: center; gap: 15px"
                >
                  <b-dropdown right text=" 10">
                    <b-dropdown-item>20</b-dropdown-item>
                    <b-dropdown-item>30</b-dropdown-item>
                    <b-dropdown-item>50</b-dropdown-item>
                    <b-dropdown-item>100</b-dropdown-item>
                  </b-dropdown>
                  <label for="" class="">One doc shows 1-1</label>
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
import Breadcrumb from "../components/Breadcrumb.vue";
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
      modalShow: false,
        perPage: 10,
        text2:"",
      currentPage: 1,
      selected: null,
        options: [
          { value: null, text: 'Ev' },
          { value: 'a', text: 'İş' },
          { value: 'b', text: 'Diğer' },
        
        ],
        breadcrumbItems: [
        { label: "Ana Sayfa /", to: "/home" },
        { label: "Group ", to: "/group" }
       
      ],
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
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
  computed: {
    filteredPeople() {
      return this.people.filter((person) => this.matchesSearch(person));
    },
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
.rad-w{
  background-color: rgb(255, 168, 0);
  border-color: #e3bd87;
  font-weight: bold;
  color:#7d4f10;
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
.rad-d{
  background-color: rgb(255, 120, 121);
  border-color: #ecb2d7;
  font-weight: bold;
  color: rgb(198, 19, 49);
  font-size: 16px;
  padding: 6px 15px;
  border-radius: 10px; 

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
