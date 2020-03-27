import React, { useMemo } from 'react';
import { EmployeeNode } from '../components';

export const Employees = ({ treeData }) => {
  const rootNode = useMemo(() => treeData[0], [treeData]);

  if (!treeData.length) return null;

  return (
    <>
      <h1>Employees</h1>
      <EmployeeNode nodeData={rootNode}/>
    </>
  )
}