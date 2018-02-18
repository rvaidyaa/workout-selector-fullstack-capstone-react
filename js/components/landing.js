import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Landing(props) {
    return (
        <main className='landing'>
            <div className='catch'>
                <h2>Application Features</h2><br />
                <span>Workout Selector helps beginner and intermidate level lifters find a workout routine that fits your needs! Fully customizable.Click the weights to start answering a series of questions that will point you towards a solid routine that meets your needs.Some routines overlap.</span><br /><br />
            <div className='column-three'>
                <h4>Personalized</h4>
            <div className='icon'><i className='fa fa-bars' aria-hidden='true'></i></div>
                <h4>Routines</h4>
            </div>
            <div className='column-three'>
                <h4>Customize</h4>
                <div className='icon'><i className='fa fa-cog' aria-hidden='true'></i></div>
                <h4>Workouts</h4>
            </div>
            <div className='column-three'>
                <h4>Display</h4>
                <div className='icon'><i className='fa fa-calendar-minus-o' aria-hidden='true'></i></div>
                <h4>Calendar</h4>
            </div>
            <div><br /><input className='start-button selector' id='start' type='button' value='' /></div>
            </div>
        </main>
    )
}
