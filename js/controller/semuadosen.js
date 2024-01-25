import { getCookie } from "./cookies.js";
import { getHeader } from "./api.js";
import { AmbilSemuaFormAPI } from "./gudangAPI.js";

export default function getDosen() {
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    getHeader(AmbilSemuaFormAPI, tokenkey, tokenvalue, responseData);
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
            <td>${product.akademis.gelar_dosen}</td>
            <td>${product.akademis.kemampuan_dosen}</td>
            <td>${product.akademis.penghargaan_dosen}</td>
        `;

        tableBody.appendChild(row);
    });
}


