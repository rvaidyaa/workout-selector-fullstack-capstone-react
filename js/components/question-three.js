import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function QuestionThree(props) {
    return (
        <main className='question-three'>
            <div className='questions'>
                <h3>How many days a week can you dedicate to lifting?</h3>
            </div>
            <div className='choices'>
                <input className='user-input start-button threex' type='button' id='question-three' name='frequency' value='Three or Less' />
                <input className='user-input start-button fourx' type='button' id='question-three' name='frequency' value='Four' />
                <input className='user-input start-button fivex' type='button' id='question-three' name='frequency' value='Five or More' />
            </div>

        </main>
    )
}
