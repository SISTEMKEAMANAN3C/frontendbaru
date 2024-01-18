import { deleteHeader } from "./api.js";
import { getValue } from "./element.js";
import { getCookie } from "./cookies.js";
import { HapusFormAPI } from "./gudangAPI.js"

export default function DeleteDosen(){
    let nik = getValue("delete-nik");
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let datainjson = {
        "nik": nik
    }

    deleteHeader(HapusFormAPI, datainjson, tokenkey, tokenvalue, responseData);

}

function responseData(data) {
    console.log(data)
}
