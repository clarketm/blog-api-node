# Blog API - Node
**Live Demo** coming soon!

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

## Persisted Models
### Blog
|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
|  kind       | string |   false  |blog#blog|
|  name       | string |   false  |         |   
|  description| string |   false  |         | 
|  published  | date   |   false  |         | 
|  updated    | date   |   false  |         | 
|  url        | string |   false  |         | 

##### Embeded Transient Models
* Locale

|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
|  language   | string |   false  |         |
|  country    | string |   false  |         |   

### Post
|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
|  kind       | string |   false  |blog#post|
|  title      | string |   false  |         |   
|  content    | object |   false  |         |   
|  published  | date   |   false  |         | 
|  updated    | date   |   false  |         | 
|  url        | string |   false  |         | 

### Comment
|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
|  kind       | string |   false  |blog#comment|
|  content    | object |   false  |         |   
|  published  | date   |   false  |         | 
|  updated    | date   |   false  |         | 

### Author
|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
| displayName | string |   false  |         |
|  url        | string |   false  |         | 

##### Embeded Models
* Image as profileImage

|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
|  url        | string |   false  |         | 

### Reader
|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
| displayName | string |   false  |         |
|  url        | string |   false  |         | 

##### Embeded Transient Models
* Image as profileImage

|  Property   |  Type  | Required | Default |
|-------------|--------|----------|---------|
|  url        | string |   false  |         | 


## KeyValue Models
* Analytics

## Operations
WIP

## Usage
WIP

## :star: Credits
Special thanks the the following: 
* [Loopback](https://loopback.io/) - StrongLoop

