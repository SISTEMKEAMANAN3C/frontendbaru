import { putHeader } from "./api.js";
import { getValue } from "./element.js";
import { EditFormDosenAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function EditFormDosen(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "akademis": {
            "nama_dosen": getValue("update_nama_dosen"),
            "pendidikan_dosen": getValue("update_pendidikan_dosen"),
            "gelar_dosen": getValue("update_gelar_dosen"),
            "kemampuan_dosen": getValue("update_kemampuan_dosen"),
            "penghargaan_dosen": getValue("update_penghargaan_dosen")
        },
        "sertifikat": [
            {
                "judul_sertifikat": getValue("update_judul_sertifikat"),
                "pemberi_sertifikat": getValue("update_pemberi_sertifikat"),
                "penerima_sertifikat": getValue("update_penerima_sertifikat"),
                "tanggal_penerbitan_sertifikat": getValue("update_tanggal_penerbitan_sertifikat"),
                "nomor_sertifikat": getValue("update_nomor_sertifikat"),
            }
        ],
        "suratkerja": [
            {
                "penawaran_kerja": getValue("update_penawaran_kerja"),
                "perjanjian_kerja": getValue("update_perjanjian_kerja"),
                "pemberhentian_kerja": getValue("update_pemberhentian_kerja"),
                "keterangan_kerja": getValue("update_keterangan_kerja"),
                "kuasa_kerja": getValue("update_kuasa_kerja")
            }
        ],
        "status": true
    };

    
    putHeader(EditFormDosenAPI,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {
    alert(result.message);
    window.location.href = "./detaildosen.html";
}