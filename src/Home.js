import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestHelloWorld } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }

  render() {
    return (
      <h1>
        {this.props.helloWorld}
      </h1>
    );
  }
}

const mapStateToProps = state => ({ helloWorld: state.helloWorld });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHelloWorld }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
