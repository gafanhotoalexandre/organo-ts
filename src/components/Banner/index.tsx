import './Banner.css';

interface BannerProps {
  src: string;
  descricao?: string;
}

export function Banner({ src, descricao }: BannerProps) {
  return (
    <header className='banner'>
      {/* <img src="/images/banner.png" alt="O banner principal da página do Organo"/> */}
      <img src={src} alt={descricao}/>
    </header>
  );
}
