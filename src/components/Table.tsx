import React from 'react';
import { TableConfig } from '../interfaces/config-table.interface';

interface TableProps<T> {
  config: TableConfig<T>;
}

export const Table = <T,>({ config }: TableProps<T>) => {
  const { rows, columns } = config;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-white">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                    {row[col.key] as string}
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
        </table>
      </div>
    </div>
  );
};
