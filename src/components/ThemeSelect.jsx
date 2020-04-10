import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SiteThemeContext } from '../context/SiteThemeContext';
import { themes } from '../theme/theme';

const ThemeSelect = () => {
  return (
    <SiteThemeContext.Consumer>
      {({ handleThemeChange }) => (
        <SelectWrapper>
          <Select onChange={e => handleThemeChange(e)}>
            {Object.keys(themes).map((theme, index) => {
              return (
                <SelectOpt key={index} value={theme}>
                  {theme}
                </SelectOpt>
              );
            })}
          </Select>
        </SelectWrapper>
      )}
    </SiteThemeContext.Consumer>
  );
};

ThemeSelect.propTypes = {
  handleThemeChange: PropTypes.func
};

export default ThemeSelect;


const SelectWrapper = styled.div`
  padding: 0rem 0.5rem 0rem 0.25rem;
`;

const Select = styled.select`
  font-size:22px;
  font-weight:800;
  font-family: ${({ theme }) => theme.fontHeader};
  border: 2px solid ${({ theme }) => theme.secondary};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: white;
  &:focus{
    outline:none;
  }
`;

export const SelectOpt = styled.option`
  font-family: ${({ theme }) => theme.fontHeader};
`;