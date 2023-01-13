import { Container } from './App.styled';
import profileData from "../data/user.json";
import Profile from "./Profile/Profile";
import statsData from "../data/data.json";
import { Statistics } from "./Statistics/Statistics";
import friendData from "../data/friends.json";
import { FriendList } from "./friendList/FriendList";
import transactions from "../data/transactions.json";
import { Transaction } from "./transaction/TransactionHistory";

export const App = () => {
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

      <FriendList
        friends = {friendData}
      />

      <Transaction
        items={transactions}
      />
    </Container>
  );
};
// Transaction
