import cookie from "cookie"
import {API_URL} from "../../helpers/vars"

const login = async (req, res) => {
    try {
            if(req.method === "POST") {
                const {email, password} = req.body
                const loginInfo = {
                    "email": email,
                    "password": password
                }
                const login = await fetch(`${API_URL}/auth/login`, {
                    method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				credentials: "include",
				body: JSON.stringify({loginInfo})
                })
                const loginResponse = await login.json()
                if (login.ok) {
                    res.setHeader("Set-Cookie", cookie.serialize("access_token", loginResponse.jwt, {
                        httpOnly: true, maxAge: 30 * 24 * 60 * 60, sameSite: "Strict", path: "/"
                    }))
                    res.status(200).json(loginResponse)
                } else {
                   res.status(loginResponse.statusCode).json({message: loginResponse.message})
                }
            } else {
                res.setHeader("Allow", ["POST"])
                res.status(405).json({message: `method ${req.method} not allowed`})
            }
    } catch(err) {
        return res.status(500).json({message: "Ooops! Can not connect to the server. Could be a problem with your network or our server is currently down"})
    }
}

export default login