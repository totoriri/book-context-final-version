import React from 'react';
import PropTypes from 'prop-types';

import { themes } from '../theme/theme';

// Context is made up of two things
// Provider - Single as close to top level as possible
// Consumer - Multiple have multiple consumers
export const SiteThemeContext = React.createContext();


export class SiteThemeProvider extends React.Component {
    state = {
      theme: themes['happy']
    };
  
    handleThemeChange = e => {
      const key = e.target.value;
      const theme = themes[key];
        this.setState({ theme });
    };
  
    render() {
      return (
        <SiteThemeContext.Provider
          value={{
            ...this.state,
            handleThemeChange: this.handleThemeChange
          }}
        >
          {this.props.children}
        </SiteThemeContext.Provider>
      );
    }
  }
  
  SiteThemeProvider.propTypes = {
    children: PropTypes.any
  };
  