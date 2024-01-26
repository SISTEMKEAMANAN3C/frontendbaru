import { putHeader } from "./api.js";
import { getValue } from "./element.js";
import { EditUserAdminAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function EditUserAdmin(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");
    let inirole = getValue("update_role_akun_admin");

    if (inirole === "admin") {
        let datainjson = {
            "username": getValue("update_username_akun_admin"),
            "password": getValue("update_password_akun_admin"),
            "role": getValue("update_role_akun_admin")
        };
        putHeader(EditUserAdminAPI,datainjson,tokenkey,tokenvalue,responseData);
    };
    if (inirole === "dosen") {
        let datainjson = {
            "username": getValue("update_username_akun_admin"),
            "password": getValue("update_password_akun_admin"),
            "role": getValue("update_role_akun_admin"),
            "nik": getValue("update_nik_akun_admin")
        };
        putHeader(EditUserAdminAPI,datainjson,tokenkey,tokenvalue,responseData);
    };
}

function responseData(result) {
    alert(result.message);
    window.location.href = "./semuaakun.html";
}