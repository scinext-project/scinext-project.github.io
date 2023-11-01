import React, { Component } from 'react'
import DescriptionSOTA from '../components/DescriptionSOTA';
import Abstract from '../components/Abstract';
import Result from '../components/Result';

import sota_data from '../validation_drop_1_fold2_json_leaderboard.json'

class Sota extends Component {

  constructor(props) {
      super(props);

      const data = sota_data[Math.floor(Math.random() * 450) + 1]
      this.label_heading = 'PWC Annotation'
      this.prediction_heading = 'LLM Prediction'

      this.state = {
          title: "",
          abstract: data['Context'],
          label: data['PWC Annotation'],
          prediction: data['LLM prediction']
      };
  }

  onRefresh = () => {
      const data = sota_data[Math.floor(Math.random() * 450) + 1]
      
      this.setState({
          title: "",
          abstract: data['Context'],
          label: data['PWC Annotation'],
          prediction: data['LLM prediction']
      });
  }

  render() {
    return (
      <div>
        <DescriptionSOTA />
        <Abstract title = {this.state.title} abstract = {this.state.abstract} onClick = {this.onRefresh} />
        <Result label = {this.state.label} prediction = {this.state.prediction} 
        label_heading = {this.label_heading} prediction_heading = {this.prediction_heading} />
      </div>
    );
  }
}

export default Sota;
