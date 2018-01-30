import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Connector from './Connector'
import Corner from './Corner'
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
  state = { open: false, lang:'geek'  } // geek or eng
  
  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })


  setLang = (lang) => this.setState({ lang: lang })


  render() {
    const { visible, open, lang } = this.state;

    return (
      <div className={lang}>
        

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
          <div >
            <img src="logo.svg" style={{width:'170px', paddingTop:'11px'}}/>
          </div>
          
          <Menu.Item position='right' style={{padding:'3px'}}>
          <Menu.Item as='a'>&nbsp;</Menu.Item>
                {/* <Menu.Item as='a'>Learn</Menu.Item>
                <Menu.Item as='a'>Community</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item> */}
              <Button primary  size='large'  onClick={this.show}>
                Get Early Access
              </Button>
          </Menu.Item>
          </Container>
{/* 
          <Button.Group className='langbuttons' size='mini'>
              <Button inverted={lang!='geek'} primary={lang=='geek'} onClick={()=>this.setLang("geek")}>Developer</Button>
              <Button  inverted={lang!='eng'} primary={lang=='eng'} onClick={()=>this.setLang("eng")}>Business</Button>
            </Button.Group> */}

        </Menu>
          : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >

          {/* minHeight: '100vh', */}
          <Segment
            className="home"
            textAlign='center'
            style={{  paddingTop: '1em', paddingBottom: 0}}
            vertical
          >
          <img src="/bg.svg" style={{position:"absolute", width:'100%', height:'75%', top:0,right:0,left:0,bottom:0}} />
          
            
            <Container>
              <Menu inverted borderless secondary pointing size='large'>
                <div ><img src="logo-bw.svg" style={{position:'absolute', width:'200px', paddingTop:'12px'}}/></div>
                <Menu.Item position='right'>
                {/*
                 <Menu.Item as='a'>Learn</Menu.Item>
                <Menu.Item as='a'>Community</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item> 
                */}
                <Button inverted size='huge' onClick={this.show}>
                  Get Early Access
                </Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container inverted>
            <Grid stackable verticalAlign='top'  > {/* style={{ minHeight: '75vh'}} */}
            <Grid.Row>
              <Grid.Column width={8}>
                <div  style={{padding:'7em 0em'}}>
              <Header
              inverted
              as='h1'
              style={{ textAlign:'left', fontSize: '2em' }}
            >
            <span className="lang geek">Spend more time writing code, and less time managing it!</span>
            <span className="lang eng">There are hidden costs in your software development process</span>
            </Header>
            <Header
              inverted
              as='h2'
              style={{ textAlign:'left', fontSize: '1em', fontWeight: 'normal' }}
            >
            <span className="lang geek">
            EngineOne is a blockchain-based code syncing service that helps Developers spend more time coding and less time managing code by automating their version control workflow.
            </span>
            <span className="lang eng">
            Hundreds of hours are lost to admin tasks. EngineOne will reduce the time your developers spend on managing code by automating workflow
            </span>
            </Header>
            <p className='legacy'>Click <a href="https://legacy.engineone.io">here</a> to visit the previous version of EngineOne</p>
              </div>
            </Grid.Column>
              <Grid.Column width={8} textAlign="center">
                <Image
                  style={{width:'85%'}}
                  src='man.svg'
                />
              </Grid.Column>
            </Grid.Row> 

            <Grid.Row  style={{padding:0}}>
              <Grid.Column width={8}></Grid.Column>
              <Grid.Column width={4} style={{padding:'0',marginLeft:'-5px'}}>
                <Connector right x={0} y={0} width={100} height={50} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{paddingTop:0}}>
              <Grid.Column textAlign="center" style={{padding:0, paddingBottom:'20px'}}>

            <Button.Group className='langbuttons'>
              <Button style={{width:'100px'}} inverted={lang!='geek'} primary={lang=='geek'} onClick={()=>this.setLang("geek")}>Developer</Button>
              {/* <Button.Or text="<>"/> */}
              <Button style={{width:'100px'}} inverted={lang!='eng'} primary={lang=='eng'} onClick={()=>this.setLang("eng")}>Business</Button>
            </Button.Group>

              </Grid.Column>
            </Grid.Row> 


          </Grid>
          </Container>
            
            <img style={{position:'relative',left:'-2px', bottom:'-6px'}} src='line-top.svg' />
          </Segment>
        </Visibility>

        <Segment inverted className="gradient" style={{ margin:0, padding: 0 }} >
        <Container>
        <Grid padded celled='internally' verticalAlign='top'>
          <Grid.Row>
            <Grid.Column  width={8} textAlign='left'>
                <img src="ide.svg" style={{float:'left'}} /> 
              <div style={{marginLeft:'70px',marginRight:'25px'}}>
              <Header inverted as='h4'>
              <span className="lang geek">
You might be overworking yourself!
              </span>
              <span className="lang eng">
You are losing time &amp; money 
              </span>
              
              </Header>
              <p>
              <span className="lang geek">
Your job as a developer is building great software, yet you find yourself investing a lot of time on code management. You are constantly running commands to make your code accessible to others, and resolving conflicts because someone didn’t update their code regularly. Also, you have to remember to never pull before committing. Who made those rules?
              </span>
              <span className="lang eng">
              We thought software developers write code all day every day. However, based on our research developers spend about 5 hours on admin tasks. This means, if you have 10 mid-level Developers costing you about $59 per hour (8 hours per day), you are losing around $2 950 per day, $14,750 per week or $59,000 per month to manual/admin tasks. In terms of time, a project that is due in 6 months will be delivered in 13 months.
              </span>
              
              </p>
              </div>
            </Grid.Column>
            <Grid.Column  width={8} textAlign='right'>
            <img src="safe.svg" style={{float:'right'}} /> 
              <div style={{marginRight:'70px',marginLeft:'25px'}}>
            <Header inverted as='h4'>
            <span className="lang geek">
Your code might be at risk!
              </span>
              <span className="lang eng">
              Your project might be at risk!
              </span>
              </Header>
            <p>
            <span className="lang geek">
Either due to unexpected conflicts or hardware failure, you can loose your code any day unless everyone you collaborate with makes regular backups and doesn’t go for 3 days without commiting. But why is this your responsibility? Your job is tough enough already! 
              </span>
              <span className="lang eng">
              Current workflows are manual, as a result human errors are inevitable. Unless developers backup code regularly chances of them losing their code are still high. This may cause delays in project delivery.
              </span>
            
            </p>
            </div>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
      </Segment>

      <div style={{margin:'0 auto',textAlign:'center',position:'relative',left:'-4px',top:'-135px',marginBottom:'-110px'}}>
          <img src='seal.svg' />
          <Header as='h2' className='solution'>EngineOne is the solution!</Header>
      </div>

        <Segment className="benifits" style={{ paddingBottom: '0em' }} vertical>
          <Grid container  verticalAlign='middle'>    
          
          <Grid.Row  style={{padding:0}}>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={6} >
                <Connector dots right x={0} y={0} width={100} height={50} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  style={{width:'100%'}}
                  src='safe-pic.svg'
                />
                </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3' style={{color:'#7A5DAF'}}><span className="lang geek">
You just start coding!
              </span>
              <span className="lang eng">
              Watch your team's productivity increase!
              </span></Header>
                <p>
                  <span className="lang geek">
                You no longer need to keep an open terminal to run version control commands, or install fancy IDE plugins to help with version control. EngineOne version controls your code automatically so you never have to deal with dirty branches and manually checking files into version control.
              </span>
              <span className="lang eng">
              At the end of the day, Managers and Clients measure success based on quality features delivered. EngineOne helps Developers eliminate manual procedures and enables them to focus on what they are hired to do...coding. By automating code source workflow Developers will be more productive than ever before.
              </span>
                </p>
              </Grid.Column>
              <Grid.Column width={5} >
                <Corner  x={0} y={0} width={68} height={80} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={5} textAlign='right'>
                <Corner right x={0} y={0} width={68} height={80} />
              </Grid.Column>
              <Grid.Column width={8} textAlign="right">
                <Header as='h3'  style={{color:'#14B18E'}}><span className="lang geek">
Code is backed up automatically…
              </span>
              <span className="lang eng">
              Code is backed up automatically…
              </span></Header>
                <p>
                <span className="lang geek">
EngineOne picks up all the changes you are making to your code and syncs them up to a secure cloud infrastructure. This ensures that you always have a safe copy of your code guarded by us and available to you whenever you need a clean copy.
              </span>
              <span className="lang eng">
              EngineOne picks up all the changes your team is making and uploads them automatically to a secure public or private cloud. This ensures that you always have a safe copy of your code and that is accessible to you whenever you need a clean copy.
              </span>
                </p>
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
              <Grid.Column width={8}>
                <Header as='h3' style={{color:'#4A90E2'}}>
                <span className="lang geek">
Everyone’s code is always up to date
              </span>
              <span className="lang eng">
              Improve visibility and collaboration
              </span>
              </Header>
                <p>
                <span className="lang geek">
There is no need to wait for someone to commit and push their code! EngineOne keeps code copies eventually identical wherever the collaborators may be. This way if someone in the team needs you to check their code, you don’t need to clean up your working copy first. You just switch to their view of the code.
              </span>
              <span className="lang eng">
              By automatically syncing to cloud, EngineOne does not only securely backup code but it also improves visibility within teams, ensuring that everyone is aware of what everyone else is working on. Users can view each other's work and help one another remotely. Because of this ability, teams can now collaborate on code remotely; Managers and Clients will still be able to view Developers progress.
              </span>
                
                </p>
              </Grid.Column>
              <Grid.Column width={5} >
                <Corner  x={0} y={0} width={68} height={80} />
              </Grid.Column>
            </Grid.Row>
            
            <Grid.Row>
            <Grid.Column width={5} textAlign='right'>
              <Corner right x={0} y={0} width={68} height={80} />
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
              <Header as='h3' style={{color:'#EA4E83'}}>
              <span className="lang geek">
Conflicts are detected before they occur
              </span>
              <span className="lang eng">
              Prevent fires before they occur
              </span></Header>
              <p>
              <span className="lang geek">
Because EngineOne syncs the code near real-time, it can detect when developers are in a collision course. This helps prevent conflicts and helps collaborators know when they are potentially working on the same feature.
              </span>
              <span className="lang eng">
              Code-conflicts are Developers' biggest nightmare. EngineOne has a unique feature that listens to potential code conflicts and prevents them by alerting users before they occur.
              </span>
              
              </p>
            </Grid.Column>
            <Grid.Column width={3} textAlign='center'>
              <Image
                centered
                style={{width:'80%'}}
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
              <Grid.Column width={8}>
                <Header as='h3' style={{color:'#A775D3'}}>
                <span className="lang geek">
Collaborate without internet access with blockchain!
              </span>
              <span className="lang eng">
              No internet connection no problem!
              </span></Header>
                <p>
                <span className="lang geek">
EngineOne is designed to be offline first. And it takes that a step further by enabling a team of collaborators to continue syncing code with one another as long as they are connected to the same network. So get stuff done with or without internet connectivity.
              </span>
              <span className="lang eng">
              Your team can still collaborate without internet connectivity, EngineOne will continue syncing work to one of their computers  provided they are on the same network. When the internet reconnects, that computer will resume syncing to cloud. Code is backed up (regardless of internet connection) using blockchain technology.
              </span>
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
            <img centered src='line-bottom.svg' />
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>


        {/* <Segment inverted className="how" style={{ padding: '8em 0em' }} vertical>
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
        </Segment> */}

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
              <Header as='h4'>
              <span className="lang geek">
Offline First
              </span>
              <span className="lang eng">
              Collaborate offline
              </span>
              </Header>
              <p>
              <span className="lang geek">
Your code change history is stored even if you are working offline. And if you are working in a localised team, EngineOne's Self-Organising-Network allows teams to seamlessly collaborate online and offline.
              </span>
              <span className="lang eng">
              Your code change history is stored even if you are working offline. And if you are working in a localised team, EngineOne allows teams to seamlessly collaborate online and offline.
              </span>
              
              
              </p>
            </Grid.Column>
            <Grid.Column >
            <img src="feature-detect.svg" />
              <Header as='h4'>Early Conflict Detection</Header>
              <p>
              <span className="lang geek">
              Unlike other solutions, EngineOne alerts you of potential code conflicts before they become big problems.
              </span>
              <span className="lang eng">
              EngineOne alerts you of potential issues before they become big problems.
              </span>
              
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
              <span className="lang geek">
EngineOne can be customised to assist with your version control workflow, whether you use git-flow or single-branch methodologies.
              </span>
              <span className="lang eng">
              EngineOne can be customised to assist with your software development workflow.
              </span>
              
              
              
              </p>
            </Grid.Column>
            <Grid.Column >
            <img src="feature-integrate.svg" />
              <Header as='h4'>More Integrations</Header>
              <p>
              <span className="lang geek">
EngineOne works with your existing tools, rather than against them. It supports git, svn and Mercurial out the box. And with a powerful API, it can be integrated with task managers and CI tools and other 3rd Party tools.
              </span>
              <span className="lang eng">
              EngineOne works with your existing tools, rather than against them. And with a powerful API, it can be integrated with task managers and other 3rd Party tools.
              </span>
              
              
              </p>
            </Grid.Column>
              <Grid.Column >
                
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
              <br/><br/><br/>
              <Button primary  size='large'  onClick={this.show}>
                Get Early Access
              </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>



        <Segment className="footer" vertical style={{ padding: '0' }}>
        <Container>
        <Menu borderless secondary  size='small'>
          {/* <Menu.Item as='a'>Contact</Menu.Item>
          <Menu.Item as='a'>Privacy</Menu.Item>
          <Menu.Item as='a'>Terms of use</Menu.Item>
          <Menu.Item as='a'>Accessability</Menu.Item> */}
          <Menu.Item position='right'>
            <Menu.Item as='a' href='https://twitter.com/_engineone' target='_blank'><Icon name='twitter' style={{fontSize: '1.5em'}} /></Menu.Item>
            <Menu.Item as='a' href='https://www.facebook.com/engine0ne' target='_blank'><Icon name='facebook' style={{fontSize: '1.5em'}} /></Menu.Item>
            <Menu.Item as='a' href='https://www.linkedin.com/company/engineone' target='_blank'><Icon name='linkedin' style={{fontSize: '1.5em'}} /></Menu.Item>
          </Menu.Item>
        </Menu>
      </Container>
        </Segment>


        { visible ? 
        <div className='floating' title='Language'>
          <Button.Group className='langbuttons' size='mini'>
          <Button inverted={lang!='geek'} primary={lang=='geek'} onClick={()=>this.setLang("geek")}>Developer</Button>
          {/* <Button.Or text="<>"/> */}
          <Button  inverted={lang!='eng'} primary={lang=='eng'} onClick={()=>this.setLang("eng")}>Business</Button>
        </Button.Group>
        </div>
        :null}

      </div>
    )
  }
}