import { useEffect, useState } from "react";

const STORAGE_KEY = "jovi-config";



function Header() {

    return (

        <header className="header">

            <h1 className="titulo">
                <strong>JOVI</strong> Luz Dinâmica
            </h1>

        </header>

    );

}


function Beneficios({ beneficios }) {

    return (

        <section className="cards" id="beneficios">

            {beneficios.map((item) => (

                <article className="card" key={item.titulo}>

                    <h3>
                        {item.titulo}
                    </h3>

                    <p>
                        {item.texto}
                    </p>

                </article>

            ))}

        </section>

    );

}



function Apresentacao({ onComparacao }) {

    return (

        <section className="celular">

            <div className="celular-texto">

                <h2 id="cabecario">

                    <strong>
                        A câmera que entende a luz do ambiente.
                    </strong>

                </h2>

                <p className="fonte">

                    A tecnologia Luz Dinâmica da JOVI ajusta
                    automaticamente a câmera para qualquer cenário.

                </p>

            </div>


            <div className="celular-imagem">

                <img
                    src="/assets/download.jpg"
                    alt="Celular JOVI"
                />

            </div>


            <button
                className="btn"
                onClick={onComparacao}
            >

                Comparação

            </button>

        </section>

    );

}



function Login({ onBack }) {

    const [email, setEmail] = useState("");

    const [senha, setSenha] = useState("");

    const [mensagem, setMensagem] = useState("");


    function entrar(e) {

        e.preventDefault();


        if (!email || !senha) {

            setMensagem("Preencha e-mail e senha.");

            return;

        }


        localStorage.setItem(
            "jovi-login",
            JSON.stringify({
                email: email
            })
        );


        setMensagem(
            "Login realizado com sucesso!"
        );

    }


    return (

        <section className="pagina-extra">

            <div className="centro">

                <h2>
                    Login JOVI
                </h2>


                <form onSubmit={entrar}>

                    <div className="campo">

                        <label htmlFor="email">
                            E-mail
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="seu@email.com"
                        />

                    </div>


                    <div className="campo">

                        <label htmlFor="senha">
                            Senha
                        </label>

                        <input
                            id="senha"
                            type="password"
                            value={senha}
                            onChange={(e) =>
                                setSenha(e.target.value)
                            }
                            placeholder="Sua senha"
                        />

                    </div>


                    <button type="submit">
                        Entrar
                    </button>

                </form>


                {mensagem && (

                    <p className="mensagem">
                        {mensagem}
                    </p>

                )}


                <button
                    className="voltar"
                    onClick={onBack}
                >

                    Voltar

                </button>

            </div>

        </section>

    );

}



function Comparacao({ onBack }) {

    const [ambiente, setAmbiente] =
        useState("escuro");

    const [resultado, setResultado] =
        useState(null);


    function simular() {

        let base;


        if (ambiente === "escuro") {

            base = 38;

        }

        else if (ambiente === "forte") {

            base = 92;

        }

        else {

            base = 65;

        }


        
        const ajuste =
            Math.round(Math.random() * 10);


        
        const exposicao =
            Math.min(100, base + ajuste);


        const dados = {

            ambiente: ambiente,

            exposicao: exposicao,

            ajuste: ajuste,

            data: new Date().toLocaleString("pt-BR")

        };


        
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(dados)
        );


        setResultado(dados);

    }


    return (

        <section className="pagina-extra">

            <div className="centro comparacao">

                <h2>
                    Comparação de iluminação
                </h2>


                <p>

                    Escolha o cenário para simular
                    o ajuste automático da Luz Dinâmica.

                </p>


                <div className="opcoes">

                    <button
                        className={
                            ambiente === "escuro"
                                ? "selecionado"
                                : ""
                        }

                        onClick={() =>
                            setAmbiente("escuro")
                        }
                    >

                        Ambiente escuro

                    </button>


                    <button
                        className={
                            ambiente === "forte"
                                ? "selecionado"
                                : ""
                        }

                        onClick={() =>
                            setAmbiente("forte")
                        }
                    >

                        Luz forte

                    </button>


                    <button
                        className={
                            ambiente === "normal"
                                ? "selecionado"
                                : ""
                        }

                        onClick={() =>
                            setAmbiente("normal")
                        }
                    >

                        Luz normal

                    </button>

                </div>


                <button onClick={simular}>

                    Simular ajuste

                </button>


                {resultado && (

                    <div className="resultado">

                        <strong>

                            Exposição ajustada:
                            {" "}
                            {resultado.exposicao}%

                        </strong>


                        <p>

                            Variação calculada com
                            Math.random():
                            {" "}
                            +{resultado.ajuste}%

                        </p>


                        <small>

                            Salvo no localStorage em
                            {" "}
                            {resultado.data}

                        </small>

                    </div>

                )}


                <button
                    className="voltar"
                    onClick={onBack}
                >

                    Voltar

                </button>

            </div>

        </section>

    );

}



