# Testing Practices Cheat Sheet

## Testing Libraries and Frameworks

- Jest: Primary testing framework
- @testing-library/react: For testing React components
- @testing-library/user-event: Simulating user interactions
- msw: For mocking API requests

## Mocking and Stubbing

### Jest Mocks

```javascript
jest.mock('./someModule');
jest.spyOn(someObject, 'someMethod').mockImplementation(() => {});
```

### Manual Mocks

```javascript
// __mocks__/someModule.js
module.exports = {
  someFunction: jest.fn(),
};
```

### MSW for API Mocking

```javascript
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/data', (req, res, ctx) => {
    return res(ctx.json({ data: 'mocked data' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

## Fake Implementations

### In-Memory Data Stores

```javascript
class FakeDataStore {
  constructor() {
    this.data = new Map();
  }
  
  set(key, value) {
    this.data.set(key, value);
  }
  
  get(key) {
    return this.data.get(key);
  }
}
```

### Fake Timers

```javascript
jest.useFakeTimers();
jest.advanceTimersByTime(1000);
```

## Testing Patterns

### Component Testing

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('component renders and responds to user input', () => {
  render(<MyComponent />);
  const button = screen.getByRole('button', { name: /click me/i });
  userEvent.click(button);
  expect(screen.getByText(/clicked/i)).toBeInTheDocument();
});
```

### Snapshot Testing

```javascript
it('matches snapshot', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

### Async Testing

```javascript
test('async operations', async () => {
  await expect(someAsyncFunction()).resolves.toBe('expected result');
});
```

## Test Organization

- Tests are located in `__tests__` directories or with `.test.js` suffix
- Use `describe` blocks to group related tests
- Use `beforeEach` and `afterEach` for setup and teardown

## Coverage

- Jest is configured to collect coverage information
- Aim for high coverage, especially in critical paths

## Best Practices

1. Test behavior, not implementation details
2. Use meaningful test descriptions
3. Arrange-Act-Assert pattern in test structure
4. Avoid testing third-party code
5. Keep tests independent and idempotent