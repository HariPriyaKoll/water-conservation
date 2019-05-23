'use strict';

var config = require('config');

// Bluebird is the best promise library available today,
// and is the one recommended here:
const promise = require('bluebird');

// Loading all the database repositories separately,
// because event 'extend' is called multiple times:
const repos = {
    admin: require('./repos/admin'),
    issue: require('./repos/issue'),
    volunteer: require('./repos/volunteer'),
    contact: require('./repos/contact'),
};

// pg-promise initialization options:
const options = {

    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise,

    // Extending the database protocol with our custom repositories;
    // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
    extend: (obj, dc) => {
        // Database Context (dc) is only needed when extending multiple databases.

        // Do not use 'require()' here, because this event occurs for every task
        // and transaction being executed, which should be as fast as possible.
	
        obj.admin = new repos.admin(obj, pgp);
        obj.issue = new repos.issue(obj, pgp);
        obj.volunteer = new repos.volunteer(obj, pgp);
        obj.contact = new repos.contact(obj, pgp);
    }

};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(options);

// Create the database instance:
const db = pgp(config.postgres);

// Load and initialize optional diagnostics:
const diagnostics = require('./diagnostics');
diagnostics.init(options);

// If you ever need access to the library's root (pgp object), you can do it via db.$config.pgp
// See: http://vitaly-t.github.io/pg-promise/Database.html#.$config
module.exports = db;