import Button from './component/Button.jsx';
import { FcGoogle } from 'react-icons/fc';

const App = () => {
  return (
    <main>
      <Button
        variant
        style={{ fontSize: '2rem' }}
        onClick={() => console.log('Logging in..')}
      >
        <FcGoogle />
        Buy now!
      </Button>
    </main>
  );
};

export default App;
