import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import noteElemenets from "../note"



function App() {
    return (
        <div>
            <Header />
            {/* <Note title = {noteElemenets[1].title} content = {noteElemenets[1].content}/> */}
            {noteElemenets.map(element => <Note key = {element.key} title={element.title} content={element.content}/>
                )}

            <Footer />


        </div>



    )
}

export default App;