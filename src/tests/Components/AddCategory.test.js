import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import {AddCategory} from '../../Components/AddCategory'
describe('testing <AddCategory/>', ()=>{
   
   const setCategories = jest.fn();
   let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);

   beforeEach(()=>{
      jest.clearAllMocks();
       wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
       
      //   wrapper.find('input','form').simulate(
         //  'change',{target:{value:value}},
         //  'submit',{preventDefault(){}});

   })

   test('should to show all is already',()=>{
      
      expect(wrapper).toMatchSnapshot();
      
   })

   test('should to change text box', ()=>{

      const input = wrapper.find('input');
      const value = 'Im workint on it';
      input.simulate('change', {target:{value:value}});
      expect(wrapper.find('p').text().trim()).toBe(value )

   })

   test('shouldn,t call information with submit',()=>{

      wrapper.find('form').simulate('submit',{preventDefault(){}});
      
      expect(setCategories).not.toHaveBeenCalled();

   })

   test('should to call setCategories and clean the text box',()=>{

      const value ='You,re an asshole'
      wrapper.find('input').simulate('change',{target:{value:value}});
      wrapper.find('form').simulate('submit',{preventDefault(){}});
      expect(setCategories).toHaveBeenCalled();
      expect(setCategories).toHaveBeenCalledTimes(1);
      expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
      expect(wrapper.find('input').prop('value')).toBe('');
      //   const input = wrapper.find('input');
      //   const value = '';
      //   input.simulate('change', {target:{value:value}});
      //    expect(wrapper.find('p').text().trim()).toBe(value );
      //    wrapper.find('form').simulate('submit',{preventDefault(){}});
      //    expect(setCategories).not.toHaveBeenCalled();


   })




})