import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Connector from './Connector'
import Corner from './Corner'
import Calculator from './Calculator';
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
  Modal,
  Responsive,
  Label
} from 'semantic-ui-react';
import SubscribeFrom from './Subscription';

export default class HomepageLayout extends Component {
  state = {
    open: false,
    lang: 'geek'
  } // geek or eng

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  setLang = (lang) => this.setState({ lang: lang })

  render() {
    const { visible, open, lang } = this.state;

    return (
      <div className={lang}>

        <Modal size="small" id='signup-modal' open={open} onClose={this.close} closeIcon>
          <Header content='Sign Up for Early Access' />
          <Modal.Content>
            <SubscribeFrom />
          </Modal.Content>
          {/* <Modal.Actions>
      <Button color='green'>
        <Icon name='checkmark' /> Sign Up
      </Button>
    </Modal.Actions> */}
        </Modal>

        {visible
          ? <Menu borderless fixed='top' size='large'>
            <Container>
              <div >
                <img
                  src="logo.svg"
                  style={{
                    width: '150px',
                    paddingTop: '11px'
                  }} />
              </div>

              <Menu.Item
                position='right'
                style={{
                  padding: '3px'
                }}>
                <Menu.Item as='a'>&nbsp;</Menu.Item>
                <Menu.Item as='a' className='careers-link' href='http://careers.lepsta.com' target='_new'><Label as='span' color='teal' empty circular style={{ marginRight: '.4rem' }}></Label>We're hiring!</Menu.Item>

                {/* <Menu.Item as='a'>Learn</Menu.Item>
                <Menu.Item as='a'>Community</Menu.Item>
                <Menu.Item as='a'>Blog</Menu.Item> */}
                <div style={{ display: "flex" }}>
                  <Button primary size='tiny'>
                    Login 
                  </Button>
                  <Button primary size='tiny' onClick={this.show}>
                    Get Early Access
                  </Button>
                </div>
              </Menu.Item>
            </Container>
            {/*
          <Button.Group className='langbuttons' size='mini'>
              <Button inverted={lang!='geek'} primary={lang=='geek'} onClick={()=>this.setLang("geek")}>Developer</Button>
              <Button  inverted={lang!='eng'} primary={lang=='eng'} onClick={()=>this.setLang("eng")}>Business</Button>
            </Button.Group> */}

          </Menu>
          : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>

          {/* minHeight: '100vh', */}
          <div className='legacy'>Click <a href="https://engineone.co">here</a> to visit EngineOne</div>
          <Segment
            className="home"
            textAlign='center'
            style={{
              paddingTop: '4em',
              paddingBottom: 0
            }}
            vertical>


            <Container>

              <Menu borderless secondary pointing size='large'>
                <div ><img
                  src="logo.svg"
                  className='logo'
                  style={{
                    position: 'absolute'
                  }} /></div>
                <Menu.Item position='right' style={{ width: "45%" }}>
                  <Menu.Item as='a' className='careers-link' href='http://careers.lepsta.com' target='_new'>
                    <Label as='span' color='yellow' empty circular style={{ marginRight: '.4rem' }}></Label>
                    We're hiring!
                 </Menu.Item>
                  <Menu.Item as='a' className="community">Community</Menu.Item>
                  <div style={{ display: "flex" }}>
                    <Button size='tiny' onClick={() => alert("Route to login")}>
                      Login 
                    </Button>
                    <Button size='tiny' onClick={this.show}>
                      Get Early Access
                  </Button>
                  </div>
                </Menu.Item>
              </Menu>
            </Container>

            <Container inverted>
              <Grid stackable verticalAlign='middle'>
                {/* style={{ minHeight: '75vh'}} */}
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div
                      style={{
                        paddingTop: '4em',
                        textAlign: 'left'
                      }}>
                      <Button.Group size="small" className='langbuttons'>
                        <Button
                          style={{
                            width: '100px'
                          }}
                          inverted={lang != 'geek'}
                          primary={lang == 'geek'}
                          onClick={() => this.setLang("geek")}>Developer</Button>
                        {/* <Button.Or text="<>"/> */}
                        <Button
                          style={{
                            width: '100px'
                          }}
                          inverted={lang != 'eng'}
                          primary={lang == 'eng'}
                          onClick={() => this.setLang("eng")}>Business</Button>
                      </Button.Group>
                      <Header
                        inverted
                        as='h1'
                        style={{
                          fontSize: '2em',
                          color: '#1B263F'
                        }}>
                        <span className="lang geek">Spend more time writing code, and less time managing it!</span>
                        <span className="lang eng">There are hidden costs in your software development process</span>
                      </Header>
                      <Header
                        inverted
                        as='h2'
                        style={{
                          fontSize: '1em',
                          fontWeight: 'normal',
                          margin: '1.2em 0',
                          color: '#1B263F'
                        }}>
                        <span className="lang geek">
                          Lepsta is a version control and code syncing service that helps developers spend
                          more time coding and less time managing code by automating their code management
                          workflow.
                        </span>
                        <span className="lang eng">
                          Hundreds of hours are lost to admin and code management tasks. Lepsta will reduce the time your
                          developers spend on managing code by automating their workflow.
                        </span>
                      </Header>
                    </div>
                    {/* padding for mobile:
              <Responsive as={Header} minWidth={768} style={{paddingTop:'7em'}}>
              </Responsive>*/}
                  </Grid.Column>
                  <Grid.Column only='tablet computer' width={8} textAlign="center">
                    <div className="lang geek">
                      <Image
                        centered
                        style={{
                          width: '85%'
                        }}
                        src='man.svg' />
                    </div>
                    <div className="lang eng calculator">
                      <Calculator />
                    </div>
                  </Grid.Column>

                  <Grid.Column only='mobile' width={8} textAlign="center">
                    <div className="lang geek">
                      <Image
                        centered
                        style={{
                          width: '85%'
                        }}
                        src='man.svg' />
                    </div>
                    <div className="lang eng calculator">
                      <Calculator />
                    </div>
                  </Grid.Column>
                </Grid.Row>

                <Responsive
                  as={Grid.Row}
                  minWidth={992}
                  style={{
                    padding: '4px'
                  }}>

                  <Grid.Column width={8}></Grid.Column>
                  <Grid.Column
                    width={4}
                    style={{
                      padding: '0',
                      marginLeft: '-3px'
                    }}>
                    <Connector right x={0} y={0} width={100} height={50} />
                  </Grid.Column>
                </Responsive>

                <Grid.Row style={{
                  padding: 0
                }}>
                  <Grid.Column
                    textAlign="center"
                    style={{
                      padding: 0,
                      paddingBottom: '17px'
                    }}>
                    <Button primary onClick={this.show} style={{ color: '#fff' }}>
                      Get Early Access
                  </Button>

                  </Grid.Column>
                </Grid.Row>

              </Grid>
            </Container>

            <img
              style={{
                position: 'relative',
                left: '0px',
                bottom: '-6px'
              }}
              src='line-top.svg' />
          </Segment>
        </Visibility>

        <Segment
          inverted
          className="gradient"
          style={{
            margin: 0,
            paddingTop: '1rem',
            borderRadius: 0
          }}>
          <Container>
            <Grid padded celled='internally' verticalAlign='top'>
              {/******* mobile only... ******/}
              <Grid.Row only='mobile' style={{ boxShadow: 'none' }}>
                <Grid.Column
                  width={8}
                  textAlign='left'
                  style={{
                    paddingRight: '42px'
                  }}>
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
                      Your job as a developer is building great software, yet you find yourself
                      investing a lot of time on code management. You are constantly running commands
                      to make your code accessible to others, and resolving conflicts because someone
                      didn’t update their code regularly. Also, you have to remember to never pull
                      before committing. Who made those rules?
                    </span>
                    <span className="lang eng">
                      We thought software developers write code all day every day. However, based on
                      our research developers spend about 5 hours on admin tasks. This means, if you
                      have 10 mid-level Developers costing you about $59 per hour (8 hours per day),
                      you are losing around $2 950 per day, $14,750 per week or $59,000 per month to
                      manual/admin tasks. In terms of time, a project that is due in 6 months will be
                      delivered in 13 months.
                    </span>

                  </p>

                </Grid.Column>
                <Grid.Column
                  width={8}
                  textAlign='right'
                  style={{
                    paddingLeft: '42px'
                  }}>

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
                      Either due to unexpected conflicts or hardware failure, you can loose your code
                      any day unless everyone you collaborate with makes regular backups and doesn’t
                      go for 3 days without commiting. But why is this your responsibility? Your job
                      is tough enough already!
                    </span>
                    <span className="lang eng">
                      Current workflows are manual, as a result human errors are inevitable. Unless
                      developers backup code regularly chances of them losing their code are still
                      high. This may cause delays in project delivery.
                    </span>

                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row only='tablet computer' style={{ boxShadow: 'none' }}>
                <Grid.Column width={8} textAlign='left'>
                  <img
                    src="ide.svg"
                    style={{
                      float: 'left'
                    }} />
                  <div
                    style={{
                      marginLeft: '70px',
                      marginRight: '25px'
                    }}>
                    <Header inverted as='h3'>
                      <span className="lang geek">
                        You might be overworking yourself!
                      </span>
                      <span className="lang eng">
                        You are not in total control
                      </span>

                    </Header>
                    <p>
                      <span className="lang geek">
                        Your job as a developer is building great software, yet you spend a lot of time
                        managing code. You are constantly running commands to make your code accessible
                        to others, and resolving conflicts because someone didn't update their code regularly.
                        Also, you have to remember to never pull before committing. Who made those rules?
                      </span>
                      <span className="lang eng">
                        It's hard to stay in control without good visibility. Current code management
                        solutions rely on human input to keep everyone up to date. Which means that
                        you only learn what was worked on when the developer finaly gets a chance to push the code.
                        And it's often too late. You need more control.
                      </span>

                    </p>
                  </div>
                </Grid.Column>
                <Grid.Column width={8} textAlign='right'>
                  <img
                    src="safe.svg"
                    style={{
                      float: 'right'
                    }} />
                  <div
                    style={{
                      marginRight: '70px',
                      marginLeft: '25px'
                    }}>
                    <Header inverted as='h3'>
                      <span className="lang geek">
                        Your code might be at risk!
                      </span>
                      <span className="lang eng">
                        Your project might be at risk!
                      </span>
                    </Header>
                    <p>
                      <span className="lang geek">
                        Either due to unexpected conflicts or hardware failure, you can loose your code
                        any day unless everyone you collaborate with makes regular backups and doesn’t
                        go for 3 days without commiting. But why is this your responsibility? Your job
                        is tough enough already! Besides, that just doesn't sound like a mdern solution.
                      </span>
                      <span className="lang eng">
                        Current workflows are manual, as a result human errors are inevitable. Unless
                        developers backup code regularly chances of them losing their code due to hardware failure or human error are still
                        high. This causes delays in project delivery.
                      </span>

                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

        <div
          style={{
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            //left: '-4px',
            //top: '-135px',
          }}>
          <div style={{ position: 'absolute', left: '50%' }}>
            <img src='seal.svg' style={{ position: 'relative', top: '-140px', left: '-50%' }} />
          </div>
          <Header as='h2' style={{ paddingTop: '60px', paddingBottom: '10px' }} className='solution'>Lepsta is the solution!</Header>
        </div>

        <Segment
          className="benifits"
          style={{
            paddingBottom: '4em'
          }}
          vertical>
          <Grid container verticalAlign='middle'>

            <Grid.Row style={{
              padding: 0
            }}>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={6} style={{ paddingLeft: "5px" }}>
                <Connector white={false} right x={0} y={0} width={100} height={50} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={6} tablet={4} computer={3}>
                <Image
                  style={{
                    width: '100%'
                  }}
                  src='safe-pic.svg' />
              </Grid.Column>
              <Grid.Column mobile={10} tablet={9} computer={8}>
                <Header as='h3' style={{
                  color: '#7A5DAF'
                }}>
                  <span className="lang geek">
                    You just start coding!
                  </span>
                  <span className="lang eng">
                    Watch your team's productivity increase!
                  </span>
                </Header>
                <p>
                  <span className="lang geek">
                    You no longer need to keep an open terminal to run version control commands, or
                    install fancy IDE plugins to help with version control. Lepsta version
                    controls your code automatically so you never have to deal with dirty branches
                    and manually checking files into version control.
                  </span>
                  <span className="lang eng">
                    At the end of the day, Managers and Clients measure success based on quality
                    features delivered. Lepsta helps Developers eliminate manual procedures and
                    enables them to focus on what they are hired to do...coding. By automating code
                    source workflow Developers will be more productive than ever before.
                  </span>
                </p>
              </Grid.Column>
              <Grid.Column tablet={2} computer={5} only='tablet computer'>
                <Corner x={0} y={0} width={68} height={80} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column textAlign='right' tablet={2} computer={5} only='tablet computer'>
                <Corner right x={0} y={0} width={68} height={80} />
              </Grid.Column>
              <Grid.Column mobile={10} tablet={9} computer={8} textAlign="right">
                <Header as='h3' style={{
                  color: '#14B18E'
                }}>
                  <span className="lang geek">
                    Code is backed up automatically…
                  </span>
                  <span className="lang eng">
                    Code is backed up automatically…
                  </span>
                </Header>
                <p>
                  <span className="lang geek">
                    Lepsta picks up all the changes you are making to your code and syncs them up
                    to a secure cloud infrastructure. This ensures that you always have a safe copy
                    of your code guarded by us and available to you whenever you need a clean copy.
                  </span>
                  <span className="lang eng">
                    Lepsta picks up all the changes your team is making and uploads them
                    automatically to a secure public or private cloud. This ensures that you always
                    have a safe copy of your code and that is accessible to you whenever you need a
                    clean copy.
                  </span>
                </p>
              </Grid.Column>
              <Grid.Column mobile={6} tablet={4} computer={3}>
                <Image
                  style={{
                    width: '100%'
                  }}
                  src='ide-pic.svg' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={6} tablet={4} computer={3}>
                <Image
                  style={{
                    width: '100%'
                  }}
                  src='community-pic.svg' />
              </Grid.Column>
              <Grid.Column mobile={10} tablet={9} computer={8}>
                <Header as='h3' style={{
                  color: '#4A90E2'
                }}>
                  <span className="lang geek">
                    Everyone’s code is always up to date
                  </span>
                  <span className="lang eng">
                    Improve visibility and collaboration
                  </span>
                </Header>
                <p>
                  <span className="lang geek">
                    There is no need to wait for someone to commit and push their code! Lepsta
                    keeps code copies eventually identical wherever the collaborators may be. This
                    way if someone in the team needs you to check their code, you don’t need to
                    clean up your working copy first. You just switch to their view of the code.
                  </span>
                  <span className="lang eng">
                    By automatically syncing to cloud, Lepsta does not only securely backup code
                    but it also improves visibility within teams, ensuring that everyone is aware of
                    what everyone else is working on. Users can view each other's work and help one
                    another remotely. Because of this ability, teams can now collaborate on code
                    remotely; Managers and Clients will still be able to view Developers progress.
                  </span>

                </p>
              </Grid.Column>
              <Grid.Column tablet={2} computer={5} only='tablet computer'>
                <Corner x={0} y={0} width={68} height={80} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column textAlign='right' tablet={2} computer={5} only='tablet computer'>
                <Corner right x={0} y={0} width={68} height={80} />
              </Grid.Column>
              <Grid.Column mobile={10} tablet={9} computer={8} textAlign="right">
                <Header as='h3' style={{
                  color: '#EA4E83'
                }}>
                  <span className="lang geek">
                    Conflicts are detected before they occur
                  </span>
                  <span className="lang eng">
                    Prevent fires before they occur
                  </span>
                </Header>
                <p>
                  <span className="lang geek">
                    Because Lepsta syncs the code near real-time, it can detect when developers
                    are in a collision course. This helps prevent conflicts and helps collaborators
                    know when they are potentially working on the same feature.
                  </span>
                  <span className="lang eng">
                    Code-conflicts are Developers' biggest nightmare. Lepsta has a unique feature
                    that listens to potential code conflicts and prevents them by alerting users
                    before they occur.
                  </span>

                </p>
              </Grid.Column>
              <Grid.Column mobile={6} tablet={4} computer={3} textAlign='center'>
                <Image
                  centered
                  style={{
                    width: '80%'
                  }}
                  src='proactive-pic.svg' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={6} tablet={4} computer={3}>
                <Image
                  style={{
                    width: '100%'
                  }}
                  src='block-pic.svg' />
              </Grid.Column>
              <Grid.Column mobile={10} tablet={9} computer={8}>
                <Header as='h3' style={{
                  color: '#A775D3'
                }}>
                  <span className="lang geek">
                    Collaborate without internet access with blockchain!
                  </span>
                  <span className="lang eng">
                    No internet connection no problem!
                  </span>
                </Header>
                <p>
                  <span className="lang geek">
                    Lepsta is designed to be offline first. And it takes that a step further by
                    enabling a team of collaborators to continue syncing code with one another as
                    long as they are connected to the same network. So get stuff done with or
                    without internet connectivity.
                  </span>
                  <span className="lang eng">
                    Your team can still collaborate without internet connectivity, Lepsta will
                    continue syncing work to one of their computers provided they are on the same
                    network. When the internet reconnects, that computer will resume syncing to
                    cloud. Code is backed up (regardless of internet connection) using blockchain
                    technology.
                  </span>
                </p>
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
                Lepsta is a code syncing service that helps Software Developers spend
                more time coding and less time managing code by automating their version
                control workflow
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}

        <Segment
          className="features"
          style={{
            padding: '8em 0em'
          }}
          vertical>

          <Grid columns='equal' container stackable verticalAlign='top'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <img
                  centered
                  src='line-bottom.svg'
                  style={{
                    position: 'absolute',
                    top: '-185px'
                  }} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column
                style={{
                  textAlign: "center",
                  paddingBottom: "2em"
                }}>
                <Header as='h2'>Features</Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column >
                <Grid container>
                  <Grid.Row>
                    <Grid.Column width={3} style={{ padding: '0' }}>
                      <img src="feature-offline.svg" />
                    </Grid.Column>
                    <Grid.Column width={13} style={{ padding: '0' }}>
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
                          Your code change history is stored even if you are working offline. And if you
                          are working in a localised team, Lepsta's Self-Organising-Network allows
                          teams to seamlessly collaborate online and offline.
                        </span>
                        <span className="lang eng">
                          Your code change history is stored even if you are working offline. And if you
                          are working in a localised team, Lepsta allows teams to seamlessly
                          collaborate online and offline.
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column >
                <Grid container>
                  <Grid.Row>
                    <Grid.Column width={3} style={{ padding: '0' }}>
                      <img src="feature-detect.svg" />
                    </Grid.Column>
                    <Grid.Column width={13} style={{ padding: '0' }}>
                      <Header as='h4'>Early Conflict Detection</Header>
                      <p>
                        <span className="lang geek">
                          Unlike other solutions, Lepsta alerts you of potential code conflicts before
                          they become big problems.
                        </span>
                        <span className="lang eng">
                          Lepsta alerts you of potential issues before they become big problems.
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column >
                <Grid container>
                  <Grid.Row>
                    <Grid.Column width={3} style={{ padding: '0' }}>
                      <img src="feature-extend.svg" />
                    </Grid.Column>
                    <Grid.Column width={13} style={{ padding: '0' }}>
                      <Header as='h4'>Extendable</Header>
                      <p>
                        Plugins allow new features to be added to the Lepsta platform.
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{ marginTop: '1rem' }}>
              <Grid.Column >
                <Grid container>
                  <Grid.Row>
                    <Grid.Column width={3} style={{ padding: '0' }}>
                      <img src="feature-custom.svg" />
                    </Grid.Column>
                    <Grid.Column width={13} style={{ padding: '0' }}>
                      <Header as='h4'>Customisable Workflow</Header>
                      <p>
                        <span className="lang geek">
                          Lepsta can be customised to assist with your version control workflow,
                          whether you use git-flow or single-branch collaboration, Lepsta helps you maintain that freedom.
                        </span>
                        <span className="lang eng">
                          Lepsta can be customised to assist with your software development workflow.
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column>
                <Grid container>
                  <Grid.Row>
                    <Grid.Column width={3} style={{ padding: '0' }}>
                      <img src="feature-integrate.svg" />
                    </Grid.Column>
                    <Grid.Column width={13} style={{ padding: '0' }}>
                      <Header as='h4'>More Integrations</Header>
                      <p>
                        <span className="lang geek">
                          Lepsta works with your existing tools, rather than against them. It supports
                          Git, SVN and Mercurial out the box. And with a powerful API, it can be
                          integrated with task managers and CI tools and other 3rd Party tools.
                        </span>
                        <span className="lang eng">
                          Lepsta works with your existing tools, rather than against them. And with a
                          powerful API, it can be integrated with task managers and other 3rd Party tools.
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
              <Grid.Column ></Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <br /><br /><br />
                <Button primary size='small' onClick={this.show}>
                  Get Early Access
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment className="footer" vertical style={{
          padding: '0'
        }}>
          <Container>
            <Menu borderless secondary size='small'>
              {/* <Menu.Item as='a'>Contact</Menu.Item>
          <Menu.Item as='a'>Privacy</Menu.Item>
          <Menu.Item as='a'>Terms of use</Menu.Item>
          <Menu.Item as='a'>Accessability</Menu.Item> */}
              <Menu.Item position='right'>
                <Menu.Item as='a' href='https://twitter.com/_lepsta' target='_blank'><Icon name='twitter' style={{
                  fontSize: '1.5em'
                }} /></Menu.Item>
                <Menu.Item as='a' href='https://www.facebook.com/lepsta' target='_blank'><Icon name='facebook' style={{
                  fontSize: '1.5em'
                }} /></Menu.Item>
                <Menu.Item
                  as='a'
                  href='https://www.linkedin.com/company/lepsta'
                  target='_blank'><Icon name='linkedin' style={{
                    fontSize: '1.5em'
                  }} /></Menu.Item>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>

        {visible
          ? <div className='floating' title='Language'>
            <Button.Group className='langbuttons' size=''>
              <Button
                inverted={lang != 'geek'}
                primary={lang == 'geek'}
                onClick={() => this.setLang("geek")}>Developer</Button>
              {/* <Button.Or text="<>"/> */}
              <Button
                inverted={lang != 'eng'}
                primary={lang == 'eng'}
                onClick={() => this.setLang("eng")}>Business</Button>
            </Button.Group>
          </div>
          : null}

      </div>
    )
  }
}
