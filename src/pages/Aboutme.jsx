import photo from "../assets/Foto3.png";
import pdf from '../assets/CV Evelyn Garrido.pdf'
import toast, { Toaster } from 'react-hot-toast';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Aboutme = () => {

  const notify = ()=>{
    toast.success('Copied', {
      duration: 1000,
      position: 'top-center'
    });
  }

  return (
    <div className="square-background">
      <div className="square-about">
        <img src={photo} alt="Foto" className="foto-about" />
        <div>
          <h1>Evelyn Garrido</h1>
          <p className="text-about">
            Soy una desarrolladora Web con conocimientos en HTML, CSS, Javascript, React js, Node js, entre otras herramientas que busco seguir adquiriendo. Me destaco por ser una persona disciplinada, comprometida, resiliente y con objetivos claros respecto a concluir con éxito las metas que me impongo en el camino. Tengo gran habilidad comunicativa y disposición a ser un aporte en los proyectos que soliciten de mis competencias.<br></br>
            Si deseas contactarme, escríbeme a 
            <CopyToClipboard text='evelyn.harleth.gl@gmail.com'>
              <span onClick={notify}> evelyn.harleth.gl@gmail.com <i className="fa-regular fa-copy copy"></i> </span> 
            </CopyToClipboard>
            o dá click <a href={pdf} target='_blank'>Aquí.</a>
          </p>
          <Toaster 
            toastOptions={{
              style: {
                fontSize: '25px'
              }
            }}
          />
          <h3>EG.</h3>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
