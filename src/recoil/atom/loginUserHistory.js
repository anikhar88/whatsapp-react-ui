import { atom } from "recoil";

export const loggedInUsers = atom({
    key: "loggedinuser",
    default: []
})