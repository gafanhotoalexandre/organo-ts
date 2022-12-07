import { IColaborador } from '../../interface/IColaborador';
import { Colaborador } from '../Colaborador';
import './Time.css';

interface TimeProps {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  colaboradores: IColaborador[]
}

export function Time({
  nome, corPrimaria, corSecundaria, colaboradores
}: TimeProps ) {
  const css = { backgroundColor: corSecundaria };

  return (
    (colaboradores.length > 0) ? (
      <section className="time" style={css}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>

        <div className="colaboradores">
          {colaboradores.map(({ nome, cargo, imagem, data }, index) => (
            <Colaborador
              key={index}
              nome={nome}
              cargo={cargo}
              imagem={imagem}
              data={data}
              corDeFundo={corPrimaria}
            />
          ))}
        </div>
      </section>
    ) : <></>
  );
}
