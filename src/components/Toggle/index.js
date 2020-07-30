import React, {Fragment} from 'react';

const Toggle = () =>{
    return(
        <Fragment>
            <label htmlFor="maxCP" className="max-cp">
                <input type="checkbox" id="maxCP" />
                <small>
                    Maximum Combat Points
                </small>
            </label>
        </Fragment>
    )
}

export default Toggle