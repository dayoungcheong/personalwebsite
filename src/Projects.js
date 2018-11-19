import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/projects.csv').then(data => {
            this.setState({
                data: data
            })
        })
    }
    render() {
        console.log(this.state.data)
        return <div className="container"> My Hackathon Projects
                {this.state.data.map((d, index) => {
                return (
                    <Card>
                     <CardBody>
                         <CardTitle><a href={d.link} key={index}>{d.name}</a></CardTitle>
                         <CardText>{d.description}</CardText>
                     </CardBody>

                 </Card>

                )
                })}
               </div>
    }
}

