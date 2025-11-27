/* 
API del modulo de mesas
Se hacen las peticiones a las url para obtener la informacion

*/

const BASE_URL = 'http://127.0.0.1:8000/tables';

export async function fetchTables() {
  const res = await fetch(`${BASE_URL}/`);
  return res.json();
}

export async function generateTables(total: number) {
  const res = await fetch(`${BASE_URL}/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ total }),
  });
  return res.json();
}

export async function updateTableStatus(id: number, status: string) {
  const res = await fetch(`${BASE_URL}/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });

  return res.json();
}
