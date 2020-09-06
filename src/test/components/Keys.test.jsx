import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { Keys } from '../../Components/Keys';




describe('Test in <Keys />', () => {

const setExercise = jest.fn();
const wrapper = shallow(<Keys setExercise={setExercise}></Keys>);

    test('component matches the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('click on any button call the function ', () => {
        //simulates the click on button 1 sending the value of 1
        wrapper.find('button').at(0).simulate('click',{
            target:{
                value:'1'
            }
        });

        expect(setExercise).toHaveBeenCalled();
        //simulates the click of the 'AC' button
        wrapper.find('button').at(15).simulate('click');

        expect(setExercise).toHaveBeenCalledTimes(2);

    }); 
});
