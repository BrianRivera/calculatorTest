import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { Calculator } from '../../Components/Calculator';


describe('Test in <Calculator />', () => {
    
    const wrapper = shallow(<Calculator></Calculator>);

    test('component matches the snapshot | answer and exercise should take default values', () => {
        expect(wrapper).toMatchSnapshot();
        //brings the text of the exercise and answer with their default values 
        const dataExercise = wrapper.find('.resultCalculator h5').text();
        const dataResponse = wrapper.find('.resultCalculator h3').text();
        
        expect(dataExercise).toBe('0');
        expect(dataResponse).toBe('0');
    });

    test('the answer and the exercise must take values ​​sent in the call to the component', () => {
        const wrapper = shallow(<Calculator initialValue={5}></Calculator>);
        //bring the text of the exercise and answer with values ​​sent as Props 
        const dataExercise = wrapper.find('.resultCalculator h5').text();
        const dataResponse = wrapper.find('.resultCalculator h3').text();
        
        expect(dataExercise).toBe('5');
        expect(dataResponse).toBe('5');
    });

    /*
     The 3 tests will pass correctly,
     the error in the console is due to the fact that I defined the input of 'initialValue' 
     as a numeric through 'propType' but for this test it sends a String with 
     the exercise to be able to evaluate the answer
    */
    test('response the excercise', () => {
        const wrapper = shallow(<Calculator initialValue="4+6"></Calculator>);

        wrapper.find('.divBtnResult').prop('onClick')();
        expect(wrapper.find('.resultCalculator h3').text()).toBe('10')
    })
    
    
})
