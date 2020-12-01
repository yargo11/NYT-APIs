import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Fetch from '../pages/Fecth';
import Dados from '../pages/Dados';
import CatFactsAll from '../pages/CatFactsAll';
import CatFactsWithID from '../pages/CatFactsWithID';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* <Route path="/" exact component={Dados} /> */}
    <Route path="/fetch" component={Fetch} />
    <Route path="/catfactsall" component={CatFactsAll} />
    <Route path="/catfactswithid" component={CatFactsWithID} />
  </Switch>
);
export default Routes;
