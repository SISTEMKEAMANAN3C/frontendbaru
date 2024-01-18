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
    <td><a class="btn btn-outline btn-success" href="updatedosen.html?nik=${product.nik}&nama_dosen=${product.akademis.nama_dosen}&pendidikan_dosen=${product.akademis.pendidikan_dosen}&kurikulum_dosen=${product.akademis.kurikulum_dosen}&penelitian_dosen=${product.akademis.penelitian_dosen}&gelar_dosen=${product.akademis.gelar_dosen}&lembaga_dosen=${product.akademis.lembaga_dosen}&kemampuan_dosen=${product.akademis.kemampuan_dosen}&penghargaan_dosen=${product.akademis.penghargaan_dosen}&judul_sertifikat=${product.sertifikat.judul_sertifikat}&pemberi_sertifikat=${product.sertifikat.pemberi_sertifikat}&penerima_sertifikat=${product.sertifikat.penerima_sertifikat}&Tujuan_Sertifikat=${product.sertifikat.Tujuan_Sertifikat}&tanggal_penerbitan_sertifikat=${product.sertifikat.tanggal_penerbitan_sertifikat}&cap_sertifikat=${product.sertifikat.cap_sertifikat}&nomor_sertifikat=${product.sertifikat.nomor_sertifikat}&info_sertifikat=${product.sertifikat.info_sertifikat}&logo_sertifikat=${product.sertifikat.logo_sertifikat}">Edit</a></td>
    <td><a class="btn btn-outline btn-danger" href="deletedosen.html?nik=${product.nik}">Delete</a></td>
    <td><a href="updatedcomment.html?id=${product.id}&username=${product.username}&comment=${product.comment}&questions=${product.questions}&tanggal=${product.tanggal}">Edit</a></td>
    <td><a href="deletecomment.html?id=${product.id}">Delete</a></td>
`;

        tableBody.appendChild(row);
    });
}

// Function to handle the edit button click
function editDosen(product) {
    // Redirect to updatedosen.html and pass the product as a parameter
    window.location.href = `updatedosen.html?data=${encodeURIComponent(JSON.stringify(product))}`;
}
