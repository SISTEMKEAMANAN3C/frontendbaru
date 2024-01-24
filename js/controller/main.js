import createDosen from "./createDosen.js";
import LoginAdmin from "./signin.js";
import getDosen from "./getDosen.js";
import getDetailForm from "./detaildosen.js";
import Logout from "./logout.js";
import DeleteDosen from "./deletedosen.js";
import UpdateDosen from "./updatedosen.js";


window.LoginAdmin = LoginAdmin;

window.createDosen = createDosen;
window.getDetailForm = getDetailForm;
window.DeleteDosen = DeleteDosen;
window.UpdateDosen = UpdateDosen;
window.Logout = Logout;

const productTableBodyElement = document.getElementById('productTableBody');
if (productTableBodyElement) {
    getDosen();
} else {
    console.log("Element with ID 'productTableBody' not found. getDosen not executed.");
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
    document.getElementById("delete-nik").value = nik;
} else {
    console.log("Element with ID 'ini-halaman-delete' not found.");
}

const updateElement = document.getElementById('ini-halaman-update');
if (updateElement) {
    // value params
    const searchParams = new URLSearchParams(window.location.search);
    const nik = searchParams.get("nik");
    const nama_dosen = searchParams.get("nama_dosen");
    const pendidikan_dosen = searchParams.get("pendidikan_dosen");
    const kurikulum_dosen = searchParams.get("kurikulum_dosen");
    const penelitian_dosen = searchParams.get("penelitian_dosen");
    const gelar_dosen = searchParams.get("gelar_dosen");
    const lembaga_dosen = searchParams.get("lembaga_dosen");
    const kemampuan_dosen = searchParams.get("kemampuan_dosen");
    const penghargaan_dosen = searchParams.get("penghargaan_dosen");
    const judul_sertifikat = searchParams.get("judul_sertifikat");
    const pemberi_sertifikat = searchParams.get("pemberi_sertifikat");
    const penerima_sertifikat = searchParams.get("penerima_sertifikat");
    const tujuan_sertifikat = searchParams.get("tujuan_sertifikat");
    const tanggal_penerbitan_sertifikat = searchParams.get("tanggal_penerbitan_sertifikat");
    const cap_sertifikat = searchParams.get("cap_sertifikat");
    const nomor_sertifikat = searchParams.get("nomor_sertifikat");
    const info_sertifikat = searchParams.get("info_sertifikat");
    const logo_sertifikat = searchParams.get("logo_sertifikat");
    const penawaran_kerja = searchParams.get("penawaran_kerja");
    const perjanjian_kerja = searchParams.get("perjanjian_kerja");
    const pemberhentian_kerja = searchParams.get("pemberhentian_kerja");
    const keterangan_kerja = searchParams.get("keterangan_kerja");
    const kuasa_kerja = searchParams.get("kuasa_kerja");

    // change value form
    document.getElementById("update-nik").value = nik;
    document.getElementById("update-nama-dosen").value = nama_dosen;
    document.getElementById("update-pendidikan-dosen").value = pendidikan_dosen;
    document.getElementById("update-kurikulum-dosen").value = kurikulum_dosen;
    document.getElementById("update-penelitian-dosen").value = penelitian_dosen;
    document.getElementById("update-gelar-dosen").value = gelar_dosen;
    document.getElementById("update-lembaga-dosen").value = lembaga_dosen;
    document.getElementById("update-kemampuan-dosen").value = kemampuan_dosen;
    document.getElementById("update-penghargaan-dosen").value = penghargaan_dosen;
    document.getElementById("update-judul-sertifikat").value = judul_sertifikat;
    document.getElementById("update-pemberi-sertifikat").value = pemberi_sertifikat;
    document.getElementById("update-penerima-sertifikat").value = penerima_sertifikat;
    document.getElementById("update-tujuan-sertifikat").value = tujuan_sertifikat;
    document.getElementById("update-tanggal-penerbitan-sertifikat").value = tanggal_penerbitan_sertifikat;
    document.getElementById("update-cap-sertifikat").value = cap_sertifikat;
    document.getElementById("update-nomor-sertifikat").value = nomor_sertifikat;
    document.getElementById("update-info-sertifikat").value = info_sertifikat;
    document.getElementById("update-logo-sertifikat").value = logo_sertifikat;
    document.getElementById("update-penawaran-kerja").value = penawaran_kerja;
    document.getElementById("update-perjanjian-kerja").value = perjanjian_kerja;
    document.getElementById("update-pemberhentian-kerja").value = pemberhentian_kerja;
    document.getElementById("update-keterangan-kerja").value = keterangan_kerja;
    document.getElementById("update-kuasa-kerja").value = kuasa_kerja;
} else {
    console.log("Element with ID 'ini-halaman-update' not found.");
}
