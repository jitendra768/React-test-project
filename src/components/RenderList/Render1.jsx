import React from 'react'

const Render1 = () => {
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];
  return (
    <div>
        <h3>Render people</h3>
        <ul>
        {people.map((item,i)=>(
         <li>{item}</li>
        ))}
        </ul>
    </div>
  )
}

export default Render1