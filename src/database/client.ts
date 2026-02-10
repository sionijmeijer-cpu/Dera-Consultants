/* eslint-disable @typescript-eslint/no-explicit-any */
// Database client stub - the actual @libsql/client is not compatible with browser
// All database operations return empty results safely

export const turso = {
  execute: async (_args: any) => ({ rows: [], lastInsertRowid: undefined }),
  batch: async (_stmts: any[]) => [],
  close: () => {},
};

export default turso;
