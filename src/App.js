// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import News from './components/News/News';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/profile'
          render={() => <Profile
            // store={props.store}
            // profilePage={props.store.getState().profilePage} 
            // dispatch={props.dispatch} 
            />
            } />
        <Route path='/messages'
          render={() => <MessagesContainer
              store={props.store}
            // messagesPage={props.store.getState().messagesPage}
            // dispatch={props.store.dispatch} 
            />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/setting' component={Setting} />
      </div>
    </div>
  );
}

export default App;
