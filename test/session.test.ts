import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { clearSession, readSession, saveSession } from '../src/store/session';

beforeEach(() => {
  const entries = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => entries.get(key) ?? null,
    setItem: (key: string, value: string) => { entries.set(key, value); },
    removeItem: (key: string) => { entries.delete(key); },
  });
});
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });
const user = { id: 1, username: 'Erol', email: 'demo@example.com' };

describe('demo session storage', () => {
  it('restores a valid session', () => {
    expect(saveSession(user)).toBe(true);
    expect(readSession()).toEqual({ login: true, user });
  });

  it.each(['{broken', 'null', '[]', '{"id":0}', '{"id":"1","username":"Erol","email":"demo@example.com"}'])('ignores invalid session %s', (value) => {
    localStorage.setItem('login', 'true');
    localStorage.setItem('user', value);
    expect(readSession().login).toBe(false);
    expect(readSession().user.id).toBeNull();
  });

  it('requires the login marker and preserves unrelated storage on logout', () => {
    localStorage.setItem('user', JSON.stringify(user));
    expect(readSession().login).toBe(false);
    saveSession(user);
    localStorage.setItem('theme', 'dark');
    expect(clearSession()).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(localStorage.getItem('user')).toBeNull();
    expect(localStorage.getItem('login')).toBeNull();
  });

  it('reports inaccessible storage without crashing', () => {
    vi.spyOn(localStorage, 'getItem').mockImplementation(() => { throw new Error('Blocked'); });
    vi.spyOn(localStorage, 'setItem').mockImplementation(() => { throw new Error('Quota'); });
    vi.spyOn(localStorage, 'removeItem').mockImplementation(() => { throw new Error('Blocked'); });
    expect(readSession().login).toBe(false);
    expect(saveSession(user)).toBe(false);
    expect(clearSession()).toBe(false);
  });
});
