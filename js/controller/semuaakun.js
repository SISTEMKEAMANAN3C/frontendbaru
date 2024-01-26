import { getCookie } from "./cookies.js";
import { getHeader } from "./api.js";
import { AmbilSemuaAkunAPI } from "./gudangAPI.js";

export default function AmbilSemuaAkun() {
    let tokenkey = "token";
    let tokenvalue = getCookie("token");

    getHeader(AmbilSemuaAkunAPI, tokenkey, tokenvalue, responseData);
}

// Display products in the table
function responseData(products) {
    const tableBody = document.getElementById('semuaakunTable');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.username}</td>
            <td>${product.role}</td>
            <td>${product.nik}</td>
            <td><a class="btn btn-outline btn-success" href="updateakunadmin.html?username=${product.username}&role=${product.role}&nik=${product.nik}">Edit</a></td>
        <td><a class="btn btn-outline btn-danger" onclick="HapusFormDosen()"">Delete</a></td>
        `;

        tableBody.appendChild(row);
    });
}


