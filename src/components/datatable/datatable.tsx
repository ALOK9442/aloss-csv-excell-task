export default const Datatable: React.FC<DatatableProps> = ({
    columns,
    data,
    onRowClick,
    className,
    }: DatatableProps) => {
    return (
        <table className={className}>
        <thead>
            <tr>
            {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
            <tr key={index} onClick={() => onRowClick(row)}>
                {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    );
    }