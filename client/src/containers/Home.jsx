import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchingGoal } from '../store/action-creators/goal';
import { uploadingUserImage } from '../store/action-creators/auth';
import HomeBackgroundImage from '../images/mfpimage.jpg';
import { Button, Ul, List } from '../components/StyledComponents';

// Function used to require all images in upload folder because webpack cannot determine dynamic images during bundling
// import images from '../../helper';

const breakpoints = { first: '470px' };

const HomeContainer = styled.div`

`;

const HeroSection = styled.section`
  position: relative;

`
const HomeImage = styled.img`
  width: 100%;
  min-height: 300px;
  max-height: 450px;
  object-fit: cover;
`;
const Title = styled.h3`
  position: absolute;
  bottom: 40px;
  left: 10px;
  margin: 0;
  font-size: 1.6rem;
  color: white;
  @media (min-width: 600px) {
    font-size: 2.2rem;
  }   
  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }   
`;

const HomeMainContent = styled.div`
  width: 90%;
  padding: 0 10px;
  margin: auto;
  max-width: 800px;
`;

/* TODO: Experiment with float and have the text wrap around it */
const ProfileImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  
  height: auto;
  max-height: 200px;
  object-fit: contain;

`;
const MiscInfo = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  text-align: left;
  font-size: 20px;
  font-family: serif;
  text-transform: none;
`;

const UserDisplayInfo = styled(Ul)`
`;

const InfoList = styled(List)`
 
`;

const StyledLink = styled(Link)`
  &:link{
    color: #265301;
  }
  &:hover {
    border-bottom: 1px transparent;     
      background: #CDFEAA;
  }
  
`;

const StyledButton = styled(Button)`
 background-color: #0070BF
 border-radius: 10px;
 border: none;
 color: white;
 padding: 8px 8px;
`;

const StyledUploadImage = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 10em;
  &:hover {
    background-color: black;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { goal } = useSelector(state => state.goal);

  useEffect(() => {
    if (user.id) {
      dispatch(fetchingGoal());
    }
  }, [user, dispatch]);

  const uploadImage = event => {
    event.preventDefault();
    console.log('event?', event.target.files);

    // Create form object for multer to parse
    const form = new FormData();
    form.append('file', event.target.files[0]);
    dispatch(uploadingUserImage(form));
  }

  return (
    <HomeContainer>
      <HeroSection>
        <HomeImage src={HomeBackgroundImage} />
        <Title>Welcome to MyFitnessClone!</Title>
      </HeroSection>
      <HomeMainContent>
        {user.id ?
          <>
            <StyledLabel htmlFor="fileUpload">
              <ProfileImage src={HomeBackgroundImage} alt="Profile Picture" />
              <StyledUploadImage name="image" type="file" id="fileUpload" onChange={uploadImage} />
            </StyledLabel>
            <MiscInfo>
              MyFitnessClone allows you to set and achieve your goals by making sure that you&#39;re on track! <br></br>
              This page will show your calorie goal and how much you&#39;ve accomplished for the day!<br></br>
            </MiscInfo>
            <UserDisplayInfo>
              <h3> Welcome back {user.first_name} </h3>
              <InfoList> Your current weight and your macro split: </InfoList>
              <InfoList> Weight: {user.weight ? user.weight[user.weight.length - 1] : 'Not Set'} </InfoList>
              <InfoList> Calories: {goal ? goal.calorie : 'Not Set'} </InfoList>
              <InfoList> Carbs: {goal ? goal.carbs : 'Not Set'} </InfoList>
              <InfoList> Protein: {goal ? goal.protein : 'Not Set'} </InfoList>
              <InfoList> Fat: {goal ? goal.fat : 'Not Set'} </InfoList>
              <StyledLink to="/addfood"> <StyledButton > Add Food </StyledButton> </StyledLink>
              <StyledLink to="/goal"> <StyledButton > Edit Goals </StyledButton> </StyledLink>
            </UserDisplayInfo>
          </>
          :
          <>
            <MiscInfo>
              This page will show your calorie goal and how much you&#39;ve accomplished <br></br>
              Your current weight and your macro split <br></br>
              Will have a link to get started if you are new  <br></br>
            </MiscInfo>
            <Link to="/login"> Log-in to get started! </Link> <br></br>
          </>
        }
      </HomeMainContent>
    </HomeContainer>
  );
}

export default Home;

