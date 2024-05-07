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
            <img className='rounded-full' src="https://static.wikia.nocookie.net/doblaje/images/0/0b/Swamp_Thing_Vol_5_25_Textless.jpg/revision/latest?cb=20161212060631&path-prefix=es" alt="Alejandro Jimenez" />
          </div>
          <a href="" className="link-sidebar">Lorem, ipsum.</a><a href="" className="link-sidebar">Minima, omnis.</a><a href="" className="link-sidebar">Autem, illum!</a><a href="" className="link-sidebar">Perferendis, repellat.</a><a href="" className="link-sidebar">Sint, odit!</a><a href="" className="link-sidebar">Debitis, obcaecati!</a><a href="" className="link-sidebar">Sint, voluptate.</a>
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
    <div className='rounded content border grow'></div>
  )
}

function App() {
  return <div className='container-screen'>
    <Sidebar />
    <Content />
  </div>
}

export default App
