import editDosen from "./scriptupdatedDosen2.js";
import createDosen from "./createDosen.js";
import LoginAdmin from "./signin.js";
import getDosen from "./getDosen.js";
import getDetailForm from "./detaildosen.js";
import Logout from "./logout.js";
import DeleteDosen from "./deletedosen.js";


window.LoginAdmin = LoginAdmin;

window.createDosen = createDosen;
window.getDetailForm = getDetailForm;
window.DeleteDosen = DeleteDosen;
window.editDosen = editDosen;
window.Logout = Logout;

const productTableBodyElement = document.getElementById('productTableBody');
if (productTableBodyElement) {
    getDosen();
} else {
    console.log("Element with ID 'productTableBody' not found. getDosen not executed.");
}


// value params
const searchParams = new URLSearchParams(window.location.search);
const nik = searchParams.get("nik");

// change value form
document.getElementById("delete-nik").value = nik;