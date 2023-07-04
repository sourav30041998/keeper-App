// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import noteElemenets from "../note"



// function App() {
//     return (
//         <div>
//             <Header />
//             {/* <Note title = {noteElemenets[1].title} content = {noteElemenets[1].content}/> */}
//             {noteElemenets.map(element => <Note key = {element.key} title={element.title} content={element.content}/>
//                 )}

//             <Footer />


//         </div>



//     )
// }

// export default App;


import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(note) {
    setNotes((prevalue) => {
      return [...prevalue, note];
    });
  }
  function deleteNote(id) {
    setNotes((preNotes) => {
      return notes.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onClick={addNotes} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
