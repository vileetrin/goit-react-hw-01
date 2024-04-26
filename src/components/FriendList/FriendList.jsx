import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friendsListItem}>
              <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
}
