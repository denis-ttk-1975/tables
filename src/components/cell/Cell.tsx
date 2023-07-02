import React, { useState, useEffect } from 'react';
type TCellProps = {
  vertical_number: number;
  horizontal_number: number;
};
import './../../style.css';

function integerDivision(raw: number, column: number) {
  console.log(raw % column);
  alert(`Целочисленное деление номера ряда на номер колонки составит - ${raw % column}`);
}

export function Cell(props: TCellProps) {
  const [coordinate, setCoordinate] = useState({ row: 0, column: 0 });

  useEffect(() => {
    setCoordinate({
      row: props.horizontal_number,
      column: props.vertical_number,
    });
  }, []);

  return (
    <td className='Cell' onClick={() => integerDivision(coordinate.row, coordinate.column)}>
      {props.vertical_number}:{props.horizontal_number}
    </td>
  );
}
