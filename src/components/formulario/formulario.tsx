import { useRef, useState } from "react"



export default function Formulario() {
        const [participante, setParticipante] = useState<string>("")

        const inputRef = useRef<HTMLInputElement>(null)
        const adcionarParticipantes = (evento:React.FormEvent<HTMLFormElement>) =>{
            evento.preventDefault()
            setParticipante("")
            inputRef.current?.focus()
        }
    
    return(
        <form onSubmit={adcionarParticipantes} >
            <div>
                
            <input 
            ref={inputRef}
            placeholder="Insira o nome dos participantes" 
            type="text"
            value={participante}
            onChange={(valor)=>setParticipante(valor.target.value)}
            />
            <button 
            //O otão só estára desabilitado quando eu não passar mais um participante:
            disabled={!participante}
            ></button>
            </div>
        </form>
    )
}