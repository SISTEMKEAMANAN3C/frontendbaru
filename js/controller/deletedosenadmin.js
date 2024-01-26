import { deleteHeader } from "./api.js";
import { getCookie } from "./cookies.js";
import { getValue } from "./element.js";
import { HapusFormAdminAPI } from "./gudangAPI.js"

export default function HapusFormAdmin(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let datainjson = {
        "nik": getValue("delete_nik_admin"),
    }

    deleteHeader(HapusFormAdminAPI, datainjson, tokenkey, tokenvalue, responseData);

}

function responseData(data) {
    alert(data.message);
    window.location.href = "./semuadosen.html";
}
