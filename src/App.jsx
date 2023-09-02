import Avatar from './component/Avatar.jsx';
import profil from './assets/MyPicProfile.jpg';

const App = () => {
  return (
    <>
      <Avatar src={profil} alt="Photo Profil" />
      <br />
      <Avatar>SS</Avatar>
      <br />
      <Avatar />
    </>
  );
};

export default App;
