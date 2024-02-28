import Cookie from "js-cookie"
import {jwtDecode} from "jwt-decode";

interface ITokenModel {
    id: number
    login: string
    role: "user" | "admin"
}

export class TokenService {

    public static parseAccessToken (token: string) {
        return jwtDecode<ITokenModel>(token)
    }

    public static setAccessToken(token: string) {
        Cookie.set("access_token", token)
    }

    public static getAccessToken() {
        return Cookie.get("access_token")
    }
}