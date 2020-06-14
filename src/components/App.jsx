import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./Form";

function Addcard(){

}
function App()
{  const[notes,setNotes]=React.useState([]);
    function AddNote(note)
    {
          console.log("trigered");
          setNotes(prevNotes=>{return[...prevNotes,note]});
    }
    function deleteNote(id){
        setNotes(prevNotes=>{return prevNotes.filter((note,index)=>{return index!==id;});
                        
                            });

    }
    return (
    <div> 
    <Header/>
    <CreateArea onAdd={AddNote}/>
    {notes.map(
        (note,index) => {
            return <Note key={index} id={index} ondel={deleteNote} title={note.title} content={note.content}/>;
            }
        )}
    <Footer />
    </div>);
}

export default App;