import { useSetRecoilState } from "recoil"
import { listaUsuarios } from "../atom"

export const adicionarParticipantes = () => {
    const setLista = useSetRecoilState(listaUsuarios)
    return (novoUser:string) => {
        return setLista(listaAtual => [...listaAtual, novoUser])
    }
}