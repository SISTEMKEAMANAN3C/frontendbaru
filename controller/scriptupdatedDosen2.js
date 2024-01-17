import { getCookie } from "./js/cookies.js";
import { patchHeader } from "./js/api.js";
import { upadateDosenn } from "./js/gudangAPI.js";

export default function editDosen(){
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    let id = parseInt(document.getElementById('id').value);
    let namadosen = document.getElementById('namadosen').value;
    let pendidikandosen = document.getElementById('pendidikandosen').value;
    let kurikulumdosen = document.getElementById('kurikulumdosen').value;
    let penelitiandosen = document.getElementById('penelitiandosen').value;
    let gelardosen = document.getElementById('gelardosen').value;
    let lembagadosen = document.getElementById('lembagadosen').value;
    let kemampuandosen = document.getElementById('kemampuandosen').value;
    let penghargaandosen = document.getElementById('penghargaandosen').value;
    let judulsertifikat = document.getElementById('judulsertifikat').value;
    let pemberisertifikat = document.getElementById('pemberisertifikat').value;
    let penerimasertifikat = document.getElementById('penerimasertifikat').value;
    let tujuansertifikat = document.getElementById('tujuansertifikat').value;
    let tanggalpenerbitansertifikat = document.getElementById('tanggalpenerbitansertifikat').value;
    let capsertifikat = document.getElementById('capsertifikat').value;
    let nomorsertifikat = document.getElementById('nomorsertifikat').value;
    let infosertifikat = document.getElementById('infosertifikat').value;
    let logosertifikat = document.getElementById('logosertifikat').value;
    let penawarankerja = document.getElementById('penawarankerja').value;
    let perjanjiankerja = document.getElementById('perjanjiankerja').value;
    let pemberhentiankerja = document.getElementById('pemberhentiankerja').value;
    let keterangankerja = document.getElementById('keterangankerja').value;
    let kuasakerja = document.getElementById('kuasakerja').value;
    let status = document.getElementById('status').checked;

    let datainjson = {
        "id": id, // Contoh id yang unik, Anda dapat menggunakan id yang sesuai dengan kebutuhan aplikasi Anda
        "namadosen": namadosen,
        "pendidikandosen": pendidikandosen,
        "kurikulumdosen": kurikulumdosen,
        "penelitiandosen": penelitiandosen,
        "gelardosen": gelardosen,
        "lembagadosen": lembagadosen,
        "kemampuandosen": kemampuandosen,
        "penghargaandosen": penghargaandosen,
        "judulsertifikat": judulsertifikat,
        "pemberisertifikat": pemberisertifikat,
        "tujuansertifikat": tujuansertifikat,
        "penerimasertifikat": penerimasertifikat,
        "tanggalpenerbitansertifikat": tanggalpenerbitansertifikat,
        "capsertifikat": capsertifikat,
        "nomorsertifikat": nomorsertifikat,
        "infosertifikat": infosertifikat,
        "logosertifikat": logosertifikat,
        "penawarankerja": penawarankerja,
        "perjanjiankerja": perjanjiankerja,
        "pemberhentiankerja": pemberhentiankerja,
        "keterangankerja": keterangankerja,
        "kuasakerja": kuasakerja,
        "status": status
    };

    patchHeader(upadateDosenn,datainjson,tokenkey,tokenvalue,responseFunction)
}

function responseFunction(result) {
    if (result.status == true) {
        alert('berhasil update')
        console.log("Berhasil update")
        window.location.href = "getblog.html";
    } else {
        alert('gagal update')
        console.log("Gagal")
    }
}


