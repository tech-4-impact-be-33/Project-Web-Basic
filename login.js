let form = document.getElementById("login-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let usernames = document.getElementById("username").value;
  let passwords = document.getElementById("password").value;
  let warning = document.getElementsByClassName("text-danger")[0];
  let url =
    "https://63494c2ca59874146b1c4f2e.mockapi.io/aseanyouthorganization/users";

  let response = await fetch(url);
  let results = await response.json();
  console.log(usernames + passwords);

  // Check username dan password apakah sudah sesuai dengan data API
  results.forEach((item) => {
    if (item.username === usernames && item.password == passwords) {
      // redirect jika sudah benar
      window.location.href = "./listKegiatan.html";
    } else {
      warning.innerHTML = "Check your Username or Password Again!";
      console.log(false);
    }
  });
});
