import React from 'react';

const userInput = (props) => {

  const style = {
    width: '30%',
    padding: '16px',
    border: '1px solid #CCC',
    borderRadius: '4px'
  };

  return (
    <div>
      <input type="text"
        style={style}
        onChange={props.onInputChange}
        value={props.username} />
    </div>
  );
}

export default userInput;