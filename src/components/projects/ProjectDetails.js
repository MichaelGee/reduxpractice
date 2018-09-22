import React from 'react';

const ProjectDetails = (props) =>{
    const id = props.match.params.id;
    return (
        <div className="conatiner section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Thirsty for success. we drink from the youth fountain. Bigheaded trying to stay grounded
                        like a delinquesnt in middle school clowing. Drowning MCs, they want life-jackets. Jokers and new Jacks can  get dealt with.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by Michael</div> 
                   <div>21, Sept 2018</div>
                </div>
            </div>
        </div>
    ) 
}
export default ProjectDetails;
