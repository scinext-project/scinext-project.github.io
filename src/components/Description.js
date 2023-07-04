import React, { Component } from 'react';
import './../css/description.css'

class Description extends Component {
    render() {
        return (
            <div className='description-div'>
                <h5>Complex Structured Scientific Information Extraction Demo</h5>
                <p>The Information Extraction (IE) task addressed is Extracting the Reproduction Number (R0) estimate structured scholarly contributions for Infectious Diseases. All extractions are exactly as output by the FLAN-T5-Large (780M) Large Language Model (LLM) and entries were not seen during training.</p>
            </div>
        );
    }
}

export default Description;