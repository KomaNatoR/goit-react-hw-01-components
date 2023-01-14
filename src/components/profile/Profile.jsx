import PropTypes from 'prop-types';

import { Container, OutlineDataList, UserDataCont } from "./Profile.styled";


function Profile({avatar,name,tag,location,followers,views,likes}) {
    return (
        <Container>
            <UserDataCont>
                <img src={avatar} alt="User avatar" />
                <p>{name}</p>
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
    name: "no data",
    tag: "no data",
    location: "no data",
    followers: "-",
    views: "-",
    likes: "-",
};
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,
};

export default Profile;