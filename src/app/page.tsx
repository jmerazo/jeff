import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      
      {/* Sección de Presentación */}
      <section className={styles.introSection}>
        <Image
          className={styles.logo}
          src="/img/jeff.jpg"
          alt="Jeff"
          width={220}
          height={220}
          priority
        />
        <h1 className={styles.name}>Yerson Muñoz Erazo</h1>
        <p className={styles.description}>
          Ingeniero de Sistemas y Desarrollador Full Stack junior, enfocado en Backend, con experiencia en proyectos gubernamentales. Apasionado por el desarrollo de soluciones eficientes y el aprendizaje continuo.
        </p>
      </section>

      {/* Experiencia Laboral */}
      <section className={styles.card}>
        <h2>Experiencia Laboral</h2>
        <ul>
          <li>Proyecto Semillas - Sara: <a href="https://sara.corpoamazonia.gov.co/" target="_blank">sara.corpoamazonia.gov.co</a></li>
          <li>Apirest Sara: <a href="https://apisara.corpoamazonia.gov.co" target="_blank">apisara.corpoamazonia.gov.co</a></li>
          <li>GesDoc: <a href="http://gesdoc.putumayo.gov.co/#!/page/login" target="_blank">gesdoc.putumayo.gov.co</a></li>
          <li>PQRDS: <a href="https://pqrds.putumayo.gov.co/" target="_blank">pqrds.putumayo.gov.co</a></li>
          <li>Administración CMS Joomla: <a href="https://www.putumayo.gov.co/" target="_blank">putumayo.gov.co</a></li>
          <li>GLPI Soporte: <a href="https://soporte.putumayo.gov.co/" target="_blank">soporte.putumayo.gov.co</a></li>
          <li>Aplicación Movil Appsheet Sara</li>
        </ul>
      </section>

      {/* Habilidades Técnicas */}
      <section className={styles.card}>
  <h2>Habilidades Técnicas</h2>
  <div className={styles.skillsList}>
    {/* Lenguajes */}
    <div className={styles.skill}>
      <Image src="/icons/python.png" alt="Python" width={32} height={32} />
      <span>Python</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/javascript.png" alt="JavaScript" width={32} height={32} />
      <span>JavaScript</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/php.png" alt="PHP" width={32} height={32} />
      <span>PHP</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/csharp.png" alt="C#" width={32} height={32} />
      <span>C#</span>
    </div>

    {/* Frameworks Frontend */}
    <div className={styles.skill}>
      <Image src="/icons/vue.png" alt="Vue.js" width={32} height={32} />
      <span>Vue 3</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/react.png" alt="React" width={32} height={32} />
      <span>React</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/angular.png" alt="AngularJS" width={32} height={32} />
      <span>AngularJS</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/angular.png" alt="Angular" width={32} height={32} />
      <span>Angular</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/nextjs.png" alt="Next.js" width={32} height={32} />
      <span>Next.js</span>
    </div>

    {/* Frameworks Backend */}
    <div className={styles.skill}>
      <Image src="/icons/django.png" alt="Django" width={32} height={32} />
      <span>Django</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/flask.png" alt="Flask" width={32} height={32} />
      <span>Flask</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/express.png" alt="Express" width={32} height={32} />
      <span>Express</span>
    </div>
    <div className={styles.skill}>
      <Image src="/icons/codeigniter.png" alt="CodeIgniter" width={32} height={32} />
      <span>CodeIgniter 3</span>
    </div>

    {/* Herramientas */}
    <div className={styles.skill}>
        <Image src="/icons/nodejs.png" alt="Node.js" width={32} height={32} />
            <span>Node.js</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/git.png" alt="Git" width={32} height={32} />
            <span>Git</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/github.png" alt="GitHub" width={32} height={32} />
            <span>GitHub</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/pinia.png" alt="Pinia" width={32} height={32} />
            <span>Pinia</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/vite.png" alt="Vite" width={32} height={32} />
            <span>Vite</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/lerna.png" alt="Lerna" width={32} height={32} />
            <span>Lerna</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/unity.png" alt="Unity" width={32} height={32} />
            <span>Unity</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/pug.png" alt="Pug" width={32} height={32} />
            <span>Pug</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/gulp.png" alt="Gulp" width={32} height={32} />
            <span>Gulp</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/firebase.png" alt="Firebase" width={32} height={32} />
            <span>Firebase</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/recaptcha.png" alt="ReCaptcha 3" width={32} height={32} />
            <span>ReCaptcha 3</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/docker.png" alt="Docker" width={32} height={32} />
            <span>Docker</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/smtp.png" alt="SMTP" width={32} height={32} />
            <span>SMTP</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/openlayers.png" alt="OpenLayers" width={32} height={32} />
            <span>OpenLayers</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/trello.png" alt="Trello" width={32} height={32} />
            <span>Trello</span>
          </div>

          {/* Bases de Datos */}
          <div className={styles.skill}>
            <Image src="/icons/mysql.png" alt="MySQL" width={32} height={32} />
            <span>MySQL</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/sqlserver.png" alt="SQL Server" width={32} height={32} />
            <span>SQL Server</span>
          </div>

          {/* CMS */}
          <div className={styles.skill}>
            <Image src="/icons/wordpress.png" alt="WordPress" width={32} height={32} />
            <span>WordPress</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/joomla.png" alt="Joomla" width={32} height={32} />
            <span>Joomla</span>
          </div>

          {/* Sistemas Operativos */}
          <div className={styles.skill}>
            <Image src="/icons/windows.png" alt="Windows" width={32} height={32} />
            <span>Windows</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/linux.png" alt="Linux" width={32} height={32} />
            <span>Linux</span>
          </div>
          <div className={styles.skill}>
            <Image src="/icons/macos.png" alt="MacOS" width={32} height={32} />
            <span>MacOS</span>
          </div>
        </div>
      </section>


      {/* Proyectos Destacados */}
      <section className={styles.card}>
        <h2>Proyectos Destacados</h2>
        <ul>
          <li>Desarrollo de APIs RESTful para sistemas de información gubernamentales</li>
          <li>Implementación de CMS y aplicaciones de gestión documental</li>
          <li>Optimización de aplicaciones web y soporte técnico en plataformas de entidades públicas</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}