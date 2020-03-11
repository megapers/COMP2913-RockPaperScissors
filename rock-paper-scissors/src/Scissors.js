import React from 'react';

class Scissors extends React.Component{

    render(){

        const buttonImage = <button ><img src="/scissors.png" width="80px" height="80px" alt="scissors"/></button>
        return buttonImage;
    }

}
export default Scissors;