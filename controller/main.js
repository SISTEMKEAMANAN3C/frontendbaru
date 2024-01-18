import editDosen from "./scriptupdatedDosen2.js";
import createDosen from "./createDosen.js";
import LoginAdmin from "./signinAdmin.js";
import getDosen from "./getDosen.js";


window.LoginAdmin = LoginAdmin;

window.createDosen = createDosen;
window.editDosen = editDosen;


import Logout from "./js/logout.js";

window.Logout = Logout;

const productTableBodyElement = document.getElementById('productTableBody');
if (productTableBodyElement) {
    getDosen();
} else {
    console.log("Element with ID 'productTableBody' not found. getDosen not executed.");
}