import React from 'react';

import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import reacgt router deps


render(<Main/>, document.getElementById('root'))
