import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../content/Context";
const Main = () => {
  const {
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="Main">
      <div className="nav">
        <p>React Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Sir...</span>
              </p>
              <p>How Can I Help You ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, possimus?
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, possimus?
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, possimus?
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, possimus?
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="res-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="res-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
                          {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
            </div>
          </div>
          <p className="ntm-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            ratione veritatis impedit libero! Commodi, corporis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
