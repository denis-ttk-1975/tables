import './style.css';

import * as React from 'react';

import { Table } from './components/table/Table';

/**
 * Задача:
 * Необходима таблица с настраиваемым кол-вом строк и столбцов,
 * содержащая в каждой ячейке информацию об индексе своей колонки и строки.
 * При нажатии на ячейку необходимо выводить остаток целочисленного деления
 * индекса строки на индекс колонки (можно через alert)
 */

export default function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Table row_number={7} column_number={13} />
    </div>
  );
}
