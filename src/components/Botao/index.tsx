import { ReactElement } from 'react';
import './Botao.css';

interface BotaoProps {
  children: ReactElement;
}

export function Botao({ children }: BotaoProps) {
  return (
    <button className="botao">{children}</button>
  );
}
