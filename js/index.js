import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Footer from '../js/components/footer';
import Landing from '../js/components/landing';
import QuestionOne from '../js/components/question-one';


document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Header />,
                                                  document.getElementById('reactHeader'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Footer />,
                                                  document.getElementById('reactFooter'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Landing />,
                                                  document.getElementById('reactLanding'));} );
document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<QuestionOne />,
                                                  document.getElementById('reactquestion-one'));} );
