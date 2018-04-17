import React, { Component } from 'react';
import Character from "./components/Character";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import characters from "./characters.json";
import './App.css';

let score = 0;
let topScore = 0;

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    score,
    topScore
  }
  
  handleClickEvent = (id) => {
    const characterArr = this.state.characters;
    const selectedChar = characterArr.filter(match => match.id === id);

    if (selectedChar[0].clicked === false) { 
      selectedChar[0].clicked = true;
      score ++;

      if (score > topScore) {
        topScore = score;
      }

      this.setState({characters});
      this.setState({score});
      this.setState({topScore});

    } else {
      alert("Game Over.  Already Picked.  Try Again!");   
      score = 0;

      for (let i=0; i < this.state.characters.length; i++) {
        characterArr[i].clicked = false
      }

      this.setState({characters});
      this.setState({score});
    }
    
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  render() {
    const shuffledChar = this.shuffleArray(this.state.characters);
    return (
      <Wrapper>
        <Title />
        <Score
          score={this.state.score}
          topScore={this.state.topScore} 
        />
        {shuffledChar.map(character => (
          <Character
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            handleClickEvent={this.handleClickEvent}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
