fb-instant-tools
================

Tool for uploading Facebook Instant Game bundle

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/fb-instant-tools.svg)](https://npmjs.org/package/fb-instant-tools)
[![Downloads/week](https://img.shields.io/npm/dw/fb-instant-tools.svg)](https://npmjs.org/package/fb-instant-tools)
[![License](https://img.shields.io/npm/l/fb-instant-tools.svg)](https://github.com/alex-slv4/fb-instant-tools/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g fb-instant-tools
$ fb-instant COMMAND
running command...
$ fb-instant (-v|--version|version)
fb-instant-tools/0.0.2 darwin-arm64 node-v16.4.0
$ fb-instant --help [COMMAND]
USAGE
  $ fb-instant COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fb-instant help [COMMAND]`](#fb-instant-help-command)
* [`fb-instant token ID SECRET`](#fb-instant-token-id-secret)
* [`fb-instant upload APP_ID ACCESS_TOKEN`](#fb-instant-upload-app_id-access_token)

## `fb-instant help [COMMAND]`

display help for fb-instant

```
USAGE
  $ fb-instant help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `fb-instant token ID SECRET`

Generates facebook upload token

```
USAGE
  $ fb-instant token ID SECRET

ARGUMENTS
  ID      App id
  SECRET  App secret

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/token.ts](https://github.com/alex-slv4/fb-instant-tools/blob/v0.0.2/src/commands/token.ts)_

## `fb-instant upload APP_ID ACCESS_TOKEN`

Uploads asset to the facebook hosting

```
USAGE
  $ fb-instant upload APP_ID ACCESS_TOKEN

ARGUMENTS
  APP_ID        App id
  ACCESS_TOKEN  App access token

OPTIONS
  -C, --comment=comment  Comment to be added
  -f, --file=file        Path to zip file
  -h, --help             show CLI help
```

_See code: [src/commands/upload.ts](https://github.com/alex-slv4/fb-instant-tools/blob/v0.0.2/src/commands/upload.ts)_
<!-- commandsstop -->
