import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Form,
  Modal
} from 'semantic-ui-react'

export default class HomepageLayout extends Component {
  state = { open: false }
  
  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible, open } = this.state

    return (
      <div>

<Modal size="small" open={open} onClose={this.close} closeIcon>
    <Header icon='mail outline' content='Sign Up for Early Access' />
    <Modal.Content>
      <p>
      Sign up now to be notified about the early access release program.<br/>
Space is limited so book your spot now. <br/>
We’re really excited about what EngineOne can do for you! 

      </p>

      <Form action="https://lepsta.us17.list-manage.com/subscribe/post?u=e8b7064010b896656512ed4a7&amp;id=978ff8a33a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  target="_blank">
    <Form.Field>
      <label>Full Name</label>
      <input name="FNAME" placeholder='Full Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input name="EMAIL" required type="email" placeholder='Email Address' />
    </Form.Field>
    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_e8b7064010b896656512ed4a7_978ff8a33a" tabindex="-1" value="" /></div>
    <Button type='submit' color='green'>
        <Icon name='checkmark' />Sign Up
    </Button>
  </Form>


    </Modal.Content>
    {/* <Modal.Actions>
      <Button color='green'>
        <Icon name='checkmark' /> Sign Up
      </Button>
    </Modal.Actions> */}
  </Modal>

        { visible ? 
          <Menu fixed='top' size='large' >
          <Container>
          <Menu.Item position='right' style={{padding:0}}>
                <Menu.Item as='a'>Learn</Menu.Item>
                <Menu.Item as='a'>Community</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item>
              <Button primary  size='large'  onClick={this.show}>
                <Icon name='cloud download' />
                Get Early Access
              </Button>
          </Menu.Item>
          </Container>
        </Menu>
          : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em'}}
            vertical
          >
            <Container>
              <Menu borderless secondary pointing size='large'>
                <div ><img src="logo.svg" style={{width:'200px', paddingTop:'12px'}}/></div>
                
                <Menu.Item position='right'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Learn</Menu.Item>
                <Menu.Item as='a'>Community</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item>
                <Button primary size='huge' onClick={this.show}>
                  <Icon name='cloud download' />
                  Get Early Access
                </Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container>
            <Grid style={{height:'90vh'}} verticalAlign='middle' stackable>
            <Grid.Row>
              <Grid.Column width={8}>

              <Header
              as='h1'
              style={{ textAlign:'left', fontSize: '2em' }}
            >
            Syncing Code and People
            </Header>
            <Header
              as='h2'
              style={{ textAlign:'left', fontSize: '1em', fontWeight: 'normal' }}
            >
            What if you could spend more time co-creating amazing code and less time fighting your version control?
            </Header>

              </Grid.Column>
              <Grid.Column width={8}>
                <Image
                  style={{width:'100%'}}
                  src='team.png'
                />
              </Grid.Column>
            </Grid.Row> 
          </Grid>
          </Container>
            
            
          </Segment>
        </Visibility>

        <Segment  className="gradient" style={{ padding: '0em' }} vertical>
        <Grid padded  verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column  width={6} textAlign='right'>
              <img src="vcs.png" width="300" />  
            </Grid.Column>
            <Grid.Column  width={6} textAlign='right'>
              <Header inverted as='h4'>Automated real-time version control with EngineOne!</Header>
            </Grid.Column>
            <Grid.Column  width={4} textAlign='left'>
              <Button primary inverted size='large'  onClick={this.show}>
                <Icon name='cloud download' />
                 Early Access
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3'>Real-time Collaboration that lets you keep your favourite IDE</Header>
                <p>
                Most attempts at real-time collaboration require you use <i>their</i> IDE some online code editor. 
                EngineOne works with your existing IDE whether its TextPad or VS Code.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image
                  style={{width:'100%'}}
                  src='https://www-assets0.herokucdn.com/assets/home/hero/focus_2x-315bdf6fd4e19d85ceaf800528afb680190b79056a23516428b4cb4ff61d37c2.png'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <Image
                  style={{width:'100%'}}
                  src='https://www-assets3.herokucdn.com/assets/home/hero/apps_2x-1cbc7cbe49e12ad3cfb038f1b21942c2c4773ed159e422c1c10e5d2257fbdd80.png'
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3'>Your code is SAFE</Header>
                <p>
                As you work, EngineOne automatically syncs your changes securely to the cloud. 
                Whether your machine crashes or you delete code, you can always roll back to 
                previous versions without having to manually commit. Think of it as auto-commit with super powers!
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3'>Advanced Warning System</Header>
                <p>
                Get notifications when colleagues are working on code that might break yours. 
                Be proactive and avoid conflicts before they happen.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image
                  style={{width:'100%'}}
                  src='https://www-assets2.herokucdn.com/assets/home/hero/ecosystem_2x-51bfd00540ebf0b1e52b4fd935222d5c46c7ad58fc05273ca96311788ac0777c.png'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <Image
                  style={{width:'100%'}}
                  src='https://www-assets3.herokucdn.com/assets/home/hero/kafka_2x-996f59eddfe02e23b0bc4c7b5755f21e0a277366d05597c4268e8f8c662fd5ae.png'
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3'>Community Focussed</Header>
                <p>
                With EngineOne you are never left in the dark. We are community focussed, and always open to talk. 
                In fact you can chat to us right now!
                </p>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Segment>


        <Segment  className="gradient" style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column >
                &nbsp;
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid columns='equal' container stackable verticalAlign='top'>
            <Grid.Row>
            <Grid.Column >
              <Icon size="huge" name='signal' />
              <Header as='h4'>Offline First</Header>
              <p>
              Your code change history is stored even if you are working offline. 
              And if you are working in a localised team, EngineOne's Self-Organising-Network 
              allows teams to seamlessly collaborate online and offline.
              </p>
            </Grid.Column>
            <Grid.Column >
              <Icon size="huge" name='warning sign' />
              <Header as='h4'>Early Conflict Detection</Header>
              <p>
              Unlike other solutions, EngineOne alerts you of potential issues before they become big problems.
              </p>
            </Grid.Column>
              <Grid.Column >
                <Icon size="huge" name='grid layout' />
                <Header as='h4'>Extendable</Header>
                <p>
                Plugins allow new features to be added to the EngineOne platform.
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column >
              <Icon size="huge" name='configure' />
              <Header as='h4'>Customisable Workflow</Header>
              <p>
              EngineOne can be customised to assist with your version control workflow, whether you use git-flow or single-branch methodologies.
              
              </p>
            </Grid.Column>
            <Grid.Column >
              <Icon size="huge" name='compress' />
              <Header as='h4'>More Integrations</Header>
              <p>
              EngineOne works with your existing tools, rather than against them. It supports git, svn and Mercurial out the box. And with a powerful API, it can be integrated with task managers and CI tools and other 3rd Party tools.
              </p>
            </Grid.Column>
              <Grid.Column >
                
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Segment>



        <Segment  className="gradient" style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column >
                &nbsp;
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='More' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Pricing</List.Item>
                    <List.Item as='a'>Documentation</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Meet the Team</List.Item>
                    <List.Item as='a'>About Us</List.Item>
                    <List.Item as='a'>Careers</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}