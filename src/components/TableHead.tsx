import React from 'react';
import { TableColum } from '../interfaces/config-table.interface';
interface TableHeadProps<T> {
  columns: TableColum<T>[];
}
export const TableHead = <T,>({ columns }: TableHeadProps<T>) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map((col) => (
          <th key={col.key as string} scope="col" className="px-6 py-3">
            {col.header}
          </th>
        ))}
        <th scope="col" className="px-6 py-3">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};
