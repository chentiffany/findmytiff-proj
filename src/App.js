import './App.css';
// import moment from 'moment-timezone';
import Clock from "./components/clock";
import HkClock from "./components/hkt";
import "./fonts/TimesDotBol.otf";
import "./fonts/TimesDotRom.otf";
import "./fonts/TimesDotItalic.otf";
import Typewriter from 'typewriter-effect/dist/core';
import RegistrationForm from './components/form';
import { RealtimeData } from './components/forum';
import React, { Component } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const DIARY_URL = "https://api.airtable.com/v0/" + BASE_ID + "/diaryContent?api_key=" + API_KEY + "&sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc"


function calcTime() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // const currentTime = moment().tz(timezone).format("HH:mm");
  return timezone;
}

var zone = calcTime();

const DiaryEntry = ({ title, content, date, location, id }) => (
  <div class="accordion-item">
    <h5 type="button" data-bs-toggle="collapse" data-bs-target= {"#flush-collapse" + id} aria-expanded="false" aria-controls= {"flush-collapse" + id} id = "pinky">
        {title}
    </h5>
    <h5 id={"flush-collapse" + id} class="accordion-collapse collapse" aria-labelledby= {"flush-heading" + id} data-bs-parent="#accordionFlushExample">
      <h5 id = "thoughts"><i> {content}</i></h5>
    </h5>
  </div> 
);

// function App() {
class App extends Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    fetch(DIARY_URL)
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: data.records });
    }).catch(err => {
      console.log(err);
    });
  }
  render(){
    return (
      <div className="App">
        <header className="App-header"> 
          <div class="wrapper">
            <div class="row" id= "header">
              <div class="col" id ="stick">
                <div class="box1">
                  <h1>
                    <Clock/> [{zone}]
                  </h1>
                </div>
              </div>
              <div class="col" id = "right">
                <h1>
                  <div class="box2"> <HkClock /> [Asia/Taipei] </div>
                </h1>
              </div>
            </div>
          </div>
        </header>
        <div class="row">
          <div class="col-3" >
            <div id ="stick">
            <h5>[Tiffany Chen (she/her)]</h5>
            Just a kid documenting her study abroad. 
            <div id = "info">
              <i><a href="https://www.instagram.com/copyrightiff/" target="_blank" id = "no-underline">@copyrightiff</a></i> <br></br>
              <i><a href = "mailto: c.tiffany@wustl.edu" id = "no-underline">c.tiffany@wustl.edu</a></i>
            </div>
            </div>
            {/* <div id = "footer">
              Website made with &#x2764;
            </div> */}
          </div> 
          <div class="col-6"><h5>[Diary]</h5>
            <div class = "diary-content"></div>
            <div>
            {this.state.movies.map(movie => <DiaryEntry {...movie.fields}/> )}
            </div>
          </div>     
             
          <div class="col-3"><div id = "stick"><h5>[Message Board v1.1.3]</h5> <i id="pink">Requested by Alice Foppiani and Thuy Tran</i>
          <div>-</div> 
          <RegistrationForm/>
            <div>-</div> 
            <div id = "pinks" class = "diary-content1"><RealtimeData/></div>
          </div> 
          </div>
          </div>
        </div>
    );
  }
}

export default App;

// var slay = document.getElementById('app');

// var typewriter = new Typewriter(slay, {
//     loop: true
// });

// typewriter.typeString('Hello! I\'m Tiff.')
//     .pauseFor(1500)
//     .deleteAll()
//     .typeString('Hello! I\'m Tiff.')
//     .pauseFor(1500)
//     .deleteAll()
//     // .typeString('Welcome to my life.')
//     // .pauseFor(2500)
//     // .deleteChars(7)
//     // .typeString('<strong>altered!</strong>')
//     .pauseFor(0)
//     .start();