/* 
Formulario para escribir cuantas mesas se requieren
Boton de generar
Actualiza la vista automaticamente cuando el backend responda
*/

import { useState } from 'react';
import { generateTables } from '../api/tables.api';

export default function AdminTablesTable() {
  const [total, setTotal] = useState(10);

  async function handleGenerate() {
    await generateTables(total);
    alert('Mesas generadas!');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Configurar Mesas</h1>

      <input
        value={total}
        onChange={(e) => setTotal(Number(e.target.value))}
        type="number"
        className="border p-2"
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        Generar
      </button>
    </div>
  );
}
