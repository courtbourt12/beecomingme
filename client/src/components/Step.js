import React from 'react';

export default function GoalsPage() {
  return (
    <div>
      <form action="submit" >
        Break down your goal into steps
        <br/>
        <input name="gTitle" id="gTitle" placeholder="Title"/>
        <br/>
        <label>Goal description:</label>
        <br/>
        <textarea id='gDescription' ></textarea>
        <br/>
        <input type="submit" value='Break it down >>'/>
      </form>
    </div>
  )
};