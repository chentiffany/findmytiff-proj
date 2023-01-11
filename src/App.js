import './App.css';
// import moment from 'moment-timezone';
import Clock from "./components/clock";
import HkClock from "./components/hkt";
import "./fonts/TimesDotBol.otf";
import "./fonts/TimesDotRom.otf";
import "./fonts/TimesDotItalic.otf";
import Typewriter from 'typewriter-effect/dist/core';
import React, { Component } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const DIARY_URL = "https://api.airtable.com/v0/" + BASE_ID + "/diaryContent?api_key=" + API_KEY + "&sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc"
const FORUM_URL = "https://api.airtable.com/v0/" + BASE_ID + "/forumData?api_key=" + API_KEY + "&sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc"


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
      movies: [],
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
                    <Clock /> [{zone}]
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
        {/* <p id = "rowey">
          <br></br>
          <div id = "info">
            <i id = "right"><a href="https://www.instagram.com/copyrightiff/" target="_blank" id = "no-underline">@copyrightiff</a></i>
            <i id = "right"><a href = "mailto: c.tiffany@wustl.edu" id = "no-underline">c.tiffany@wustl.edu</a></i>
          </div>
        </p> */}
        <div class="row">
          <div class="col" >
            <div id ="stick">
            <h5>[Tiffany Chen (she/her)]</h5>
            Just a kid documenting her study abroad.
            <div id = "info">
              <i><a href="https://www.instagram.com/copyrightiff/" target="_blank" id = "no-underline">@copyrightiff</a></i> <br></br>
              <i><a href = "mailto: c.tiffany@wustl.edu" id = "no-underline">c.tiffany@wustl.edu</a></i>
            </div>
              </div>
          </div> 
          <div class="col"><h5>[Diary]</h5>
            <div class = "diary-content"></div>
            <div>
            {this.state.movies.map(movie => <DiaryEntry {...movie.fields}/> )}
            </div>
          </div>
          {/* <div class = "col"> <h5>[Coming Soon]</h5> */}

          </div>
          {/* <div class="col"><h5>[Forum]</h5>
          <form id = "forumForm" target = "_blank" action = "https://hooks.airtable.com/workflows/v1/genericWebhook/app4jSFTmhmw0uE68/wflibK7Lmnk8f0Unz/wtrm72xlqxHAHdRlP" method= "POST">
            name <input type="text" class = "form-control" id="name" name="name"/>
            what you want to tell me/others<textarea type="text" class = "form-control" id="content" name="content"/>
            <input id = "submit" type = "submit" value="submit"/>
          </form>
          </div>  */}
        </div>
    );
  }
}

export default App;

var slay = document.getElementById('app');

var typewriter = new Typewriter(slay, {
    loop: true
});

typewriter.typeString('Hello! I\'m Tiff.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Hello! I\'m Tiff.')
    .pauseFor(1500)
    .deleteAll()
    // .typeString('Welcome to my life.')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    .pauseFor(0)
    .start();