export interface SessionUser {
  readonly id: number;
  readonly username: string;
  readonly email: string;
}

export interface Session {
  readonly login: boolean;
  readonly user: SessionUser | { readonly id: null; readonly username: null; readonly email: null };
}

export function readSession(): Session {
  const empty: Session = { login: false, user: { id: null, username: null, email: null } };
  try {
    if (localStorage.getItem('login') !== 'true') return empty;
    const user: unknown = JSON.parse(localStorage.getItem('user') ?? 'null');
    if (typeof user !== 'object' || user === null ||
        !('id' in user) || typeof user.id !== 'number' || !Number.isSafeInteger(user.id) || user.id <= 0 ||
        !('username' in user) || typeof user.username !== 'string' || !user.username.trim() ||
        !('email' in user) || typeof user.email !== 'string' || !user.email.trim()) return empty;
    return { login: true, user: { id: user.id, username: user.username, email: user.email } };
  } catch {
    return empty;
  }
}

export function saveSession(user: SessionUser): boolean {
  try {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('login', 'true');
    return true;
  } catch {
    return false;
  }
}

export function clearSession(): boolean {
  let cleared = true;
  for (const key of ['login', 'user']) {
    try { localStorage.removeItem(key); } catch { cleared = false; }
  }
  return cleared;
}
