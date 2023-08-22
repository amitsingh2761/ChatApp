import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"
const ChatsPage = (props) => {
//chatsocket
  const chatProps=useMultiChatLogic('b170e07d-f427-4a97-92e7-60e31c3577bf',props.user.username,props.user.secret); 
    return <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatProps}></MultiChatSocket>
      <MultiChatWindow {...chatProps} style={{height:'100% '}}></MultiChatWindow>
    </div>;
  };
  export default ChatsPage;