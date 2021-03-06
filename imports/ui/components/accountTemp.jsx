/**
 * Created by JohnBae on 3/28/17.
 */

import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Login extends Component {

    componentDidMount() {
        this.view = Blaze.render(Template.atForm, ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        return <span ref="container" />;
    }
}