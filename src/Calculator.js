import React, {Component} from 'react';
import { Grid, Header, Segment, Label } from 'semantic-ui-react';
import Rheostat from 'rheostat';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            numDevelopers: 1, 
            hourlyRate: 1,
            savings: ((1 * 5) * 1) * 20
        };
    }

    onDevelopersChange = (value) => {
        let change = value.values[0];
        let savings = ((change * 5) * this.state.hourlyRate) * 20;
        this.setState({
            numDevelopers: change,
            savings: savings,
            hourlyRate: this.state.hourlyRate,
        })
    }

    onRateChange = (value) => {
        let change = value.values[0]
        let savings = ((this.state.numDevelopers * 5) * change) * 20;
        this.setState({
            hourlyRate: change,
            savings: savings,
            numDevelopers: this.state.numDevelopers
        })
    }

    render() {
        return (
            <div>
                <Grid className="header">
                    <Grid.Column>
                        <Header size='medium'>See how much money you may be losing:</Header>
                    </Grid.Column>
                </Grid>
                <Grid className="sliders">
                    <Grid.Column width={16}>
                        <div className="slider devs-slider">
                        <span>How many developers do you have?</span> <Label>{this.state.numDevelopers}</Label>
                        <Rheostat
                            min={1}
                            max={500}
                            values={[this.state.numDevelopers]}
                            onValuesUpdated={this.onDevelopersChange}
                        />
                        </div>
                    </Grid.Column>
                </Grid>
                <Grid className="sliders last">
                    <Grid.Column width={16}>
                        <div className="slider money-slider">
                            <span>What is their average hourly rate?</span> <Label>${this.state.hourlyRate}</Label>
                            <Rheostat
                                min={1}
                                max={500}
                                values={[1]}
                                onValuesUpdated={this.onRateChange}
                            />
                        </div>
                    </Grid.Column>
                </Grid>
                <Grid className="total">
                    <Grid.Column>
                        <span className="figure">&asymp; ${this.state.savings}.00</span> per month
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}