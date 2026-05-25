# itunesnp

[![NPM Version](https://img.shields.io/npm/v/itunesnp)](https://www.npmjs.com/package/itunesnp)
[![GitHub tag (with filter)](https://img.shields.io/github/v/tag/Tatsh/itunesnp)](https://github.com/Tatsh/itunesnp/tags)
[![License](https://img.shields.io/github/license/Tatsh/itunesnp)](https://github.com/Tatsh/itunesnp/blob/master/LICENSE.txt)
[![QA](https://github.com/Tatsh/itunesnp/actions/workflows/qa.yml/badge.svg)](https://github.com/Tatsh/itunesnp/actions/workflows/qa.yml)
[![Tests](https://github.com/Tatsh/itunesnp/actions/workflows/tests.yml/badge.svg)](https://github.com/Tatsh/itunesnp/actions/workflows/tests.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-black?logo=typescript)](https://www.typescriptlang.org/)
[![Yarn](https://img.shields.io/badge/Yarn-4c335c?logo=yarn)](https://yarnpkg.com/)

Print the currently playing Music.app track in `Now Playing: <artist> - <track>` format. Handy for
IRC `/np` commands.

## Installation

Install globally and run `itunesnp`.

```shell
yarn global add itunesnp
# or
npm install --global itunesnp
```

## Usage

```shell
itunesnp
```

Sample output:

```text
Now Playing: Daft Punk - Around the World
Now Playing: Nothing, Music is currently paused.
Now Playing: Nothing, Music is currently stopped.
Now Playing: Nothing, Music is not open.
```

### IRC clients

For IRC clients that support shelling out, point the `/np` (or similar) command at `itunesnp`. As
an example, for X-Chat Aqua you can either add a user command from the menu or edit
`~/.xchat2/commands.conf`:

```text
NAME NP
CMD exec -o itunesnp
```

Then restart the client and type `/np`. The command name can be anything (upper-case).

### Quassel

Quassel invokes scripts in `~/Library/Application Support/Quassel/scripts/` via its `/exec`
command. The Linux build ships an `mpris` script there, so installing `itunesnp` under that name
lets a single client-side alias work on both Linux and macOS.

```shell
mkdir -p "$HOME/Library/Application Support/Quassel/scripts"
cp "$(yarn global bin)/itunesnp" \
    "$HOME/Library/Application Support/Quassel/scripts/mpris"
chmod +x "$HOME/Library/Application Support/Quassel/scripts/mpris"
```

In **Preferences → Aliases**, add an alias named `np` (or any name you like) that expands to
`/exec mpris`. Arguments after `mpris` are ignored. Type `/np` in a chat and the metadata is
broadcast publicly. This replaces the older
[quassel-itunes-np](https://github.com/Tatsh/quassel-itunes-np) CoffeeScript shim.

![Quassel Aliases preferences pane showing an np entry that expands to /exec mpris.](https://user-images.githubusercontent.com/724848/34349081-f3bb89b2-e9dc-11e7-8847-403f7d4b009d.png)

## Development

```shell
yarn               # install dependencies.
yarn test          # run vitest with coverage.
yarn webpack       # bundle src/index.ts to dist/index.js.
yarn qa            # lint, spell-check, and prettier check.
```

The CLI is written in TypeScript and bundled with webpack. JXA global types come from
[`jxa-types`](https://www.npmjs.com/package/jxa-types).
