import { useState } from "react";
import Paragraph from "./Paragraph";


const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [currentParagraph, setCurrentParagraph] = useState("");

  // Função para adicionar um novo parágrafo
  const addParagraph = () => {
    if (currentParagraph.trim() !== "") {
      setParagraphs([
        ...paragraphs,
        { id: Date.now(), text: currentParagraph },
      ]);
      setCurrentParagraph(""); // Limpar o campo de texto
    }
  };

  // Função para salvar o rascunho
  const saveDraft = () => {
    // Simulando o salvar, pode ser logado no console
    console.log("Rascunho salvo:", paragraphs);
    alert("Rascunho Salvo!");
  };

  const clearText = () => {
    setCurrentParagraph("");
  };

  return (
    <div>
      <h1>RedaFácil</h1>
      <div className="subtitle">
        <p>Escreva uma redação de forma rápida, simples e prática</p>
      </div>
      <div className="paragraph-section">
        <textarea
          value={currentParagraph}
          onChange={(e) => setCurrentParagraph(e.target.value)}
          placeholder="Digite um novo parágrafo..."
        />
        <div className="buttons">
          <button className="addParagraph" onClick={addParagraph}>Adicionar Parágrafo</button>
          <button className="saveDraft" onClick={saveDraft}>Salvar Rascunho</button>
        </div>
        
          <button className="clearText" onClick={clearText}>Limpar</button>
      </div>

      <div className="text-container">
        <h2>Texto Completo</h2>
        {paragraphs.length === 0 && <p>Adicione parágrafos ao seu rascunho.</p>}

        <div className="text">
          {paragraphs.map((para) => (
            <Paragraph key={para.id} text={para.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraftEditor;
