/* UI DE MESERO */

import type { Table } from '../../../shared/types/table';

interface TableCardProps {
  table: Table;
  onClick: (table: Table) => void;
}

export function TableCard({ table, onClick }: TableCardProps) {
  const color =
    table.status === 'libre'
      ? 'bg-green-500'
      : table.status === 'ocupada'
      ? 'bg-red-500'
      : 'bg-gray-500';

  return (
    <div
      className={`p-4 rounded shadow text-white cursor-pointer ${color}`}
      onClick={() => onClick(table)}
    >
      <p className="text-lg font-bold">{table.name}</p>
      <p>{table.status}</p>
    </div>
  );
}
