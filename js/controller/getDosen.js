import { getCookie } from "./cookies.js";
import { getHeader } from "./api.js";
import { GetAllform } from "./gudangAPI.js";

export default function getDosen() {
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    getHeader(GetAllform, tokenkey, tokenvalue, responseData);
}

// Display products in the table
function responseData(products) {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.nik}</td>
            <td>${product.akademis.nama_dosen}</td>
            <td>${product.akademis.pendidikan_dosen}</td>
            <td>${product.akademis.kurikulum_dosen}</td>
            <td>${product.akademis.penelitian_dosen}</td>
            <td>${product.akademis.gelar_dosen}</td>
            <td>${product.akademis.lembaga_dosen}</td>
            <td>${product.akademis.kemampuan_dosen}</td>
            <td>${product.akademis.penghargaan_dosen}</td>
            <td><a class="btn btn-outline btn-success" href="updatedosen.html?nik=${product.nik}&nama_dosen=${product.akademis.nama_dosen}&pendidikan_dosen=${product.akademis.pendidikan_dosen}&kurikulum_dosen=${product.akademis.kurikulum_dosen}&penelitian_dosen=${product.akademis.penelitian_dosen}&gelar_dosen=${product.akademis.gelar_dosen}&lembaga_dosen=${product.akademis.lembaga_dosen}&kemampuan_dosen=${product.akademis.kemampuan_dosen}&penghargaan_dosen=${product.akademis.penghargaan_dosen}&judul_sertifikat=${product.sertifikat.map(cert => cert.judul_sertifikat).join(', ')}&pemberi_sertifikat=${product.sertifikat.map(cert => cert.pemberi_sertifikat).join(', ')}&penerima_sertifikat=${product.sertifikat.map(cert => cert.penerima_sertifikat).join(', ')}&tujuan_sertifikat=${product.sertifikat.map(cert => cert.tujuan_sertifikat).join(', ')}&tanggal_penerbitan_sertifikat=${product.sertifikat.map(cert => cert.tanggal_penerbitan_sertifikat).join(', ')}&cap_sertifikat=${product.sertifikat.map(cert => cert.cap_sertifikat).join(', ')}&nomor_sertifikat=${product.sertifikat.map(cert => cert.nomor_sertifikat).join(', ')}&info_sertifikat=${product.sertifikat.map(cert => cert.info_sertifikat).join(', ')}&logo_sertifikat=${product.sertifikat.map(cert => cert.logo_sertifikat).join(', ')}&penawaran_kerja=${product.suratkerja.map(cert => cert.penawaran_kerja).join(', ')}&perjanjian_kerja=${product.suratkerja.map(cert => cert.perjanjian_kerja).join(', ')}&pemberhentian_kerja=${product.suratkerja.map(cert => cert.pemberhentian_kerja).join(', ')}&keterangan_kerja=${product.suratkerja.map(cert => cert.keterangan_kerja).join(', ')}&kuasa_kerja=${product.suratkerja.map(cert => cert.kuasa_kerja).join(', ')}">Edit</a></td>
            <td><a class="btn btn-outline btn-danger" href="deletedosen.html?nik=${product.nik}">Delete</a></td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to handle the edit button click
function editDosen(product) {
    // Redirect to updatedosen.html and pass the product as a parameter
    window.location.href = `updatedosen.html?data=${encodeURIComponent(JSON.stringify(product))}`;
}
