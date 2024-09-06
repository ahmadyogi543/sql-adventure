import { QueryExecResult } from 'sql.js';
import useSQLWASM from './useSQLWASM';

export type SQLExecutorResult = {
  data: QueryExecResult | null;
  modified: number;
  message: string;
  status: string;
};

export default function useSQLExecutor(filepath: string) {
  const { db, loading, error } = useSQLWASM(filepath);

  // used for unified the return value of exec and run
  const getSQLExecutorResult = (
    data: QueryExecResult | null,
    modified: number,
    message: string,
    status: string
  ): SQLExecutorResult => ({ data, modified, message, status });

  // WARNING: use this only for SELECT command
  // the result is array, contains the column names and values
  const exec = (statement: string) => {
    try {
      if (!db) return;
      const [result] = db.exec(statement);
      return getSQLExecutorResult(result, 0, '', 'success');
    } catch (err) {
      const error = err as Error;
      return getSQLExecutorResult(null, 0, error.message, 'failed');
    }
  };

  // WARNING: use this for INSERT, UPDATE and DELETE command
  // the result is integer, contains the number of modified rows
  const run = (statement: string) => {
    if (!db) return;
    try {
      const rowsModified = db.run(statement).getRowsModified();
      return getSQLExecutorResult(null, rowsModified, '', 'success');
    } catch (err) {
      const error = err as Error;
      return getSQLExecutorResult(null, 0, error.message, 'failed');
    }
  };

  // WARNING: use this ONLY for validate the query, not actually run it
  const check = (statement: string, message: string = '') => {
    if (!db) return;
    try {
      db.run('BEGIN TRANSACTION;').run(statement).run('ROLLBACK');
      return getSQLExecutorResult(null, 0, message, 'failed');
    } catch (err) {
      const error = err as Error;
      db.run('END TRANSACTION');
      return getSQLExecutorResult(null, 0, error.message, 'failed');
    }
  };

  const validate = (
    statement: string,
    validationStatement: string,
    isDelete = false
  ) => {
    if (!db) return;
    try {
      db.run('BEGIN TRANSACTION');
      db.run(statement);
      const result = db.exec(validationStatement);
      console.log(result);
      const condition = !isDelete ? result.length > 0 : result.length === 0;
      if (condition) {
        db.run('COMMIT');
        return getSQLExecutorResult(
          null,
          0,
          'Ya, jawaban kamu benar!',
          'success'
        );
      } else {
        db.run('ROLLBACK');
        return getSQLExecutorResult(
          null,
          0,
          'Maaf, tidak terjadi perubahan yang diinginkan pada data!',
          'failed'
        );
      }
    } catch (err) {
      const error = err as Error;
      db.run('END TRANSACTION');
      return getSQLExecutorResult(null, 0, error.message, 'failed');
    }
  };

  return { db, exec, run, check, validate, loading, error };
}
