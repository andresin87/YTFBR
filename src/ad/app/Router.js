import React from 'react';
import {Switch, Route} from 'react-router-dom';

import TemplateMenu from '../template/TemplateMenu';
import Home from './Home';
import Battle from './Battle';
import Player from './Player';
import About from './About';

const Main = () => (
  <Switch>
    <Route exact path='/' render={() => (<TemplateMenu><Home /></TemplateMenu>)}/>
    <Route path='/battle' render={() => (<TemplateMenu><Battle /></TemplateMenu>)}/>
    <Route path='/player' render={() => (<TemplateMenu><Player /></TemplateMenu>)}/>
    <Route path='/about' render={() => (<TemplateMenu><About /></TemplateMenu>)}/>
  </Switch>
);
export default Main;
