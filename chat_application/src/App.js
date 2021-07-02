import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '0fdfe580-8f5c-4b9e-ad50-332ef8bd535a';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;