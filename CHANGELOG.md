<!-- markdownlint-configure-file {"MD024": { "siblings_only": true } } -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2026-05-25

### Fixed

- Refresh the published `dist/index.js` bundle so it matches the source-level behaviour shipped in
  0.1.0. The 0.1.0 release accidentally re-published the pre-refactor bundle, so installs of 0.1.0
  still used `console.log` and printed the `Now Playing: Nothing, …` placeholders. Upgrading to
  0.1.1 picks up the `$.printf` output path and the silent-on-not-playing behaviour.

## [0.1.0] - 2026-05-25

### Changed

- `itunesnp` now writes its output directly to standard output via `printf`, emitting only the
  `Now Playing: <artist> - <track>` line when a track is playing.

### Removed

- The `Now Playing: Nothing, …` placeholder messages for the not-running, paused, and stopped
  states. The command now stays silent and exits successfully in those states, so it can be wired
  unconditionally into IRC `/np` shell-out hooks without producing noise when nothing is playing.

## [0.0.1] - 2026-05-25

### Added

- Webpack-based build with `ts-loader` and `webpack-shebang-plugin` that bundles the CLI to
  `dist/index.js`.
- Vitest unit tests covering the not-running, paused, stopped, playing, and fast-forward/rewind
  states.

### Changed

- Rewrote the original AppleScript implementation in TypeScript (JXA).
- Switched the target from iTunes to Music.app (the macOS Catalina+ replacement). The output
  format is unchanged.

[unreleased]: https://github.com/Tatsh/itunesnp/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/Tatsh/itunesnp/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Tatsh/itunesnp/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/Tatsh/itunesnp/releases/tag/v0.0.1
