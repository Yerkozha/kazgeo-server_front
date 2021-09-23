import React, { Component } from 'react';
import './assets/scss/style.scss';
import './App.scss'
import { BrowserRouter, Route, withRouter,Switch } from "react-router-dom";
import { useRoutes } from './router/useRoutes';
import HeaderContainer from './components/header/HeaderContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import store, { AppStateType } from './redux/redux';
import {initializeApp} from './redux/app-reducer'

import  Footer  from 'antd';
import Enter from './page/enter/Enter';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
   // const routes = useRoutes(this.props.post);

    if (!this.props.initialized) {
      return <Preloader/>
  }

  console.log(this.props.post , 'post')
    return (
      <div className='wrapper'>
        <HeaderContainer />
        <div className='main'>
          <Router>
          <Switch>
            <Route path='/' exact>
                 <Enter post={this.props.post} />
            </Route>
            <Route path='*'
                                       render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
          </Router>
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
  post: state.post.post
})

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

const Documentolog: React.FC = () => {
  return <BrowserRouter>
      <Provider store={store}>
          <AppContainer/>
      </Provider>
  </BrowserRouter>
}

export default Documentolog
