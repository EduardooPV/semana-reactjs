import { useState } from "react";
import "./App.css";

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleCalcularImc() {
    const calculaAltura = altura / 100
    const imc = peso / (calculaAltura * calculaAltura)

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está acima do peso! Seu IMC: " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem("Cuidado obesidade! Seu IMC: " + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular o seu imc</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex: 90" 
          value={peso}
          onChangeCapture={(e) => setPeso(e.target.value)}
          />
        <input 
          type="text" 
          placeholder="Altura em (cm) Ex: 180" 
          value={altura}
          onChangeCapture={(e) => setAltura(e.target.value)}
        />

        <button
          onClick={handleCalcularImc}
        >
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  );
}
