/*
Hacer peticiones a la BD para obtener los grupos
*/

const BASE_URL = 'http://127.0.0.1:8000/foodGroup';

export async function fetchGroup() {
  const res = await fetch(`${BASE_URL}/`);
  return res.json();
}

export async function generateGroup(name: string, is_active: boolean) {
  const res = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, is_active }),
  });
  return res.json();
}

export async function updateGroup(
  id: string,
  name: string,
  is_active: boolean
) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, is_active }),
  });

  return res.json();
}
