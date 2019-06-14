# Moltin Tools

`moltintools` is a CLI application that allows you to import and manage your products in [Moltin](https://moltin.com) by parsing in a csv file.

## Installation

You have two choices of how you would like to use use `moltintools` you can eaither:

1. Install `moltintools` globally via `npm i moltintools -g`
2. Clone the repo and run it via `node index.js`

### Configuration

In the config/default.yml folder you will need to enter your credentailas. These can be found in your Moltin dashboard. `moltintools` uses the [config](https://www.npmjs.com/package/config) package to manage credentials.

## Usage

```
Options:
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
  -f, --file                                                 [string] [required]
  -c, --create  Create new product(s) in moltin.
  -u, --update  Update product(s) in moltin.
  -d, --delete  Delete product(s) in moltin.
```

## Todos:

- Update product(s)
- Delete product(s)
- Allow JSON array as a source of input
