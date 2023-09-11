import { useState } from "react"

function Content() {
    const [text, setText] = useState("alex")
    return(
    <>
        <p>
            El texto: {text}
        </p>
        <p>
            El contenido
        </p>
        <button onClick={()=> setText("andrea")} style={{backgroundColor:"blue"}}>
            Cambiar Texto
        </button>
    </>
    )
}

export default Content