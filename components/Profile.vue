<template>
  <div id="kt_quick_user" class="offcanvas offcanvas-right p-10 offcanvas-on">

    <!--begin::Header-->
    <div class="offcanvas-header d-flex align-items-center justify-content-between pb-5" style="" kt-hidden-height="40">
        <h3 class="font-weight-bold m-0">
        </h3>
        <a href="#" class="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
            <i class="ki ki-close icon-xs text-muted"></i>
        </a>
    </div>

    <!--end::Header-->

    <!--begin::Content-->
  <div data-v-48ec5a14="" class="row"><div data-v-48ec5a14="" class="col-md-2"></div><div data-v-48ec5a14="" class="col-md-8"><div data-v-48ec5a14="" class="row mb-6"><div data-v-48ec5a14="" class="col-md-4 col-sm-4 col-4"></div><div data-v-48ec5a14="" class="col-md-4 col-sm-4 col-4"><div data-v-48ec5a14="" class="text-center text-black"><img data-v-48ec5a14="" src="/img/img.fe704758.svg" width="200" height="200"></div><div data-v-48ec5a14="" data-kt-image-input="true" class="image-input image-input-outline" style="background-image: url(&quot;../assets/images/img.svg&quot;);"><div data-v-48ec5a14="" class="image-input-wrapper w-125px h-125px" style="background: url(&quot;null&quot;) center center / cover;"></div><label data-v-48ec5a14="" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="" data-bs-original-title="Change avatar" id="change_profile_photo" class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" style="display: none;"><i data-v-48ec5a14="" class="fa fa-pen icon-sm text-muted"></i><input data-v-48ec5a14="" type="file" name="file" accept=".png, .jpg, .jpeg" style="width: 0px !important; height: 0px !important; overflow: hidden; opacity: 0;"><input data-v-48ec5a14="" type="hidden" name="profilePhotoRemove"></label><span data-v-48ec5a14="" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="" data-bs-original-title="Cancel avatar" id="cancel_profile_photo" class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" style="display: none;"><i data-v-48ec5a14="" class="ki ki-bold-close icon-xs text-muted"></i></span><span data-v-48ec5a14="" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove avatar" id="remove_profile_photo" class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" style="display: none;"><i data-v-48ec5a14="" class="ki ki-bold-close icon-xs text-muted"></i></span></div><div data-v-48ec5a14="" class="form-text">İzin verilen dosya türleri: png, jpg, jpeg.</div></div><div data-v-48ec5a14="" class="col-md-4 col-sm-4 col-4"></div></div><div data-v-48ec5a14="" class="form-floating mb-7"><input data-v-48ec5a14="" type="text" id="settings_email" placeholder="E- mail" value="emrecan@desi.com.tr" class="form-control form-control-solid"><label data-v-48ec5a14="" for="settings_email">E-mail</label></div><hr data-v-48ec5a14=""><div data-v-48ec5a14="" class="form-floating mb-7"><input data-v-48ec5a14="" type="text" id="name" name="name" value="Emrecan " placeholder="Ad" autocomplete="off" class="form-control form-control-solid"><label data-v-48ec5a14="" for="name">Ad</label></div><div data-v-48ec5a14="" class="form-floating mb-7"><input data-v-48ec5a14="" type="text" id="surname" name="surname" placeholder="Soyad" value="Kurtçu" autocomplete="off" class="form-control form-control-solid"><label data-v-48ec5a14="" for="surname">Soyad</label></div><div data-v-48ec5a14="" class="form-floating mb-7"><input data-v-48ec5a14="" type="text" id="phone" name="phone" placeholder="Telefon" value="+905459493733" maxlength="15" autocomplete="off" class="form-control form-control-solid"><label data-v-48ec5a14="" for="settings_phone">Telefon</label></div><small data-v-48ec5a14="">Tercih ettiğiniz dili seçiniz.</small><select data-v-48ec5a14="" id="settings_language" name="language" data-control="select2" data-placeholder="Tercih ettiğiniz dili seçiniz." disabled="disabled" data-select2-id="settings_language" tabindex="-1" aria-hidden="true" class="form-select form-select-solid select2-hidden-accessible"><option data-v-48ec5a14="" value="1" selected="selected" data-select2-id="2">Türkçe</option><option data-v-48ec5a14="" value="2">English</option><option data-v-48ec5a14="" value="3">Deutsch</option><option data-v-48ec5a14="" value="4">Italiano</option><option data-v-48ec5a14="" value="5">Russian</option><option data-v-48ec5a14="" value="6">Dutch</option><option data-v-48ec5a14="" value="7">Hebraic</option><option data-v-48ec5a14="" value="8">French</option><option data-v-48ec5a14="" value="9">Spanish</option><option data-v-48ec5a14="" value="10">Ukrainian</option><option data-v-48ec5a14="" value="11">Slovak</option><option data-v-48ec5a14="" value="12">Slovene</option><option data-v-48ec5a14="" value="13">Croatian</option><option data-v-48ec5a14="" value="14">Albanian</option><option data-v-48ec5a14="" value="15">Portuguese</option><option data-v-48ec5a14="" value="16">Arabic</option><option data-v-48ec5a14="" value="17">Polski</option><option data-v-48ec5a14="" value="18">Čeština</option><option data-v-48ec5a14="" value="19">Azərbaycanca</option></select><span data-v-48ec5a14="" dir="ltr" data-select2-id="1" class="select2 select2-container select2-container--default select2-container--disabled" style="width: 100%;"><span data-v-48ec5a14="" class="selection"><span data-v-48ec5a14="" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-settings_language-container" class="select2-selection select2-selection--single"><span data-v-48ec5a14="" id="select2-settings_language-container" role="textbox" title="Türkçe" class="select2-selection__rendered">Türkçe</span><span data-v-48ec5a14="" role="presentation" class="select2-selection__arrow"><b data-v-48ec5a14="" role="presentation"></b></span></span></span><span data-v-48ec5a14="" aria-hidden="true" class="dropdown-wrapper"></span></span></div><div data-v-48ec5a14="" class="col-md-2"></div></div>

        <!--end::Header-->

        <!--begin::Separator-->
        <div class="separator separator-dashed mt-8 mb-5"></div>

        <!--end::Separator-->

        <!--begin::Nav-->
        <div class="navi navi-spacer-x-0 p-0">

            <!--begin::Item-->
            <a href="javascript:;" id="my_profile_button" onclick="load_settings_profile()" class="navi-item">
                <div class="navi-link">
                    <div class="symbol symbol-40 bg-light mr-3">
                        <div class="symbol-label">
									<span class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/General/User.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"></path>
                                        </g>
                                    </svg><!--end::Svg Icon--></span>
                        </div>
                    </div>
                    <div class="navi-text">
                        <div class="font-weight-bold">Profilim</div>
                        <div class="text-muted">Hesap Ayarları ve Daha Fazlası</div>
                    </div>
                </div>
            </a>


        </div>


    <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
    <!--end::Content-->

</template>

<script>
export default {

}
</script>

<style>

</style>