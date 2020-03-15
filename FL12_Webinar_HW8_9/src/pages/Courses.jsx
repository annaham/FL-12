import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Course } from '../components';


export function Courses() {
  const [input, setInput] = React.useState('');
  const store = useSelector(store => store);
  const [searchResults, setSearchResults] = React.useState(store);

  React.useEffect(() => {
    let results;

    if (input.length) {
      results = store.filter(course =>
        course.name.toLowerCase().includes(input)
      );
    } else {
      results = store;
    }
    setSearchResults(results);
  }, [input, store]);

 const onChange = event => {
    setInput(event.target.value);
  };

  return (
    <section className="courses">
      <div className="actions">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={onChange}
          className="border-rad"
        />
        < Link to="/form">
        <button className="buttonAdd border-rad"> Add course</button>
        </Link>
      </div>
      
      <ul className="list ">
        {searchResults.map((course, index) => (
          <li key={index} className="border-rad">
            <Course course={course}/>
          </li>
        ))}
      </ul>
    </section>
  );
}