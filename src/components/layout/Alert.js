import React from 'react'
import { useContext } from 'react/cjs/react.development';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const {alert} = alertContext;
    //console.log(alert);
    return (
        alert!=null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.msg}
            </div>
        )
    )
}

export default Alert;