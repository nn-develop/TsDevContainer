# CryptoBot

## Requirements

- Typescript 5.7.3
- Docker
- Docker Compose
- Dev Container

## Coding Guidelines

- Follow OOP principles, DRY, and SOLID.
- Try to avoid generic types.
- Avoid nested code (no more than 2 levels of nesting).

## Project Structure

- `src/`
  - `components/`: React components
    - `Form/`: Components related to form handling
    - `Async/`: Components demonstrating async operations
  - `hooks/`: Custom hooks
    - `useCallbackExample.ts`: Example of useCallback usage
    - `useMemoExample.ts`: Example of useMemo usage
  - `utils/`: Utility functions
    - `errorHandling.ts`: Functions for error handling

## Examples

### useCallback Example

Create a custom hook `useCallbackExample.ts` in the `hooks/` directory to demonstrate the usage of `useCallback`.
