# generate-mocha [![NPM version](https://img.shields.io/npm/v/generate-mocha.svg?style=flat)](https://www.npmjs.com/package/generate-mocha) [![NPM downloads](https://img.shields.io/npm/dm/generate-mocha.svg?style=flat)](https://npmjs.org/package/generate-mocha) [![Build Status](https://img.shields.io/travis/generate/generate-mocha.svg?style=flat)](https://travis-ci.org/generate/generate-mocha)

Generate mocha test files.

## TOC

- [Install](#install)
- [CLI](#cli)
  * [Flags](#flags)
- [Tasks](#tasks)
- [API](#api)
  * [Usage](#usage)
- [Related projects](#related-projects)
- [Contributing](#contributing)
- [Building docs](#building-docs)
- [Running tests](#running-tests)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm install --global generate-mocha
```

![gen-mocha](https://cloud.githubusercontent.com/assets/383994/15221990/bb9c4e6e-183b-11e6-9c41-d85c7edcad77.gif)

## CLI

**Installing the CLI**

To run the `mocha` generator from the command line, you'll need to install [generate](https://github.com/generate/generate) globally first. You can that now with the following command:

```sh
$ npm i -g generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory. Visit the [generate](https://github.com/generate/generate) project and documentation to learn more.

**Run the `mocha` generator from the command line**

Once both [generate](https://github.com/generate/generate) and `generate-mocha` are installed globally, you can run the generator with the following command:

Run the `mocha` generator from the command line:

```sh
$ gen mocha
```

### Flags

#### --tmpl

Choose the template to use.

**Default**: [templates/test.js](templates/test.js)

**Shortcut**: `-t`

**Choices**:

Currently the only choices are:

* `base`: template for adding unit tests to [base](https://github.com/node-base/base) projects.
* `test`: generic mocha unit tests template

#### --stem

Rename the `stem` of the destination file (basename excluding file extension):

**Default**: `test`

**Example**

```sh
$ gen mocha --stem foo
# results in `foo.js`
```

#### --basename

Rename the `basename` of the destination file.

**Default**: `test.js`

**Example**

```sh
$ gen mocha --basename foo.whatever
# results in `foo.whatever`
```

## Tasks

### [mocha:default](generator.js#L92)

Alias for the [test](#test) task. Allows the generator to be run with the following command:

**Example**

```sh
$ gen mocha
```

### [mocha:templates](generator.js#L105)

Pre-load templates. This is called by the [default](#default) task, but if you call this task directly make sure it's called after collections are created.

**Example**

```sh
$ gen mocha:templates
```

### [mocha:prompt-preferences](generator.js#L135)

Prompt the user to save preferences and automatically use them on the next run.

**Example**

```sh
$ gen mocha:prompt-preferences
```

### [mocha:prompt-install](generator.js#L157)

Prompt the user to install any necessary dependencies after generated files are written to the file system.

**Example**

```sh
$ gen mocha:prompt-install
```

### [mocha:install](generator.js#L174)

Install any dependencies listed on `app.cache.install`.

**Example**

```sh
$ gen mocha:install
```

### [mocha:post-generate](generator.js#L196)

Asks if you want to use the same "post-generate" choices next time this generator is run. If you change your mind, just run `gen node:choices` and you'll be prompted again.

If `false`, the [prompt-mocha](#prompt-mocha), [prompt-npm](#prompt-npm), and [prompt-git](#prompt-git) tasks will be
run after files are generated then next time the generator is run.
If `true`, the [mocha](#mocha), [npm](#npm), and [git](#git) tasks will be run (and you will not
be prompted) after files are generated then next time the generator is run.

**Example**

```sh
$ gen mocha:post-generate
```

### [mocha:mocha](generator.js#L225)

Generate a `test.js` file in the cwd or specified directory. This task is called by the default task. We alias the task as `mocha:mocha` to make it easier for other generators to run it programmatically.

**Example**

```sh
$ gen mocha:mocha
```

### [mocha:unit-test](generator.js#L257)

This task is used in unit tests to ensure this generator works in all intended scenarios.

**Example**

```sh
$ gen mocha:unit-test
```

## API

To use this generator as a node.js module, as a plugin or sub-generator, you must first install the generator locally.

**Install generate locally**

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install generate-mocha
```

### Usage

Then use in your project:

```js
var mocha = require('generate-mocha');
```

**Use as a plugin in your app**

In your [generate](https://github.com/generate/generate) project:

```js
var generate = require('generate');
var app = generate();

app.use(mocha);
```

**Use as a plugin in your generator**

In your [generate](https://github.com/generate/generate) generator:

```js
module.exports = function(app) {
  app.use(mocha);
};
```

**Use as a sub-generator**

In your [generate](https://github.com/generate/generate) generator:

```js
module.exports = function(app) {
  // name the sub-generator whatever you want
  app.register('foo', require('generate-mocha'));
};
```

## Related projects

You might also be interested in these projects:

* [generate](https://www.npmjs.com/package/generate): The Santa Claus machine for GitHub projects. Scaffolds out new projects, or creates any kind… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "The Santa Claus machine for GitHub projects. Scaffolds out new projects, or creates any kind of required file or document from any given templates or source materials.")
* [generate-git](https://www.npmjs.com/package/generate-git): Generator for initializing a git repository and adding first commit. | [homepage](https://github.com/generate/generate-git "Generator for initializing a git repository and adding first commit.")
* [generate-license](https://www.npmjs.com/package/generate-license): Generate a license file for a GitHub project. | [homepage](https://github.com/generate/generate-license "Generate a license file for a GitHub project.")
* [generate-node](https://www.npmjs.com/package/generate-node): Generate a node.js project, with everything you need to begin writing code and easily publish… [more](https://github.com/generate/generate-node) | [homepage](https://github.com/generate/generate-node "Generate a node.js project, with everything you need to begin writing code and easily publish the project to npm.")

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new). Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-mocha/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 15, 2016._