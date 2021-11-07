import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import spinner from './spinner.gif'

const Spinner = () => {
    return (
       <Fragment>
           <img src={spinner} alt="Loading.." style={{width:'200px', margin:'auto', display:'block'}}></img>
       </Fragment>
    )
};

export default Spinner;
