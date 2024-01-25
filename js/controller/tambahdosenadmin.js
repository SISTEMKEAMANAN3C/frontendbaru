import { postHeader } from "./api.js";
import { getValue } from "./element.js";
import { TambahFormAdminAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function TambahFormAdmin(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "nik": getValue("nik_admin"),
        "akademis": {
            "nama_dosen": getValue("nama_dosen_admin"),
            "pendidikan_dosen": getValue("pendidikan_dosen_admin"),
            "gelar_dosen": getValue("gelar_dosen_admin"),
            "kemampuan_dosen": getValue("kemampuan_dosen_admin"),
            "penghargaan_dosen": getValue("penghargaan_dosen_admin")
        },
        "sertifikat": [
            {
                "judul_sertifikat": getValue("judul_sertifikat_admin"),
                "pemberi_sertifikat": getValue("pemberi_sertifikat_admin"),
                "penerima_sertifikat": getValue("penerima_sertifikat_admin"),
                "tanggal_penerbitan_sertifikat": getValue("tanggal_penerbitan_sertifikat_admin"),
                "nomor_sertifikat": getValue("nomor_sertifikat_admin")
            }
        ],
        "suratkerja": [
            {
                "penawaran_kerja": getValue("penawaran_kerja_admin"),
                "perjanjian_kerja": getValue("perjanjian_kerja_admin"),
                "pemberhentian_kerja": getValue("pemberhentian_kerja_admin"),
                "keterangan_kerja": getValue("keterangan_kerja_admin"),
                "kuasa_kerja": getValue("kuasa_kerja_admin")
            }
        ],
        "status": true
    };

    
    postHeader(TambahFormAdminAPI,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {
    alert(result.message);
    window.location.href = "./semuadosen.html";
}