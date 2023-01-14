import PropTypes from 'prop-types';

import { Container, OutlineDataList, UserDataCont } from "./profile.styled";


function Profile({ avatar, username, tag, location, stats:{followers, views, likes} }) {
    // console.log(Profile);
    return (
        <Container>
            <UserDataCont>
                <img src={avatar} alt="User avatar" />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </UserDataCont>

            <OutlineDataList>
                <li>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </OutlineDataList>
        </Container>
    );
};
Profile.defaultProps = {
    username: "no data",
    tag: "no data",
    location: "no data",
    followers: 0,
    views: 0,
    likes: 0,
};
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number,
};

export default Profile;