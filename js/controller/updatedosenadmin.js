import { putHeader } from "./api.js";
import { getValue } from "./element.js";
import { EditFormAdminAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function EditFormAdmin(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "nik": getValue("update_nik_admin"),
        "akademis": {
            "nama_dosen": getValue("update_nama_dosen_admin"),
            "pendidikan_dosen": getValue("update_pendidikan_dosen_admin"),
            "gelar_dosen": getValue("update_gelar_dosen_admin"),
            "kemampuan_dosen": getValue("update_kemampuan_dosen_admin"),
            "penghargaan_dosen": getValue("update_penghargaan_dosen_admin")
        },
        "sertifikat": [
            {
                "judul_sertifikat": getValue("update_judul_sertifikat_admin"),
                "pemberi_sertifikat": getValue("update_pemberi_sertifikat_admin"),
                "penerima_sertifikat": getValue("update_penerima_sertifikat_admin"),
                "tanggal_penerbitan_sertifikat": getValue("update_tanggal_penerbitan_sertifikat_admin"),
                "nomor_sertifikat": getValue("update_nomor_sertifikat_admin"),
            }
        ],
        "suratkerja": [
            {
                "penawaran_kerja": getValue("update_penawaran_kerja_admin"),
                "perjanjian_kerja": getValue("update_perjanjian_kerja_admin"),
                "pemberhentian_kerja": getValue("update_pemberhentian_kerja_admin"),
                "keterangan_kerja": getValue("update_keterangan_kerja_admin"),
                "kuasa_kerja": getValue("update_kuasa_kerja_admin")
            }
        ],
        "status": true
    };

    
    putHeader(EditFormAdminAPI,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {
    alert(result.message);
    window.location.href = "./semuadosen.html";
}