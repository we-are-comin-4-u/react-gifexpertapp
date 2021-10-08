import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { GifExpertApp } from '../GifExpertApp'

export const AddCategory = ({setCategories}) => {

   const [inputValue,setInputValue] = useState('');

   const handleInputChanges = (e) =>{
   // console.log(e.target.value);
      setInputValue(e.target.value);
      // console.log('handleInputChangeswas called sucesfully')

   }

   const handleSubmit = (e) =>{
      e.preventDefault();
      
      // console.log('handleSubmit', inputValue)

       if(inputValue.trim().length > 2){

          setCategories(catego => [ inputValue,...catego,]);
         setInputValue('');
       }

   }

   return (
      
      <form onSubmit={handleSubmit}>
         <p>{inputValue}</p>
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