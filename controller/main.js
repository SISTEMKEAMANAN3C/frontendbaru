import editDosen from "./scriptupdatedDosen2.js";
import createDosen from "./createDosen.js";

import adminAuthorization from "./js/authorizationAdmin.js";

// import { getCookie } from "./cookies.js";

window.createDosen = createDosen;
window.editDosen = editDosen;

// window.updateProduct = updateProduct(event);

import Logout from "./js/logout.js";

window.Logout = Logout;

const previewadminAuthorization = document.getElementById('mainadminAuthorization');
if (previewadminAuthorization) {
    adminAuthorization();
} else {
    console.log("Element with ID 'mainadminAuthorization' not found. adminAuthorization not executed.");
}
// const myHeaders = new Headers();
// let tokencookie = getCookie("token");
// myHeaders.set("token", tokencookie);

