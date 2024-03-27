function load_access_points() {
    var url = "/web/panel/access-points";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}

function load_smart_locks() {
    var url = "/web/panel/smart-locks";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}

function load_alarms() {
    var url = "/web/panel/alarms";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}

function load_settings_profile() {
    var url = "/web/panel/settings/profile";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    $(".offcanvas-overlay").trigger("click");
    return true;
}

function load_groups() {
    var url = "/web/panel/groups";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}

function load_firmware_files() {
    var url = "/web/management/firmware-files";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}

function load_language_files() {
    var url = "/web/management/language/files";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}
function load_auto_translate() {
    var url = "/web/management/auto-translate";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}
function load_management_settings() {
    var url = "/web/management/management-settings";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}


function load_group_detail (idDeviceGroup){
    var url = "/web/panel/groups/"+idDeviceGroup;
    $("#kt_content").load(url);

    return true;
}

function load_users() {
    var url = "/web/panel/users";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}


function load_invitations() {
    var url = "/web/panel/invitations";
    $("#kt_content").load(url);
    $(".aside-overlay").trigger("click");
    return true;
}

function load_user_detail(idUser){
    var url = "/web/panel/users/"+idUser;
    $("#kt_content").load(url);

    return true;
}



function load_access_point_panel() {
    var url = "/web/panel/accessPoint/panel";
    $("#kt_content").load(url);

    return true;
}

function load_alarm_detail (idAlarmUser){
    var url = "/web/panel/alarms/"+idAlarmUser;
    $("#kt_content").load(url);

    return true;
}

function load_smart_lock_detail (idSmartLockUser){
    var url = "/web/panel/smart-locks/"+idSmartLockUser;
    $("#kt_content").load(url);

    return true;
}

function load_access_point_detail (idAccessPointUser){
    var url = "/web/panel/access-points/"+idAccessPointUser;
    $("#kt_content").load(url);

    return true;
}