# LevelDB JSON Load and Dump

# Installation

```bash
npm install -g leveldb-json
```

# Command Line Usage

To dump the contents of an existing leveldb instance execute

```bash
bin/dump-to-json --file /path/to/json/file --db /path/to/leveldb
```

To load the contents of previous json dump into a leveldb instance execute

```bash
bin/load-from-json --file /path/to/json/file --db /path/to/leveldb
```
