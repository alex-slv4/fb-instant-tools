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
`fb-instant-tools` - package name and `fb-instant` is the binary.
Using npx:
```bash
npx fb-instant-tools token APP_ID 'APP_SECRET' # retrieve a token
npx fb-instant-tools upload APP_ID 'ACCESS_TOKEN' # upload bundle ./Archive.zip
```
Or install as global dependency:
```
npm install --global fb-instant-tools
```
And then use `fb-instant` binary:
```bash
fb-instant token APP_ID 'APP_SECRET' # retrieve a token
fb-instant upload APP_ID 'ACCESS_TOKEN' -f path/to/game-bundle.zip -C "Some notes about the bundle"
```
Or as internal dependency within your `package.json` script.

You can also use `fb-instant token APP_ID APP_SECRET` to generate the access token.
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fb-instant token ID SECRET`](#fb-instant-token-id-secret)
* [`fb-instant upload APP_ID ACCESS_TOKEN`](#fb-instant-upload-app_id-access_token)

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
