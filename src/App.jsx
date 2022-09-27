import { ButtonLink } from './components/ButtonLink';

import styles from './App.module.css'

import logoCapitulo from './assets/logo-cap.png';
import logoCeod from './assets/logo-ceod.png';
import footer from './assets/footer.png';

function App() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.imagesTop}>
          <img className={styles.logoCapitulo} src={logoCapitulo} />
          <img className={styles.logoCeod} src={logoCeod} />
        </div>
        <div className={styles.imagesFooter}>
          <img className={styles.logoDmSc} src={footer}/>
        </div>
      </header>

      <section>
        <ButtonLink 
          title="Compre seu ingresso" 
          url="https://www.sympla.com.br/evento/xxxi-congresso-estadual-da-ordem-demolay-para-o-estado-de-santa-catarina/1659003" 
        />
        <ButtonLink title="Mapa do evento" url="https://github.com/"/>
        <ButtonLink title="Cronograma" url="https://github.com/"/>
      </section>
    </div>
  )
}

export default App
