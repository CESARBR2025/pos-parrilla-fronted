import type { Table } from '../../../shared/types/table';
import { TableCard } from './TableCard';

interface TableGridProps {
  tables: Table[];
  onSelect: (table: Table) => void;
}

export function TableGrid({ tables, onSelect }: TableGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tables.map((t) => (
        <TableCard key={t.id} table={t} onClick={onSelect} />
      ))}
    </div>
  );
}
