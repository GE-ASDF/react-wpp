import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


export default function HeaderFooter(props){
    
    return (
        <div className={`card bg-dark text-white mx-1 ${props.className}`}>
            {props.children}
        </div>
    )
}