import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Connector from './Connector'
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
  state = { open: false  }
  
  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })


  render() {
    const { visible, open } = this.state;

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
          <Menu borderless fixed='top' size='large' >
          <Container>
          <div ><img src="logo.svg" style={{width:'125px', paddingTop:'15px'}}/></div>
          <Menu.Item position='right' style={{padding:'3px'}}>
                <Menu.Item as='a'>Learn</Menu.Item>
                <Menu.Item as='a'>Community</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item>
              <Button primary  size='large'  onClick={this.show}>
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
            className="home"
            textAlign='center'
            style={{ minHeight: '100vh', padding: '1em 0em'}}
            vertical
            
          >
          <img src="/bg.svg" style={{position:"absolute", width:'100%', height:'80%', top:0,right:0,left:0,bottom:0}} />
          
            
            <Container>
              <Menu inverted borderless secondary pointing size='large'>
                <div ><img src="logo-bw.svg" style={{position:'absolute', width:'200px', paddingTop:'12px'}}/></div>
                
                <Menu.Item position='right'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Learn</Menu.Item>
                <Menu.Item as='a'>Community</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item>
                <Button inverted size='huge' onClick={this.show}>
                  Get Early Access
                </Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container>
              <Grid verticalAlign='middle' style={{ minHeight: '80vh'}} >
            <Grid.Row>
              <Grid.Column width={8}>

              <Header
              inverted
              as='h1'
              style={{ textAlign:'left', fontSize: '2em' }}
            >
            Spend more time writing code, and less time managing it!
            </Header>
            <Header
              inverted
              as='h2'
              style={{ textAlign:'left', fontSize: '1em', fontWeight: 'normal' }}
            >
            EngineOne is a blockchain-based code syncing service that helps Developers spend more time coding and less time managing code by automating their version control workflow.
            </Header>

              </Grid.Column>
              <Grid.Column width={8}>
                <Image
                  style={{width:'90%'}}
                  src='man.svg'
                />
              </Grid.Column>
            </Grid.Row> 
          </Grid>
          </Container>
            
            
          </Segment>
        </Visibility>

        <Segment inverted className="gradient" style={{ padding: '0em' }} vertical>
        <Grid padded  verticalAlign='top'>
          <Grid.Row>
            <Grid.Column  width={2} textAlign='right'>
              <img src="ide.svg"  />  
            </Grid.Column>
            <Grid.Column  width={6} textAlign='left'>
              <Header inverted as='h4'>You might be overworking yourself!</Header>
              <p>
              Your job as a developer is building great software, yet you find yourself investing a lot of time on code management. You are constantly running commands to make your code accessible to others, and resolving conflicts because someone didn’t update their code regularly. Also, you have to remember to never pull before comitting. Who made those rules?
              </p>
            </Grid.Column>
            <Grid.Column  width={6} textAlign='left'>
            <Header inverted as='h4'>Your code might be at risk!</Header>
            <p>
            Either due to unexpected conflicts or hardware failure, you can loose your code any day unless everyone you collaborate with makes regular backups and doesn’t go for 3 days without commiting. But why is this your responsibility? Your job is tough enough already! 
            </p>
          </Grid.Column>
          <Grid.Column  width={2} textAlign='left'>
              <img src="safe.svg"  />  
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

        <Segment className="benifits" style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>            
            <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  style={{width:'100%'}}
                  src='safe-pic.svg'
                />
                </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3'>You just start coding!</Header>
                <p>
                You no longer need to keep an open teminal to run version control commands, or install fancy IDE plugins to help with version control. EngineOne version controls your code automatically so you never have to deal with dirty branches and manually checking files into version control.
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={2}>
              </Grid.Column>
              <Grid.Column width={10} textAlign="right">
                <Header as='h3'>Code is backed up automatically…</Header>
                <p>
                EngineOne picks up all the changes you are making to your code and syncs them up to a secure cloud infrastructure. This ensures that you always have a safe copy of your code guarded by us and available to you whenever you need a clean copy.
                </p>
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={3}>
                <Image
                  style={{width:'100%'}}
                  src='ide-pic.svg'
                />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  style={{width:'100%'}}
                  src='community-pic.svg'
                />
                </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3'>Everyone’s code is always up to date</Header>
                <p>
                There is no need to wait for someone to commit and push their code! EngineOne keeps code copies eventually identical wherever the collaborators may be. This way if someone in the team needs you to check their code, you don’t need to clean up your working copy first. You just switch to their view of the code.
                </p>
              </Grid.Column>
            </Grid.Row>

            
            <Grid.Row>
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={10} textAlign="right">
              <Header as='h3'>Conflicts are detected before they occur</Header>
              <p>
              Because EngineOne syncs the code near real-time, it can detect when developers are in a collision course. This helps prevent conflicts and helps collaborators know when they are potentially working on the same feature.
              </p>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image
                style={{width:'100%'}}
                src='proactive-pic.svg'
              />
              </Grid.Column>
          </Grid.Row>

          <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  style={{width:'100%'}}
                  src='block-pic.svg'
                />
                </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3'>Collaborate without internet access with blockchain!</Header>
                <p>
                EngineOne is designed to be offline first. And it takes that a step further by enabling a team of collaborators to continue syncing code with one another as long as they are connected to the same network. So get stuff done with or without internet connectivity.
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

        <Segment inverted className="how" style={{ padding: '8em 0em' }} vertical>
          <Grid  container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  style={{width:'100%'}}
                  src='screen.svg'
                />
                </Grid.Column>
              <Grid.Column width={8}>
                <Header inverted as='h3'>How it Works</Header>
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
              Your code change history is stored even if you are working offline. And if you are working in a localised team, EngineOne's Self-Organising-Network allows teams to seamlessly collaborate online and offline.
              </p>
            </Grid.Column>
            <Grid.Column >
            <img src="feature-detect.svg" />
              <Header as='h4'>Early Conflict Detection</Header>
              <p>
              Unlike other solutions, EngineOne alerts you of potential code conflicts before they become big problems.
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