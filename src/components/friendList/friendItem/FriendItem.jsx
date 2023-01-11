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
// console.log(Item);