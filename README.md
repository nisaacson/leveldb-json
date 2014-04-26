# LevelDB JSON Load and Dump

[![Build Status](https://travis-ci.org/nisaacson/leveldb-json.svg?branch=master)](https://travis-ci.org/nisaacson/leveldb-json)
[![NPM](https://nodei.co/npm/leveldb-json.png?downloads=true)](https://nodei.co/npm/leveldb-json/)

# Installation

```bash
npm install -g leveldb-json
```

# Command Line Usage

To dump the contents of an existing leveldb instance execute

```bash
leveldb-dump-to-json --file /path/to/json/file --db /path/to/leveldb
```

To load the contents of previous json dump into a leveldb instance execute

```bash
leveldb-load-from-json --file /path/to/json/file --db /path/to/leveldb
```
