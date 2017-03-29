/**
 * Created by JohnBae on 3/28/17.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Login extends Component {
    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        Blaze
        this.view = Blaze.render(Template.atForm, ReactDOM.findDOMNode(this.refs.container));
    }
    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }

    render() {
        // Just render a placeholder container that will be filled in
        return <span ref="container" />;
    }
}