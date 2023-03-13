import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';
import { fetchingGoal, updatingGoal } from '../store/action-creators/goal';
// import history from '../history';
import { Ul, List, Button as StyledButton, Separator } from '../components/StyledComponents';

const StyledParagraph = styled.p`
  font-size: 1em;
  text-align: center;
`;

const GoalHeader = styled.h1`
  color: #0a5282;
`


const GoalWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

`;

const FormWrapper = styled.form`
  /* width: 90%; */
  max-width: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border: 1px solid #e6e6e6;
  padding-bottom: 20px;
`
const FormHeader = styled.div`
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #0a5282;
  color: white;
  font-size: 16px;
  border-bottom: 1px solid #e6e6e6;
`

const InputContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  font-weight: bold;
  height: 55px;
  box-sizing: border-box;

`
const InputToggleContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  &&& input {
    padding: 6px 2px 6px 6px;
    width: 70px;
    /* text-align: right; */
  }
  > span {
    margin-left: 5px;
  }
`

const UpdateButton = styled(Button)`
  &&& {
    margin-top: 20px;
    width: 100px;
  }
`

const Goal = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [weightUnit, setWeightUnit] = useState('lbs');
  const { goal } = useSelector(state => state.goal);
  const { user } = useSelector(state => state.auth);
  const [formGoal, setFormGoal] = useState(goal);
  console.log('formgoal', formGoal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingGoal());
  }, [dispatch])



  const toggleEditing = () => {
    setIsEditing((prevState) => ({ isEditing: !prevState.isEditing }));
  }

  const handleOnChange = (e) => {
    console.log(formGoal);
    setFormGoal((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  const handleGoalUpdate = e => {
    e.preventDefault();
    console.log('typeof', typeof e.target.weight.value);

    const goal = {
      weight: e.target.weight.value,
      calorie: e.target.calorie.value,
      carbs: e.target.carbs.value,
      protein: e.target.protein.value,
      fat: e.target.fat.value
    };
    dispatch(updatingGoal(goal));
    setIsEditing((prevState) => ({ isEditing: !prevState.isEditing }));
  }

  return (
    <GoalWrapper>
      <GoalHeader>Your Fitness Goals</GoalHeader>
      <Separator></Separator>
      <Link to="/signup-step2"> Need help? Click here to get a custom plan designed just for you </Link>

      <FormWrapper className="goal-form" onSubmit={handleGoalUpdate}>
        <FormHeader>
          Weight & Nutrition
          {!isEditing && <Button primary onClick={toggleEditing}>Edit Goals</Button>}

        </FormHeader>
        <InputContainer>
          <label htmlFor="weight">Weight</label>
          <InputToggleContainer>
            {isEditing ? <Input
              type="number"
              id="weight"
              name="weight"
              value={formGoal.weight}
              onChange={handleOnChange}
            /> : (goal.weight || 0)}
            <span>{weightUnit}</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="calorie">Calories</label>
          <InputToggleContainer>
            {isEditing ? <Input
              type="number"
              name="calorie"
              id="calorie"
              value={formGoal.calories}
              onChange={handleOnChange}
            /> : (goal.calorie || 0)}
            <span>kcals</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="carbs">Carbohydrates</label>
          <InputToggleContainer>
            {isEditing ? <Input
              type="number"
              id="carbs"
              name="carbs"
              value={formGoal.carbs}
              onChange={handleOnChange}
            /> : (goal.carbs || 0)}
            <span>g</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="protein">Protein</label>
          <InputToggleContainer>
            {isEditing ? <Input
              type="number"
              id="protein"
              name="protein"
              value={formGoal.protein}
              onChange={handleOnChange}
            /> : (goal.protein || 0)}
            <span>g</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="fat">Fats</label>
          <InputToggleContainer>
            {isEditing ? <Input

              id="fat"
              name="fat"
              value={formGoal.fat}
              onChange={handleOnChange}
            /> : (goal.fat || 0)}
            <span>g</span>
          </InputToggleContainer>
        </InputContainer>
        {isEditing && <UpdateButton type="submit" secondary>Update</UpdateButton>}
      </FormWrapper>
    </GoalWrapper>
  );
}

export default Goal;
