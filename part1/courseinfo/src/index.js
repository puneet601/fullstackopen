import React from 'react';
import ReactDOM from 'react-dom';
const Part = ({part}) => {
return (
<p>{part.name} {part.exercises}</p>
);
}
const Content = ({course}) => {
    return(
course.parts.map(p => <Part id={p.id} part={p} />)
    );
}
const Header = () => {
    return (
        <h1>Half Stack application development</h1>
    )
}
var c=0;

const Total = ({parts}) => {
    var result = parts.reduce(function(tot, arr) { 
       
        return tot + arr.exercises;
      
      },0);
    return (<p>total of {result} exercises</p>);
}
const Course = ({course}) => {
return (<div>
    <Header />
<Content course={course} />
<Total parts={course.parts} />
</div>);
}
  const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
      ]
    }
  
    return <Course course={course} />
  }
  
ReactDOM.render(<App />, document.getElementById('root'));
