const form = document.getElementById("login");

/**
 * handling logins
 */

let loginUser = async () => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const result = await axios.post("http://localhost:3000/api/login", {
    username: username,
    password: password,
  });

  // If login successfull add the jwt token to localstorage for later use
  if (result.data.status == "ok") {
    localStorage.setItem("token", result.data.data);
    console.log(result["data"]);
  }

  console.log(result);
};
form.addEventListener("submit", loginUser);
