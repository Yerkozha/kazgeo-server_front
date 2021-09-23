import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Enter from '../page/enter/Enter';


export const useRoutes = (props:any): JSX.Element => {
    return (
        <Switch>
            <Route path='/' exact>
                 <Enter />
            </Route>
            <Route path='*'
                                       render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    )
}