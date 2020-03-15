import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export function Form({ history, match }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: '',
    description: '',
    duration: '',
    authors: '',
    date: '',
  });
  const store = useSelector(store => store);

  useEffect(() => {
    const { id } = match.params;
    if (id) {
      const target = [...store].find(el => el.id === +id)
      setValues(target);
    }
  }, [store, setValues, match.params]);

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const editCourse = (id) => {
    dispatch({
      type: 'EDIT',
      payload: { ...values, id },
    })
  }

  const createCourse = () => {
    const id = Math.floor(Math.random() * 100);

    dispatch({
      type: 'ADD',
      payload: { ...values, id },
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    const { id } = match.params;
    id ? editCourse(id) : createCourse();
    history.goBack();
  }

  if (!values) return null;

  const { name, description, duration, authors, date } = values;

  return (
    <form onSubmit={onSubmit}>
      <h1>New course</h1>
      <div>
        <label>Title*</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Description*</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={onChange}
        />
      </div>
      <div className="form-container">
        <div className="form-block">
          <div>
            <label>Duration*</label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Authors*</label>
            <input
              type="text"
              value={authors}
              name="authors"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-block">
          <div>
            <label>Date*</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <button type="submit">Save</button>
      <Link to="/">Cancel</Link>
    </form>
  )
}