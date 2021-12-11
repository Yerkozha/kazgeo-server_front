import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { ReferencesLayout } from '../../components/layout/ReferencesLayout';
import { AppStateType } from '../../redux/redux';
import { References } from './References';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    
}

type PathParamsType = {
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ReferencesContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    updateMail() {
        if(this.props.match.url === '/mail'){
            
        }
        else if(this.props.match.url === '/sent-messages'){
            
        }
    }

    componentDidMount() {
        this.updateMail();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.url !== prevProps.match.url) {
            this.updateMail();
        }
    }

    

    render() {
        switch(this.props.match.url){
            case `/references`:
                return (
                    <ReferencesLayout>
                        <References />
                    </ReferencesLayout>
                )
            default:
                return (<ReferencesLayout>
                        <References />
                    </ReferencesLayout>
                )
        }
    }
}

let mapStateToProps = (state: AppStateType) => {
    return ({
    })
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, { }),
    withRouter
)(ReferencesContainer);




