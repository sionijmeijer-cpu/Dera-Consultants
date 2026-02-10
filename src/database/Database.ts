/* eslint-disable @typescript-eslint/no-explicit-any */
import { turso } from "./client";

export class Database {
  async query(sql: string, params?: any[]): Promise<any[]> {
    try {
      const result = await turso.execute({ sql, args: params || [] });
      return result.rows || [];
    } catch {
      return [];
    }
  }

  async run(sql: string, params?: any[]): Promise<void> {
    try {
      await turso.execute({ sql, args: params || [] });
    } catch {}
  }

  async execute(sql: string, params?: any[]): Promise<{ lastInsertRowid: bigint | undefined }> {
    try {
      const result = await turso.execute({ sql, args: params || [] });
      return { lastInsertRowid: result.lastInsertRowid };
    } catch {
      return { lastInsertRowid: undefined };
    }
  }
}

export const db = new Database();
