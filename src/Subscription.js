import React from "react"
import PropTypes from "prop-types"
import jsonp from "jsonp"
import {
    Button,
    Form,
    Message,
    Icon,
    Loader,
    Dimmer
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
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error"
      })
      return
    }
    const url = "//lepsta.us16.list-manage.com/subscribe/post-json?u=a121ef3ead0d395e5e1bc1ffa&amp;id=95d80fe879" + `&EMAIL=${encodeURIComponent(this.input.value)}`;
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
            <p hidden={status === "success"}>
              Sign up now to be notified about the early access release program. We’re really excited about what EngineOne can do for you!
            </p>
        {status === "sending" && <Dimmer active inverted><Loader size='medium'>Signing you up</Loader></Dimmer>}
        {status === "success" && <Message positive>
            <Message.Header>Thank you!</Message.Header>
            <p>Please help more people discover EngineOne by sharing this pre-written tweet:</p>
            <a href={tweetUrl} target="_blank"><Icon size='large' name='twitter' /> Tweet now</a>
        </Message>}
        {status === "error" && <Message negative>Oops! Your email address seems invalid. Please correct it and try again.</Message>}
        <Form.Field hidden={status === "success"}>
          <label>Email</label>
          <input 
            ref={node => (this.input = node)}
            type="email"
            defaultValue=""
            name="EMAIL"
            required={true}
            placeholder='Email Address'/>
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
        <Button type='submit' hidden={status === "success"} onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success"} color='green'>
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