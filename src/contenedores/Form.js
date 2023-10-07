import React, { Component } from 'react';
import './styleForm.css'


class Form extends Component {
        calcular = () => {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const operacion = document.getElementById("operacion").value;
            let resultado;
        
            switch (operacion) {
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                resultado = num1 / num2;
                break;
            default:
                resultado = "Operación no válida";
            }
        
            document.getElementById("result").textContent = resultado;
        }
    
        componentDidMount() {
            document.getElementById("calculator-form").addEventListener("submit", (event) => {
                event.preventDefault();
                this.calcular();
            });
        }
    
        render() {
            return (
                <div >
                    <div className="contenedoor">
                        <div className="cont">
                            <h1 class="titulo">Calculos</h1>
                            <label htmlFor="operacion">Selecciona una operación:</label><br/>
                            <select id="operacion">
                                <option value="sumar">Sumar</option>
                                <option value="restar">Restar</option>
                                <option value="multiplicar">Multiplicar</option>
                                <option value="dividir">Dividir</option>
                            </select><br/><br/><br/>
                    
                            <div id="calculator-container">
                                <form id="calculator-form">
                                <label htmlFor="num1">Número 1:</label>
                                <input type="number" id="num1" required/><br/><br/>
                                <label htmlFor="num2">Número 2:</label>
                                <input type="number" id="num2" required/><br/><br/>
                                <input className="buttons" type="submit" value="Calcular"/>
                                </form><br/><br/>
                                <p>Resultado: <span id="result"></span></p>
                            </div>
                        </div>
                    </div>
                </div>

                );
        }
}
  
  export default Form;