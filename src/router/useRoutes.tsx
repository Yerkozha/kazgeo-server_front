import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';


export const useRoutes = (props:any): JSX.Element => {
    return (
        <Switch>
            
            <Route path='*'
                                       render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    )
}