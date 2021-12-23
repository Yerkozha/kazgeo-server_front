import React, { Component } from 'react';
import './assets/scss/style.scss';
import './App.scss'
import { BrowserRouter, Route, withRouter, Switch, Redirect, RouteComponentProps } from "react-router-dom";
import { useRoutes } from './router/useRoutes';
import {Header} from './components/header/Header';
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
import DocumentFlowContainer from './page/document-flow/DocumentFlowContainer';
import { Settings } from './page/Mail/Settings/Settings';
import { ChosenMessage } from './page/Mail/ChosenMessage';
import ProtectedRoute from './router/ProtectedRoute';
import { ReferencesLayout } from './components/layout/ReferencesLayout';
import ReferencesContainer from './page/References/ReferencesContainer';
import { FilterComponent } from './components/filterComponent/FilterComponent';
import { OutgoingDocument } from './page/document-flow/document-flow-options/OutgoingDocument';
import { CreateInternalDocument } from './page/create-internal-document/CreateInternalDocument';




type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
  toggleModal: () => void
}
type PathParamsType = {
  
}

class App extends Component<MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>> {

  componentDidMount() {
     this.props.initializeApp()
  }


  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    if (!this.props.initialized) {
      return <Preloader />
    }
    const isAuthenticated = localStorage.getItem("api_token");
    return (
      <div className='wrapper'>
        {isAuthenticated && <Header toggleModal={this.props.toggleModal} isModal={this.props.isModal} userName={this.props.userName}/> }
        <div className='main'>
        <Switch>
            <Route path='/' exact render={() => <Redirect to={'/login'}/> } />
            <Route path='/login' render={() => <LoginPage />} />
            
            <ProtectedRoute path={['/mail/:mailId?','/sent-messages','/chosen-messages','/trash-mails']} component={MailContainer} />
            <ProtectedRoute path='/create-label' toggleModal={this.props.toggleModal} match={this.props.match} isModal={this.props.isModal}  component={NewLabel} />
            <ProtectedRoute path='/message' toggleModal={this.props.toggleModal} match={this.props.match} isModal={this.props.isModal} component={Message} />
            <ProtectedRoute path='/settings' toggleModal={this.props.toggleModal} match={this.props.match} isModal={this.props.isModal} component={Settings} />
           
            <ProtectedRoute path='/references' component={ReferencesContainer} />
            
            <ProtectedRoute path='/profile' component={ProfileContainer} />

            {/* <ProtectedRoute path='/my-document' toggleModal={this.props.toggleModal} isModal={this.props.isModal} component={MyDocument} /> */}
            <ProtectedRoute path='/create-internal-document' toggleModal={this.props.toggleModal} isModal={this.props.isModal} component={CreateInternalDocument} />
            
            <Route path='/layout' render={() => <MainLayout />} />

            <ProtectedRoute path={['/document-flow/:documentId?']} component={DocumentFlowContainer} />
            <ProtectedRoute path='/document-flow-filter' component={FilterComponent} />
            <ProtectedRoute path='/document-outgoing' component={OutgoingDocument} />


            <Route path='*'
              render={() => <div>404 NOT FOUND</div>} />
          </Switch>
          {/* <Switch>
            <ProtectedRoute path='/profile' component={ProfileContainer} />
            <Route path='/' exact render={() => <Redirect to={'/login'}/> } />
            <Route path='/mail/:mailId?' render={() => <MailContainer />} />
            <Route path='/my-document' render={() => <MyDocument toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/layout' render={() => <MainLayout />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/create-label' render={() => <NewLabel toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />

            <Route path='/message' render={() => <Message toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/sent-messages' render={()=> <SentMessage toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/chosen-messages' render={()=> <ChosenMessage toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/settings' render={() => <Settings toggleModal={this.props.toggleModal} isModal={this.props.isModal} />} />
            <Route path='/document-flow' render={() => <DocumentFlow />} />

            <Route path='*'
              render={() => <div>404 NOT FOUND</div>} />
          </Switch> */}
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
  userName: state.auth.name
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
