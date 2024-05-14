import { Outlet } from "react-router-dom"
import './App.css'
import { IconBrandGithub, IconBrandInstagram, IconBrandOffice, IconBrandLinkedin } from '@tabler/icons-react'
import { Link } from "react-router-dom"
import { Yo } from '../src/components/Yo.jsx'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Sidebar() {
  return (
    <div className='rounded sidebar border grow'>
      <div className="vertical py-5 gap-5 px-3">
        <div className="vertical">
          <div className="center">

            <Yo className='rounded-full' />
          </div>
          <Link to="/" className="link-sidebar">Home</Link>
          <Link to="/my-projects" className="link-sidebar">Mis proyectos.</Link>
        </div>
        <div className="horizontal gap-5">
          <IconBrandGithub className='cursor-pointer' />
          <IconBrandInstagram className='cursor-pointer' />
          <IconBrandOffice className='cursor-pointer'/>
          <IconBrandLinkedin className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export function Content() {
  return (
    <div className='main-content rounded content border grow'>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {/* Sección 1 */}
        <div>
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-3">¡Bienvenido a mi blog!</h2>
            <p className="mb-5 font-roboto">
              ¡Hola! Soy Alejandro Jiménez, un entusiasta desarrollador de software apasionado por la tecnología y el desarrollo web. En este espacio, compartiré contigo mis ideas, proyectos y pensamientos sobre diversos temas relacionados con la programación y la informática en general.
            </p>
            <div className="images-container">
              <div className="image">
                <img src="https://s1.significados.com/foto/software-og.jpg" alt="Imagen 1" style={{ width: '400px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080087611-800x400.jpg" alt="Imagen 2" style={{ width: '400px', height: 'auto' }} />
              </div>
            </div>
            <div className="images-container">
              <div className="image">
                <img src="https://bambooagile.eu/wp-content/uploads/2021/09/1-10.png" alt="Imagen 3" style={{ width: '400px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://definicion.de/wp-content/uploads/2009/03/ingenieria-de-software.png" alt="Imagen 4" style={{ width: '400px', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Sección 2 */}
        <div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-3">Sobre mí</h3>
            <p className="mb-5 font-roboto">
              Desde que descubrí mi interés por la programación, he estado explorando constantemente nuevas tecnologías y aprendiendo nuevas habilidades para mejorar como desarrollador. Mi objetivo es crear soluciones innovadoras y útiles que impacten positivamente en la vida de las personas.
            </p>
            <div className="images-container">
              <div className="image">
                <img src="https://github.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/blob/main/models/xetululYo2.jpg?raw=true" alt="Imagen 1" style={{ width: '200px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://raw.githubusercontent.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/2368994c218c5b68ea0b3be0fd5c9afcf6ae0bad/db/monoyo.jpg" alt="Imagen 2" style={{ width: '200px', height: 'auto' }} />
              </div>
            </div>
            <div className="images-container">
              <div className="image">
                <img src="https://raw.githubusercontent.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/d5e2667b50c49d75c076f8a041b0ec90f3194ba4/db/imagen_2024-05-13_221320801.png" alt="Imagen 3" style={{ width: '200px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://raw.githubusercontent.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/f59c17d8d60e5d369bda1bd4f589f1336f1def02/models/xetululYo.jpg" alt="Imagen 4" style={{ width: '200px', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Sección 3 */}
        <div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-3">Temas que encontrarás aquí</h3>
            <p className="mb-5 font-roboto">
              En este blog, encontraras algunos tips de programacion y en especial proyectos que yo he realizado con el fin de que tu tambien puedas ponerlos a prueba y aprendar al igual que yo el como desarrollar por ejemplo API'S
              o trabajar con HTML, JS y css, etc.
            </p>
            <div className="images-container">
              <div className="image">
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="Imagen 1" style={{ width: '400px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://media.licdn.com/dms/image/D4D12AQF1btzrvx64aQ/article-cover_image-shrink_720_1280/0/1698242399109?e=2147483647&v=beta&t=_OkJ8ffsiTF8-_AxICCpZXT176KkvOziJb0uKDDk3r0" alt="Imagen 2" style={{ width: '400px', height: 'auto' }} />
              </div>
            </div>
            <div className="images-container">
              <div className="image">
                <img src="https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200" alt="Imagen 3" style={{ width: '400px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://fazendowebsites.com/wp-content/uploads/2019/01/html-1080x500.png" alt="Imagen 4" style={{ width: '400px', height: 'auto' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Sección 4 */}
        <div>
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-3">¡Conéctate conmigo!</h3>
            <p>
              ¡No dudes en seguirme en mis redes sociales para estar al tanto de las últimas actualizaciones y conversar sobre tecnología!
            </p>
            <div className="images-container">
              <div className="image">
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6d/7b/b8/6d7bb822-7a76-46dd-ac7d-3da49ee60925/AppIcon-0-1x_U007emarketing-0-7-0-85-220-0.png/1200x600wa.png" alt="Imagen 1" style={{ width: '400px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://cdn.logojoy.com/wp-content/uploads/20230511124058/instagram-new-gradient-logo-animation.gif" alt="Imagen 2" style={{ width: '400px', height: 'auto' }} />
              </div>
            </div>
            <div className="images-container">
              <div className="image">
                <img src="https://www.lisdatasolutions.com/wp-content/uploads/2022/04/Que-es-y-para-que-sirve-GitHub.jpg" alt="Imagen 3" style={{ width: '400px', height: 'auto' }} />
              </div>
              <div className="image">
                <img src="https://www.muycomputer.com/wp-content/uploads/2023/03/Outlook-1-1000x600.png" alt="Imagen 4" style={{ width: '400px', height: 'auto' }} />
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <a href="https://www.instagram.com/jose_jc.java?igsh=YXo3dDN0b3Rya2Jq" className="text-blue-500 hover:underline">Instagram</a>
              <br />
              <a href="https://www.linkedin.com/in/josebraulioe/" className="text-blue-500 hover:underline">LinkedIn</a>
              <br />
              <a href="https://github.com/jjimenez2022152" className="text-blue-500 hover:underline">GitHub</a>
              <br />
              <a href="https://outlook.office.com" className="text-blue-500 hover:underline">Outlook</a>
              <br />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

function App() {
  return <div className='container-screen'>
    <Sidebar />
    <div className="content-and-comments">
      <Outlet />
      {/* <Coments /> */}
    </div>
  </div>
}

export default App
