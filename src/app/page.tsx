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

        <div className={styles.experience}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path>
            </svg>
            +2 años de experiencia en desarrollo web
          </span>
        </div>

        <a href="/docs/cv-jeff.pdf" download>
          <button className={styles.downloadCV}>
            Descargar CV
          </button>
        </a>
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
      <Image src="/logos/python.png" alt="Python" width={32} height={32} />
      <span>Python</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/javascript.png" alt="JavaScript" width={32} height={32} />
      <span>JavaScript</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/php.png" alt="PHP" width={32} height={32} />
      <span>PHP</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/csharp.png" alt="C#" width={32} height={32} />
      <span>C#</span>
    </div>

    {/* Frameworks Frontend */}
    <div className={styles.skill}>
      <Image src="/logos/vue3.png" alt="Vue.js" width={32} height={32} />
      <span>Vue 3</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/react.webp" alt="React" width={32} height={32} />
      <span>React</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/angular.png" alt="AngularJS" width={32} height={32} />
      <span>AngularJS</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/angular.png" alt="Angular" width={32} height={32} />
      <span>Angular</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/next.png" alt="Next.js" width={32} height={32} />
      <span>Next.js</span>
    </div>

    {/* Frameworks Backend */}
    <div className={styles.skill}>
      <Image src="/logos/django.png" alt="Django" width={32} height={32} />
      <span>Django</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/flask.png" alt="Flask" width={32} height={32} />
      <span>Flask</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/expressjs.png" alt="Express" width={32} height={32} />
      <span>Express</span>
    </div>
    <div className={styles.skill}>
      <Image src="/logos/codeigniter3.png" alt="CodeIgniter" width={32} height={32} />
      <span>CodeIgniter 3</span>
    </div>

    {/* Herramientas */}
    <div className={styles.skill}>
        <Image src="/logos/nodejs.png" alt="Node.js" width={32} height={32} />
            <span>Node.js</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/git.png" alt="Git" width={32} height={32} />
            <span>Git</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/github.png" alt="GitHub" width={32} height={32} />
            <span>GitHub</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/pinia.png" alt="Pinia" width={32} height={32} />
            <span>Pinia</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/vite.png" alt="Vite" width={32} height={32} />
            <span>Vite</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/apache.png" alt="Apache2" width={32} height={32} />
            <span>Apache2</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/unity.png" alt="Unity" width={32} height={32} />
            <span>Unity</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/nginx.png" alt="Nginx" width={32} height={32} />
            <span>Nginx</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/gulp.png" alt="Gulp" width={32} height={32} />
            <span>Gulp</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/firebase.png" alt="Firebase" width={32} height={32} />
            <span>Firebase</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/recaptcha3.png" alt="ReCaptcha 3" width={32} height={32} />
            <span>ReCaptcha 3</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/docker.png" alt="Docker" width={32} height={32} />
            <span>Docker</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/smtp.png" alt="SMTP" width={32} height={32} />
            <span>SMTP</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/openlayers.png" alt="OpenLayers" width={32} height={32} />
            <span>OpenLayers</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/trello.png" alt="Trello" width={32} height={32} />
            <span>Trello</span>
          </div>

          {/* Bases de Datos */}
          <div className={styles.skill}>
            <Image src="/logos/mysql.png" alt="MySQL" width={32} height={32} />
            <span>MySQL</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/sonicwall.png" alt="Firewall SonicWall" width={32} height={32} />
            <span>Firewall SonicWall</span>
          </div>

          {/* CMS */}
          <div className={styles.skill}>
            <Image src="/logos/wordpress.png" alt="WordPress" width={32} height={32} />
            <span>WordPress</span>
          </div>
          <div className={styles.skill}>
            <Image src="/logos/joomla.png" alt="Joomla" width={32} height={32} />
            <span>Joomla</span>
          </div>

          {/* Sistemas Operativos */}
          <div className={styles.skill}>
            <Image src="/logos/linux.png" alt="Linux" width={32} height={32} />
            <span>Linux / Linux Server</span>
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