import React from 'react'

interface TableCellContentProps {
    value: string,
    type: string
}

export const TableCellContent = ({value, type}: TableCellContentProps) => {
  switch (type) {
    case 'money':
        return `$${parseFloat(value).toFixed(2)}`
    case 'text':
        return <span>{value}</span>
    default:
        return <span>{value}</span>
  }
}
