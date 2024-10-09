import React from 'react';
import { TableConfig } from '../interfaces/config-table.interface';
import { TableCellContent } from './TableCellContent';

interface TableBodyProps<T>{
  config: TableConfig<T>
}
export const TableBody = <T,>({config}:TableBodyProps<T>) => {
  const { rows, columns } = config;
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          {columns.map((col) => (
            <th
              key={col.key as string}
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <TableCellContent
              value={row[col.key] as string}
              type={col.type}
              />
            </th>
          ))}

          <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
