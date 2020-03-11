import React from 'react';
import Btn from './Btn';
import Reset from './Reset';
import ScoreBoard from './ScoreBoard';
import Selection from './Selection';


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selection: 0,
            playerScore: 0,
            computerScore: 0
        }
    }

    handleClickReset = () =>{

        
    }


    select = (selection) =>{
        this.setState({selection: selection});//how to change parent's state in child?
    }


    render(){
        let view = 
            <div>
                <ScoreBoard selection = {this.state.selection} />

                <Selection selection = {this.state.selection}/>
                {/* pass select function to chile */}
                
                <br/>
                <br/>
                <Btn selection = {1} state = {this.select}/>
                <Btn selection = {2} state = {this.select}/>
                <Btn selection = {3} state = {this.select}/>
                <br/>
                <br/>
                <Reset/>
            </div>

        return(
            view
        );
    }


}
export default Game;