import { Route, withRouter, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

// Container Components
import {
  FoodContainer, Login, SignUpContainer, Home, Goal, DiaryContainer,
  InitialGoalContainer, ProfileSettingsContainer, VerificationContainer, SignUpGoalContainer,
  MeasurementContainer
} from './containers';

import { NotFound } from './components';
import { fetchingUser } from './store/action-creators/auth';


const BodyWrapper = styled.main`
  min-height: calc(100vh - 70px);
  max-width: 1400px;
  width: 100%;
  /* padding: 0 20px; */
  margin: 0 auto;
  box-sizing: border-box;
`;


const Routes = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingUser());
  }, [dispatch])


  return (
    <BodyWrapper>
      {user.id ?
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/verification" component={VerificationContainer} />
          <Route exact path="/me" component={ProfileSettingsContainer} />
          <Route exact path="/addFood" component={FoodContainer} />
          <Route exact path="/diary" component={DiaryContainer} />
          <Route exact path="/goal" component={Goal} />
          <Route exact path="/goal/plan" component={InitialGoalContainer} />
          <Route exact path="/signup-step2" component={SignUpGoalContainer} />
          <Route exact path="/measurement" component={MeasurementContainer} />
          <Route component={NotFound} />
        </Switch>
        :
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/signup-step1" component={SignUpContainer} />
          <Route exact path="/signup-step2" component={SignUpGoalContainer} />
          <Route component={NotFound} />

        </Switch>
      }
    </BodyWrapper>
  );

}

export default withRouter((Routes));
