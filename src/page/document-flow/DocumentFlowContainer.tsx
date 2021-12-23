import React, { useState } from 'react'
import { LayoutDocumentFlow } from '../../components/layout/LayoutDocumentFlow'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/redux';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { IncomingDocument } from './document-flow-options/IncomingDocument';
import './DocumentFlow.scss'
import { Details } from './document-flow-options/Details';
import { UniqueDocument } from './document-flow-options/UniqueDocument';

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {

}

type PathParamsType = {
  documentId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class DocumentFlowContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props)
  }

  render() {
    switch (this.props.match.url) {
      case `/document-flow/${parseInt(this.props.match.params.documentId)}`:
        return (
          <LayoutDocumentFlow>
            {/* <Details /> */}
            <UniqueDocument />
          </LayoutDocumentFlow>
        )
      default:
        return (
          <LayoutDocumentFlow>
            <IncomingDocument />
          </LayoutDocumentFlow>
        )
    }
  }
}
  const mapStateToProps = (state: AppStateType) => {
    return ({

    })
  }

export default compose<React.ComponentType>(
    connect(mapStateToProps, {}),
      withRouter
)(DocumentFlowContainer)