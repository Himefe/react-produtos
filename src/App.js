import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./components/Contato";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Product from "./components/Product";
import "./index.css";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="produto/:id" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
