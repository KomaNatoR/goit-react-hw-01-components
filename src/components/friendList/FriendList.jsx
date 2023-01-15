import PropTypes from 'prop-types';

import {List} from "./friendsListik.styled"
import { FriendItem } from "./friendItem/FriendItem";

export function FriendList({ friends }) {
    const friendsMap = friends.map(item =>
        <FriendItem key={item.id}
            id={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
        />
    );

    return (
        <List>
            {friendsMap}
        </List>
    );
};
FriendList.defaultProps = {
    friends : [],
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })),
};