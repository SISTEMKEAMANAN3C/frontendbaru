import { getCookie } from "./js/cookies.js";
import { getHeader } from "./js/api.js";
import { GetAllform } from "./js/gudangAPI.js";

export default function getDosen() {
  let tokenvalue = getCookie("token");

  getHeader(GetAllform,"token",tokenvalue,responseData);
}

// Display products in the tabl3
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

      <td>${product.sertifikat.map(cert => cert.judul_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.pemberi_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.penerima_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.tujuan_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.tanggal_penerbitan_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.cap_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.nomor_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.info_sertifikat).join(', ')}</td>
      <td>${product.sertifikat.map(cert => cert.logo_sertifikat).join(', ')}</td>

      <td>${product.suratkerja.map(job => job.penawaran_kerja).join(', ')}</td>
      <td>${product.suratkerja.map(job => job.perjanjian_kerja).join(', ')}</td>
      <td>${product.suratkerja.map(job => job.pemberhentian_kerja).join(', ')}</td>
      <td>${product.suratkerja.map(job => job.keterangan_kerja).join(', ')}</td>
      <td>${product.suratkerja.map(job => job.kuasa_kerja).join(', ')}</td>
    `;
    tableBody.appendChild(row);
  });
}
