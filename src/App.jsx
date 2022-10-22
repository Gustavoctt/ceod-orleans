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
        <ButtonLink title="Mapa" url="https://drive.google.com/file/d/1aGKCONcd072P2ht5Antzr-v_ni8w_kPr/view"/>
        <ButtonLink title="Tabela de Esportes" url="https://drive.google.com/drive/folders/1B0bc65yyas8ZYwaYgpbDsJxAXvZicUJD" />
      </section>
    </div>
  )
}

export default App
