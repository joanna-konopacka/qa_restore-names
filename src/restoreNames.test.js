'use strict';

const { restoreNames } = require('./restoreNames');

describe('restoreNames', () => {
  it('should set correct firstName for users with undefined firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('Jack');
    expect(users[1].firstName).toBe('Mike');
  });

  it('should not modify firstName for users with defined firstName', () => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        fullName: 'John Smith',
      },
      {
        firstName: 'Alice',
        lastName: 'Johnson',
        fullName: 'Alice Johnson',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Alice');
  });

  it('should handle an empty array', () => {
    const users = [];

    restoreNames(users);

    expect(users.length).toBe(0);
  });

  it('should handle users with null firstName', () => {
    const users = [
      {
        firstName: null,
        lastName: 'Smith',
        fullName: 'John Smith',
      },
      {
        firstName: null,
        lastName: 'Johnson',
        fullName: 'Alice Johnson',
      },
    ];

    restoreNames(users);

    expect(users[0].firstName).toBe('John');
    expect(users[1].firstName).toBe('Alice');
  });
});
