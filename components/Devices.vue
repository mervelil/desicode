<template>
    <div style="background-color: #e4e6ef; height: 140vh">
      <Sidebar />
      <Profile/>
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
            class="font-weight-bold font-size-base d-none d-md-inline mr-1 primary"
            style="color: white"
            >Merhaba  ,
          </span>
          <span
            class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
            style="color: gray"
            >{{text2}}
          </span>
          <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
            <span
              class="symbol-label font-size-h5 font-weight-bold"
              style="background-image: url(../assets/images/indir.png)"
            >
              <div class="dropdown">
                <!--begin::Toggle-->
                <div
                  class="topbar-item"
                  data-toggle="dropdown"
                  data-offset="10px,0px"
                  aria-expanded="false"
                >
                  <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                    <img
                      class="h-20px w-20px rounded-sm"
                      src="assets/media/svg/flags/226-united-states.svg"
                      alt=""
                    />
                  </div>
                </div>
  
                <!--end::Toggle-->
  
                <!--begin::Dropdown-->
                <div
                  class="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right"
                  style=""
                >
                  <!--begin::Nav-->
                  <ul class="navi navi-hover py-4">
                    <!--begin::Item-->
                    <li class="navi-item">
                      <a href="/web/panel/change-language/1" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/006-turkey.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Türkçe</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="javascript:;" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/226-united-states.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">English</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/3" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/017-germany.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Deutsch</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/4" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/013-italy.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Italiano</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/5" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/013-russia.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Russian</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/6" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/237-netherlands.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Dutch</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/7" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/155-israel.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Hebraic</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/8" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/019-france.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">French</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/9" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/016-spain.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Spanish</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/10" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/145-ukraine.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Ukrainian</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/11" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/091-slovakia.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Slovak</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/12" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/010-slovenia.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Slovene</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/13" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/164-croatia.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Croatian</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/14" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/099-albania.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Albanian</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/15" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/005-portugal.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Portuguese</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/16" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/008-saudi-arabia.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Arabic</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/17" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/211-poland.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Polski</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/18" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/149-czech-republic.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Čeština</span>
                      </a>
                    </li>
                    <li class="navi-item">
                      <a href="/web/panel/change-language/19" class="navi-link">
                        <span class="symbol symbol-20 mr-3">
                          <img
                            src="assets/media/svg/flags/141-azerbaijan.svg"
                            alt=""
                          />
                        </span>
                        <span class="navi-text">Azərbaycanca</span>
                      </a>
                    </li>
  
                    <!--end::Item-->
                  </ul>
  
                  <!--end::Nav-->
                </div>
  
                <!--end::Dropdown-->
              </div>
            </span>
          </span>
        </div>
        <R />
      </b-navbar>
      <div class="card mt-3 mx-2 my-4 mb-3" style="border-radius: 10px">
        <Breadcrumb class="mx-3" :items="breadcrumbItems" />
      </div>
      <div class="row ml-2 mr-2 mx-2">
        <div class="col-lg-6 col-xxl-6 mt-5">
          <div class="card card-custom h-350px">
            <div class="card flex-wrap border-0 pt-6 pb-0">
              <div class="col-md-9 col-sm-8 col-xs-8 mt-5">
                <div class="col-md-3 col-sm-4 col-xs-4">
                  <div class="d-flex mx-2">
                    <h2>Af</h2>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="col-md-3 col-sm-4 col-xs-4">
                      <b-badge
                        variant="warning"
                        style="background-color: rgb(27, 197, 189); color: #fff"
                        >Master</b-badge
                      >
                    </div>
                  </div>
                  <br />
                  <div class="d-flex">
                    <div class="alarm-status">
                      &nbsp;
                      <b-badge
                        variant="warning"
                        style="background-color: rgb(27, 197, 189); color: #fff"
                        >Online</b-badge
                      >
                    </div>
                    &nbsp;
                    <div class="alarm-mode">
                      <b-badge
                        variant="warning"
                        style="background-color: rgb(27, 197, 189); color: #fff"
                        >Armed</b-badge
                      >
                    </div>
                  </div>
  
                  <br />
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row mb-7 d-flex">
                <form
                  class="form"
                  id="smart_lock_form"
                  action="/web/panel"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="d0f99623-6469-4b05-b90a-3beb8f023041"
                  />
                  <div class="row align-items-center text-center">
                    <a
                      href="javascript:void(0)"
                      id="lockSmartLock"
                      class="btn col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center"
                      onclick="lockSmartLock('1094')"
                      style="width: 150px; height: 150px"
                      ><img
                        src="../assets/images/lock.png"
                        weight="100"
                        height="100"
                        style="width: 100%"
                    /></a>
                    <a
                      href="javascript:void(0)"
                      id="unlockSmartLock"
                      class="btn col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center"
                      onclick="unlockSmartLock('1094')"
                      style="width: 150px; height: 150px"
                      ><img
                        src="../assets/images/unlock.png"
                        weight="100"
                        height="100"
                        style="width: 100%"
                    /></a>
                    <a
                      href="javascript:void(0)"
                      onclick="open_smart_lock_settings_modal()"
                      class="btn col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center"
                      style="width: 150px; height: 150px"
                      ><img
                        src="../assets/images/settings.png"
                        weight="100"
                        height="100"
                        style="width: 100%"
                    /></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-lg-6 col-xxl-6 mt-5">
          <div class="card card-custom card-collapse" id="card_user">
            <div class="card-header flex-wrap border-0 pt-6 pb-6">
              <div>
                <card-collapse
                  title="User (1)"
                  title2="New User"
                  :is-open="isOpen"
                  @update:isOpen="isOpen = $event"
                >
                  <div>
                    <!-- <b-table striped hover :items="useritems"></b-table> -->
                          <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">User type</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody> 
                    <tr v-for="person in useritems" :key="person.id">
                  
                      <th scope="row">{{person.id}}</th>
                      <td>{{person.name}}</td>
                      <td>
                        <div>
                          <label>{{person.usertype}}</label>
                        
                        </div>
                      </td>
                      <td> 
                        <div>
                         <label class="online">{{person.status}}</label>
                        </div>
                        </td>
                           <td> 
                        <div>
                         <button class="rad">{{person.transactions}}</button>
                        </div>
                        </td>
                    </tr>
  
                  </tbody>
                </table>
                  </div>
                </card-collapse>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-6 mt-5">
        <div class="card card-custom card-collapse" id="card_user">
          <div class="card-header flex-wrap border-0 pt-6 pb-6">
            <div>
              <card-collapse
                title="Sensors (1)"
                title2="Add Sensor"
                :is-open="isOpen"
                @update:isOpen="isOpen = $event"
              >
                <div>
                  <b-table striped hover :items="sensoritems"></b-table>
                </div>
              </card-collapse>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
   
  </template>
  
  <script>
  import { BBadge } from "bootstrap-vue";
  import CardCollapse from "../components/CardCollapse.vue";
  import Sidebar from "../components/Sidebar.vue";
  import Profile from "../components/Profile.vue";
  import Breadcrumb from "../components/Breadcrumb.vue";
  import "@fortawesome/fontawesome-free/css/all.css";
  import R from "../components/R.vue";
  export default {
    data() {
      return {
         searchText:'',
         text2:"",
       
      
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
    
      matchesSearch(person) {
        const fullName = person.name + ' ' + person.status;
        return fullName.toLowerCase().includes(this.searchText.toLowerCase());
      },
        goToHome(){
        this.$router.push('/home');
      },
    },
    useritems:[
             {
            id: 1,
            name: "Kurtcu",
            usertype:"master user",
            status:'active',
            transactions:"remove"   
          },
          {
            id: 2,
            name: "",
            usertype:"",
            status:'',
            transactions:""   
          },
          {
            id: 3,
            name: "",
            usertype:"",
            status:'',
            transactions:""   
          },
          {
            id: 4,
            name: "",
            usertype:"",
            status:'',
            transactions:""   
          },
          {
            id: 5,
            name: "",
            usertype:"",
            status:'',
            transactions:""   
          },
    ],
    breadcrumbItems: [
        { label: "Ana Sayfa /", to: "/home" },
        { label: "Smart Locks", to: "/smartlocks" }
      ],
 
         items: [
           {
            id: 1,
            name: "Alarm İnternete Bağlandı",
            tarih: "9:29",
         
        
          },
          {
           id: 2,
           name: "Alarm İnternete Bağlandı",
            tarih: "9:30",
         
          
          },
         ],
      };
    },
    name: "Controller",
    components: {
      BBadge,
      R,
      Sidebar,
      Breadcrumb,
      CardCollapse,
      Profile,
    },
  };
  </script>
  
  <style scoped>
  .card-body {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 2.25rem;
  }
  
  .overflow-auto-hidden {
    overflow: auto;
  }
  
  .h-100 {
    height: 100% !important;
  }

  .rad {
    background-color: #f12020;
    border-color: #f11414;
    color: #d8e0e8;
    font-size: 16px;
    padding: 6px 15px;
    border-radius: 5px;
  }
  .online{
   background-color: #18b96e;
    border-color: #1ad72d;
    color: #fff;
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 10px;
    
  }
  .card {
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  .fa-chevron-down:before {
    content: "";
  }

 
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .card-header .fa {
    transition: 0.3s transform ease-in-out;
  }
  .card-header .collapsed .fa {
    transform: rotate(90deg);
  }
  </style>