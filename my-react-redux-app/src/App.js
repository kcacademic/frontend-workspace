import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Route} from "react-router-dom";
import history from './router/history';

import action from "./actions/action";
import ImageList from "./components/imageList";
import LinkList from "./components/linkList";

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

class App extends Component {

  state = {
    selectedOption: "images"
  };

  handleOptionChange = e => {
    if (e.target.checked && e.target.value === "images") {
      history.push("/");
    } else {
      history.push("/keys")
    }
    this.setState({ selectedOption: e.target.value });
  };

  render() {
    return (
      <Router history={history}>
        <Typography variant='display1' align='center' gutterBottom>
            <AppBar position="static">
                <Toolbar>
                  <Button variant="contained" color="primary" onClick={() => this.props.fetchAction("fetch")}>
                    Add Dog Breeds
                  </Button>
                  <Radio
                    checked={this.state.selectedOption === 'images'}
                    onChange={this.handleOptionChange}
                    value="images"
                  />
                  <Radio
                    checked={this.state.selectedOption === 'keys'}
                    onChange={this.handleOptionChange}
                    value="keys"
                  />
                </Toolbar>
            </AppBar>
            
            <Route exact path="/" render={(props) => <ImageList {...props} url={this.props.url} />} />
            <Route path="/keys" render={(props) => <LinkList {...props} url={this.props.url} />} />

        </Typography>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
	fetchAction: (payload) => dispatch(action(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
