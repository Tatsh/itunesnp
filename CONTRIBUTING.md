# How to contribute to itunesnp

Thank you for your interest in contributing to itunesnp! Please follow these guidelines to help
maintain code quality and consistency.

## General Guidelines

- Follow the coding standards and rules described below for each file type.
- Ensure all code passes linting and tests before submitting a pull request.
- Write clear commit messages and document your changes in the changelog if relevant.
- Contributors are listed in `package.json`.
- Update relevant fields in `.wiswa.jsonnet` such as authors, dependencies, etc.
- All contributed code must have a license compatible with the project's license (MIT).
- Add missing words to `.vscode/dictionary.txt` as necessary (sorted and lower-cased).

## Development Environment

- Use [Yarn](https://yarnpkg.com/) to install Node.js based dependencies:
  - Install Node.js dependencies: `yarn`.
- Install [pre-commit](https://pre-commit.com/) and make sure it is enabled by running
  `pre-commit install` in the repository checkout.

## Quality Assurance & Scripts

The following scripts are available via `yarn` (see `package.json`):

- `yarn qa`: Run all QA checks (linting, spelling, formatting).
- `yarn check-formatting`: Check code formatting.
- `yarn format`: Auto-format code.
- `yarn check-spelling`: Run spell checker.
- `yarn test`: Run unit tests with Vitest.

The above all need to pass for any code changes to be accepted.

## Submitting Changes

1. Fork the repository and create your branch from `master`.
2. Ensure your code follows the above guidelines.
3. Run all tests (`yarn test`) and QA scripts (`yarn qa`). Be certain pre-commit runs on your
   commits.
4. Submit a pull request with a clear description of your changes.
