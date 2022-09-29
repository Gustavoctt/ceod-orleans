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
          title="Atividades esportivas - Inscrição" 
          url="https://docs.google.com/forms/d/e/1FAIpQLScUmLqI-xmNPC63bXPdjQ0pWNw_stlO9irRoMOHoHjKL-vJ4w/viewform" 
        />
        <ButtonLink title="DM Talks - Inscrição" url="https://docs.google.com/forms/d/e/1FAIpQLSdU0iHQcrrycMwwhGLhC721v_AhyzCZzYFMhLQ8EbVYQ4W5hA/viewform"/>
      </section>
    </div>
  )
}

export default App
