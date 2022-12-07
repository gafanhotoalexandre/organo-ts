import './Colaborador.css';

interface ColaboradorProps {
  nome: string;
  cargo: string;
  imagem: string;
  data: string;
  corDeFundo: string;
}

export function Colaborador({
  nome, cargo, imagem, data, corDeFundo
}: ColaboradorProps ) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt="Imagem de Usuário" />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{data}</h5>
      </div>
    </div>
  );
}
