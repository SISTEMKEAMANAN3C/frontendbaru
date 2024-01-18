export function postBiasa(target_url,datajson,responseFunction){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify(datajson);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.text())
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
}

export function postHeader(target_url,datajson,tokenkey,tokenvalue,responseFunction){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(tokenkey, tokenvalue);


    var raw = JSON.stringify(datajson);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.text())
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
}

export function putHeader(target_url,datajson,tokenkey,tokenvalue,responseFunction){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(tokenkey, tokenvalue);


    var raw = JSON.stringify(datajson);

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.text())
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
}

export function deleteHeader(target_url,datajson,tokenkey,tokenvalue,responseFunction){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(tokenkey, tokenvalue);


    var raw = JSON.stringify(datajson);

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.text())
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
}

export function getHeader(target_url,tokenkey,tokenvalue,responseFunction){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(tokenkey, tokenvalue);
    var requestOptions = {
    headers: myHeaders,
    method: 'GET',
    redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.text())
    .then(result => responseFunction(JSON.parse(result)))
    .catch(error => console.log('error', error));
}