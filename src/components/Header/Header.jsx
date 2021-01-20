import React , {useState } from 'react'
import Navbar from '../Navbar/Navbar'
import style from './header.module.scss'
import logo from '../../assets/images/logo.png'
import {MdClose} from 'react-icons/md'


const Header = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const toggleMenu = () =>  setIsMenuOpen(!isMenuOpen)
    return (
       <header className={style.siteHeader}>
           <a className={style.logo} href="/">
               <img src={logo} alt="logo" title="logo" />
           </a>
             {isMenuOpen ? <MdClose size="2em" onClick={toggleMenu} className={style.menuBurger} /> : <img className={style.menuBurger} src="https://img.icons8.com/metro/26/000000/menu.png" alt="burger menu" onClick={toggleMenu} />}
           <Navbar  isMenuOpen={isMenuOpen}  />
       </header>
    )
}

export default Header
