import React, { useState } from "react";

function Simulador() {
    const [ambiente, setAmbiente] = useState("");
    const [resultado, setResultado] = useState("");

    function calcularLuz() {
        if (ambiente === "") {
            setResultado("Selecione um ambiente.");
            return;
        }

        // Gera um valor aleatório de 0 a 100
        const valorAleatorio = Math.random() * 100;

        // Arredonda o valor
        const intensidade = Math.round(valorAleatorio);

        let mensagem;

        if (ambiente === "escuro") {
            mensagem = `Ambiente escuro: intensidade recomendada ${intensidade}%.`;
        } else if (ambiente === "normal") {
            mensagem = `Ambiente normal: intensidade recomendada ${intensidade}%.`;
        } else {
            mensagem = `Ambiente claro: intensidade recomendada ${intensidade}%.`;
        }

        setResultado(mensagem);

        // Salva os dados no localStorage
        localStorage.setItem("ambienteJovi", ambiente);
        localStorage.setItem("intensidadeJovi", intensidade);
    }

    function carregarDados() {
        const ambienteSalvo = localStorage.getItem("ambienteJovi");
        const intensidadeSalva = localStorage.getItem("intensidadeJovi");

        if (ambienteSalvo && intensidadeSalva) {
            setAmbiente(ambienteSalvo);
            setResultado(
                `Última configuração: ${ambienteSalvo}. Intensidade: ${intensidadeSalva}%.`
            );
        } else {
            setResultado("Nenhuma configuração salva.");
        }
    }

    return (
        <section className="simulador">

            <h2>Simulador de Luz Dinâmica</h2>

            <p>
                Escolha o ambiente para simular o ajuste automático da câmera.
            </p>

            <select
                value={ambiente}
                onChange={(e) => setAmbiente(e.target.value)}
            >
                <option value="">Selecione o ambiente</option>
                <option value="escuro">Ambiente escuro</option>
                <option value="normal">Ambiente normal</option>
                <option value="claro">Ambiente claro</option>
            </select>

            <div className="simulador-botoes">

                <button onClick={calcularLuz}>
                    Calcular iluminação
                </button>

                <button onClick={carregarDados}>
                    Carregar última configuração
                </button>

            </div>

            {resultado && (
                <div className="resultado">
                    <p>{resultado}</p>
                </div>
            )}

        </section>
    );
}

export default Simulador;