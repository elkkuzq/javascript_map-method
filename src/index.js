import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return(
    <div>
      <p>
        Hey {props.name}, you are {props.age} years old
        </p>
    </div>
  )
}

const Kertoja = (props) => {
  return(
    <div>
      <p>
        luku {props.ekaluku} kerrottuna luvulla {props.tokaluku} on {props.ekaluku*props.tokaluku}
      </p>
    </div>
  )
}

const App = () => {
  const nimi = 'elias'
  const ika = 14
  const luku1 = 8
  const luku2 = 5

  return(
  <div>
    <p>Hello World</p>
    <Hello name = "javascript" age = {2021 - 1995}/>
    <Hello name = {nimi} age = {ika}/>
    <Kertoja ekaluku = {luku1} tokaluku = {luku2}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))