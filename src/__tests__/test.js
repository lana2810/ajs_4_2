import { getLevel } from '../index';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing fetch', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('testing status ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: '1' });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 1');
});

test('testing status false', () => {
  fetchData.mockReturnValue({ status: false });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
