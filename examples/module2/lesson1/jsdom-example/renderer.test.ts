// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' }
];

describe('User renderer', () => {
  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);
    const listItemsArray = Array.from(container.querySelectorAll('li'));

    expect(listItemsArray).toHaveLength(3);
    listItemsArray.forEach((item, index) => {
      const { name, age, role } = users[index];

      expect(item.textContent).toContain(name);
      expect(item.textContent).toContain(age);
      expect(item.textContent).toContain(role === 'admin' && '(Admin)');
    });
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);
    const listItemsArray = Array.from(container.querySelectorAll('li'));
    const usersForUserRole = users.filter(user => user.role == 'user');

    expect(listItemsArray).toHaveLength(2);
    listItemsArray.forEach((item, index) => {
      expect(item.textContent).toContain(usersForUserRole[index].name);
      expect(item.textContent).toContain(usersForUserRole[index].age);
    });
  });
});
