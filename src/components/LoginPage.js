import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


// This is stateless functional component and a named export
export const LoginPage = ({ startLogin }) => (   
    <div>
      <button onClick={startLogin}>Login</button>
    </div>  
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);