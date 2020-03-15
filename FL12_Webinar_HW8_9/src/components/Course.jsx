import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export function Course({ course, match }) {
  const dispatch = useDispatch();
  const { date, name, description, duration } = course;
  const [isOpen, toggleState] = useState(false);

  const deleteItem = () => {
    dispatch({
      type: 'REMOVE',
      payload: course.id
    })
  }

  return (
    <article className="course-thumbnail">
      <div className="course-date">
        <p>{date}</p>
      </div>
      <div className="course-name">
        <p>
          <strong>{name}</strong>
        </p>
      </div>
      <div className="course-description">
        <p>{description}</p>
      </div>
      <div className="course-duration">
        <p>{duration}</p>
      </div>
      <div className="course-container">
        <button onClick={() => toggleState(!isOpen)}>...</button>
      </div>
      {
        isOpen && (
          <div className="menu">
            <Link to={`/form/${course.id}`}>Edit</Link>
            <div onClick={deleteItem}>Delete</div>
          </div>
        )
      }
    </article>
  )
}