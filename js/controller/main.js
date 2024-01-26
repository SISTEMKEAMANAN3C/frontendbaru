import createDosen from "./tambahdosen.js";
import TambahFormAdmin from "./tambahdosenadmin.js";
import LoginAdmin from "./signin.js";
import Registrasi from "./registrasi.js";
import EditUserAdmin from "./updateakunadmin.js";
import getDosen from "./semuadosen.js";
import getDetailForm from "./detaildosen.js";
import AmbilSatuFormAdmin from "./detaildosenadmin.js";
import Logout from "./logout.js";
import HapusFormDosen from "./deletedosen.js";
import HapusFormAdmin from "./deletedosenadmin.js";
import HapusUserAPI from "./deleteakun.js";
import EditFormDosen from "./updatedosen.js";
import EditFormAdmin from "./updatedosenadmin.js";
import AmbilSemuaFormAdmin from "./semuadosenadmin.js";
import AmbilSemuaAkun from "./semuaakun.js";


window.LoginAdmin = LoginAdmin;
window.Registrasi = Registrasi;
window.EditUserAdmin = EditUserAdmin;
window.HapusUserAPI = HapusUserAPI;

window.createDosen = createDosen;
window.TambahFormAdmin = TambahFormAdmin;
window.getDetailForm = getDetailForm;
window.AmbilSatuFormAdmin = AmbilSatuFormAdmin;
window.HapusFormDosen = HapusFormDosen;
window.HapusFormAdmin = HapusFormAdmin;
window.EditFormDosen = EditFormDosen;
window.EditFormAdmin = EditFormAdmin;
window.Logout = Logout;

const productTableBodyElement = document.getElementById('productTableBody');
if (productTableBodyElement) {
    getDosen();
} else {
    console.log("Element with ID 'productTableBody' not found. getDosen not executed.");
}

const productTableBodyAdminElement = document.getElementById('productTableBodyAdmin');
if (productTableBodyAdminElement) {
    AmbilSemuaFormAdmin();
} else {
    console.log("Element with ID 'productTableBodyAdminElement' not found. AmbilSemuaFormAdmin not executed.");
}

const inidetaildosenElement = document.getElementById('ini-detail-dosen');
if (inidetaildosenElement) {
    getDetailForm();
} else {
    console.log("Element with ID 'ini-detail-dosen' not found. getDetailForm not executed.");
}

const deleteElement = document.getElementById('ini-halaman-delete');
if (deleteElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const nik = searchParams.get("nik");

    // change value form
    document.getElementById("delete_nik_admin").value = nik;
} else {
    console.log("Element with ID 'ini-halaman-delete' not found.");
}

const updateAdminElement = document.getElementById('ini-halaman-update-admin');
if (updateAdminElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const nik = searchParams.get("nik");
    const nama_dosen = searchParams.get("nama_dosen");
    const pendidikan_dosen = searchParams.get("pendidikan_dosen");
    const gelar_dosen = searchParams.get("gelar_dosen");
    const kemampuan_dosen = searchParams.get("kemampuan_dosen");
    const penghargaan_dosen = searchParams.get("penghargaan_dosen");
    const judul_sertifikat = searchParams.get("judul_sertifikat");
    const pemberi_sertifikat = searchParams.get("pemberi_sertifikat");
    const penerima_sertifikat = searchParams.get("penerima_sertifikat");
    const tanggal_penerbitan_sertifikat = searchParams.get("tanggal_penerbitan_sertifikat");
    const nomor_sertifikat = searchParams.get("nomor_sertifikat");
    const penawaran_kerja = searchParams.get("penawaran_kerja");
    const perjanjian_kerja = searchParams.get("perjanjian_kerja");
    const pemberhentian_kerja = searchParams.get("pemberhentian_kerja");
    const keterangan_kerja = searchParams.get("keterangan_kerja");
    const kuasa_kerja = searchParams.get("kuasa_kerja");

    // change value form
    document.getElementById("update_nik_admin").value = nik;
    document.getElementById("update_nama_dosen_admin").value = nama_dosen;
    document.getElementById("update_pendidikan_dosen_admin").value = pendidikan_dosen;
    document.getElementById("update_gelar_dosen_admin").value = gelar_dosen;
    document.getElementById("update_kemampuan_dosen_admin").value = kemampuan_dosen;
    document.getElementById("update_penghargaan_dosen_admin").value = penghargaan_dosen;
    document.getElementById("update_judul_sertifikat_admin").value = judul_sertifikat;
    document.getElementById("update_pemberi_sertifikat_admin").value = pemberi_sertifikat;
    document.getElementById("update_penerima_sertifikat_admin").value = penerima_sertifikat;
    document.getElementById("update_tanggal_penerbitan_sertifikat_admin").value = tanggal_penerbitan_sertifikat;
    document.getElementById("update_nomor_sertifikat_admin").value = nomor_sertifikat;
    document.getElementById("update_penawaran_kerja_admin").value = penawaran_kerja;
    document.getElementById("update_perjanjian_kerja_admin").value = perjanjian_kerja;
    document.getElementById("update_pemberhentian_kerja_admin").value = pemberhentian_kerja;
    document.getElementById("update_keterangan_kerja_admin").value = keterangan_kerja;
    document.getElementById("update_kuasa_kerja_admin").value = kuasa_kerja;
} else {
    console.log("Element with ID 'ini-halaman-update-admin' not found.");
}

