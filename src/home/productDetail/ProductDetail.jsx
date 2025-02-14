import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function ProductDetail() {
  return (
   <>
   <Navbar/>
      
     <div className='mt-16 flex'>
       <img src="https://img.freepik.com/free-photo/front-view-stack-books-with-vase-flowers_23-2148827194.jpg?t=st=1732071738~exp=1732075338~hmac=02cca8cf5ccc9b943df05b83ee0db881673734a7db2315cdb6084aa227f144e2&w=360" alt="" />
        <p className='mt-56 px-20'>
        "We provide a diverse range of books to inspire, educate, and entertain readers of all ages and interests. From timeless classics and bestselling novels to academic resources and rare collections, our bookstore is a haven for book lovers. With a commitment to quality and a passion for literature, we aim to connect readers with the stories and knowledge that enrich their lives. Whether you're looking for your next great read or a thoughtful gift, we’re here to help you discover it."
        </p>
     </div>
     <Footer/>
   </>
  )
}

export default ProductDetail