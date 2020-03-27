import React, { useMemo } from 'react';

export const EmployeeNode = ({ nodeData }) => {
  const childNodes = useMemo(() => (
    (nodeData && nodeData.children.length)
    ? nodeData.children.map((node, index) => (
      <li key={index}>
        <EmployeeNode nodeData={node} />
      </li>
    ))
    : null
  ), [nodeData]);
    
  const label = useMemo(() => (
    nodeData.children.length
    ? <mark>{nodeData.name}</mark>
    : nodeData.name
  ), [nodeData]);

  return (
    <>
      <h5>{nodeData && label}</h5>
      <ul>{childNodes}</ul>
    </>
  )
}