const updateElement = document.getElementById('ini-halaman-update');
if (updateElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const nama_dosen = searchParams.get("nama_dosen");
    const pendidikan_dosen = searchParams.get("pendidikan_dosen");
    const gelar_dosen = searchParams.get("gelar_dosen");
    const kemampuan_dosen = searchParams.get("kemampuan_dosen");
    const penghargaan_dosen = searchParams.get("penghargaan_dosen");
    const judul_sertifikat = searchParams.get("judul_sertifikat");
    const pemberi_sertifikat = searchParams.get("pemberi_sertifikat");
    const penerima_sertifikat = searchParams.get("penerima_sertifikat");
    const tanggal_penerbitan_sertifikat = searchParams.get("tanggal_penerbitan_sertifikat");
    const nomor_sertifikat = searchParams.get("nomor_sertifikat");
    const penawaran_kerja = searchParams.get("penawaran_kerja");
    const perjanjian_kerja = searchParams.get("perjanjian_kerja");
    const pemberhentian_kerja = searchParams.get("pemberhentian_kerja");
    const keterangan_kerja = searchParams.get("keterangan_kerja");
    const kuasa_kerja = searchParams.get("kuasa_kerja");

    // change value form
    document.getElementById("update_nama_dosen").value = nama_dosen;
    document.getElementById("update_pendidikan_dosen").value = pendidikan_dosen;
    document.getElementById("update_gelar_dosen").value = gelar_dosen;
    document.getElementById("update_kemampuan_dosen").value = kemampuan_dosen;
    document.getElementById("update_penghargaan_dosen").value = penghargaan_dosen;
    document.getElementById("update_judul_sertifikat").value = judul_sertifikat;
    document.getElementById("update_pemberi_sertifikat").value = pemberi_sertifikat;
    document.getElementById("update_penerima_sertifikat").value = penerima_sertifikat;
    document.getElementById("update_tanggal_penerbitan_sertifikat").value = tanggal_penerbitan_sertifikat;
    document.getElementById("update_nomor_sertifikat").value = nomor_sertifikat;
    document.getElementById("update_penawaran_kerja").value = penawaran_kerja;
    document.getElementById("update_perjanjian_kerja").value = perjanjian_kerja;
    document.getElementById("update_pemberhentian_kerja").value = pemberhentian_kerja;
    document.getElementById("update_keterangan_kerja").value = keterangan_kerja;
    document.getElementById("update_kuasa_kerja").value = kuasa_kerja;
} else {
    console.log("Element with ID 'ini-halaman-update-admin' not found.");
}

const semuaakunTableElement = document.getElementById('semuaakunTable');
if (semuaakunTableElement) {
    AmbilSemuaAkun();
} else {
    console.log("Element with ID 'semuaakunTable' not found. AmbilSemuaAkun not executed.");
}

const updateakunadminElement = document.getElementById('ini-halaman-update-akun-admin');
if (updateakunadminElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const username = searchParams.get("username");
    const role = searchParams.get("role");
    const nik = searchParams.get("nik");

    // change value form
    document.getElementById("update_username_akun_admin").value = username;
    document.getElementById("update_role_akun_admin").value = role;
    document.getElementById("update_nik_akun_admin").value = nik;
} else {
    console.log("Element with ID 'ini-halaman-update-akun-admin' not found.");
}

const delete_usernameElement = document.getElementById('delete_username');
if (delete_usernameElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const username = searchParams.get("username");

    // change value form
    document.getElementById("delete_username").value = username;
} else {
    console.log("Element with ID 'delete_username' not found.");
}