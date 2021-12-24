import React from 'react'
import { LayoutDocumentFlow } from '../../components/layout/LayoutDocumentFlow'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppStateType } from '../../redux/redux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { MyDocument } from './MyDocument';
import { MyDocumentLayout } from '../../components/layout/MyDocumentLayout';

import '../Main.scss';

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {

}

type PathParamsType = {
  documentId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class MyDocumentContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props)
  }

  render() {
    switch (this.props.match.url) {
      case `/my-document/${parseInt(this.props.match.params.documentId)}`:
        return (
          <MyDocumentLayout>
            {/* <Details /> */}
            
          </MyDocumentLayout>
        )
      default:
        return (
          <MyDocumentLayout>
            <MyDocument />
          </MyDocumentLayout>
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
)(MyDocumentContainer)