import { useEffect, useState } from 'react';
import type { FoodGroupType } from '../../../shared/types/foodGroupType';
import { fetchGroup } from '../api/foodGroup.api';

export function useFoodGroupList() {
  const [groups, setGroups] = useState<FoodGroupType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function reload() {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchGroup();
      setGroups(data);
    } catch (err) {
      console.error('Error cargando grupos:', err);
      setError('No se pudieron cargar los grupos');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    reload();
  }, []);

  return { groups, reload, loading, error };
}
