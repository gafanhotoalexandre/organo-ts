import { useState } from 'react';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';
import { TextField } from '../TextField';
import './Formulario.css'

export function Formulario({ aoColaboradorCadastrado, nomesDosTimes }) {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  function handleForm(event) {
    event.preventDefault();
    aoColaboradorCadastrado({
      nome, cargo, imagem, time
    });
    // clear form
    setNome('');
    setCargo('');
    setImagem('');
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
        <ListaSuspensa
          label={'Time'}
          times={nomesDosTimes}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />

        <Botao>Criar card</Botao>
      </form>
    </section>
  );
}
