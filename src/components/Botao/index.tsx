import { ReactElement } from 'react';
import './Botao.css';

interface BotaoProps {
  children: ReactElement | string;
}

export function Botao({ children }: BotaoProps) {
  return (
    <button className="botao">{children}</button>
  );
}
