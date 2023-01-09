import profileData from "../data/user.json";
import { Profile } from "./profile/Profile";
import { Container } from './App.styled';

export const App = () => {
  // console.log(props.theme);
  return (
    <Container>
    
      <Profile
        avatar={profileData.avatar}
        name={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        followers={profileData.stats.followers}
        views={profileData.stats.views}
        likes={profileData.stats.likes}
      />
    </Container>
  );
};
