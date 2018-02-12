import React from "react"
import PropTypes from "prop-types"
import jsonp from "jsonp"
import {
    Button,
    Form,
    Message,
    Icon,
    Loader,
    Dimmer,
    Label
  } from 'semantic-ui-react';

export default class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null
    }
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.name.value || this.name.value.length < 2) {
      this.setState({
        status: "error",
        msg: "First name is required"
      })
      return
    }
    if (!this.email.value || this.email.value.length < 5 || this.email.value.indexOf("@") === -1) {
      this.setState({
        status: "error",
        msg: "Invalid email address"
      })
      return
    }
    const url = "//lepsta.us16.list-manage.com/subscribe/post-json?u=a121ef3ead0d395e5e1bc1ffa&amp;id=95d80fe879" + `&EMAIL=${encodeURIComponent(this.email.value)}&FNAME=${encodeURIComponent(this.name.value)}`;
    console.log(url)
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { action, messages, className, style, styles } = this.props
    const { status, msg } = this.state
    const tweet = "I've just signed up for early access on EngineOne! https://engineone.io @_engineone";
    const tweetUrl = "https://twitter.com/intent/tweet?text="+tweet;
    return (
        <Form
        method="post"
        noValidate>
            <p>
              <strong>First <Label circular color='blue'>20</Label> subscribers get awesome FREE t-shirts.</strong>
            </p>
            <Message hidden={status === "success"}>
              EngineOne has entered the quality assurance stage of development. Sign up now 
              to be the first to know when it's publicly available. We’re really excited 
              about what EngineOne can do for you!
            </Message>
        {status === "sending" && <Dimmer active inverted><Loader size='medium'>Signing you up</Loader></Dimmer>}
        {status === "success" && <Message positive>
            <Message.Header>Thank you {this.name.value}! We have sent you a confirmation email.</Message.Header>
            <p>Please help more people discover EngineOne by sharing this pre-written tweet:</p>
            <a href={tweetUrl} target="_blank"><Icon size='large' name='twitter' /> Tweet now</a>
        </Message>}
        {status === "error" && <Message negative>{this.state.msg}</Message>}
        <Form.Field hidden={status === "success"}>
          <label>First name*</label>
          <input 
            ref={node => (this.name = node)}
            type="text"
            defaultValue=""
            name="FNAME"
            required={true}
            placeholder='First name'/>
        </Form.Field>
        <Form.Field hidden={status === "success"}>
          <label>Email address*</label>
          <input 
            ref={node => (this.email = node)}
            type="email"
            defaultValue=""
            name="EMAIL"
            required={true}
            placeholder='Email address'/>
        </Form.Field>
        <div
          style={{
          position: "absolute",
          left: "-5000px"
        }}
          aria-hidden="true"><input
          type="text"
          name="b_a121ef3ead0d395e5e1bc1ffa_95d80fe879"
          tabIndex="-1"
          value=""/></div>
        <Button type='submit' hidden={this.state.status === "success"} onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success"} color='green'>
          Sign Up
        </Button>
      </Form>
          
    )
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
}