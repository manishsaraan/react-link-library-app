/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import styles from './styles.css';
import Navigation from '../../components/Navigation';
import { requestTopics } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  	 requestTopicsCall : React.PropTypes.func.isRequired
  }
  componentWillMount(){
  	this.props.requestTopicsCall();
  }
  render() {
    return (
      <div className={styles.navigationContainer}>
          <Navigation {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopicsCall : () => dispatch(requestTopics()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
