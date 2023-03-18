import cookie from "cookie"
import { API_URL } from "../../helpers/vars"

const verify = async (req, res) => {
    if (req.method === "GET") {
        if(!req.headers.cookie) {
            console.log("na here")
            res.status(403).json({message: "Not authenticated"})
            return
        }
        // console.log({headers: req.headers})
        const {access_token} = cookie.parse(req.headers.cookie);
      if (access_token) { // console.log(access_token)
        const response = await fetch(`${API_URL}/auth/me`, {
				method: "GET",
				headers: {
                    Authorisation: `Bearer ${access_token}`
                }
			}
		);
		const user = await response.json();
        console.log({first: user})
        // console.log(user)
        if (response.ok) {
            res.status(200).json(user)
        console.log({ok: user})
            return
        } else {
            res.status(403).json({message: "User Forbidden"})
        console.log({not: user})

            return
        }}
        else {
            res.status(403).json({message: "No access token"})
        }
    } else {
        // res.setHeader("Allow", ["GET"])
        res.status(405).json({message: `method ${req.method} not allowed`})
    }
}

export default verify