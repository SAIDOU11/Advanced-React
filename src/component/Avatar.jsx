import { IoPersonSharp } from 'react-icons/io5';

import classNames from 'classnames';
//   const allClasses = classNames(avatar, letters);

const Avatar = ({ src, icon, avatar, letters, children }) => {
  const lettersAvatar = classNames(avatar, letters);
  const iconAvatar = classNames(avatar, icon);
  const avatarProfil = classNames(avatar);

  if (children) {
    return <div className={lettersAvatar}>{children}</div>;
  } else if (iconAvatar) {
    return (
      <div className={iconAvatar}>
        <IoPersonSharp />
      </div>
    );
  } else {
    return <div className={avatarProfil}></div>;
  }
};

export default Avatar;
