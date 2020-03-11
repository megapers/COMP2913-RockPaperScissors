import React from 'react';

class Btn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
    }

    getRock = () =>{
       
        const num = 0;
        
    }

    render(){
        let selection = this.props.selection;

        const rockImage = <button onClick = {() => this.props.state(selection)} ><img src="/rock.png" width="80px" height="80px" alt="rock"/></button>
        const paperImage = <button onClick = {() => this.props.state(selection)}><img src="/paper.png" width="80px" height="80px" alt="rock"/></button>
        const scissorsImage = <button onClick = {() => this.props.state(selection)}><img src="/scissors.png" width="80px" height="80px" alt="rock"/></button>

        switch(selection){
            case 1:
                return rockImage;
                break;
            case 2:
                return paperImage;
                break;
            case 3:
                return scissorsImage;
                break;
            default:
                return null;
        }

        
    }

}
export default Btn;