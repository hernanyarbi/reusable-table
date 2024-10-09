import React from 'react';
import { TableConfig } from '../interfaces/config-table.interface';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

interface TableProps<T> {
  config: TableConfig<T>;
}

export const Table = <T,>({ config }: TableProps<T>) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-white">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHead columns={config.columns}/>
          <TableBody config={config} />
        </table>
      </div>
    </div>
  );
};
