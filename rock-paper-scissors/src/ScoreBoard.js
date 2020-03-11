import React from 'react'

class ScoreBoard extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        let player = 
            <div className = 'scoreBoardItem'>
                <h3>Player</h3>
            </div>;
        
        let ties = 
        <div className = 'scoreBoardItem'>
            <h3>Ties</h3>
        </div>;

        let computer = 
        <div className = 'scoreBoardItem'>
            <h3>Computer</h3>
        </div>;

        return (
            <div className='rowC' >
                {player}
                {ties} 
                {computer}
            </div>

        );
    }


}

export default ScoreBoard;