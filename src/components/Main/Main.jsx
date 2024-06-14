import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

    const showAlert = () => {
        alert("Error: The functionality is still in progress!")
    }

  return (
    <div className='main'>
        <div className="nav">
            <p>Marvel Gemini</p>
            <img onClick={showAlert} src={assets.user_icon} alt="" />
        </div>
       <div className="main-container">

            {!showResult
            ? 
            <>
                    <div className="greet">
                    <p><span>Hello, Unique.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div onClick={showAlert} className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly Summarize this concept: Is AI harmful?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Work as a team leader impressing everyone</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Modify and optimize this code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>    
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onKeyDown={(e) => {
                        if (e.key === "Enter"){
                            onSent();
                        }
                    }} onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Tell me what is on your mind Today!'/>
                    <div>
                        <img onClick={showAlert} src={assets.gallery_icon} alt="" />
                        <img onClick={showAlert} src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=> onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
       </div>
    </div>
  )
}

export default Main

