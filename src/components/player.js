{/*
import React from 'react';
import * as Icon from '@easy-eva-icons/react';
// import './player.css';
import styled from 'styled-components';
import { graphql } from 'gatsby';





const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 700px;
width:100%;
margin-top: 40px;
border-radius: 8px;
color: #fff;
font-weight: 100;
box-shadow: 0px 0px 5px 0px rgba(160,160,160,0.3);
background: #3e1955;
overflow: hidden;
@media all(max-width: 1024px) {
    width:400px;
}
`

const Share = styled.div`

`

const CurrentSong = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 100%;
width:100%;
padding: 20px 0px;
border-radius:0;
color:#675175;
background: #fff;
 audio {
  display: none;
 }

 #timeline {
  position: relative;
  margin: 0 auto;
  top:12px;
  width: 280px;
  height: 8px;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgba(125, 75, 156,0.6);

  .hover-playhead {
    position: absolute;
    z-index: 99999;
    top: 0;
    width: 0;
    height: 5px;
    opacity: 0;
    border-radius: 5px;
    color: green;
    transition: opacity 0.3s;

    &::before{
      opacity: 0;
      content: attr(data-content);
      display: block;
      position: absolute;
      top: -30px;
      right: -23px;
      width: 40px;
      padding: 3px;
      text-align: center;
      color: white;
      color: rgba(125, 75, 156,0.3);
    }
    &::after {
      opacity: 0;
      content: '';
      display: block;
      position: absolute;
      top: -8px;
      right: -8px;
      border-top: 8px solid #3e1955;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      background-color: rgba(125, 75, 156,0.9);
    }
  }
 }
`


const ImgWrap = styled.div`
position: relative;
margin: 20px auto;
width: 200px;
height: 200px;
overflow: hidden;
border-radius: 10px;
box-shadow: 0px 10px 20px 0px rgba(63, 25, 87, 0.308);
img {
  width: auto;
  height: 100%;
}
`

const SongName = styled.span`
margin-top: 30px;
font-size: 26px;
`

const SongAutor = styled.span`
color: rgb(125, 75, 156);
font-weight:600;
`

const Time = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
width: 240px;
 .current-time {

 }

 .end-time {

 }


`

const Controls = styled.div`
margin-top: 10px;
 button {
  color: rgb(125, 75, 156);
  border-radius: 30px;
  margin: 15px;
  font-size: 2.2rem;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border: none;
  background: 0;

  .prev-next {
    width: 35px;
    height: 35px;
    &:hover {
      opacity:0.6;
    }
  }
  &:focus {
    outline: none;
  }
 }

`

const PlayList = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
height: 180px;
overflow-y: scroll;
width:94%;
@media (max-width: 1024px) {
  width:90%;
}
.track {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid transparent;
  transition: 0.3s;
  cursor: pointer;
  current-audio {
    background: #3e1955;
    box-shadow: 0px 0px 15px 0px #3e1955;
}
.track-duration {
  min-width: 40px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 500;
}
.track-img {
  width: 90px;
  border-radius: 8px;
}
.track-discr {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  min-width: 190px;
  .track-name {
    font-size: 17px;
    margin-top: 4px;
}
.track-author {
  margin-top: 4px;
  font-weight: 300;
  color: rgb(125, 75, 156);
}
}
.play-now {
  background: #3e1955;
  box-shadow: 0px 0px 15px 0px #3e1955;
  position: relative;
  .track-img {
    filter: opacity(70%);
}
}
  &:hover {
    background: #3e1955;
    border-color: #3e1955;
    position: relative;
}
}
`

export default class Player extends React.Component {

  const data = graphql`
     query songsQuery {
        data.allSongsJson {
          edges {
            node {
              name
              author
              img
              audio
              duration 
            }
          }
        }
     }
  `
  
  const getSongs = (data) => { 
    const songsArray = []
    
    data.allSongsJson.edges.forEach(song => {
       songsArray.push(data)
    })
    
    return songsArray
  }
  
  state = {
    index: 0,
    currentTime: '0:00',
    musicList: [],
    pause: false,
  };


  componentDidMount() {
    this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
    this.playerRef.addEventListener("ended", this.nextSong, false);
    this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
    this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
    this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
  }

  componentWillUnmount() {
    this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
    this.playerRef.removeEventListener("ended", this.nextSong);
    this.timelineRef.removeEventListener("click", this.changeCurrentTime);
    this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
    this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
  }

  changeCurrentTime = (e) => {
    const duration = this.playerRef.duration;

    const playheadWidth = this.timelineRef.offsetWidth;
    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;

    const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

    this.playheadRef.style.width = userClickWidhtInPercent + "%";
    this.playerRef.currentTime = (duration * userClickWidhtInPercent) / 100;
  }

  hoverTimeLine = (e) => {
    const duration = this.playerRef.duration;

    const playheadWidth = this.timelineRef.offsetWidth

    const offsetWidht = this.timelineRef.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
    const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

    if (userClickWidhtInPercent <= 100) {
      this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
    }

    const time = (duration * userClickWidhtInPercent) / 100;

    if ((time >= 0) && (time <= duration)) {
      this.hoverPlayheadRef.dataset.content = this.formatTime(time);
    }
  }

  resetTimeLine = () => {
    this.hoverPlayheadRef.style.width = 0;
  }

  timeUpdate = () => {
    const duration = this.playerRef.duration;
    const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
    const playPercent = 100 * (this.playerRef.currentTime / duration);
    this.playheadRef.style.width = playPercent + "%";
    const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
    this.setState({
      currentTime
    });
  }

  formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;

    const formatTime = minutes + ":" + seconds

    return formatTime;
  }

  updatePlayer = () => {
    const { musicList, index } = this.state;
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    this.playerRef.load();
  }

  nextSong = () => {
    const { musicList, index, pause } = this.state;

    this.setState({
      index: (index + 1) % musicList.length
    });
    this.updatePlayer();
    if (pause) {
      this.playerRef.play();
    }
  };

  prevSong = () => {
    const { musicList, index, pause } = this.state;

    this.setState({
      index: (index + musicList.length - 1) % musicList.length
    });
    this.updatePlayer();
    if (pause) {
      this.playerRef.play();
    }
  };


  playOrPause = () => {
    const { musicList, index, pause } = this.state;
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    if (!this.state.pause) {
      this.playerRef.play();
    } else {
      this.playerRef.pause();
    }
    this.setState({
      pause: !pause
    })
  }

  clickAudio = (key) => {
    const { pause } = this.state;

    this.setState({
      index: key
    });

    this.updatePlayer();
    if (pause) {
      this.playerRef.play();
    }
  }



  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return (
      <Card>
        <CurrentSong>
          <audio ref={ref => this.playerRef = ref}>
            <source src={currentSong.audio} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
          <ImgWrap>
            <img src={currentSong.img} alt={currentSong.name}/>
          </ImgWrap>
          <SongName>{currentSong.name}</SongName>
          <SongAutor>{currentSong.author}</SongAutor>

          <Time>
            <div className="current-time">{currentTime}</div>
            <div className="end-time">{currentSong.duration}</div>
          </Time>

          <div ref={ref => this.timelineRef = ref} id="timeline">
            <div ref={ref => this.playheadRef = ref} id="playhead"></div>
            <div ref={ref => this.hoverPlayheadRef = ref} class="hover-playhead" data-content="0:00"></div>
          </div>

          <Controls>
            <button onClick={this.prevSong} className="prev prev-next current-btn"><Icon.RewindLeft /></button>

            <button onClick={this.playOrPause} className="play current-btn">
              {
                (!pause) ? <Icon.PlayCircle />
                  : <Icon.PauseCircle />
              }
            </button>
            <button onClick={this.nextSong} className="next prev-next current-btn"><Icon.RewindRight /></button>
          </Controls>

        </CurrentSong>
        <PlayList>
          {musicList.map((music, key = 0) =>
            <div key={key}
              onClick={() => this.clickAudio(key)}
              className={"track " +
                (index === key && !pause ? 'current-audio' : '') +
                (index === key && pause ? 'play-now' : '')} >

              <img className="track-img" src={music.img} />
              <div className="track-discr" >
                <span className="track-name" >{music.name}</span>
                <span className="track-author" >{music.author}</span>
              </div>
              <span className="track-duration" >
                {(index === key)
                  ? currentTime
                  : music.duration
                }
              </span>
            </div>
          )}
        </PlayList>
      </Card>
    )
  }
}

*/}
