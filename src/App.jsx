import { Outlet } from "react-router-dom"
import './App.css'
import { IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react'
import { Link } from "react-router-dom"
import { Yo } from '../src/components/Yo.jsx'


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
          <a href="" className="link-sidebar">Autem, illum!</a>
          <a href="" className="link-sidebar">Perferendis, repellat.</a>
        </div>
        <div className="horizontal gap-5">
          <IconBrandGithub className='cursor-pointer' />
          <IconBrandInstagram className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export function Content() {
  return (
    <div className='main-content rounded content border grow'>
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-3">¡Bienvenido a mi blog!</h2>
        <p className="mb-5">
          ¡Hola! Soy Alejandro Jiménez, un entusiasta desarrollador de software apasionado por la tecnología y el desarrollo web. En este espacio, compartiré contigo mis ideas, proyectos y pensamientos sobre diversos temas relacionados con la programación y la informática en general.
        </p>
        <h3 className="text-xl font-semibold mb-3">Sobre mí</h3>
        <p className="mb-5">
          Desde que descubrí mi interés por la programación, he estado explorando constantemente nuevas tecnologías y aprendiendo nuevas habilidades para mejorar como desarrollador. Mi objetivo es crear soluciones innovadoras y útiles que impacten positivamente en la vida de las personas.
        </p>
        <h3 className="text-xl font-semibold mb-3">Temas que encontrarás aquí</h3>
        <p className="mb-5">
          En este blog, encontraras algunos tips de programacion y en especial proyectos que yo he realizado con el fin de que tu tambien puedas ponerlos a prueba y aprendar al igual que yo el como desarrollar por ejemplo API'S
          o trabajar con HTML, JS y css, etc.
        </p>
        <h3 className="text-xl font-semibold mb-3">¡Conéctate conmigo!</h3>
        <p>
          ¡No dudes en seguirme en mis redes sociales para estar al tanto de las últimas actualizaciones y conversar sobre tecnología!
        </p>
        <div className="mt-5 flex gap-3">

          <a href="https://www.instagram.com/jose_jc.java?igsh=YXo3dDN0b3Rya2Jq" className="text-blue-500 hover:underline">Instagram</a>
          <br />
          <a href="https://www.linkedin.com/in/josebraulioe/" className="text-blue-500 hover:underline">LinkedIn</a>
          <br />
          <a href="https://github.com/jjimenez2022152" className="text-blue-500 hover:underline">GitHub</a>
          <br />
        </div>
      </div>

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
