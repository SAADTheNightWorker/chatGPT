import "./App.css";
import logo from "../public/chatgpt.svg";
import addBtn from "../public/add-30.png";
import msgIcon from "../public/message.svg";
import home from "../public/home.svg";
import saved from "../public/bookmark.svg";
import rocket from "../public/rocket.svg";
import send from "../public/send.svg";
import user from "../public/user-icon.png";
import gptchat from "../public/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openAi";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      text: "Hi, i am ChatGpt, a state-of-art language module designed by Ai",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    // Get the current input value
    const currentInput = input;

    // Clear the input field
    setInput("");

    // Update the message state with the user's input
    setMessage([...message, { text: currentInput, isBot: false }]);

    // Call the OpenAI API to get the bot's response
    const res = await sendMsgToOpenAI(currentInput);

    // Update the message state with the bot's response
    setMessage([...message, { text: res, isBot: true }]);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="chatgpt-logo">
            <img src={logo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <div className="addBtn">
            <button className="midBtn">
              <img className="plusimg" src={addBtn} alt="pluseLogo" />
              New Chat
            </button>

            <div className="upperSideBtn">
              <button className="query">
                <img src={msgIcon} alt="" />
                What is Programing ?
              </button>

              <button className="query">
                <img src={msgIcon} alt="" />
                How to use an API ?
              </button>
            </div>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItem">
            <img src={home} alt="Home" className="listItemImg" />
            Home
          </div>

          <div className="listItem">
            <img src={saved} alt="Saved" className="listItemImg" />
            Saved
          </div>

          <div className="listItem">
            <img src={rocket} alt="Upgrade" className="listItemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={user} alt="" />
            <p className="txt">
              I am ChatGPT, an advanced
              language model developed by OpenAI, based on the GPT-4
              architecture. Designed to understand and generate human-like text,
              I can assist with a wide range of tasks, from answering questions
              and providing explanations to generating creative content and
              offering recommendations
            </p>
          </div>
          {message.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img src={message.isBot ? gptchat : user} alt="" />
              <p className="txt">{message.text}</p>
            </div>
          ))}
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send a message"
              name=""
            />
            <button className="send" onClick={handleSend}>
              <img src={send} alt="" />
            </button>
          </div>
          <p>ChatGPT can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