function Contato({ onBack }) {

    const [form, setForm] = useState({

        email: "",

        mensagem: ""

    });


    const [enviado, setEnviado] =
        useState(false);


    function enviar(e) {

        e.preventDefault();


        localStorage.setItem(

            "jovi-contato",

            JSON.stringify(form)

        );


        setEnviado(true);

    }


    return (

        <section className="pagina-extra">

            <div className="centro">

                <h2>
                    Contato
                </h2>


                <form onSubmit={enviar}>

                    <div className="campo">

                        <label htmlFor="contato-email">

                            E-mail

                        </label>


                        <input

                            id="contato-email"

                            type="email"

                            required

                            value={form.email}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    email: e.target.value

                                })

                            }

                        />

                    </div>


                    <div className="campo">

                        <label htmlFor="mensagem">

                            Mensagem

                        </label>


                        <textarea

                            id="mensagem"

                            required

                            value={form.mensagem}

                            onChange={(e) =>

                                setForm({

                                    ...form,

                                    mensagem: e.target.value

                                })

                            }

                        />

                    </div>


                    <button type="submit">

                        Enviar

                    </button>

                </form>


                {enviado && (

                    <p className="mensagem">

                        Mensagem salva com sucesso!

                    </p>

                )}


                <button
                    className="voltar"
                    onClick={onBack}
                >

                    Voltar

                </button>

            </div>

        </section>

    );

}



function Footer({ onContato }) {

    return (

        <footer className="footer">

            <button
                className="btn botao-contato"
                onClick={onContato}
            >

                Contato

            </button>


            <p className="rodape">

                SPRINT 2 - JOVI 2026

            </p>

        </footer>

    );

}



export default function App() {

    const [pagina, setPagina] =
        useState("inicio");


    const [config, setConfig] =
        useState(null);


    
    useEffect(() => {

        const salvo =
            localStorage.getItem(STORAGE_KEY);


        if (salvo) {

            setConfig(
                JSON.parse(salvo)
            );

        }

    }, []);


    const beneficios = [

        {
            titulo: "Ambiente Escuro",

            texto:
                "A IA aumenta a iluminação sem perder qualidade."
        },

        {
            titulo: "Luz Forte",

            texto:
                "Ajuste automático de exposição e contraste."
        },

        {
            titulo: "Fotos Inteligentes",

            texto:
                "Melhor resultado mesmo sem conhecimento técnico."
        }

    ];


    function irPara(nome) {

        setPagina(nome);


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }



    if (pagina === "login") {

        return (

            <>

                <Header />

                <Login
                    onBack={() =>
                        irPara("inicio")
                    }
                />

                <Footer
                    onContato={() =>
                        irPara("contato")
                    }
                />

            </>

        );

    }

    
    if (pagina === "comparacao") {

        return (

            <>

                <Header />

                <Comparacao
                    onBack={() =>
                        irPara("inicio")
                    }
                />

                <Footer
                    onContato={() =>
                        irPara("contato")
                    }
                />

            </>

        );

    }



    if (pagina === "contato") {

        return (

            <>

                <Header />

                <Contato
                    onBack={() =>
                        irPara("inicio")
                    }
                />

                <Footer
                    onContato={() =>
                        irPara("contato")
                    }
                />

            </>

        );

    }


    
    return (

        <>

            <Header />


            <main>

                <Beneficios
                    beneficios={beneficios}
                />


                <Apresentacao
                    onComparacao={() =>
                        irPara("comparacao")
                    }
                />


                <div className="login-area">

                    <button
                        className="login-btn"
                        onClick={() =>
                            irPara("login")
                        }
                    >

                        Ir para Login

                    </button>

                </div>


                {config && (

                    <p className="config-info">

                        Última simulação salva:
                        exposição em
                        {" "}
                        {config.exposicao}%.

                    </p>

                )}

            </main>


            <Footer
                onContato={() =>
                    irPara("contato")
                }
            />

        </>

    );

}