# admin

a [Sails](http://sailsjs.org) application with
- separate compiling assets for backoffice and frontoffice
- react isomorphic render
- simple administration automatic(model) and extendable



## Quick start :
```sh
npm install

browserify -r react -r react-router -r newforms -r newforms-bootstrap > assets/js/admin/dependencies/build.js

browserify -r react -r react-router > assets/js/admin/dependencies/build.js


sails lift
```

## customize form with newforms-bootstrap
see components/admin/partials/admin-models.js and update this.
