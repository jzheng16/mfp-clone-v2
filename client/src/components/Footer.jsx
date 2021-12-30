import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ul, List } from './StyledComponents';

const FooterWrapper = styled.footer`
  background: #242729;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;

const StyledCopyright = styled.p`
  grid-column: 1/2;
  color: #848d95;
  
`;

StyledCopyright.displayName = 'StyledCopyright';

const LinkWrapper = styled.div`
  grid-column: 2/4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
`;
const StyledFooterLink = styled(Link)` 
  color: #848d95;
  margin-right: 1em;
  text-decoration: none;
  text-align: center;
  
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
  <FooterWrapper>
    <StyledCopyright> &#169; {year} Joey Zheng </StyledCopyright>
    <LinkWrapper>
      <StyledFooterLink to="/about"> About </StyledFooterLink>
      <StyledFooterLink to="/contact"> Contact </StyledFooterLink>
      <StyledFooterLink to="/feedback"> Feedback </StyledFooterLink>
    </LinkWrapper>
  </FooterWrapper>
  )
  };

export default Footer;

