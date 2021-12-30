import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { loggingIn, removeError } from '../store/action-creators/auth';
import { Message, Form } from 'semantic-ui-react';
import { Button } from '../components/StyledComponents';
import userIcon from '../images/user.svg';
import lock from '../images/lock.svg';

const StyledContainer = styled.div`
   background-color: #e9e9e9;
   position: relative;
   padding: 10px;
   box-sizing: border-box;
   min-height: calc(100vh - 70px);
`;

const StyledForm = styled(Form)`
  &&&& {
    border-top: #33b5e5;
    max-width: 800px;
    width: 100%;
    box-sizing: border-box;
  }
  padding: 10px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0px 8px 32px rgb(0 0 0 / 12%);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    padding: 20px;
  }   
  @media (min-width: 1024px) {
    padding: 30px;
  }   
`;

const ErrorMessage = styled(Message)`
  &&&& {
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
    display: block;
  }
`;

const StyledTitle = styled.h2`
  color: #0070BF;
  text-align: center;
  width: 100%;
  margin-bottom: 1.4em;
  font-size: 2.3em;
`;

const StyledEmailInput = styled.input`
  display: block;
  outline: none;
  &&&& {
    box-sizing: border-box;
    width: 90%;
    max-width: 350px;
    font-size: 1.2em;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    padding: 15px 15px 15px 2.2em;
    margin: 0 auto 1.4em auto;
    background-image: ${props => (props.icon ? `url(${props.icon})` : '')};
    background-repeat: no-repeat;
    background-size: 1em 1em;
    background-position: .7em .9em;
    background-color: ${props => (props.error ? '#fff6f6' : '#ffffff')};
    color: ${props => (props.error ? '#9f3a38' : '#525865')};
    
    &:hover{
     box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    };

    &:focus{
    border: 1px solid #33b5e5;
    color: #333333;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    } 
  }
`;

const StyledPasswordInput = styled(StyledEmailInput)`
  margin-bottom: 1em !important;
`;

const StyledLoginButton = styled(Button)`
  display: block;
  border-radius: 1px;
  color: white;
  background-color: #14aaf5;
  border-color: #14aaf5;
  width: 90%;
  max-width: 350px;
  padding: 10px;
  
  margin: 0 auto 1em auto;
  &:disabled{
  color: #b7bfc6;
    fill: #b7bfc6;
    cursor: default;
    background-color: #edf1f2;
    border-color: #e0e6e8;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: .8em;
  /* width: 70%; */
  text-align: center;
  margin-bottom: 1.3em;
  padding: 5px;
`;

const SignupSpan = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-right: .4em;
  padding: 5px;
`;

const Login = (props) => {
  const dispatch = useDispatch();
  const { user, error } = useSelector(state => state.auth);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  const handleLogin = e => {
    e.preventDefault();
    dispatch(loggingIn(e.target.email.value, e.target.password.value));
  }

  // Redirect to homepage if logged in
  if (Object.keys(user).length > 0) {
    return <Redirect to="/" />
  }

  return (
    <StyledContainer>
      <StyledForm className="login" onSubmit={handleLogin}>
        {error &&
          <ErrorMessage negative>
            <ErrorMessage.Header>{error}</ErrorMessage.Header>
            <p>Please try again</p>
          </ErrorMessage>
        }
        <StyledTitle> Login to your account</StyledTitle>
        <StyledEmailInput
          id="email"
          name="email"
          type="text"
          onChange={onChange}
          autoComplete="email"
          icon={userIcon}
          placeholder="Email"
        />

        <StyledPasswordInput
          id="password"
          name="password"
          type="password"
          onChange={onChange}
          autoComplete="current-password"
          icon={lock}
          placeholder="Password"
        />

        <StyledLink to="/forgotpassword"> Forgot your password?</StyledLink>
        <StyledLoginButton type="submit" disabled={!form.password || !form.email}> Login </StyledLoginButton>
        <StyledLink to="/signup">
          <SignupSpan> Don&#39;t have an account? </SignupSpan> Sign-up!
        </StyledLink>
      </StyledForm>
    </StyledContainer>
  );
}

export default Login;
