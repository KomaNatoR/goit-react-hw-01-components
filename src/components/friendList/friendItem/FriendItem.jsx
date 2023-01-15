import PropTypes from 'prop-types';

import { Item } from "./FriendItem.styled";

export function FriendItem({ avatar, name, isOnline }) {
    return (
        <Item isOnline={isOnline}>
            <span></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </Item>
    );
};
FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};