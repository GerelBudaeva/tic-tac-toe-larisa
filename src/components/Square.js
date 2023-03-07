import React from 'react';

const squareStyle = {
    border: '1px solid blue',
    fontFamily: 'fantasy',
    fontSize: '60px',
    // fontWeight: 'bold',
    cursor: 'pointer',
}
const Square = (props) => {

    return (
        <div style={squareStyle} onClick={() => props.handleMove(props.index, props.el)}>{props.el}</div>
    );
};

export default Square;
