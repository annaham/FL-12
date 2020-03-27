import React from 'react';
import { UnitNode } from '../components';

export const Units = ({ treeData }) => (
  <>
    <h1>Units</h1>
    <UnitNode nodeData={treeData[0]}/>
  </>
)