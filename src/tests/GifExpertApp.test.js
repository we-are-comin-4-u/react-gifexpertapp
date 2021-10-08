import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifExpertApp} from '../GifExpertApp';

describe('testing <GifExpertApp/> ',()=>{

   test('should to show the right snatshot',()=>{

      const wrapper = shallow( <GifExpertApp/>)

      expect(wrapper).toMatchSnapshot();
      
   })

   test('should to show a list of categories',()=>{

      const categories = ['One Punch', 'Dragon Ball']
      const wrapper = shallow( <GifExpertApp defaultCategories = {categories}/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);
   })



});