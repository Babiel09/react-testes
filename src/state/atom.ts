import { atom } from "recoil";

export const listaUsuarios = atom<string[]>({
    key: "listaUsuarios",
    default: []
})