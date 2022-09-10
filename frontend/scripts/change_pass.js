const form = document.getElementById("changePass")

/**
 * Handling password change
 */

let changePass = async () => {
    event.preventDefault();

    const password = document.getElementById("password").value

    // Sends requestet password change with token from localstorage
    const result = await axios.post('http://localhost:3000/api/change_password', {

        newPassword: password,
        token: localStorage.getItem('token')

    })

    console.log(result);

}
form.addEventListener("submit", changePass)


