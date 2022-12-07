import './Rodape.css';

export function Rodape() {
  return (
    <footer className="rodape">
      <section>
        <ul>
          <li><a href="facebook.com" target="_blank">
            <img src="/images/fb.png" alt="Imagem logo do facebook" />
          </a></li>

          <li><a href="twitter.com" target="_blank">
            <img src="/images/tw.png" alt="Imagem logo do twitter" />
          </a></li>

          <li><a href="instagram.com" target="_blank">
            <img src="/images/ig.png" alt="Imagem logo do instagram" />
          </a></li>
        </ul>
      </section>

      <section>
        <img src={'/images/logo.png'} alt="Imagem logo do rodapé" />
      </section>

      <section>
        <p>Desenvolvido por Alexandre Martins</p>
      </section>
    </footer>
  );
}
