import PropTypes from 'prop-types';

import { Container, OutlineDataList,UserDataCont } from "./Profile.styled";

// import profileData from "./user.json";

// console.log(profileData);

export function Profile({avatar,name,tag,location,followers,views,likes}) {
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

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number,
};