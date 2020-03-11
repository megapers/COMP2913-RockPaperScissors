import React from 'react';
import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';
import Reset from './Reset';
import ScoreBoard from './ScoreBoard';
import Selection from './Selection';


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selection: 0
        }
    }

    select = () =>{
        this.setState({});
    }


    render(){
        let view = 
            <div>
                <ScoreBoard/>
                <Selection/>
                <br/>
                <br/>
                <Rock/>
                <Paper/>
                <Scissors/>
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