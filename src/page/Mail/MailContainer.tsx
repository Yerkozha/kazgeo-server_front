import React from 'react';
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import { toggleModal } from '../../redux/app-reducer';
import {AppStateType} from '../../redux/redux';
import { Mail } from './Mail';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    toggleModal: () => void
}

type PathParamsType = {
    mailId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class MailContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    updateMail() {
        let mailId: number | null = +this.props.match.params.mailId;
        if (!mailId) {
            const userId = this.props.userId;
            if (!userId) {
                // todo: may be replace push with Redirect??
                this.props.history.push("/login");
            }
        }

        // if (!userId) {
        //     console.error("ID should exists in URI params or in state ('authorizedUserId')");
        // } else {
        //     this.props.getUserProfile(userId)
        //     this.props.getStatus(userId)
        // }
    }

    componentDidMount() {
        this.updateMail();
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.mailId != prevProps.match.params.mailId) {
            this.updateMail();
        }
    }

    componentWillUnmount(): void {
    }

    render() {
        return (
            <Mail toggleModal={this.props.toggleModal} isModal={this.props.isModal} />
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return ({
        mailId: state.mail.id,
        mail: state.mail.mail,
        labels: state.mail.labels,
        attachments: state.mail.attachments,
        is_opened: state.mail.is_opened,
        is_important: state.mail.is_important,
        send_as: state.mail.send_as,
        created_at: state.mail.created_at,
        updated_at: state.mail.updated_at,

        isModal: state.app.isModal,
        userId: state.auth.id
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {toggleModal}),
    withRouter
)(MailContainer);




