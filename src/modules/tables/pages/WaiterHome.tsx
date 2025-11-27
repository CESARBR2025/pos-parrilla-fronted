/*
Muestra la grilla de mesas
Cada mesa tiene color segun su estado (libre/ocupada)
Click -> cambiar estado (libre-ocupada)
Recibe actualizaciones por ws
*/

import type { Table } from '../../../shared/types/table';
import { updateTableStatus } from '../api/tables.api';
import { TableGrid } from '../components/TableGrid';
import { useTables } from '../hooks/useTables';

export function WaiterHomePage() {
  const { tables, reload } = useTables();

  async function handleSelect(table: Table) {
    const next = table.status === 'libre' ? 'ocupada' : 'libre';
    await updateTableStatus(table.id, next); //actualizar el status
    reload(); // traer los datos con la actualizacion hecha
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Mesas</h1>
      <TableGrid tables={tables} onSelect={handleSelect} />
    </div>
  );
}
