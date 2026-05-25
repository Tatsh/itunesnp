# itunesnp

<!-- WISWA-GENERATED-README:START -->

[![NPM Version](https://img.shields.io/npm/v/itunesnp)](https://www.npmjs.com/package/itunesnp)
[![NPM Downloads](https://img.shields.io/npm/dm/itunesnp)](https://www.npmjs.com/package/itunesnp)
[![GitHub tag (with filter)](https://img.shields.io/github/v/tag/Tatsh/itunesnp)](https://github.com/Tatsh/itunesnp/tags)
[![License](https://img.shields.io/github/license/Tatsh/itunesnp)](https://github.com/Tatsh/itunesnp/blob/master/LICENSE.txt)
[![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/Tatsh/itunesnp/v0.0.0/master)](https://github.com/Tatsh/itunesnp/compare/v0.0.0...master)
[![CodeQL](https://github.com/Tatsh/itunesnp/actions/workflows/codeql.yml/badge.svg)](https://github.com/Tatsh/itunesnp/actions/workflows/codeql.yml)
[![QA](https://github.com/Tatsh/itunesnp/actions/workflows/qa.yml/badge.svg)](https://github.com/Tatsh/itunesnp/actions/workflows/qa.yml)
[![Tests](https://github.com/Tatsh/itunesnp/actions/workflows/tests.yml/badge.svg)](https://github.com/Tatsh/itunesnp/actions/workflows/tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/Tatsh/itunesnp/badge.svg?branch=master)](https://coveralls.io/github/Tatsh/itunesnp?branch=master)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-blue?logo=dependabot)](https://github.com/dependabot)
[![Stargazers](https://img.shields.io/github/stars/Tatsh/itunesnp?logo=github&style=flat)](https://github.com/Tatsh/itunesnp/stargazers)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)
[![Prettier](https://img.shields.io/badge/Prettier-black?logo=prettier)](https://prettier.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-black?logo=typescript)](https://www.typescriptlang.org/)
[![Yarn](https://img.shields.io/badge/Yarn-4c335c?logo=yarn)](https://yarnpkg.com/)
[![eslint](https://img.shields.io/badge/eslint-black?logo=eslint)](https://www.npmjs.com/package/eslint)
[![vitest](https://img.shields.io/badge/vitest-black?logo=vitest)](https://www.npmjs.com/package/vitest)

[![@Tatsh](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fpublic.api.bsky.app%2Fxrpc%2Fapp.bsky.actor.getProfile%2F%3Factor=did%3Aplc%3Auq42idtvuccnmtl57nsucz72&query=%24.followersCount&label=Follow+%40Tatsh&logo=bluesky&style=social)](https://bsky.app/profile/Tatsh.bsky.social)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Tatsh-black?logo=buymeacoffee)](https://buymeacoffee.com/Tatsh)
[![Libera.Chat](https://img.shields.io/badge/Libera.Chat-Tatsh-black?logo=liberadotchat)](irc://irc.libera.chat/Tatsh)
[![Mastodon Follow](https://img.shields.io/mastodon/follow/109370961877277568?domain=hostux.social&style=social)](https://hostux.social/@Tatsh)
[![Patreon](https://img.shields.io/badge/Patreon-Tatsh2-F96854?logo=patreon)](https://www.patreon.com/Tatsh2)

<!-- WISWA-GENERATED-README:STOP -->

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
