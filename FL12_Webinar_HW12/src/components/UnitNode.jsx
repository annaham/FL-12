import React, { useMemo } from 'react';

export const UnitNode = ({ nodeData }) => {
  const childrenAvailable = useMemo(() => nodeData.children && !!nodeData.children.length, [nodeData]);

  const childUnits = useMemo(() => (
    (nodeData.children && nodeData.children.length)
    ? nodeData.children.map((node, index) => (
        <UnitNode key={index} nodeData={node} />
      ))
    : null
  ), [nodeData]);

  const avg = useMemo(() => (
    childrenAvailable
    ? Math.floor(nodeData.children.reduce((acc, current) => acc + current.salary, 0) / nodeData.children.length)
    : 'N/A'
  ), [nodeData, childrenAvailable]);

  return (
    <>
      {childrenAvailable && (
        <div>
          <h6>RM: {nodeData.name}</h6>
          <p>Avg salary: {avg}</p>
        </div>
      )}
      {childUnits}
    </>
  )
}