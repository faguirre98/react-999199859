import { useState } from "react"
import './App.css'


function App() {

  const [name, setName] = useState("Sofia")
  const [numeroUno, setNumeroUno] = useState(0)
  const [numeroDos, setNumeroDos] = useState(0)
  const [resultado, setResult] = useState ()

  const handleName = () => {
    //No podemos reasignar un estado
    //name = "Fabri"

    //para darle otro valor a un estado hay que reemplazarlo con su func actualizadora
    setName("Fabri")
  }

  function sumar (event){
    event.preventDefault()
    setResult(Number(numeroUno) + Number(numeroDos)) 
  }

  //Renderizar
  return (
    <section>
      <h1>Calculadora</h1>
      <h2>Hola, {name}</h2>
      <button onClick={handleName}>Cambiar nombre</button>
      <p>El número 1 es: {numeroUno}</p>
      <p>El número 2 es: {numeroDos}</p>
      

      <form onSubmit={sumar}>
      <label>
        Número 1:
        <input type="number" name="num1" min="0" onChange={(event) => { setNumeroUno(event.target.value) }} />
      </label>

      <label>
        Número 2:
        <input type="number" name="num2" min="0" onChange={(event) => { setNumeroDos(event.target.value) }} />
      </label>
      <br></br>
      <button>Calcular</button>

      <p>Resultado:{resultado}</p>
      </form>
    </section>
  )
}

export { App }
