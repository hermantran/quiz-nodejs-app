var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "jam/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "backbone.marionette",
            "location": "jam/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "jam/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "jam/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "backbone.marionette",
            "location": "jam/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "jam/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "backbone.babysitter",
            "location": "jam/backbone.babysitter",
            "main": "lib/amd/backbone.babysitter.js"
        },
        {
            "name": "backbone.marionette",
            "location": "jam/backbone.marionette",
            "main": "lib/core/amd/backbone.marionette.js"
        },
        {
            "name": "backbone.wreqr",
            "location": "jam/backbone.wreqr",
            "main": "lib/amd/backbone.wreqr.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}