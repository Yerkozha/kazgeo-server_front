import React from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { compose } from "redux";
import { mail_label_id } from '../../api/label-api';
import { LayoutMail } from '../../components/layout/LayoutMail';
import { toggleModal } from '../../redux/app-reducer';
import { attachLabel, detachLabel } from '../../redux/label-reducer';
import { getAllMail, getMailById, deleteMail, getOpenedMails, setMailIdAndClear, getSentMails } from '../../redux/mail-reducer';
import { AppStateType } from '../../redux/redux';
import { Mail } from './Mail';
import { UniqueMail } from './UniqueMail';

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    toggleModal: () => void
    getAllMail: () => void
    getMailById: (mailId: number) => void
    deleteMail: (mailId: number) => void
    getOpenedMails: (mailId: number, openedMailData: object) => Promise<object>
    detachLabel: (mail_label_id: mail_label_id) => void
    getSentMails: (data:string) => void
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
        if(this.props.match.url === '/mail'){
            this.props.getAllMail();
        }
        else if(this.props.match.url === '/sent-messages'){
            this.props.getSentMails('?sent_mails=1')
        }
        else if(this.props.match.url === `/mail/${parseInt(this.props.match.params.mailId)}`){
            let mailId: number | null = +this.props.match.params.mailId;
            this.props.getMailById(mailId)
        }
        else if(this.props.match.url === '/chosen-messages'){
            this.props.getSentMails('?is_important=1')
        }
        else if( this.props.match.url === '/trash-mails' ){
            this.props.getSentMails('?is_deleted=1&perPage=10')
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

    componentWillUnmount(): void {
    }

    render() {
        switch(this.props.match.url){
            case `/mail/${parseInt(this.props.match.params.mailId)}`:
                return (
                    <LayoutMail {...this.props}>
                        <UniqueMail moveMailToTrash={this.props.getOpenedMails} uniqueMailData={this.props.uniqueMailData} deleteMail={this.props.deleteMail} mailId={this.props.match.params.mailId} detachLabel={this.props.detachLabel} />
                    </LayoutMail>
                )
            default:
                return (
                    <LayoutMail {...this.props}>
                        <Mail url={this.props.match.url} {...this.props} toggleModal={this.props.toggleModal} isModal={this.props.isModal} data={this.props.data} />
                    </LayoutMail>
                //<MainLayout {...this.props}>
                  //  </MainLayout>
                )
            // case `/sent-messages`:
            //     return (
            //         <MainLayout {...this.props}>
            //             <Mail {...this.props} toggleModal={this.props.toggleModal} isModal={this.props.isModal} data={this.props.data} />
            //         </MainLayout>
            //     )
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
        userId: state.auth.id,

        pickLabels: state.label.labels
    })
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, { toggleModal, getAllMail, getMailById, deleteMail,
                               getOpenedMails, attachLabel, setMailIdAndClear, detachLabel,
                               getSentMails }),
    withRouter
)(MailContainer);




