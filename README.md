# primus-cat
`cat` for Primus.

## Installation

```bash
npm -g install primus-cat
```

## Usage

### Basic usage

If not transformer or parser are specified, `primus-cat` queries `/primus/spec`
to find out what socket specification is:

```bash
primus-cat http://localhost:8000
```

### Specify transformer and parser

```bash
primus-cat http://localhost:8000 -t websockets -p json
```

### Piping
You can also pipe data from `primus-cat`:

```bash
primus-cat http://localhost:8000 -t websockets -p json | jq '.data'
```
