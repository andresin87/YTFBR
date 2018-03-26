import React from 'react';
import {Switch, Route} from 'react-router-dom';

import TemplateMenu from '../template/TemplateMenu';
import Home from './Home';
import Battle from './Battle';
import Player from './Player';
import About from './About';
import Gun from './Gun';

const Main = () => (
  <Switch>
    <Route exact path='/' render={() => (<TemplateMenu><Home /></TemplateMenu>)}/>
    <Route exact path='/battle' render={() => (
      <TemplateMenu>
        <Battle
          file={'/data/partida1/data.tsv'}
          parse={(data) => (data.map((element, index, arr) => ({...element, n: arr.length})))}
          columns={[
            {
              Header: "Position",
              id: "index",
              accessor: d => d.n - d.Index
            },
            {
              Header: "Time",
              columns: [
                {
                  Header: "min:sec",
                  id: "time-min",
                  accessor: d => `${d.min}:${d.sec}`,
                },
              ]
            },
            {
              Header: "Killer",
              id: "killer",
              accessor: d => d.Killer
            },
            {
              Header: "Killed",
              id: "killed",
              accessor: d => d.Killed
            },
            {
              Header: "Info",
              id: "info",
              accessor: d => d.Info
            }
          ]}
        />
      </TemplateMenu>
    )}/>
    <Route exact path='/battle/position' render={() => (
      <TemplateMenu>
        <Battle
          file={'/data/partida1/data.tsv'}
          parse={(data) => (data.map((element, index, arr) => ({...element, n: arr.length})))}
          columns={[
            {
              Header: "Position",
              id: "index",
              accessor: d => d.n - d.Index
            },
            {
              Header: "Time",
              columns: [
                {
                  Header: "min:sec",
                  id: "time-min",
                  accessor: d => `${d.min}:${d.sec}`,
                },
              ]
            },
            {
              Header: "Killer",
              id: "killer",
              accessor: d => d.Killer
            },
            {
              Header: "Killed",
              id: "killed",
              accessor: d => d.Killed
            },
            {
              Header: "Info",
              id: "info",
              accessor: d => d.Info
            }
          ]}
        />
      </TemplateMenu>
    )}/>
    <Route exact path='/battle/kills' render={() => (
      <TemplateMenu>
        <Battle
          file={'/data/partida1/data.tsv'}
          parse={(data) => {
            const temporal = {};
            debugger;
            data.forEach((element) => {
              if(!temporal[element.Killed]) {
                temporal[element.Killed] = {
                  Killer: element.Killed,
                  Killed: [],
                }
              }
            });
            data.forEach((element) => {
              if (element.Killer) {
                  try{
                    temporal[element.Killer].Killed.push({
                      Killed: element.Killed,
                      min: element.min,
                      sec: element.sec,
                      Info: element.Info,
                    });
                  } catch (e) {
                      console.warn(element.Killer);
                  }
              }
            });
            return Object.keys(temporal).map((key) => ({
              ...(temporal[key])
            })).sort((a, b) => a.Killed.length <= b.Killed.length);
          }}
          columns={[
            {
              Header: "Position",
              id: "index",
              accessor: d => d.n - d.Index
            },
            {
              Header: "Killer",
              id: "killer",
              accessor: d => d.Killer
            },
            {
              Header: "Kills",
              id: "killed",
              accessor: d => d.Killed,
              Cell: (row) => (null),
            },
          ]}
          subRowsKey="Killed"
        />
      </TemplateMenu>
    )}/>
    <Route exact path='/battle/resume' render={() => (
      <TemplateMenu>
        <Battle file={'/data/partida1/data.tsv'} />
      </TemplateMenu>
    )}/>
    <Route exact path='/player' render={() => (<TemplateMenu><Player /></TemplateMenu>)}/>
    <Route exact path='/gun' render={() => (<TemplateMenu><Gun /></TemplateMenu>)}/>
    <Route exact path='/about' render={() => (<TemplateMenu><About /></TemplateMenu>)}/>
  </Switch>
);
export default Main;
