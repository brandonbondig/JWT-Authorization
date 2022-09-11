
# JWT Authorization

Simple JWT Authorization template made with ExpressJs and MongoDB.

Example on how to implement user authorization, with user information encrypted and stored
in a MongoDB type schema. 

## Requirements

This repo requires the following to run:

  * [Node.js][node]
  * [Axios][axios]
  * [Bcrypt][bcrypt]
  * [cors][cors]
  * [dotenv][dotenv]
  * [ExpressJs][express]
  * [JWT.IO][jsonwebtoken]
  * [mongoose][mongoose]


[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[axios]: https://axios-http.com/
[bcrypt]: https://www.npmjs.com/package/bcrypt
[cors]: https://www.npmjs.com/package/cors
[dotenv]: https://www.npmjs.com/package/dotenv
[express]: https://expressjs.com/
[jsonwebtoken]: https://jwt.io/
[mongoose]: https://mongoosejs.com/
## API Reference

#### Register User

```http
  POST /api/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

#### User Login

```http
  POST /api/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

#### Change Password
```http
  POST /api/change_password
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `newPassword` | `string` | **Required**. New Password |
| `token` | `string` | **Required**. JWT Token |

