import PropTypes from 'prop-types';

import { Container, DataList } from "./Profile.styled";

// import profileData from "./user.json";

// console.log(profileData);

export function Profile({avatar,name,tag,location,followers,views,likes}) {
    return (
        <Container>
            <div>
                <img src={avatar} alt="User avatar" />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <DataList>
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
            </DataList>
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