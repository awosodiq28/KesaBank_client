import cookie from "cookie";

const signout = async (req, res) => {
    if(req.method === "POST") {
        // console.log(req.headers)
        res.setHeader("Set-Cookie", cookie.serialize("access_token", "", {
            // httpOnly: true, expires: new Date(0), sameSite: "strict", path: "/",
            maxAge: -1, path: '/'
        }))
        console.log("reached")
        res.status(200).json({message: "Successfully signed out"})
    } else {
        console.log("res")
        res.setHeader("Allow", ["POST"])
        res.status(405).json({message: `method ${req.method} not allowed`})
    }
}

export default signout 