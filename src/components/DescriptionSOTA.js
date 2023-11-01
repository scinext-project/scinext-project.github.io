import React, { Component } from 'react';
import './../css/description.css'

class DescriptionSOTA extends Component {
    render() {
        return (
            <div className='description-div'>
                <h5>Leaderboards for Empirical AI Research</h5>
                <p>The Information Extraction (IE) task addressed focuses on empirical AI research leaderboards, where AI models, introduced and described in research papers, are succinctly characterized by four key attributes: the task (T), dataset (D), evaluation metric (M), and score (S) achieved. A single annotation unit comprises a single related (T, D, M, S) tuple, and a paper that reports a leaderboard can have more than one (T, D, M, S) tuple. The annotations on the left show the crowdsourced annotations obtained from paperswithcode, while the annotations on the right are exactly as output by the FLAN-T5-Large (780M) Large Language Model (LLM) and entries were not seen during training.</p>
            </div>
        );
    }
}

export default DescriptionSOTA;