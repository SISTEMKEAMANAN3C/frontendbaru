import { deleteHeader } from "./api.js";
import { getCookie } from "./cookies.js";
import { HapusFormDosenAPI } from "./gudangAPI.js"

export default function HapusFormDosen(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let datainjson = {}

    deleteHeader(HapusFormDosenAPI, datainjson, tokenkey, tokenvalue, responseData);

}

function responseData(data) {
    console.log(data)
    window.location.href = "./semuadosen.html";
}
