import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";
import { saveLink } from '../../services/storeLinks'

export default function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      saveLink('@encurtaLink', response.data)
      setData(response.data);
      setShowModal(true);
      setLink("");
    } catch {
      alert("Ops parece que algo deu errado!");
      setLink("");
    }
  }

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      handleShortLink()
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Encurtador de Links Logo" />
        <h1>Encurtador de Links</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={(e) => handlePressEnter(e)}
          />
        </div>

        <button onClick={handleShortLink}>Gerar link</button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
