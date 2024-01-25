import { putHeader } from "./api.js";
import { getValue } from "./element.js";
import { UpdateFormAPI } from "./gudangAPI.js";
import { getCookie } from "./cookies.js";


export default function UpdateDosen(){
    // tokenstring = getCookie("token")
    let tokenkey = "token";
    let tokenvalue = getCookie("token");


    let datainjson = {
        "nik": getValue("update-nik"),
        "akademis": {
            "nama_dosen": getValue("update-nama-dosen"),
            "pendidikan_dosen": getValue("update-pendidikan-dosen"),
            "gelar_dosen": getValue("update-gelar-dosen"),
            "kemampuan_dosen": getValue("update-kemampuan-dosen"),
            "penghargaan_dosen": getValue("update-penghargaan-dosen")
        },
        "sertifikat": [
            {
                "judul_sertifikat": getValue("update-judul-sertifikat"),
                "pemberi_sertifikat": getValue("update-pemberi-sertifikat"),
                "penerima_sertifikat": getValue("update-penerima-sertifikat"),
                "tanggal_penerbitan_sertifikat": getValue("update-tanggal-penerbitan-sertifikat"),
                "nomor_sertifikat": getValue("update-nomor-sertifikat"),
            }
        ],
        "suratkerja": [
            {
                "penawaran_kerja": getValue("update-penawaran-kerja"),
                "perjanjian_kerja": getValue("update-perjanjian-kerja"),
                "pemberhentian_kerja": getValue("update-pemberhentian-kerja"),
                "keterangan_kerja": getValue("update-keterangan-kerja"),
                "kuasa_kerja": getValue("update-kuasa-kerja")
            }
        ],
        "status": true
    };

    
    putHeader(UpdateFormAPI,datainjson,tokenkey,tokenvalue,responseData);
}

function responseData(result) {

    if (result.status == true) {
        alert("Berhasil Update Data");
        window.location.href = "../semuadosen.html";
    }
}