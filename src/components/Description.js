import React, { Component } from 'react';
import './../css/description.css'

class Description extends Component {
    render() {
        return (
            <div className='description-div'>
                <h5>Complex Structured Scientific Information Extraction Demo</h5>
                <p>The task addressed is Extracting the Reproduction Number (R0) estimate structured scholarly contributions for Infectious Diseases. The “Human Annotations” box corresponds to human-annotated data and the “LLM Predictions” box corresponds to extractions produced by a Large Language Model (LLM). All extractions are exactly as output by the FLAN-T5-Large (780M) model and entries were not seen during training.</p>
            </div>
        );
    }
}

export default Description;