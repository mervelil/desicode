<template>
  <div style="background-color: #e4e6ef;;height:200vh;">
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
          class="font-weight-bold font-size-base d-none d-md-inline mr-1 primary" style="color: white"
          >Merhaba ,
        </span>
        <span
          class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"    style="color: white; "
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

    <div class="col-lg-12"  >
      <div  id="app" class="card  mx-2 mt-4">
                <div class="card-header mt-3">
                    <h3 class="card-title">Profil Detayları</h3>
                    <button href="javascript:void(0);" class="btn btn-primary align-self-center text(1)" @click="toggleButtons "   id="edit_profile_button">Profili düzenle</button>
                </div>
                <form class="form fv-plugins-bootstrap fv-plugins-framework" id="kt_account_profile_details_form" action="/web/services/settings/profile/save" method="POST" enctype="multipart/form-data" novalidate="novalidate">
                  <input type="hidden" name="_csrf" value="5092b014-9376-4441-9740-46a3f614af82">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <div class="row mb-6">
                                    <div class="col-md-4 col-sm-4 col-4"></div>
                                    <div class="col-md-4  col-sm-4 col-4">

                                        <div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url('../assets/images/img.svg')">
                                          <div class="text-center text-black">
                    <img src="../assets/images/img.svg"   width="200" height="200"/>
                </div>

                                            <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"  @click="toggleFileInput" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="" data-bs-original-title="Change avatar" id="change_profile_photo" style="display: none;">
                                                <i class="fas fa-pencil-alt" style="::before"></i>
                                                <input type="file"  ref="fileInput" name="file" accept=".png, .jpg, .jpeg" style="width: 0 !important;height: 0 !important;overflow: hidden;opacity: 0;">
                                                <input type="hidden" name="profilePhotoRemove">
                                            </label>
                                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="" data-bs-original-title="Cancel avatar" id="cancel_profile_photo" style="display: none;">
																<i class="ki ki-bold-close icon-xs text-muted"></i>
															</span>
                                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove avatar" id="remove_profile_photo" style="display: none;">
																<i class="ki ki-bold-close icon-xs text-muted">
                                  
                                </i>
    
															</span>
                                        </div>
                                        <div class="form-text">İzin verilen dosya türleri: png, jpg, jpeg.</div>

                                    </div>
                                    <div class="col-md-4 col-sm-4 col-4"></div>
                                </div>
                                <div class="form-floating mb-7 mt-3">
                                    <input type="text" class="form-control form-control-solid"  v-model="text1" :readonly="!showButtons" id="settings_email" placeholder="E-mail" value="emrecan@desi.com.tr">
                                    <label for="settings_email">E-mail</label>

                                </div>
                                <hr>
                                <div class="form-floating mb-7 mt-3">
                                    <input type="text" class="form-control form-control-solid" v-model="text2" :readonly="!showButtons" id="settings_name" name="name" value="Emreca " placeholder="Ad"  autocomplete="off">
                                    <label for="settings_name">Ad</label>
                                </div>
                                <div class="form-floating mb-7 mt-3">
                                    <input type="text" class="form-control form-control-solid"  v-model="text3" :readonly="!showButtons" id="settings_surname" name="surname" placeholder="Soyad" value="Kurtçu" autocomplete="off">
                                    <label for="settings_surname">Soyad</label>
                                </div>

                                <div class="form-floating mb-7 mt-3">
                                    <input type="text" class="form-control form-control-solid" id="settings_phone" name="phone" placeholder="Telefon" value="+90545945937733" maxlength="15"  v-model="text4" :readonly="!showButtons" autocomplete="off">
                                    <label for="settings_phone">Telefon</label>
                                </div>
                                <div  class="mt-3"><small style="text-align: left;">Tercih ettiğiniz dili seçiniz.</small>
                                <select class="form-select form-select-solid select2-hidden-accessible mt-3" id="settings_language" name="language" data-control="select2" data-placeholder="Tercih ettiğiniz dili seçiniz."  v-model="text4" :readonly="!showButtons" data-select2-id="settings_language" tabindex="-1" aria-hidden="true">
                                        <option value="1" selected="selected" data-select2-id="2">Türkçe</option>
                                        <option value="2">English</option>
                                        <option value="3">Deutsch</option>
                                        <option value="4">Italiano</option>
                                        <option value="5">Russian</option>
                                        <option value="6">Dutch</option>
                                        <option value="7">Hebraic</option>
                                        <option value="8">French</option>
                                        <option value="9">Spanish</option>
                                        <option value="10">Ukrainian</option>
                                        <option value="11">Slovak</option>
                                        <option value="12">Slovene</option>
                                        <option value="13">Croatian</option>
                                        <option value="14">Albanian</option>
                                        <option value="15">Portuguese</option>
                                        <option value="16">Arabic</option>
                                        <option value="17">Polski</option>
                                        <option value="18">Čeština</option>
                                        <option value="19">Azərbaycanca</option>
                                        <option value="20">Greek</option>

                                </select><span class="select2 select2-container select2-container--default select2-container--disabled" dir="ltr" data-select2-id="1" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-settings_language-container"><span class="select2-selection__rendered" id="select2-settings_language-container" role="textbox" aria-readonly="true" title="Türkçe">Türkçe</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                          </div>
                            <div class="col-md-2"></div>

                        </div>

                    </div>
                    <!-- <div id="edit_profile_buttons" class="card-footer d-flex justify-content-end py-6 px-9" style="display:none!important;">
                      <button v-if="showButtons" @click="changeText(1)"  type="reset" class="btn btn-light btn-active-light-primary me-2 mr-2" id="discard_profile_changes">Vazgeç 1</button>
        İkinci buton -->
                      <!-- <button v-if="showButtons" @click="changeText(2)" type="button" class="btn btn-primary" id="kt_account_profile_details_submit">Değişikleri kaydetmek 2</button>
                        <button type="reset" class="btn btn-light btn-active-light-primary me-2 mr-2" id="discard_profile_changes">Vazgeç</button>
                        <button type="button" class="btn btn-primary" id="kt_account_profile_details_submit">Değişiklikleri Kaydet</button>
                    </div> -->
                    <div class="card-footer d-flex justify-content-end py-6 px-9" style="background-color: white;">
                        <button v-if="showButtons"  @click="changeText(1)"  type="reset" class="btn btn-light btn-active-light-primary me-2 mr-2">Cancel</button>
                        <button  v-if="showButtons" type="button" class="btn btn-primary" id="change_password_button">Save Changes</button>
                    </div>
                <input type="hidden"><div></div>
               </form>
            </div>

  




            <div class="card mt-10 mx-2 my-3 mt-3">
                <div class="card-header">
                    <h3 class="card-title my-2">Change Password</h3>
                </div>
                <form class="form fv-plugins-bootstrap fv-plugins-framework" id="change_password_form" action="/web/services/settings/profile/change-password" method="POST" novalidate="novalidate"><input type="hidden" name="_csrf" value="f6f3b58b-4cab-4a75-b9e1-fb7057949635">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-8">
                                <div class="form-floating mb-7">
                                    <input type="password" class="form-control form-control-solid" id="settings_password" name="password" placeholder="Password" autocomplete="off">
                                    <label for="settings_password">Password</label>
                                </div>
                                <div class="form-floating mb-7">
                                    <input type="password" class="form-control form-control-solid" id="settings_new_password" name="newPassword" placeholder="New Password" autocomplete="off">
                                    <label for="settings_new_password">New Password</label>
                                </div>
                                <div class="form-floating mb-7">
                                    <input type="password" class="form-control form-control-solid" id="settings_new_password_confirm" name="newPasswordConfirm" placeholder="New Password(Again)" autocomplete="off">
                                    <label for="settings_new_password_confirm">New Password(Again)</label>
                                </div>
                            </div>
                            <div class="col-md-2"></div>

                        </div>

                    </div>
                    <div class="card-footer d-flex justify-content-end py-6 px-9" style="background-color: white;">
                        <button type="reset" class="btn btn-light btn-active-light-primary me-2 mr-2">Cancel</button>
                        <button type="button" class="btn btn-primary" id="change_password_button">Change Password</button>
                    </div>
                <input type="hidden"><div></div></form>
            </div>
            <div class="card mt-10 mx-2 my-3 mt-3">
                <div class="card-header">
                    <h3 class="card-title">Son Giriş Yapılan Cihaz</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="../assets/images/cell-phone.svg" height="100">
                                </div>
                                <div class="col-md-2">
                                    <div class="row">
                                        <h4>SAMSUNG</h4>
                                    </div>
                                    <div class="row">
                                      <div> <h6>SM-J3</h6></div>
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
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
import { text } from "@fortawesome/fontawesome-svg-core";

