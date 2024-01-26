import { deleteHeader } from "./api.js";
import { getCookie } from "./cookies.js";
import { getValue } from "./element.js";
import { HapusUserAPI } from "./gudangAPI.js"

export default function HapusUser(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let datainjson = {
        "username": getValue("delete_username"),
    }

    deleteHeader(HapusUserAPI, datainjson, tokenkey, tokenvalue, responseData);

}

function responseData(data) {
    alert(data.message);
    window.location.href = "./semuaakun.html";
}
