import PropTypes from 'prop-types';
import {
  FriendList,
  Item,
  IsOnline,
  IsOffline,
  Img,
  UserName,
} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item className="item" key={id}>
          {isOnline ? (
            <IsOnline className="status"></IsOnline>
          ) : (
            <IsOffline className="status"></IsOffline>
          )}

          <Img className="avatar" src={avatar} alt="User avatar" width="48" />
          <UserName className="name">{name}</UserName>
        </Item>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
