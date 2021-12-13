import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from '../../redux/redux';
import { getAuthUserData } from '../../redux/auth-reducer'

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getAuthUserData: () => void
}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        const isAuthenticated = localStorage.getItem("api_token");
        this.props.getAuthUserData()
        if (!userId) {
            userId = this.props.authorizedUserId;
            
            if (!isAuthenticated) {
                // todo: may be replace push with Redirect??
                this.props.history.push("/login");
            }
        }

        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    componentWillUnmount(): void {
    }

    render() {
        return (
            <Profile {...this.props}
                     />
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    //console.log('mapStateToProps PROFILE')
    return ({
        authorizedUserId: state.auth.id,
        name: state.auth.name,
        lastname: state.auth.lastname
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getAuthUserData}),
    withRouter
)(ProfileContainer);




