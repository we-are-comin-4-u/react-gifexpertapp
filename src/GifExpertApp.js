import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
 
// const categories = ['One Punch ,', 'Samurai X, ', 'Dragon Ball']


export const GifExpertApp = ({defaultCategories = []}) => {
   // const [categories, setCategories] = useState(['One Punch ']);
   const [categories, setCategories] = useState(defaultCategories);

   // const handleAdd = () =>{
      //  setCategories (['Golden Boy',...categories]);
      //  setCategories( catego => [...catego,'Superman'] )
      
   // }
   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories ={setCategories}/>
         <hr/>
         {/* <button onClick ={handleAdd}>✅</button> */}

        
            <ol>
               {
                  categories.map(category =>(
                     <GifGrid 
                     key = {category}
                     category ={category}
                     />
                     ))
               }
            </ol>
         

      </>
   )
}

export default GifExpertApp;