export default {

   name: "Profil",
  components: {
    R,
    Sidebar,
  }, 

   data() {
    return {
      el: '#app',
          
          showButtons: false,
          text1:"",
          text2: ' ',
          text3:' ',
          text4:' ',
           
      
            
       profile: {
      
      name: this.name, // Kullanıcı adınızı buraya ekleyin
      profilePicture: "", // Profil resmi URL'sini buraya ekleyin
      password: this.password,
      surname:this.surname,
       phone:this.phone,
      languageMenuOpen: false,
      profileMenuOpen: false,
      },
      editedProfile: {
         name: '',
        //  password:'',
          surname:this.surname,
        //  phone:'',
        //  languageMenuOpen:'',
      },
      editing: false,
    
      userLoginText: this.userLoginText, // Kullanıcı adınızı buraya ekleyin
      profilePicture: "", // Profil resmi URL'sini buraya ekleyin
      password: this.password,
      surname:this.surname,
      phone:this.phone,
      languageMenuOpen: false,
      profileMenuOpen: false,
      
    };
  },

  async created () {
      
      var userProfileData = localStorage.getItem("user");
      console.log("created",JSON.parse(userProfileData));
      if (userProfileData) {
         console.log("1");
         var userProfile = JSON.parse(userProfileData);
          console.log("2");
         console.log(userProfile);
          console.log("3",userProfile.data.twoFactorAuthToken);
     const response = await axios.post("https://desisteely.com/api/web/v1/profile",{webUserToken:userProfile.data.webUserToken},{
          withCredentials: true
        });
         console.log("3");
          this.text1=response.data.data.email;
          this.text2=response.data.data.name;
          this.text3=response.data.data.surname;
          this.text4=response.data.data.phone;
      }
    },
  methods:{
    toggleFileInput() {
      // Dosya yükleme alanının görünürlüğünü değiştirin
      const fileInput = this.$refs.fileInput;
      if (fileInput) {
        fileInput.click(); // Dosya yükleme alanını tıklatarak açın
      }
    },
      toggleEditing() {
      if (!this.editing) {
        this.editedProfile.userLoginText = this.profile.userLoginText;
        this.editedProfile.password = this.profile.password;
        this.editedProfile.surname = this.profile.surname;

      }
      this.editing = !this.editing;
    },
    async saveChanges() {
      try {
        // const response = await axios.post('https://desisteely.com/api/web/v1/profile/save', this.editedProfile);
        // console.log(response.data); // API'den dönen veriyi gösterme (isteğe bağlı)
        
        // Veriyi güncelleme
        localStorage.setItem("user",JSON.stringify(response.data));
        
        localStorage.getItem(response.data.name); 
        this.profile.name = this.editedProfile.name;
        this.profile.surname = this.editedProfile.surname;
        
        this.editing = false;
      } catch (error) {
        console.error('Veri gönderme hatası:', error);
      }
    },




     

    toggleButtons: function() {
                    this.showButtons = !this.showButtons;
                },
                changeText: function(buttonNumber) {
                    if (buttonNumber === 1) {
                        this.text1 =response.data.data.email;
                        this.text2 =event.target.value;
                        this.text3 =event.target.value;
                        this.text4 =event.target.value;
                    } else if (buttonNumber === 2) {
                        this.text2 = event.target.value;
                    }
                },
     updateProfile() {
      // Axios kullanarak backend'e güncelleme talebi gönder
      axios.post('https://desisteely.com/api/web/v1/profile/save', this.editedProfile) .then(response => {
          console.log('Profil güncellendi', response.data);
          console.log("guncel");
					this.editedProfile = response.data;
          
        })
        .catch(error => {
          console.error('Profil güncelleme hatası', error);
        });
    },

    async created () {
      
        var userProfileData = localStorage.getItem("user");
        console.log("created",JSON.parse(userProfileData));
        if (userProfileData) {

           console.log("1");
           var userProfile = JSON.parse(userProfileData);
            console.log("2");
           console.log(userProfile);
            console.log("3",userProfile.data.twoFactorAuthToken);
       const response = await axios.post("https://desisteely.com/api/web/v1/profile",{webUserToken:userProfile.data.twoFactorAuthToken},{
            withCredentials: true
          });
           console.log("3");
       console.log(response);
           document.getElementById("name").value = userProfile.name;
           document.getElementById("surname").value = userProfile.surname;
           document.getElementById("settings_email").value = userProfile.email;
        }
       

   
    },
        async saveChanges() {
      try {
        // const response = await axios.post('https://desisteely.com/api/web/v1/profile/save', this.editedProfile);
        // console.log(response.data); // API'den dönen veriyi gösterme (isteğe bağlı)
        
        // Veriyi güncelleme
        localStorage.setItem("user",JSON.stringify(response.data));
        
        localStorage.getItem(response.data.name); 
        this.profile.name = this.editedProfile.name;
        this.profile.surname = this.editedProfile.surname;
        
        this.editing = false;
      } catch (error) {
        console.error('Veri gönderme hatası:', error);
      }
    },

  }
};
</script>

