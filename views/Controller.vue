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
          style="color: white;"
          >Merhaba      ,
        </span>
        <span
          class="text font-weight-bolder font-size-base d-none d-md-inline mr-3" style="color: white;"
          >{{ text2 }}
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
      <ol class="breadcrumb breadcrumb-dot text-muted fs-6 fw-semibold">
        <li class="breadcrumb-item pe-3 no-underline mt-4 mb-2 mx-4">
         <!-- <a @click="goToHome()">Anasayfa</a>  -->
         <router-link to="/home" style="color:gray;" class="no-underline">Ana Sayfa</router-link>
         
        </li>
         <li class="breadcrumb-item pe-3 text-muted mt-4 mb-2">
         <router-link to="/smartlocks" style="color:gray;" class="no-underline">Smart Locks</router-link>
         </li>
        <li class="breadcrumb-item pe-3 text-muted mt-4 mb-2">Af</li>
      </ol>
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
              <!-- <div class="row mb-4">
    <div class="col text-center">
      <h3>The Large Modal</h3>
      <a href="#" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#largeModal">Click to open Modal</a>
    </div>
  </div> -->
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

      <div class="col-lg-6 col-xxl-6 mt-5">
        <div class="card card-custom card-collapse" id="card_user">
          <div class="card-header flex-wrap border-0 pt-6 pb-6">
            <div>
              <card-collapse title="Controller (1)" title2="Add Controller">
                <div>
                  <b-table striped hover :items="controlleritems"></b-table>
                </div>
              </card-collapse>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-xxl-12 mt-5">
        <div class="card card-custom card-collapse" id="card_user">
          <div class="card-header flex-wrap border-0 pt-6 pb-6">
            <div>
              <card-collapse
                title="Activity Logs"
                title2="Activity"
                :is-open="isOpen"
                @update:isOpen="isOpen = $event"
              >
                <div>
                       <div class="mb-7 my-4 mb-5">
                    <div class="row align-items-center">
                      
                        <div class="col-lg-9 col-xl-8">
                          
                            <div class="row align-items-center">
                              
                                <div class="col-md-4 my-2 my-md-0">
                                      <select class="form-select" aria-label="Default select example">
                  <option data-select2-id="6">Bugün</option>
                   <option value="1">Dün</option>
                        <option value="2">Son 7 gün </option>
                        <option value="3">Son 30 gün </option>
                 
                       
                      </select>
                      </div>
                       <div class="col-md-4 my-2 my-md-0">
                                    <div class="input-icon" >
                                        <input type="text" class="form-control"  v-model="searchText" placeholder="Ara" id="kt_datatable_access_point_search_query">
                                        <span  style="border-radius:15px;">
                                                                        <i class="flaticon2-search-1 text-muted"></i>
                                                                    </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
                       <div>

 
  <select class="form-select" aria-label="Default select example">
  
  <option data-select2-id="6"></option>
                        <option value="1">Alarm Kurulumu</option>
                        <option value="2">Ev İçi Kurulum</option>
                        <option value="3">Alarm Devre Dışı</option>
                        <option value="4">Alarm İnternete Bağlandı</option>
                        <option value="5">Alarm Sıfırlama</option>
                        <option value="6">
                          Yazılım Güncellemesi Tamamlanma
                        </option>
                        <option value="7">Düşük Batarya</option>
                        <option value="8">Batarya Bitti</option>
                        <option value="9">Şebeke Gücü Kesildi</option>
                        <option value="10">Şebekeye Bağlandı</option>
                        <option value="11">İnternet Bağlantısı Kesildi</option>
                        <option value="12">
                          Yazılım Güncellemesi Başlatma
                        </option>
                        <option value="13">Kullanıcı Anahtarı İsteği</option>
                        <option value="14">Kullanıcı Anahtarı Alındı</option>
                        <option value="15">Panik Alarm</option>
                        <option value="16">Alarm Sessiz</option>
                        <option value="17">Kontrol Cihazı Ekleme</option>
                        <option value="18">Sensör Ekleme</option>
                        <option value="19">Kontrol Cihazı Kaldırma</option>
                        <option value="20">Sensör Kaldırma</option>
                        <option value="21">Alarm Çalıyor</option>
                        <option value="22">SABOTAJ ALARMI</option>
                        <option value="23">Kullanıcı Yetki Ayarları</option>
                        <option value="24">Sensör Ayarları</option>
                        <option value="25">Alarm Ayarları</option>
                        <option value="26">Bakım/Test Modu Başlatma</option>
                        <option value="27">Bakım/Test Modu Sonlandırma</option>
                        <option value="28">
                          Bakım/Test Modu Sensör Sinyali
                        </option>
                        <option value="29">Sensör Aktif</option>
                        <option value="30">Sensör Askıda</option>
                        <option value="31">Sensör Düşük Batarya</option>
                        <option value="32">Sensör Normal Batarya</option>
                        <option value="33">Kullanıcı Ekleme</option>
                        <option value="34">Kullanıcı Kaldırma</option>
                        <option value="35">Kullanıcı Askıya Alma</option>
                        <option value="36">Kullanıcı Aktife Alma</option>
                        <option value="37">Kontrol Cihazı Tanıtma Modu</option>
                        <option value="38">Sensör Tanıtma Modu</option>
                        <option value="39">Kullanıcı Davet Kabul Etme</option>
                        <option value="40">Kullanıcı Davet Reddetme</option>
                        <option value="41">Senkronizasyon</option>
                        <option value="42">
                          Bakım/Test Modu Kontrol Cihazı Sinyali
                        </option>
                        <option value="43">
                          Bakım/Test Modu Sabotaj Sinyali
                        </option>
                        <option value="44">Yeniden Başlatma</option>
                        <option value="45">Kilitleme Komutu</option>
                        <option value="46">Kilit Açma Komutu</option>
                        <option value="65">
                          Yazılım Güncellemesi Başarısız
                        </option>
                        <option value="67">Alarm Kurulumu ve Kilitleme</option>
                        <option value="68">Ev İçi Kurulum ve Kilitleme</option>
                        <option value="69">
                          Alarm Devre Dışı ve Kilit Açma
                        </option>
                        <option value="70">Alarm Zaman Aşımı</option>
                        <option value="71">Panik Zaman Aşımı</option>
                        <option value="72">Sabotaj Zaman Aşımı</option>
                        <option value="73">
                          Panik Alarm (İnternet Bağlantısı Yokken)
                        </option>
                        <option value="74">
                          SABOTAJ ALARMI (İnternet Bağlantısı Yokken)
                        </option>
                        <option value="75">
                          Alarm Çalıyor (İnternet Bağlantısı Yokken)
                        </option>
                        <option value="76">
                          Alarm Zaman Aşımı (İnternet Bağlantısı Yokken)
                        </option>
                        <option value="77">
                          Panik Zaman Aşımı (İnternet Bağlantısı Yokken)
                        </option>
                        <option value="78">
                          Sabotaj Zaman Aşımı (İnternet Bağlantısı Yokken)
                        </option>
