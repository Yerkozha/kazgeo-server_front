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
import { NewLabel } from './page/label/NewLabel';
import MailContainer from './page/Mail/MailContainer';
import ProfileContainer from './page/Profile/ProfileContainer';
import { Message } from './page/Mail/Message/Message';
import { DocumentFlow } from './page/document-flow/DocumentFlow';
import { Settings } from './page/Mail/Settings/Settings';



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
        {!!this.props.id && <Header toggleModal={this.props.toggleModal} isModal={this.props.isModal} userName={this.props.userName}/> }
        <div className='main'>
          <Switch>
            <Route path='/' exact render={() => <Redirect to={'/login'}/> } />
            <Route path='/mail/:mailId?' render={() => <MailContainer />} />
            
            <Route path='/my-document' render={() => <MyDocument toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/layout' render={() => <MainLayout />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/create-label' render={() => <NewLabel toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />

            <Route path='/profile' render={() => <ProfileContainer />} />
            <Route path='/message' render={() => <Message toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/settings' render={() => <Settings toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/document-flow' render={() => <DocumentFlow />} />

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
  id: state.auth.id,
  userName:state.auth.name
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
