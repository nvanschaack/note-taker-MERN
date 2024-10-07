// create reusable logic for checking authentication (token) and also removing token (logout)
import { jwtDecode } from "jwt-decode";

//check to see if someone is logged in
class CheckAuth {
    isLoggedIn() {
        //see IF theres a token in localstorage
        const token = localStorage.getItem('token')
        
        if (token) {
            //check to see if token is expired
            const decoded = jwtDecode(token)
            const isExpired = this.checkExp(decoded)
            if (!isExpired) {
                return true
            }
        }
        //if theres no token or the token is expired...
        return false
    }

    checkExp(token) {
        if (token.exp < Date.now() / 1000) {
            return true
        }
        return false
    }

    logout() {
        localStorage.removeItem('token')
        window.location.assign('/Login')
    }
}

//export a new instance of a Class object so that the new object is already created, instead of having to create a new object everytime we want to use a method inside CheckAuth
export default new CheckAuth();