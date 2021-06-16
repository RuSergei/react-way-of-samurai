import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MessagesContainer from './components/Messages/MessagesContainer';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <div className="app-wrapper">

      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/messages'
          render={() => <MessagesContainer />} />
        <Route path='/users'
          render={() => <UsersContainer />} />
        <Route path='/news'
          render={() => <NewsContainer />} />
        <Route path='/music' component={Music} />
        <Route path='/setting' component={Setting} />
      </div>

    </div>
  );
}

export default App;