</select>

  </div>
                  <!-- <b-table striped hover :items="items"></b-table> -->
                  <table class="table mt-4">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Transactions</th>
                        <th scope="col">Date</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in items" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td data-field="type" data-autohide-disabled="false" aria-label="Alarm İnternete Bağlandı" class="datatable-cell"><span style="width: 400px;"><h6>Alarm İnternete Bağlandı</h6><small>Alarm internete bağlandı.</small></span></td>
                        <td data-field="date" data-autohide-disabled="false" aria-label="Bugün 09:51" class="datatable-cell"><span style="width: 1024px;">Bugün 09:51</span></td>
                       
                    
                      </tr>
                    </tbody>
                  </table>
               <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
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
       isOpen: false,
 
  useritems:[
           {
          id: 1,
          name: "Emrecan Kurtcu",
          usertype:"master user",
          status:'active',
          transactions:"remove"
       
      
        },
  ],
   sensoritems:[
            {
          id: 1,
          name: "Emrecan Kurtcu",
          transactions:"inactive"
       
      
        },
        {
         id: 2,
         name: "Emrecan 2",
         transactions:"active"
       
        
        },
   ],
    controlleritems:[
            {
          id: 1,
          name: "Emrecan Kurtcu",
          transactions:"inactive"
       
      
        },
               {
          id: 2,
          name: "Emrecan Kurtcu",
          transactions:"active"
       
      
        },
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
.datatable.datatable-default.datatable-scroll > .datatable-table {
  display: block;
}
.datatable.datatable-default.datatable-loaded > .datatable-table {
  display: block;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
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
.card.card-custom {
  -webkit-box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
  box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
  border: 0;
}


*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
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