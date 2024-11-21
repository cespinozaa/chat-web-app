import jwt from 'jsonwebtoken';


const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign(
        { userId }, //payload
        process.env.JWT_SECRET, //secret
        { expiresIn: "30d" } //options
    );

    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, //prevents cross-site scripting attacks
        sameSite: "strict", //CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;