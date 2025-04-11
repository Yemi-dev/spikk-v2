// src/types/error.types.ts
export interface IError extends Error {
    status?: number;
    stack?: string;
    intentional?: boolean;
    [key: string]: any; // For additional error properties
  }