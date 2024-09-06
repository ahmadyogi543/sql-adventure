import { Result } from '../store/GameplayStore';
import { SQLExecutorResult } from '../hooks/useSQLExecutor';

export function checkUserQuery(
  dialogQuery: string,
  dialogValidationQuery: string,
  userQuery: string,
  dialogQueryType: string,
  exec: (statement: string) => SQLExecutorResult | undefined,
  check: (statement: string, message: string) => SQLExecutorResult | undefined,
  validate: (
    statement: string,
    valiationStatement: string,
    isDelete: boolean
  ) => SQLExecutorResult | undefined
): Result {
  // check the user query, only for SELECT, INSERT, UPDATE and DELETE
  const regex = /^(SELECT|INSERT|UPDATE|DELETE)\b/i;
  if (!regex.test(userQuery)) {
    return {
      correct: false,
      data: null,
      message:
        'Maaf, hanya perintah SELECT, INSERT, UPDATE dan DELETE saja yang dapat digunakan!',
      query: userQuery,
    };
  }

  // compare the dialog query and user query, don't let
  // the user execute an INSERT when the question is SELECT
  // and vice-versa
  if (
    (dialogQueryType === 'exec' &&
      /^INSERT|UPDATE|DELETE\b/i.test(userQuery)) ||
    (dialogQueryType === 'run' && /^SELECT\b/i.test(userQuery))
  ) {
    const result = check(
      userQuery,
      'Maaf, perintah yang kamu kirim tidak diperbolehkan!'
    );
    return {
      correct: false,
      data: null,
      message:
        result!.status === 'success'
          ? result!.message
          : `Kesalahan: ${result!.message}`,
      query: userQuery,
    };
  }

  if (dialogQueryType === 'exec') {
    const dialogResult = exec(dialogQuery);
    const userResult = exec(userQuery);

    // check if dialog and user result is not null
    if (!dialogResult || !userResult) {
      return {
        correct: false,
        data: null,
        message: 'Kesalahan: sistem sedang tidak baik-baik saaja!',
        query: userQuery,
      };
    }

    // check the result of user query execution
    // this will return the actual error from SQLite
    if (userResult.status === 'failed') {
      return {
        correct: false,
        data: null,
        message: `Kesalahan: ${userResult.message}`,
        query: userQuery,
      };
    }

    // compare if the data is empty array
    if (!dialogResult.data) {
      if (userResult.data) {
        return {
          correct: false,
          data: null,
          message: 'Maaf, output tabel tidak sesuai!',
          query: userQuery,
        };
      }
      return {
        correct: true,
        data: null,
        message: 'Ya, jawaban kamu benar!',
        query: userQuery,
      };
    }

    // compare the columns of dialog and user query result
    if (
      JSON.stringify(userResult.data!.columns) !==
      JSON.stringify(dialogResult.data.columns)
    ) {
      return {
        correct: false,
        data: userResult.data,
        message: 'Maaf, kolom pada tabel tidak sesuai!',
        query: userQuery,
      };
    }

    // compare the number of rows of dialog and user query result
    if (userResult.data!.values.length < dialogResult.data.values.length) {
      return {
        correct: false,
        data: userResult.data,
        message: 'Maaf, beberapa baris data pada tabel tidak ada!',
        query: userQuery,
      };
    }

    if (userResult.data!.values.length > dialogResult.data.values.length) {
      return {
        correct: false,
        data: userResult.data,
        message: 'Maaf, terdapat kelebihan baris data pada tabel!',
        query: userQuery,
      };
    }

    // if the code reaches here, then the user answer is right
    return {
      correct: true,
      data: userResult.data,
      message: 'Ya, jawaban kamu benar!',
      query: userQuery,
    };
  } else {
    let isDelete = false;

    const regex = /^(DELETE)\b/i;
    if (regex.test(dialogQuery)) {
      isDelete = true;
    }

    const userResult = validate(userQuery, dialogValidationQuery, isDelete);
    console.log(dialogValidationQuery);

    // check if dialog and user result is not null
    if (!userResult) {
      return {
        correct: false,
        data: null,
        message: 'Kesalahan: sistem sedang tidak baik-baik saaja!',
        query: userQuery,
      };
    }

    // check the result of user query execution
    // this will return the actual error from SQLite
    if (userResult.status === 'failed') {
      return {
        correct: false,
        data: null,
        message: `Kesalahan: ${userResult.message}`,
        query: userQuery,
      };
    }

    return {
      correct: true,
      data: null,
      message: userResult.message,
      query: userQuery,
    };
  }
}
