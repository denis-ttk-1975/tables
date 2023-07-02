import React, { useState, useEffect } from 'react';

import { Cell } from '../cell/Cell';
import './../../style.css';

type TRowProps = {row: Array<{
  row: number;
  column: number;
}>};

export function Row(props: TRowProps) {
  return (
    <tr className="Row">
      {props.row.map((item) => {
        return (
          <Cell
            key={item.row * item.column}
            vertical_number={item.row}
            horizontal_number={item.column}
          />
        );
      })}
    </tr>
  );
}
