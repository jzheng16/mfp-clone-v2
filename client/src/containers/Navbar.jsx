import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { loggingOut } from '../store/action-creators/auth';
import logo from '../images/mfp.png';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '26px',
    left: '36px',
    top: '36px',
  
  },
  bmBurgerBars: { background: '#373a47' },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: { background: '#bdc3c7' },
  bmMenuWrap: {width: '300px'},
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em',
    fontSize: '1.15em',
   
  },

  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em 1em 0 0'
  },
  bmItem: { display: 'block' },
  bmOverlay: { background: 'rgba(0, 0, 0, 0.3)' }
};


const active = btoa(Math.random());

const NavbarWrapper = styled.div`
  background-color: #0070BF;
  width: 100%;
  height: 100px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #0070BF;
`;

const StyledHomeIcon = styled.img`
  height: 60px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.5em;
  margin: 0 1em;
  text-decoration: none;

  &:hover {
    color: green;
  }

  &.${active} {
    color: black;
  }
`;

const StyledMenuLink = styled(StyledNavLink)`
  padding: 10px;
  margin: 0 0 16px 0;
  font-size: 20px;

`;

const LogoutButton = styled.button`
  font-size: 1.5em;
  border: none;
  background: transparent;
  color: white;
`

const LogoutMenuButton = styled(LogoutButton)`
  font-size: 20px;
`


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  }

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }

  const handleLogout = () => {
    dispatch(loggingOut());
    history.push('/');
  }

  return (
    width > 850 ?
      <NavbarWrapper>
        {user.id ?
          <StyledNav>
            <StyledNavLink id="navhome" to="/" exact activeClassName={active}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" />  </StyledNavLink>
            <StyledNavLink to="/diary" exact activeClassName={active}> Diary </StyledNavLink>
            <StyledNavLink to="/measurement" exact activeClassName={active}> Track Measurements </StyledNavLink>
            <StyledNavLink to="/goal" exact activeClassName={active}>Goals </StyledNavLink>
            <StyledNavLink to="/me" exact activeClassName={active}> Me! </StyledNavLink>
            <LogoutButton onClick={handleLogout}> Logout </LogoutButton>
          </StyledNav>
          :
          <StyledNav>
            <StyledNavLink to="/" exact activeClassName={active}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" /> </StyledNavLink>
            <StyledNavLink to="/foods" exact activeClassName={active}> Foods </StyledNavLink>
            <StyledNavLink to="/login" exact activeClassName={active}> Login </StyledNavLink>
            <StyledNavLink to="/signup-step1" exact activeClassName={active}> Sign-up</StyledNavLink>
          </StyledNav>

        }
      </NavbarWrapper>
      :
      <NavbarWrapper>
        {user.id ?
          <Menu isOpen={isOpen} width={250} styles={styles}>
            <StyledMenuLink id="navhome" to="/" exact activeClassName={active} onClick={closeMenu}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" />  </StyledMenuLink>
            <StyledMenuLink to="/diary" exact activeClassName={active} onClick={closeMenu}> Diary </StyledMenuLink>
            <StyledMenuLink to="/measurement" exact activeClassName={active} onClick={closeMenu}> Track Measurements </StyledMenuLink>
            <StyledMenuLink to="/goal" exact activeClassName={active} onClick={closeMenu}>Goals </StyledMenuLink>
            <StyledMenuLink to="/me" exact activeClassName={active} onClick={closeMenu}> Me! </StyledMenuLink>
            <LogoutMenuButton id="logout" onClick={() => { handleLogout(); closeMenu(); }} > Logout </LogoutMenuButton>
          </Menu>
          :
          <Menu isOpen={isOpen} width={250} styles={styles}>
            <StyledMenuLink to="/" exact activeClassName={active} onClick={closeMenu}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" /> </StyledMenuLink>
            <StyledMenuLink to="/foods" exact activeClassName={active} onClick={closeMenu}> Foods </StyledMenuLink>
            <StyledMenuLink to="/login" exact activeClassName={active} onClick={closeMenu}> Login </StyledMenuLink>
            <StyledMenuLink to="/signup-step1" exact activeClassName={active} onClick={closeMenu}> Sign-up</StyledMenuLink>
          </Menu>
        }
      </NavbarWrapper>
  );

}

export default Navbar;

