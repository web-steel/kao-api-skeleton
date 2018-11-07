koa-api-skeleton
=============================

This version based on [koa 2.6.1](https://github.com/koajs/koa). 
    

quick start
===========

**Checkout koa-api-skeleton:**

```sh
$ git clone https://github.com/web-steel/kao-api-skeleton
```

**Make your own new project:**

```sh
$ mv kao-api-skeleton new_project
$ cd new_project
$ rm -rf .git
```

**Edit package.json:**

```sh
$ nano package.json
```

**Edit config/* files:**

```sh
$ nano config/default.js
```

```sh
$ cp .env.sample .env
```

**Install modules**
```sh
$ yarn install
```

**Start app:**
```sh
$ yarn start
```

console
========

```sh
Usage: /usr/bin/node ./console.js --controller [string] [--action [string]] [--opt [object]]

Options:
  --opt, --options  example --opt.app=mobile --opt.s=1  [default: {}]
  --controller                                             [required]
  --action                                              [default: "index"]
```

For example 
```sh
$ ./console.js --controller=default --opt.hello=world
Hello world defaultController & index action with options: {"hello":"world"}
```

worker
============

```sh
Usage: NODE_WORKER_NAME=[worker_name] node ./worker.js
```

For example 
```sh
$ NODE_WORKER_NAME=example node ./worker.js
```