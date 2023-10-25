import React, { Component } from 'react';
import './../css/intro.css'

class Intro extends Component {
    render() {
        return (
            <div className='intro-div'>
                <h5>Neural-Symbolic <u>SC</u>holarly <u>I</u>nnovatio<u>N</u> <u>EXT</u>raction</h5>
                <p><a href="https://sites.google.com/view/jen-web" target="_self" class="external-link-new-window">Dr. Jennifer D'Souza</a>, a postdoc in the <a href="https://www.tib.eu/en/research-development/research-groups-and-labs/data-science-digital-libraries" target="_self" class="external-link-new-window">Data Science and Digital Libraries Department</a> at <a href="https://www.tib.eu/en/" target="_self" class="external-link-new-window">TIB</a> who currently leads the NLP development related to the ORKG has been awarded the BMBF grant for her project proposal "SciNEXT - Neural-Symbolic <u>SC</u>holarly <u>I</u>nnovatio<u>N</u> <u>EXT</u>raction". The project will be conducted in the context of the larger Open Research Knowledge Graph project and will be located at the TIB's Data Science and Digital Libraries Department. </p>
                <h5>Objectives</h5>
                <p>The SCINEXT research group aims to set up an AI ecosphere of Neural-Symbolic <u>SC</u>holarly <u>I</u>nnovatio<u>N</u> <u>EXT</u>raction services of templated, machine-interpretable scientific findings as a Knowledge Graph (KG) in the ORKG. Information on innovations buried in text-based discourse will be automatically extracted as machine-actionable resources, for reuse in novel downstream information technology (IT) applications, e.g. automated comparisons of the state-of-the-art, intuitive research visualization, and question answering. To this end, the SCINEXT AI workload will comprise expert-sourced symbolic templated constructs of scientific findings as extraction targets. E.g., task, dataset, metric, and score template for computer science model leaderboards; basic reproduction number, confidence interval (95%), location, and time period template for Covid-19 reproductive number in epidemiology. The SCINEXT project will implement a series of learners that will combine traditional rules-based AI approaches with modern deep learning techniques that will be selectively applied for highly automated extraction of templated knowledge standardizing the annotation of complex ontologized relationships in a KG, leading to reusable and machine-interpretable knowledge of innovations. The project will create new theoretical foundations in the field of neural-symbolic AI while realizing concretely usable results with direct added value for stakeholders in academia and industry. A conceptual overview of the project is provided in the Figure below.</p>
                <p align="center" className='scinext_img'><img src="https://orkg.org/strapi/uploads/concept_ede6097820.png" alt='SCINEXT' /></p>
                <h5>Management</h5>
                <p>Dr. Jennifer D'Souza</p>
                <h5>Senior Advisor</h5>
                <p>Prof. Dr. Sören Auer</p>
                <h5>Team</h5>
                <p>Julia Evans, Mahsa Shamsabadi, Hamed Babaei Giglou, Yaser Jaradeh,  and Omar Arab-Oghli. </p>
                <h5>Funding</h5>
                <p>Federal Ministry of Education and Research (BMBF) Grant<br />Föderkennzeichen: 01lS22070</p>
                <h5>Duration</h5>
                <p>1 August 2022 – 31 July 2025</p>
            </div>
        );
    }
}

export default Intro;