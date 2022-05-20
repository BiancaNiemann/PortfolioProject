//confirm email address is correct

let contactEmail = document.getElementById('email');

      const contactForm = {}

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

//add clock in footer

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if(h == 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h :h;
  m = (m < 10) ? "0" + m :m;
  s = (s < 10) ? "0" + s :s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("MyClockDisplay").innerText = time;

  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();


