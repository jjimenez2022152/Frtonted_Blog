import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react'

function Sidebar() {
  return (
    <div className='rounded sidebar border grow'>
      <div className="vertical py-5 gap-5 px-3">
        <div className="vertical">
          <div className="center">
            <img className='rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/458px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" alt="Alejandro Jimenez" />
          </div>
          <a href="" className="link-sidebar">Home</a><a href="" className="link-sidebar">Mis proyectos.</a><a href="" className="link-sidebar">Autem, illum!</a><a href="" className="link-sidebar">Perferendis, repellat.</a><a href="" className="link-sidebar">Sint, odit!</a><a href="" className="link-sidebar">Debitis, obcaecati!</a><a href="" className="link-sidebar">Sint, voluptate.</a>
        </div>
        <div className="horizontal gap-5">
          <IconBrandGithub className='cursor-pointer' />
          <IconBrandInstagram className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className='rounded content border grow'>
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
          <a href="#" className="text-blue-500 hover:underline">Twitter</a>
          <br />
          <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          <br />
          <a href="#" className="text-blue-500 hover:underline">GitHub</a>
          <br />
        </div>
      </div>
      
    </div>
    
  )
}

function Coments() {
  return (
    <div className='rounded coment border grow'></div>
  )
}

function App() {
  return <div className='container-screen'>
    <Sidebar />
    <Content />
    <Coments/>
  </div>
}

export default App
