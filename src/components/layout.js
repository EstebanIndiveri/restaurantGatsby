import React,{Fragment} from "react";
import PropTypes from "prop-types";
// import {createGlobalStyle} from 'styled-components';
import "./layout.css"
import Footer from '../components/Globals/Footer';
import Navbar from '../components/Globals/Navbar/Navbar'

const Layout = ({ children }) => {

  return (
    <Fragment>
      {/* <createGlobalStyle> */}
      <Navbar/>
      {children}
      <Footer/>
      {/* </createGlobalStyle> */}
    </Fragment>
  )
  
}
export default Layout;
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
