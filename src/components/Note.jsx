// import React from "react";



// function Note(props){
//     return(
//         <div className="note">
//             <h1>{props.title}</h1>
//             <p>{props.content}</p>
//         </div>
//     )
// };

// export default Note;

import React from "react";

function Note(props) {
  function handleOnClick() {
    props.onClick(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleOnClick}>DELETE</button>
    </div>
  );
}

export default Note;

