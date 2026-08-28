import React from "react";
import Header from "./components/Header";
import Beneficios from "./components/Beneficios";
import Apresentacao from "./components/Apresentacao";
import Simulador from "./components/teste";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />

            <main>

                <Beneficios />

                <Apresentacao />

                <Simulador />

                <div className="login-area">
                    <a
                        href="/pages/login.html"
                        className="login-btn"
                    >
                        Ir para Login
                    </a>
                </div>

            </main>

            <Footer />
        </>
    );
}

export default App;