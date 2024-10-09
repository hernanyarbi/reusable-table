export interface TableConfig<T> {
    rows: T[]
    columns: TableColum<T>[]
}

export interface TableColum<T>{
    key: keyof T
    header: string
    type: 'text'|'money'
}