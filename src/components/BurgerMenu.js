import React from 'react'
import { Link } from 'gatsby'
// import logo from '../img/logo.svg'
import './BurgerMenu.css'
import { slide as Menu } from 'react-burger-menu'

// var styles = {
//   bmBurgerButton: {
//     position: 'fixed',
//     width: '36px',
//     height: '30px',
//     left: '36px',
//     top: '36px'
//   },
//   bmBurgerBars: {
//     background: '#252e3b'
//   },
//   bmBurgerBarsHover: {
//     // background: '#5743df',
//   },
//   bmCrossButton: {
//     height: '24px',
//     width: '24px'
//   },
//   bmCross: {
//     background: '#b8b7ad'
//   },
//   bmMenuWrap: {
//     position: 'fixed',
//     height: '100vh'
//   },
//   bmMenu: {
//     background: '#fff',
//     padding: '2.5em 1.5em 0',
//     fontSize: '1.15em'
//   },
//   bmMorphShape: {
//     fill: '#373a47'
//   },
//   bmItemList: {
//   },
//   bmItem: {
//     '&:hover' :{
//       color: '#3f9c93',
//       backgroundColor:'white'
//     },
//     display: 'block',
//     testDecoration: 'none',
//     // color: '#b8b7ad',
//     color: '#3f9c93',
//     fontWeight: '600',
//     padding: '0.8em'
//   },
//   bmOverlay: {
//     background: 'rgba(0, 0, 0, 0.3)'
//   }
// }


const BurgerMenu = class extends React.Component {

//   componentDidMount() {
//     // Get all "navbar-burger" elements
//    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
//     // Check if there are any navbar burgers
//    if ($navbarBurgers.length > 0) {
 
//      // Add a click event on each of them
//      $navbarBurgers.forEach( el => {
//        el.addEventListener('click', () => {
 
//          // Get the target from the "data-target" attribute
//          const target = el.dataset.target;
//          const $target = document.getElementById(target);
 
//          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//          el.classList.toggle('is-active');
//          $target.classList.toggle('is-active');
 
//        });
//      });
//    }
//  }
 
 render() {
   return (
  
    <Menu >
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/membership">
        Join IEEE
      </Link>
    </Menu>
  // <nav className="navbar" role="navigation" aria-label="main-navigation">
  //   <div className="container">
    
    
  //     <div className="navbar-brand">
  //       <Link to="/" className="navbar-item" title="Logo">
  //         IEEE SB TKMCE
  //       </Link>
  //       <div className="navbar-burger burger" data-target="navMenu">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //       </div>
  //     </div>
  //     <div id="navMenu" className="navbar-menu">
  //     <div className="navbar-start has-text-centered">
  //       <Link className="navbar-item" to="/about">
  //         About
  //       </Link>
  //       <Link className="navbar-item" to="/membership">
  //         Join IEEE
  //       </Link>
  //     </div>
  //     </div>
  //   </div>
  // </nav>
  )}
}

export default BurgerMenu
