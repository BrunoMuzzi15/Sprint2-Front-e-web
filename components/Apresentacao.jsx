import React from "react";

function Apresentacao() {
    return (
        <section className="apresentacao">

            <div className="apresentacao-texto">

                <h2>
                    <strong>
                        A câmera que entende a luz do ambiente.
                    </strong>
                </h2>

                <p>
                    A tecnologia Luz Dinâmica da JOVI ajusta automaticamente
                    a câmera para qualquer cenário.
                </p>

            </div>

            <div className="apresentacao-imagem">

                <img
                    src="/assets/download.jpg"
                    alt="Celular JOVI"
                />

            </div>

            <a
                href="/pages/camera.html"
                className="btn"
            >
                Comparação
            </a>

        </section>
    );
}

export default Apresentacao;