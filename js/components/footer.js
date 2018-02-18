import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
    return (
        <footer>
            <ul>
                <li>
                    <p>&#xa9; 2017 Rahul Vaidya</p>
                </li>
                <li>
                    <a href="https://github.com/rvaidyaa" title="Check out my code on GitHub"><i className="fa fa-github" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="mailto:rvaidyaa@gmail.com?Subject=Hello" title="Send me an email"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                </li>
            </ul>
        </footer>
    )
}
