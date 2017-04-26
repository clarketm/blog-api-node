# Blog API - Node
Demo coming soon!

## Installation
```bash
$ npm install
```

## Configuration
```js
/* config.json */
{
  "restApiRoot": "/v1",   // api root
  "host": "0.0.0.0",      // host
  "port": 3000,           // port
  ...
}
```
```js
/* datasources.json */
{
  ///////////////////////////////////////
  // in-memory database (testing ONLY) //
  ///////////////////////////////////////
  "db": {
    "name": "db",
    "connector": "memory"
  },
  /////////////////////////////////////////
  // transient database (embeded models) //
  /////////////////////////////////////////
  "transient": {
    "name": "transient",
    "connector": "transient"
  },
  ////////////////////////////////////
  // MongoDB database ////////////////
  ////////////////////////////////////
  // [1] install and run mongodb /////
  ////////////////////////////////////
  "mongodb": {
    "host": "127.0.0.1",
    "port": 27017,
    "database": "blog",
    "name": "mongodb",
    "connector": "mongodb"
  },
  /////////////////////////////////////////
  // Redis KV database (analytics cache) //
  /////////////////////////////////////////
  // [1] install and run redis ////////////
  /////////////////////////////////////////
  "redis": {
    "host": "127.0.0.1",
    "port": 6379,
    "name": "redis",
    "db": 0,
    "connector": "kv-redis"
  }
}
```

## Running
```bash
$ npm start

Web server listening at: http://0.0.0.0:3000
Browse your REST API at http://0.0.0.0:3000/explorer
```

## :star: Credits
Special thanks the the following: 
* [Loopback](https://loopback.io/) - StrongLoop

