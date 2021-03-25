import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from 'components/organisms/NavBar/NavBar';
import GlobalStyle from 'theme/GlobalStyle';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import NotesPage from 'views/NotesPage';
import { Provider } from 'react-redux';
import store from 'store';

const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/notes" component={NotesPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default Root;
