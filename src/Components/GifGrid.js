import React from 'react' // { useState,useEffect }
import PropTypes from 'prop-types'

import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   //  const[images,setImages] = useState([])
     const {data:images,loading} = useFetchGifs(category);

   //   console.log(loading);
   //   console.log(data);
   // useEffect(()=>{
   //    getGifs(category).then(setImages);
   // },[category]);

   
      // getGifs();

   return (
      <>
         <h3 className ="animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading...👩‍💻</p>  }

         
       <div className = "card-grid">
          {/* <h3>{count}</h3> */}
         
            
            
               {
                  images.map(img => ( 
                     <GifGridItem 
                     key = {img.id}//acostumbrate a usar la destructuracion
                        {...img} //esto es un operador expres hay mucho ejemplos en net
                     />  
                  ))

               }
               
      </div> 
      </>
   )
}

GifGrid.propTypes = {
   category: PropTypes.string.isRequired
}