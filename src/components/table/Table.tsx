import './../../style.css';

import React, { useEffect, useState } from 'react';
import { Row } from '../row/Row';

type TTableDimentions = {
  row_number: number;
  column_number: number;
};

export function Table(props: TTableDimentions) {
  const [doubleNumberArray, setDoubleNumberArray] = useState<[] | Array<{ row: number; column: number }>[]>([]);

  useEffect(() => {
    let newArray: Array<Array<{ row: number; column: number }>> = [];
    for (let i = 1; i <= props.row_number; i++) {
      let newRow: Array<{ row: number; column: number }> = [];
      for (let j = 1; j <= props.column_number; j++) {
        newRow.push({ row: i, column: j });
      }
      newArray.push(newRow);
    }
    setDoubleNumberArray(newArray);
  }, []);

  return (
    <div className='Table'>
      <table>
        <caption>Табличка</caption>
        <tbody>
          {doubleNumberArray.length ? (
            doubleNumberArray.map((item, index) => {
              return <Row key={`row${index}`} row={item} />;
            })
          ) : (
            <tr>
              <td>Таблица пуста</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
