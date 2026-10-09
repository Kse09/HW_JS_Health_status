import getHealthStatus from '../src/index.js';

describe('getHealthStatus', () => {
  test('returns "healthy" when health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
  });

  test('returns "wounded" when 15 <= health <= 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('returns "critical" when health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 0 })).toBe('critical');
  });
});