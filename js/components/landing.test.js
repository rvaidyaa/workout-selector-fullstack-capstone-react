import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Homepage from './landing';

describe('<Landing />', () => {
    it('Renders without crashing', () => {
        shallow(<Landing />);
                });
    });
