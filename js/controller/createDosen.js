import { postHeader } from "./api.js";
import { getValue } from "./element.js";
import { TambahFormAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function createDosen(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "nik": getValue("nik"),
        "akademis": {
            "nama_dosen": getValue("nama_dosen"),
            "pendidikan_dosen": getValue("pendidikan_dosen"),
            "gelar_dosen": getValue("gelar_dosen"),
            "kemampuan_dosen": getValue("kemampuan_dosen"),
            "penghargaan_dosen": getValue("penghargaan_dosen")
        },
        "sertifikat": [
            {
                "judul_sertifikat": getValue("judul_sertifikat"),
                "pemberi_sertifikat": getValue("pemberi_sertifikat"),
                "penerima_sertifikat": getValue("penerima_sertifikat"),
                "tanggal_penerbitan_sertifikat": getValue("tanggal_penerbitan_sertifikat"),
                "nomor_sertifikat": getValue("nomor_sertifikat")
            }
        ],
        "suratkerja": [
            {
                "penawaran_kerja": getValue("penawaran_kerja"),
                "perjanjian_kerja": getValue("perjanjian_kerja"),
                "pemberhentian_kerja": getValue("pemberhentian_kerja"),
                "keterangan_kerja": getValue("keterangan_kerja"),
                "kuasa_kerja": getValue("kuasa_kerja")
            }
        ],
        "status": true
    };

    
    postHeader(TambahFormAPI,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        alert("Berhasil Input Data");
        window.location.href = "../semuadosen.html";
    }
}