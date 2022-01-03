import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconAward } from '@tabler/icons';

const FooterWrapper = styled.footer`
  background: #242729;
`;

const StyledCopyright = styled.p`
  color: #848d95;
  margin: 0 1em 0 0;
`;

StyledCopyright.displayName = 'StyledCopyright';

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  height: 60px;
  
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
      <LinkWrapper>
        <StyledCopyright>&#169; {year} Joey Zheng</StyledCopyright>
        <StyledFooterLink to="/about">About</StyledFooterLink>
        <StyledFooterLink to="/contact">Contact</StyledFooterLink>
        <StyledFooterLink to="/feedback">Feedback</StyledFooterLink>
      </LinkWrapper>
    </FooterWrapper>
  )
};

export default Footer;

