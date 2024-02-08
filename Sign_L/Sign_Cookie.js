import Cookies from "js-cookie";



function Set_Cookie(value) {
    const login_token = value;
    Cookies.set('Login_Token', login_token, { path: '/' });
}




export default Set_Cookie;




