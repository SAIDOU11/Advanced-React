import Button from './component/Button.jsx';
import { FcGoogle } from 'react-icons/fc';

const App = () => {
  return (
    <main>
      <Button
        variant="warning"
        className="green"
        size="lg"
        onClick={() => console.log('Logging in')}
      >
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  );
};

export default App;
