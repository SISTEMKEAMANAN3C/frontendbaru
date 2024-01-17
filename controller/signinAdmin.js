import { postBiasa } from "./js/api.js";
import { getValue } from "./js/element.js";
import { setCookieWithExpireHour } from "./js/cookies.js";
import { signinAdmin } from "./js/gudangAPI.js"

// const loadingIndicator = document.getElementById("loadingIndicator");
const loginButton = document.getElementById("btnLogin");

export default function LoginAdminFix(){
    let username = getValue("username");
    let password = getValue("password");
    if (!username) {
        // alert("Username perlu untuk diisi");
        return; // Stop execution if the fields are not filled
    }
    if (!password) {
        // alert("Password perlu diisi");
        return; // Stop execution if the fields are not filled
    }
    let datainjson = {
        "username": username,
        "password": password
    }

    loginButton.style.display = "none";
    loadingIndicator.style.display = "block";

    postBiasa(signinAdmin,datainjson,responseData);

}

function responseData(data) {
    loadingIndicator.style.display = "none";

    if (data.status === true) {
        const token = data.token;

        // You can use the extracted data as needed

        // For example, setting a cookie
        setCookieWithExpireHour("token", token, 2);

        // Logging some information
        console.log("token", token);

        // Additional actions you may want to perform

        // For example, redirecting to another page
        window.location.href = "https://fancypedia.my.id/cms/";
    } else {
        // Handle the case where login is not successful
        console.error("Login failed. Status:", data.status, "Message:", data.token);
    }
}