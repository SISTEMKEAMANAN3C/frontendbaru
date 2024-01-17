import { postBiasa } from "./js/api.js";
import { getValue } from "./js/element.js";
import { createDosenn } from "./js/gudangAPI.js";
import { getCookie } from "./js/cookies.js";


export default function createDosen(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "id": parseInt(getValue("id")),
        "namadosen": getValue("namadosen"),
        "pendidikandosen": getValue("pendidikandosen"),
        "kurikulumdosen": getValue("kurikulumdosen"),
        "penelitiandosen": getValue("penelitiandosen"),
        "gelardosen": getValue("gelardosen"),
        "lembagadosen": getValue("lembagadosen"),
        "kemampuandosen": getValue("kemampuandosen"),
        "penghargaandosen": getValue("penghargaandosen"),
        "judulsertifikat": getValue("judulsertifikat"),
        "pemberisertifikat": getValue("pemberisertifikat"),
        "penerimasertifikat": getValue("penerimasertifikat"),
        "tujuansertifikat": getValue("tujuansertifikat"),
        "tanggalpenerbitansertifikat": getValue("tanggalpenerbitansertifikat"),
        "capsertifikat": getValue("capsertifikat"),
        "nomorsertifikat": getValue("nomorsertifikat"),
        "infosertifikat": getValue("infosertifikat"),
        "logosertifikat": getValue("logosertifikat"),
        "penawarankerja": getValue("penawarankerja"),
        "perjanjiankerja": getValue("perjanjiankerja"),
        "pemberhentiankerja": getValue("pemberhentiankerja"),
        "keterangankerja": getValue("keterangankerja"),
        "kuasakerja": getValue("kuasakerja"),
        "status": true
    }
    
    postBiasa(createDosenn,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        alert("Berhasil Input Data");
        window.location.href = "../semuadosen.html";
    }
}