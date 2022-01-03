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
    padding: 6px 10px;
    width: 60px;
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingGoal());
  }, [dispatch])



  const toggleEditing = () => {
    // setState is asynchronous so if next state depends on previous state, always use prevState
    // React can also batch setState calls
    setIsEditing((prevState) => ({ isEditing: !prevState.isEditing }));
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
              id="weight"
              value={goal.weight}
            /> : (goal.weight || 0)}
            <span>{weightUnit}</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="calories">Calories</label>
          <InputToggleContainer>
            {isEditing ? <Input
              id="calories"
              value={goal.calories}
            /> : (goal.calorie || 0)}
            <span>kcals</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="carbs">Carbohydrates</label>
          <InputToggleContainer>
            {isEditing ? <Input
              id="carbs"
              value={goal.carbs}
            /> : (goal.carbs || 0)}
            <span>g</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="protein">Protein</label>
          <InputToggleContainer>
            {isEditing ? <Input
              id="protein"
              value={goal.protein}
            /> : (goal.protein || 0)}
            <span>g</span>
          </InputToggleContainer>
        </InputContainer>
        <InputContainer>
          <label htmlFor="fat">Fats</label>
          <InputToggleContainer>
            {isEditing ? <Input
              id="fat"
              value={goal.fat}
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
