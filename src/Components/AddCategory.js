import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { GifExpertApp } from '../GifExpertApp'

export const AddCategory = ({setCategories}) => {

   const [inputValue,setInputValue] = useState('');

   const handleInputChanges = (e) =>{

      // console.log(e.target.value);
      setInputValue(e.target.value);

   }

   const handleSubmit = (e) =>{
      e.preventDefault();
       if(inputValue.trim().length > 2){

          setCategories(catego => [ inputValue,...catego,]);
         setInputValue('');
       }

   }

   return (
      
      <form onSubmit={handleSubmit}>

         <input 
         type = 'text'
         value={inputValue}
         onChange={handleInputChanges}
         />

      </form>
         
      
   )
}

AddCategory.propTypes = {
   setCategories:PropTypes.func.isRequired
}

export default AddCategory;