import { useState } from 'react';
import { IColaborador } from '../../interface/IColaborador';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';
import { TextField } from '../TextField';
import './Formulario.css'

interface FormularioProps{
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  nomesDosTimes: string[];
}

export function Formulario({
  aoColaboradorCadastrado, nomesDosTimes
}: FormularioProps) {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');

  function handleForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    aoColaboradorCadastrado({
      nome, cargo, imagem, data, time
    });
    // clear form
    setNome('');
    setCargo('');
    setImagem('');
    setData('')
    setTime('');
  }

  return (
    <section className='formulario'>
      <form
        onSubmit={handleForm}
      >
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField
          label={'Nome'}
          placeholder={'Digite o seu nome'}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
          required={true}
        />
        <TextField
          label={'Cargo'}
          placeholder={'Digite o seu cargo'}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          required={true}
        />
        <TextField
          label={'Imagem'}
          placeholder={'Informe o endereço da imagem'}
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <TextField
          label={'Data da entrada no time'}
          placeholder={''}
          valor={data}
          aoAlterado={valor => setData(valor)}
          tipo={'date'}
          required={true}
        />
        <ListaSuspensa
          label={'Time'}
          times={nomesDosTimes}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          required={true}
        />

        <Botao>Criar card</Botao>
      </form>
    </section>
  );
}
