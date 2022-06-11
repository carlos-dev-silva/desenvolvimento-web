import { useState } from "react"
import "./style.css"

const TerceiroComponente = () => {
    
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    function gerarResultado(e) {
        e.preventDefault()
        
        let soma = parseInt(numero1) + parseInt(numero2); 
        
        let aoQuadrado = Math.pow(soma, 2);
        console.log(aoQuadrado);
            setResultado(aoQuadrado)

            
    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
                setTimeout(() => elemento.innerHTML += letra, 80 * i);
                });
              }
            const titulo = document.querySelector('h2');
              typeWriter(titulo);
              
    }
    return(
        <form>
            <h3>DIGITE O PRIMEIRO NÚMERO</h3>
                <label>
                    <input className="num" type="text" placeholder="Digite um número" value={numero1} onChange={(e) => {setNumero1(e.target.value)}}></input>
                </label>
        
            <h3>DIGITE O SEGUNDO NÚMERO</h3>
                <label>
                    <input className="num" type="text" placeholder="Digite um número" value={numero2} onChange={(e) => {setNumero2(e.target.value)}}></input>
                </label>

            <h2>RESULTADO</h2>
                <label>
                    <input className="num" type="text" placeholder="Resultado" value={resultado} onChange={(e) => {setResultado(e.target.value)}}></input>
                </label>
            <br></br>
            <br></br> 
            <button className="result" onClick={gerarResultado}>ENTER</button>

            
                    
        </form>

               
       );
    }

export default TerceiroComponente

