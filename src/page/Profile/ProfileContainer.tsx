import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from '../../redux/redux';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    
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
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
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
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {}),
    withRouter
)(ProfileContainer);



