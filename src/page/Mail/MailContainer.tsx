import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { MainLayout } from '../../components/layout/MainLayout';
import { toggleModal } from '../../redux/app-reducer';
import { getAllMail, getMailById, deleteMail } from '../../redux/mail-reducer';
import { AppStateType } from '../../redux/redux';
import { Mail } from './Mail';
import { UniqueMail } from './UniqueMail';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    toggleModal: () => void
    getAllMail: () => void
    getMailById: (mailId: number) => void
    deleteMail: (mailId: number) => void
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

        if (!mailId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getMailById(mailId)
        }
    }

    componentDidMount() {
        this.updateMail();

        this.props.getAllMail();
        // debugger
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.mailId != prevProps.match.params.mailId) {
            this.updateMail();
        }
        if (this.props.data !== prevProps.data) {

        }
    }

    componentWillUnmount(): void {
    }

    render() {

        if (this.props.match.params.mailId) {
            return (
                <MainLayout {...this.props}>
                    <UniqueMail uniqueMailData={this.props.uniqueMailData} deleteMail={this.props.deleteMail} />
                </MainLayout>
            )
        }
        else {
            return (
                <MainLayout {...this.props}>
                    <Mail toggleModal={this.props.toggleModal} isModal={this.props.isModal} data={this.props.data} />
                </MainLayout>
            )
        }
    }
}

let mapStateToProps = (state: AppStateType) => {
    return ({
        mailId: state.mail.mailId,
        mail: state.mail.mail,
        labels: state.mail.labels,
        attachments: state.mail.attachments,
        is_opened: state.mail.is_opened,
        is_important: state.mail.is_important,
        send_as: state.mail.send_as,
        created_at: state.mail.created_at,
        updated_at: state.mail.updated_at,

        data: state.mail.data,
        uniqueMailData: state.mail.uniqueMailData,

        isModal: state.app.isModal,
        userId: state.auth.id
    })
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, { toggleModal, getAllMail, getMailById, deleteMail }),
    withRouter
)(MailContainer);




