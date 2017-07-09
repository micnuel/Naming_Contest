import React from 'react';
import {color} from '../';

const Header =(props)=>{
    return(
        <h2 style ={{color:color}}> {props.headerMessage} </h2>
    );
}
export default Header;

Header.propTypes={
    headerMessage:React.PropTypes.string,
};

Header.defaultProps={
    headerMessage:'Hello from default',
};