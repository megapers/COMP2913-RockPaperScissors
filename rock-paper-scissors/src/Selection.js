import React from 'react';

class Selection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let selection = this.props.selection;

        const choiceImage = <img src="/choice.png" width="180px" height="180px" alt="rock"/>
        const rockImage = <button ><img src="/rock.png" width="180px" height="180px" alt="rock"/></button>
        const paperImage = <button ><img src="/paper.png" width="180px" height="180px" alt="rock"/></button>
        const scissorsImage = <button ><img src="/scissors.png" width="180px" height="180px" alt="rock"/></button>

        switch(selection){
            case 0:
                return choiceImage;
            case 1:
                return rockImage;
               
            case 2:
                return paperImage;
                
            case 3:
                return scissorsImage;
               
            default:
                return null;
        }

    }


}
export default Selection;