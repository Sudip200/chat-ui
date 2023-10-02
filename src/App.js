import logo from './logo.svg';
import './App.css';
const chats=[
  {
    content:'Hi',
    sender:'me',
    name:"",
    cat:"", 
    logo:'',
    timestamp:'12:00 AM',
    seen:true

  },
  {
    content:'Hi hello',
    sender:'me',
    name:"",
    cat:"", 
    logo:'',
    timestamp:'12:01',
    seen:true
  },
  {
    content:'I am ok',
    sender:'user',
    name:"Jav",
    cat:"Engineering", 
    logo:'https://lh3.googleusercontent.com/a/ACg8ocKI1QhjTNVog0soXa0z_Sq6qpVqparopRH1v4n-QWeMmDc=s432-c-no',
    timestamp:'12:04',
    seen:false
  }

]
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer">
      
      <div className='input-container'>
        <div><img src='smiley.png' className="smile-logo" alt="logo"  width="30px"  /></div>
        <input type='text' className='input' placeholder="Start Typing" />
      
        
        <div><img src='mention.png' className="men-logo" alt="logo" width="30px" /></div>
        <div><img src='paper-airplane.png' className="send-logo" alt="logo"  width="30px"/></div>
        </div>
    </div>
  );
}
function Header() {
  return (
    <div className="Header">
     
    </div>
  );
}
function Content() {

  return (
    <div className="Content">
     {
        chats.map((chat)=>{
          return(
            <Chat content={chat.content} timestamp={chat.timestamp} seen={chat.seen} sender={chat.sender} logo={chat.logo}/>
          )
        })
     }
    </div>
  );
}
function Chat(props) {
  return (
    <div className="Chat" style={{justifyContent:props.sender==="me"?"flex-end":"flex-start"}}>
      {props.sender==="user" && <div className='chat-logo'>
        <img src={props.logo} className="logo" alt="logo" />
        </div>}
      <div className="chat-container" style={{backgroundColor:props.sender==="me"?"hsla(211, 100%, 50%, 1)":"hsla(240, 24%, 96%, 1)",marginLeft:props.sender==="me"?"0px":"20px",marginRight:props.sender==="me"?"20px":"0px"}}>
        <div className="chat-content">
          <div className="chat-content-text" style={{color:props.sender==="me"?"white":"black"}}>
            {props.content}
          </div>
          <div className="chat-content-time" style={{color:props.sender==="me"?"white":"black"}}>
            {props.timestamp}
            {props.sender ==="me" && <div className='chat-seen'>
            <img src='seen.png' className="seen-logo" alt="logo"  width="20px" />
           </div>}
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default App;
