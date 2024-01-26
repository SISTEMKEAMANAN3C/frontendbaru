import { postHeader } from "./api.js";
import { getValue } from "./element.js";
import { RegistrasiAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function Registrasi(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");
    let inirole = getValue("role_akun_admin");

    if (inirole === "admin") {
        let datainjson = {
            "username": getValue("username_akun_admin"),
            "password": getValue("password_akun_admin"),
            "role": getValue("role_akun_admin")
        };
        postHeader(RegistrasiAPI,datainjson,tokenkey,tokenvalue,responseData);
    };
    if (inirole === "dosen") {
        let datainjson = {
            "username": getValue("username_akun_admin"),
            "password": getValue("password_akun_admin"),
            "role": getValue("role_akun_admin"),
            "nik": getValue("nik_akun_admin")
        };
        postHeader(RegistrasiAPI,datainjson,tokenkey,tokenvalue,responseData);
    };
}

function responseData(result) {
    alert(result.message);
    window.location.href = "./semuaakun.html";
}