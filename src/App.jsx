import { useState } from 'react'
import { Banner } from './components/Banner'
import { Formulario } from './components/Formulario'
import { Rodape } from './components/Rodape';
import { Time } from './components/Time';

function App() {

  const times = [
    {
      id: 1,
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      id: 2,
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      id: 3,
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      id: 4,
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      id: 5,
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      id: 6,
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      id: 7,
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  function aoNovoColaboradorAdicionado(colaborador) {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div>
      <Banner
        src='/images/banner.png'
        descricao='O banner principal da página do Organo'
      />

      <Formulario
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        nomesDosTimes={times.map(time => time.nome)}
      />

      {times.map(time => (
        <Time
          key={time.id}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}

      <Rodape />
    </div>
  )
}

export default App
