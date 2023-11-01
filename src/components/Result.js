import React, { Component } from 'react';
import ResultContent from './ResultContent';
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/result.css'

class Result extends Component {
    render() {

        var label = ''
        if (this.props.label !== 'unanswerable'){
            try{
                label = JSON.parse(this.props.label).map((value, index) => (
                    <ResultContent key={'label ' + index} id={'label ' + index} value={value} />))
            }catch (error){
                label = <ResultContent key={'label'} id={'label'} value={this.props.label} />
            }
        }else{
            label = <ResultContent key={'label'} id={'label'} value={{}} />
        }

        var prediction = ''
        if (this.props.prediction !== 'unanswerable'){
            try{
                prediction = JSON.parse(this.props.prediction).map((value, index) => (
                    <ResultContent key={'prediction ' + index} id={'prediction ' + index} value={value} />))
            }catch (error){
                prediction = <ResultContent key={'prediction'} id={'prediction'} value={this.props.prediction} />
            }
        }else{
            prediction = <ResultContent key={'prediction'} id={'prediction'} value={{}} />
        }

        return (
            <div className='result-div'>
                <Row>
                    <Col xs="6">
                        <div className='center-heading'>
                            <h5>{this.props.label_heading}</h5>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className='center-heading'>
                            <h5>{this.props.prediction_heading}</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <div className='label-div'>
                            {label}
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className='label-div'>
                            {prediction}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Result;