# sails-swagger
[![Build status][ci-image]][ci-url]


[swagger.io](http://swagger.io/) (v2.0) hook for Sails. The application's models, controllers, and routes are aggregated and transformed into a Swagger Document. Supports the Swagger 2.0 specification.

## Install

```sh
$ npm install sails-swagger-alino --save
```

## Configuration
```js
// config/swagger.js
module.exports.swagger = {
  /**
   * require() the package.json file for your Sails app.
   */
  pkg: require('../package'),
  host: 'localhost:1337'
  ui: {
    url: 'http://swagger.balderdash.io'
  },
  definitions: {
      // your optional additional custom #/definitions
  }
};
```

## Usage
After installing and configuring swagger, you can find the docs output on the [/swagger/doc](http://localhost:1337/swagger/doc) route.

You may also specify additional swagger endpoints by specifying the swagger spec in config/routes.js

```
/**
 * Route Mappings
 * @file config/routes.js
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': {
        view: 'homepage'
    },

    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/
    'get /groups/:id': {
        controller: 'GroupController',
        action: 'test',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['GET', 'POST'],
            summary: ' Get Groups ',
            description: 'Get Groups Description',
            produces: [
                'application/json'
            ],
            tags: [
                'Groups'
            ],
            responses: {
                '200': {
                    description: 'List of Groups',
                    schema: 'Group', // api/model/Group.js,
                    type: 'array'
                }
            },
            parameters: []

        }
    },
    'put /groups/:id': {
        controller: 'GroupController',
        action: 'test',
        skipAssets: 'true',
        //swagger path object
        swagger: {
            methods: ['PUT', 'POST'],
            summary: 'Update Groups ',
            description: 'Update Groups Description',
            produces: [
                'application/json'
            ],
            tags: [
                'Groups'
            ],
            responses: {
                '200': {
                    description: 'Updated Group',
                    schema: 'Group' // api/model/Group.js
                }
            },
            parameters: [
                'Group' // api/model/Group.js
            ]

        }
    }
};


```

## License
MIT


[npm-url]: https://npmjs.org/package/sails-swagger
[ci-image]: https://img.shields.io/travis/Alino/sails-swagger/master.svg?style=flat
[ci-url]: https://travis-ci.org/Alino/sails-swagger
