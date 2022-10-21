let warning = document.getElementsByClassName("text-danger")[0];
let url =
  "https://63494c2ca59874146b1c4f2e.mockapi.io/aseanyouthorganization/users";

const getDataForm = () => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let disability = document.getElementById("disabilitas").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  let data = {
    username,
    email,
    gender,
    country,
    city,
    disability,
    password,
    confirmPassword,
  };

  return data;
};

const isLength = (string, length) => {
  if (string.length == length) return true;
  return false;
};

const validateForm = (obj) => {
  if (isLength(obj.username, 0) == true) return false;
  if (isLength(obj.email, 0) == true) return false;
  if (obj.gender == "Gender") return false;
  if (isLength(obj.country, 0) == true) return false;
  if (isLength(obj.city, 0) == true) return false;
  if (obj.disability == "disability") return false;
  if (obj.password !== obj.confirmPassword) return false;

  return true;
};

let form = document.getElementById("signup-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const payload = new FormData(form);

  const res = Object.fromEntries(payload);
  const result = JSON.stringify(res);
  // for (let x of payload) {
  //     console.log(x[0],x[1]);
  // }
  // console.log(getDataForm())

  if (validateForm(getDataForm())) {
    warning.innerHTML = "";
    // mengirim data ke API
    fetch(url, {
      method: "post",
      body: result,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((result) => result.json())
      // .then((result) => console.log(result))
      .catch((err) => console.log("error", err));
    
      window.location.href="./login.html"
  } else {
    warning.innerHTML = "Check your input again!";
  }
});
