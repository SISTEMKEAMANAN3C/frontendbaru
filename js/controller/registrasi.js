import { postHeader } from "./api.js";
import { getValue } from "./element.js";
import { TambahFormDosenAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function createDosen(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "username": getValue("username_akun_admin"),
        "password": getValue("password_akun_admin"),
        "role": getValue("role_akun_admin"),
        "nik": getValue("nik_akun_admin")
    };

    
    postHeader(TambahFormDosenAPI,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {
    alert(result.message);
    window.location.href = "./detaildosen.html";
}