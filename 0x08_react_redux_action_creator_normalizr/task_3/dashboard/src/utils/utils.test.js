// import the modules
import { getFullYear } from './utils.js';
import { getFooterCopy } from './utils.js';
import { getLatestNotification } from './utils.js';


describe('utility functions', () => {
  //  test getFullYear
  test('getFullYear returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  // test getFooterCopy
  test('getFooterCopy returns "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  // test getFooterCopy
  test('getFooterCopy returns "Holberton School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  // test getLatestNotification
  test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});