// import the modules
import { getFullYear } from './utils.js';
import { getFooterCopy } from './utils.js';

// Test "getFullYear"
test('getFullYear returns the correct year', () => {
  // Arrange
  const currentDate = new Date();
  const expectedYear = currentDate.getFullYear();
  
  // Act on dat case
  const result = getFullYear(currentDate);
  
  // Assert dat case
  expect(result).toBe(expectedYear);
});

// Tests for  "getFooterCopy" //
// Test "getFooterCopy" for "true" argument
test('getFooterCopy returns correct string for true argument', () => {
  // Arrange
  const argument = true;
  const expectedString = "Copyright © 2024 - All rights reserved.";
  
  // Act on dat case
  const result = getFooterCopy(argument);
  
  // Assert dat case
  expect(result).toBe(expectedString);
});
// Test "getFooterCopy" for "false" argument
test('getFooterCopy returns correct string for false argument', () => {
  // Arrange
  const argument = false;
  const expectedString = "All rights reserved.";
  
  // Act on dat case
  const result = getFooterCopy(argument);
  
  // Assert dat case
  expect(result).toBe(expectedString);
});