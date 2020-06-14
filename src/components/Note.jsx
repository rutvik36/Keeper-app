import React from 'react';

function Note(props){
function ondelete(){
    props.ondel(props.id);
}

    return <div className="note">
        <p>{props.title}</p>
        <p>{props.content}</p>
        <button onClick={ondelete}>DELETE</button>
    </div>
}

export default Note;