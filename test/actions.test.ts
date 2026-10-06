import { afterEach, describe, expect, it, vi } from 'vitest';
import mutations from '../src/store/mutations.js';

const mocks = vi.hoisted(() => ({
  connector: {
    getAllPosts: vi.fn(), getAllUsers: vi.fn(), getUserFromId: vi.fn(),
    userEdit: vi.fn(), getCommentsFromPostId: vi.fn(), postComment: vi.fn(), loginRequest: vi.fn(),
  },
  push: vi.fn(), saveSession: vi.fn(() => true), clearSession: vi.fn(() => true),
}));
vi.mock('@/http/clients', () => ({ HttpConnector: mocks.connector }));
vi.mock('@/router', () => ({ default: { push: mocks.push } }));
vi.mock('../src/store/session', () => ({ saveSession: mocks.saveSession, clearSession: mocks.clearSession }));
import actions from '../src/store/actions.js';
afterEach(() => vi.clearAllMocks());

describe('API actions', () => {
  it.each([
    ['getPosts', 'getAllPosts', undefined], ['getUsers', 'getAllUsers', undefined],
    ['getUser', 'getUserFromId', 1], ['saveUser', 'userEdit', { id: 1, user: {} }],
    ['getComments', 'getCommentsFromPostId', 1], ['newComment', 'postComment', { postId: 1, comment: {} }],
    ['loginOrRegisterUser', 'loginRequest', { username: 'Erol', email: 'demo@example.com' }],
  ] as const)('handles a rejected %s request', async (action, method, payload) => {
    mocks.connector[method].mockRejectedValueOnce(new Error('Network unavailable'));
    const commit = vi.fn();
    expect(await actions[action]({ state: { posts: [], users: [] }, commit }, payload)).toBe(false);
    expect(commit).toHaveBeenCalledWith('showSnackbar', { text: 'Request failed. Please try again.', color: 'red' });
  });

  it.each([['getPosts', 'getAllPosts', 'posts'], ['getUsers', 'getAllUsers', 'users']] as const)('accepts an empty %s result and clears stale data', async (action, method, key) => {
    mocks.connector[method].mockResolvedValueOnce({ status: 200, data: [] });
    const state = { posts: [{ id: 1 }], users: [{ id: 1 }] };
    const commit = vi.fn();
    await actions[action]({ state, commit });
    expect(state[key]).toEqual([]);
    expect(commit).not.toHaveBeenCalled();
  });

  it('clears all in-memory identity fields on logout', async () => {
    const state = { user: { id: 7, username: 'Erol', email: 'demo@example.com' }, login: true };
    mutations.clearUser(state);
    expect(state).toEqual({ user: { id: null, username: null, email: null }, login: false });
    const commit = vi.fn();
    await actions.logout({ commit });
    expect(commit).toHaveBeenCalledWith('clearUser');
    expect(mocks.clearSession).toHaveBeenCalledOnce();
    expect(mocks.push).toHaveBeenCalledWith({ name: 'authLogin' });
  });
});
