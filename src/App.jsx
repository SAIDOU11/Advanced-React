import Avatar from './component/Avatar.jsx';
import profil from './assets/MyPicProfile.jpg';

const App = () => {
  return (
    <>
      <Avatar avatar="avatar">
        <img src={profil} alt="profil" />
      </Avatar>
      <br />
      <Avatar avatar="avatar" icon="avatar-icon" />
      <br />
      <Avatar letters="avatar-letters" avatar="avatar">
        SS
      </Avatar>
      <br />
    </>
  );
};

export default App;
