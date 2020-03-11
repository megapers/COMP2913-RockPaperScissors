import React from 'react';

class Rock extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
        }
    }

    getRock = () =>{
       
        const num = 0;
        
    }

    render(){

        const buttonImage = <button ><img src="/rock.png" width="80px" height="80px" alt="rock"/></button>
        return buttonImage;
    }

}
export default Rock;