import { Container } from './App.styled';
import profileData from "../data/user.json";
import { Profile } from "./profile/Profile";
import statsData from "../data/data.json";
import { Statistics } from "./statistics/Statistics";

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

      <Statistics
        title = "Upload Stats"
        stats={statsData}
      />
    </Container>
  );
};
