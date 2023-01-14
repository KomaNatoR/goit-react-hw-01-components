import PropTypes from 'prop-types';

import { Container, OutlineDataList, UserDataCont } from "./proffile.styled";


function Profile({ avatar, username, tag, location, stats }) {
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
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
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
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
};

export default Profile;