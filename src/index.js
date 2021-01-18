import React from 'react'
import ReactDOM from 'react-dom'

const notes = [
  {
    id: 1,
    content: 'javascript is fun',
    date: '2021-01-18T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2021-01-18T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'i make some react-app hope you like it',
    date: '2021-01-18T19:15:41.298Z',
    important: true
  }
]

const Note = ({note}) => <li>{note.content}</li>

const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
