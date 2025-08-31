export interface Code {
  id: string;
  code: string;
  reward: string;
  isActive: boolean;
  expiresAt?: string;
}

export interface Translation {
  en: string;
  tr: string;
}

export type Language = 'en' | 'tr';