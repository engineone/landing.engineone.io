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
              <Grid.Column width={6}>

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
              <Grid.Column width={10}>
                <Image
                  style={{width:'100%'}}
                  src='team.svg'
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

        <Segment className="benifits" style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <img src="ide.svg" className="icon"/>
                <Header as='h3'>
                Real-time Collaboration that lets you keep your favourite IDE</Header>
                <p>
                Most attempts at real-time collaboration require you use <i>their</i> IDE some online code editor. 
                EngineOne works with your existing IDE whether its TextPad or VS Code.
                </p>
                </Grid.Column>
              <Grid.Column width={2}>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image
                  style={{width:'100%'}}
                  src='ide-pic.svg'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={6}>
                <Image
                  style={{width:'100%'}}
                  src='safe-pic.svg'
                />
                </Grid.Column>
              <Grid.Column width={2}>
              </Grid.Column>
              <Grid.Column width={8}>
                <img src="safe.svg" className="icon"/>
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
                <img src="proactive.svg" className="icon"/>
                <Header as='h3'>Advanced Warning System</Header>
                <p>
                Get notifications when colleagues are working on code that might break yours. 
                Be proactive and avoid conflicts before they happen.
                </p>
                </Grid.Column>
              <Grid.Column width={2}>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image
                  style={{width:'100%'}}
                  src='proactive-pic.svg'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  style={{width:'100%'}}
                  src='community-pic.svg'
                />
                </Grid.Column>
              <Grid.Column width={8}>
                <img src="community.svg" className="icon"/>
                <Header as='h3'>Community Focussed</Header>
                <p>
                With EngineOne you are never left in the dark. We are community focussed, and always open to talk. 
                In fact you can chat to us right now!
                </p>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Segment>


        {/* <Segment  className="gradient" style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column >
                &nbsp;
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  style={{width:'100%'}}
                  src='screen.svg'
                />
                </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3'>How it Works</Header>
                <p>
                EngineOne is a code syncing service that helps Software Developers spend 
                more time coding and less time managing code by automating their version 
                control workflow
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment className="features" style={{ padding: '8em 0em' }} vertical>
        
          <Grid columns='equal' container stackable verticalAlign='top'>
          <Grid.Row>
            <Grid.Column style={{textAlign:"center", paddingBottom:"2em"}} >
              <Header as='h2'>Features</Header>
            </Grid.Column>
          </Grid.Row>

            <Grid.Row>
            <Grid.Column >
              <img src="feature-offline.svg" />
              <Header as='h4'>Offline First</Header>
              <p>
              Your code change history is stored even if you are working offline. 
              And if you are working in a localised team, EngineOne's Self-Organising-Network 
              allows teams to seamlessly collaborate online and offline.
              </p>
            </Grid.Column>
            <Grid.Column >
            <img src="feature-detect.svg" />
              <Header as='h4'>Early Conflict Detection</Header>
              <p>
              Unlike other solutions, EngineOne alerts you of potential issues before they become big problems.
              </p>
            </Grid.Column>
              <Grid.Column >
              <img src="feature-extend.svg" />
                <Header as='h4'>Extendable</Header>
                <p>
                Plugins allow new features to be added to the EngineOne platform.
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column >
            <img src="feature-custom.svg" />
              <Header as='h4'>Customisable Workflow</Header>
              <p>
              EngineOne can be customised to assist with your version control workflow, whether you use git-flow or single-branch methodologies.
              
              </p>
            </Grid.Column>
            <Grid.Column >
            <img src="feature-integrate.svg" />
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


{/* 
        <Segment  className="gradient" style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column >
                &nbsp;
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}

        <Segment className="footer" vertical style={{ padding: '0' }}>
        <Container>
        <Menu borderless secondary  size='small'>
          <Menu.Item as='a'>Contact</Menu.Item>
          <Menu.Item as='a'>Privacy</Menu.Item>
          <Menu.Item as='a'>Terms of use</Menu.Item>
          <Menu.Item as='a'>Accessability</Menu.Item>
          <Menu.Item position='right'>
            <Menu.Item as='a'><Icon name='twitter' /></Menu.Item>
            <Menu.Item as='a'><Icon name='facebook' /></Menu.Item>
            <Menu.Item as='a'><Icon name='linkedin' /></Menu.Item>
          </Menu.Item>
        </Menu>
      </Container>
        </Segment>
      </div>
    )
  }
}