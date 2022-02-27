import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return(
    <ChatEngine  
      height="100vh" 
      projectID="9b5b1905-2949-4ad6-ae74-b42915b00a84" 
      userName="JSReact" 
      userSecret="123" 
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
      />
      
  )
}

export default App;