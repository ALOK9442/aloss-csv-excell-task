export interface DatatableProps {
    columns: Column[];
    data: any[];
    onRowClick: (row: any) => void;
    className?: string;
} 