import { Colaborador } from '../Colaborador';
import './Time.css';

export function Time({ nome, corPrimaria, corSecundaria, colaboradores }) {
  const css = { backgroundColor: corSecundaria };

  return (
    (colaboradores.length > 0) && (
      <section className="time" style={css}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>

        <div className="colaboradores">
          {colaboradores.map(({nome, cargo, imagem}, index) => (
            <Colaborador
              key={index}
              nome={nome}
              cargo={cargo}
              imagem={imagem}
              corDeFundo={corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
}
