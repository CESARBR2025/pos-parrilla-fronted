/* 
Tipar datos exactamente iguales como en la tabla de SUPABASE
*/

export interface Table {
  id: number;
  name: string;
  capacity: number;
  status: string;
  created_at?: string;
  updated_at?: string;
}
