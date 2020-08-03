// Higher Order Component (HOC) - A component (HOC) that renders another component
// Advantages - Reuse Code, Render hijacking, prop manipulation, Abstract State

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
    <div>
      {props.isAdmin && <p>This is confidential. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div> 
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
          {props.isAuthenticated ? (
            <WrappedComponent {...props} />
          ) : (
            <p>Please login to view the Info</p>
          )}
          
        </div>        
    );
};

// Here in Line 26 AdminInfo is the component which is calling withAdminWarning function. In line 15, 
// the WrappedComponent is the Higher Order Component.

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details." />, document.getElementById('app'));