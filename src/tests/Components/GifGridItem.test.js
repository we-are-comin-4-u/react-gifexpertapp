import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from "enzyme";
import {GifGridItem} from '../../Components/GifGridItem';

describe('tests on <GifGridItem/>', () => {

   const title = 'the fresh';
   const url = 'https//localhost/something.jpg';
   const wrapper = shallow(<GifGridItem title={title} url={url}/>);

   test('should to show the right component', () => {
      // const wrapper = shallow(<GifGridItem title={title} url={url}/>);
      expect(wrapper).toMatchSnapshot();
      
   })

   test('should to show a paragraph with the title',()=>{

      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);

   })

   test('should to show a imagen with *url* and *alt* of the props' , ()=>{

      const img = wrapper.find('img');
      // console.log(img.props().src);
      expect(img.prop('src')).toBe( url );
      expect(img.prop('alt')).toBe( title );

   })

   test('should to have card animate__animated animate__bounce', () => {

      const div = wrapper.find('div');
      // expect(div.prop('className')).toBe('card animate__animated animate__bounce')
       const className = div.prop('className');

       expect(className.includes('animate__bounce')).toBe(true);
   })
   
   
   
});
