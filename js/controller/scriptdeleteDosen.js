function  deleteDosen() {
    const dosenID = parseInt(document.getElementById('dosenID').value)
    let tokenvalue = getCookie('token')
  
    // Lakukan validasi jika productID tidak kosong
    if (dosenID === '') {
      alert('Please enter a dosen ID');
      return;
    }
  
    const endpoint = '';
    const payload = {
      id: dosenID
    };
  
    fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': tokenvalue
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          document.getElementById('response').innerText = 'dosen deleted successfully';
        } else {
          document.getElementById('response').innerText = 'Failed to delete dosen';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'An error occurred, please try again.';
      });
  }
  


const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
const val = document.getElementById("dosenID");
val.value = id;
console.log(id);

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
		}
	}
	return "";
	}