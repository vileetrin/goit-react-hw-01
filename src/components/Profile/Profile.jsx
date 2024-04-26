import css from "./Profile.module.css";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
      <div className={css.container}>
      <div className={css.wrapper}>
        <img
        className={css.profileImg}
          src={avatar}
          alt="User avatar"
        />
        <p className={css.username}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
