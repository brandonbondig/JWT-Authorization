const form = document.getElementById("reg-form")

/**
 * Handling newly registered users
 */

let registerUser = async () => {
    event.preventDefault();

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const result = await axios.post('http://localhost:3000/api/register', {

        username: username,
        password: password

    })

    console.log(result);
}
form.addEventListener("submit", registerUser)


