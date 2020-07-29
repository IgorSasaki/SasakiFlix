import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/Home/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './components/Pages/Cadastro/Video';
import CadastroCategoria from './components/Pages/Cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} /> página 404
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);