import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function QuestionTwo(props) {
    return (
        <main className='question-two'>
            <div className='questions'>
                <h3>What are your workout goals?</h3>
            </div>
            <div className='choices'>
                <input className='user-input start-button strength' id='question-two' type='button' name='goal' value='Strength' />
                <input className='user-input start-button hypertrophy' id='question-two' type='button' name='goal' value='Hypertrophy' />
                <input className='user-input start-button conditioning' id='question-two' type='button' name='goal' value='Conditioning' />
            </div>
        </main>
    )
}
