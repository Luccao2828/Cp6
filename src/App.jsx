import { } from 'react'


import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import styles from '/src/css/Footer.module.css'
function App() {
  
  

  return (
    
    
      <div className={styles['body-container']}>
      <div className={styles['main-content']}></div>
      





      <Nav />
      <Outlet />
      <Footer />

      </div>
  )
}

export default App
