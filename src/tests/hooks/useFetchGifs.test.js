 import '@testing-library/jest-dom';
 import { useFetchGifs } from "../../hooks/useFetchGifs";
 import { renderHook } from '@testing-library/react-hooks';

describe('testing hook useFestchGifs',()=>{
  
   test('should to show the initial state', async()=>{

      const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One Punch'))
      const {data , loading} = result.current;

      // console.log(data, loading);
      await waitForNextUpdate({timeout:4500});
      expect(data).toEqual([]);
       expect(loading).toBe(true);
      // expect(loading).toBeTruthy();
      // const {data:images,loading} = useFetchGifs(category);
      // const {data:loading} = useFetchGifs('One Punch');
   })
   test('should to return an images array and the loading in false', async()=>{
      const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
      await waitForNextUpdate({timeout:4500});
      const {data ,loading} = result.current;
      expect(data.length).toEqual(10);
      expect(loading).toBe(false);

   })
})