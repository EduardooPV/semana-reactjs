import "./notfound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return ( 
    <div className="container-error">
      <img src="/notfound.png" alt="Pagina não encontrada" />

      <h1>Página não encontrada!</h1>

      <Link to="/">
        Voltar para o início
      </Link>
    </div>
  )
}
