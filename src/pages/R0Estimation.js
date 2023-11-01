import React, { Component } from 'react'
import Abstract from '../components/Abstract';
import Result from '../components/Result';
import Description from '../components/Description';
import testdata from '../../src/test_data.json'

class R0Estimation extends Component {

    constructor(props) {
        super(props);

        const data = testdata['Sheet1'][Math.floor(Math.random() * 300) + 1]
        this.label_heading = 'Human Annotation'
        this.prediction_heading = 'LLM Prediction'

        this.state = {
            title: data['title'],
            abstract: data['abstract'],
            label: data['json_response'],
            prediction: data['json_model_response']
        };
    }
    
    onRefresh = () => {
        const data = testdata['Sheet1'][Math.floor(Math.random() * 300) + 1]
        
        this.setState({
            title: data['title'],
            abstract: data['abstract'],
            label: data['json_response'],
            prediction: data['json_model_response']
        });
    }

    render() {
        return (
            <div>
                <Description />
                <Abstract title = {this.state.title} abstract = {this.state.abstract} onClick = {this.onRefresh} />
                <Result label = {this.state.label} prediction = {this.state.prediction} 
                label_heading = {this.label_heading} prediction_heading = {this.prediction_heading} />
            </div>
        );
    }
}

export default R0Estimation;
