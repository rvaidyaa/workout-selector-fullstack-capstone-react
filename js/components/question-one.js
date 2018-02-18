import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function QuestionOne(props) {
    return (
        <main className='question-one'>
            <div>
                <form action=''>
                    <div className='questions'>
                    <h3>Describe your workout experience.</h3>
                    </div>
                        <div className='choices'>
                        <input className='user-input start-button beginner ' id='question-one' type='button' name='skill' value='Beginner' />
                        <input className='user-input start-button advanced ' id='question-one' type='button' name='skill' value='Advanced' />
                    </div>
                </form>
            </div>
        </main>
    )
}
