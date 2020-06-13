import React, { Component } from 'react';


class Work extends Component {
  render() {
    return (
     <div class="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center" uk-grid="true">
    
    <div>
    <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>REQUIREMENT ANALYSIS</h4>
        <p>
            Initially, our consultants will discuss the business requirements and vision of the project. Based on it, we will build a scope of work(SOW) document with surmises, ideas and suggestions.
        </p>
    </div>
     
    <div>
        <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>PLANNING & WIRE-FRAMING
</h4>
        <p>
After analysing the SOW document with the client, we finalize all the requirements with a clear inference. Our engineering team will plan and prepare wireframe with an in-depth storyboard.        </p>
    </div>

     
    <div>
        <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>UI DESIGN & PROTOTYPING
</h4>
        <p>
Based on the wireframe, the design phrase will be initiated. Our experienced designers will create the UI design of the product or service. This prototype will be reviewed by the client.        </p>
    </div>

     
    <div>
        <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>CODING & DEVELOPMENT
</h4>
        <p>
Once the prototype is accepted by the client, our developers will begin the coding and development of the product.        </p>
    </div>

    <div>
        <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>UNIT TESTING
</h4>
        <p>
Each unit of the product will be tested to check the functionality. If there are bugs, it will be rectified in this stage.        </p>
    </div>

    <div>
        <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>GUIDED ACCEPTANCE TESTING
</h4>
        <p>
After each unit of the product is tested, our QA team will deploy the guided acceptance testing where the entire product will be tested for checking the functionality        </p>
    </div>

    <div>
        <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>RELEASE & IMPLEMENTATION
</h4>
        <p>
After the successful testing and quality checking by our QA team, we will release the product live. In addition, the client will be informed and any bugs present will be rectified on spot.        </p>
    </div>

    <div>
        <span  uk-icon="icon: cog; ratio: 3"></span>

        <h4>TRAINING & SUPPORT
</h4>
        <p>
We will provide the required training to the client in using the product and ensure that they are well-versed in it. Furthermore, any kind of immediate support in the form of upgrade will also be done by us.        </p>
    </div>

    
</div>
    );
  }
}

export default Work;