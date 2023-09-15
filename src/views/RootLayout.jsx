import { Outlet, Link } from "react-router-dom";

export default function RootLayout(){
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Início</Link>
                    <Link to="/grupos">Acessar grupos</Link>
                </nav>
            </header>
            <main className="container-fluid">
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
}