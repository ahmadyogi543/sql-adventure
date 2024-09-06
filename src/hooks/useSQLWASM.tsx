import { useEffect, useRef, useState } from 'react';
import initSqlJs, { Database } from 'sql.js';

export default function useSQLWASM(filepath: string) {
  const db = useRef<Database | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const initDb = () => {
    const sqlJsPromise = initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    });
    const dataPromise = fetch(`/db/${filepath}`).then((resp) =>
      resp.arrayBuffer()
    );

    return Promise.all([sqlJsPromise, dataPromise]);
  };

  useEffect(() => {
    initDb()
      .then(
        ([sqlJs, data]) =>
          (db.current = new sqlJs.Database(new Uint8Array(data)))
      )
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => {
      if (!db.current) return;

      db.current.close();
    };
  }, []);

  return { db: db.current, loading, error };
}