<style scoped>
  .header {
  background-color: #f5f5f5;
  padding: 10px 0;
}
element.style{
background-image: url("../assets/images/img.svg");
}
.image-input {
    background-image: url("../assets/images/img.svg");
    position: relative;
    display: inline-block;
    border-radius: 0.42rem;
    background-repeat: no-repeat;
    background-size: cover;
}
.fa-pen:before {
    content: "";
}
.form-control.form-control-solid {
    background-color: #F3F6F9;
    border-color: #F3F6F9;
    color: #3F4254;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, -webkit-box-shadow 0.15s ease;

}
*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
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
.flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
}
.flex-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
}
:root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #ffffff;
    --gray: #7E8299;
    --gray-dark: #3F4254;
    --primary: #3699FF;
    --secondary: #E4E6EF;
    --success: #1BC5BD;
    --info: #8950FC;
    --warning: #FFA800;
    --danger: #F64E60;
    --light: #F3F6F9;
    --dark: #181C32;
    --white: #ffffff;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --breakpoint-xxl: 1400px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
body {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    color: #3F4254;
}
html, body {
    height: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 13px !important;
    font-weight: 400;
    font-family: Poppins, Helvetica, "sans-serif";
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0;
    font-family: Poppins, Helvetica, "sans-serif";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3F4254;
    text-align: left;
    background-color: #ffffff;
}

.sty{
  text-align: left;

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

.card.card-custom > .card-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    min-height: 70px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent;
}
.card-header:first-child {
    border-radius: calc(0.42rem - 1px) calc(0.42rem - 1px) 0 0;
}
.card .card-header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    min-height: 70px;
    padding: 0 2.25rem;
    background-color: transparent;
    border-bottom: 1px solid #EFF2F5;
}
.card-header {
    padding: 2rem 2.25rem;
    margin-bottom: 0;
    background-color: #ffffff;
    border-bottom: 1px solid #EBEDF3;
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