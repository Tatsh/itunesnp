<!-- markdownlint-configure-file {"MD024": { "siblings_only": true } } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Rewrote the original AppleScript implementation in TypeScript (JXA).
- Switched target from iTunes to Music.app (the macOS Catalina+ replacement). The output format
  is unchanged.
- Switched the build to webpack with `ts-loader` and `webpack-shebang-plugin`.
- Added Vitest unit tests covering not-running, paused, stopped, playing, and fast-forward/rewind
  states.

[unreleased]: https://github.com/Tatsh/itunesnp/compare/v0.0.0...HEAD
