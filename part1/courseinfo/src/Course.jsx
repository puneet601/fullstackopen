import React from 'react';
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
    const Header = ({name}) => {
        return (
            <h1>{name}</h1>
        )
    }
    const Total = ({parts}) => {
        var result = parts.reduce(function(tot, arr) { 
           
            return tot + arr.exercises;
          
          },0);
        return (<p>total of {result} exercises</p>);
    }
    const Course = ({course}) => {
    return (course.map(c => {
            return (<div><Header id={c.id} name={c.name}/>
    <Content id={c.id} course={c} />
    <Total id={c.id} parts={c.parts} /></div>);
        }));
    }
    export default Course;