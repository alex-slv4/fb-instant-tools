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
fb-instant-tools/0.0.0 darwin-arm64 node-v16.4.0
$ fb-instant --help [COMMAND]
USAGE
  $ fb-instant COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fb-instant hello [FILE]`](#fb-instant-hello-file)
* [`fb-instant help [COMMAND]`](#fb-instant-help-command)

## `fb-instant hello [FILE]`

describe the command here

```
USAGE
  $ fb-instant hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ fb-instant hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/alex-slv4/fb-instant-tools/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
