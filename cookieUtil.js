/*Both scripts taken from w3 schools https://www.w3schools.com/js/js_cookies.asp*/

export function setCookieValue(cname, cvalue) {
  alert("called");
  document.cookie = cname + "=" + cvalue + ";";
}

function testt() {
  alert("test")
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
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