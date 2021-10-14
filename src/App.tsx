import React, { Component } from 'react';
import './assets/scss/style.scss';
import './App.scss'
import { BrowserRouter, Route, withRouter, Switch, Redirect } from "react-router-dom";
import { useRoutes } from './router/useRoutes';
import Header from './components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import store, { AppStateType } from './redux/redux';
import { initializeApp, toggleModal } from './redux/app-reducer'

import MyDocument from './page/MyDocument/MyDocument';
import Main from './page/enter/Main';
import { MainLayout } from './components/layout/MainLayout';
import { Mail } from './page/Mail/Mail';
import { LoginPage } from './page/login/Login';
import { NewLabel } from './page/Mail/NewLabel';
import MailContainer from './page/Mail/MailContainer';



type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
  toggleModal: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
     this.props.initializeApp()
  }

  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <div className='wrapper'>
        {!!this.props.id && <Header toggleModal={this.props.toggleModal} isModal={this.props.isModal}/> }
        <div className='main'>
          <Switch>
            <Route path='/' exact render={() => <Redirect to={'/login'}/> } />
            <Route path='/mail/:mailId?' exact render={() => <MailContainer />} />

            <Route path='/my-document' exact render={() => <MyDocument toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            
            <Route path='/layout' exact render={() => <MainLayout />} />
            <Route path='/login' exact render={() => <LoginPage />} />
            <Route path='/create-label' exact render={() => <NewLabel />} />

            <Route path='*'
              render={() => <div>404 NOT FOUND</div>} />
          </Switch>
          {/* <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <LoginPage/>}/> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isModal: state.app.isModal,
  id: state.auth.id
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp, toggleModal }))(App)

const Documentolog: React.FC = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default Documentolog
