// import { prototype } from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react';
import PropTypes from 'prop-types';




export const GifGridItem = ({title,url}) => {

   // console.log({id,title,url});
   return (
      <div className = 'card animate__animated animate__bounce'>
         <img src = {url} alt = {title}/>
         <p>{title}</p>
      </div>
   )
}


GifGridItem.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   
   
}




// import PropTypes from 'prop-types';
