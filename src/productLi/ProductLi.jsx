import React from 'react';
import Navbar from '../components/Navbar';
import Course from '../components/ProductLi';
import Footer from '../components/Footer';


function ProductLi() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
       <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default ProductLi