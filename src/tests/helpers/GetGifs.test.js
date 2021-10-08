import { getGifs } from '../../helpers/getGifs'


describe('testing getGifs Fetch',()=> {

   test('should to show 10 element', async() =>{

      const gifs = await getGifs('One Punch');

      // console.log(gifs);

      expect(gifs.length).toBe(10);

   });

   test('should to show all the element', async()=>{

      const gifs = await getGifs('');

      // console.log(gifs);
      expect(gifs.length).toBe(0)

   })


})