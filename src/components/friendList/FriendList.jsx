import PropTypes from 'prop-types';

import { List } from "./FriendList.styled";
import { FriendItem } from "./friendItem/FriendItem";

export function FriendList({friends}) {
    return (
        <List>
            {friends.map(item =>
                <FriendItem  key={item.id}
                    id={item.id}
                    avatar ={item.avatar }
                    name ={item.name }
                    isOnline ={item.isOnline }
                />
            )}
        </List>
    );
};
// FriendList.propTypes = {
//     arrOfItems: PropTypes.array,
// };
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number,
        })),
};