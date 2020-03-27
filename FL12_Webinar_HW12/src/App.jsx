import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { Employees, Units, WarningEmployees } from './pages';
import { listToTree } from './helpers';
import './App.css';

export const App = () => {
  const [data, setData] = useState([]);
  const [activeTab, setTab] = useState('employees');
  
  useEffect(() => {
    axios.get('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [setData]);
  
  const treeData = useMemo(() => listToTree(data), [data]);

  const tab = useMemo(() => {
    switch (activeTab) {
      case 'employees':
        return <Employees treeData={treeData}/>;
      case 'units':
        return <Units treeData={treeData}/>;
      case 'warning':
        return <WarningEmployees data={data}/>;
      default:
        return <Employees treeData={treeData}/>;
    }
  }, [treeData, data, activeTab]);

  const onClick = useCallback(event => setTab(event.target.value), [setTab]);

  return (
    <div className="App">
      <div className="buttonContainer">
        <button value="employees" onClick={onClick}>
          Employees
        </button>
        <button value="units" onClick={onClick}>
          Units
        </button>
        <button value="warning" onClick={onClick}>
          Warning Employees
        </button>
      </div>
      <section className="content">
        {tab}
      </section>
    </div>
  );
}