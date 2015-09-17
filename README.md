# Sails Isomorphic React with Admin Example

a [Sails](http://sailsjs.org) application with
- separate compiling assets for backoffice and frontoffice
- react isomorphic render
- simple administration automatic(model) and extendable
- ES6

with
- [sails](http://sailsjs.org)
- [react](https://github.com/facebook/react)
- [react-router](https://github.com/rackt/react-router)
- [newforms](https://github.com/insin/newforms)
- [newforms-bootstrap](https://github.com/insin/newforms-bootstrap)
- [browserify](https://github.com/substack/node-browserify)
- [sails-hook-babel](https://github.com/artificialio/sails-hook-babel)



## Quick start :
```sh
npm install

npm install -g browserify

browserify -r react -r react-router -r newforms -r newforms-bootstrap > assets/js/admin/dependencies/build.js

browserify -r react -r react-router > assets/js/front/dependencies/build.js


sails generate api post
sails generate api comment
```

```js

//api/models/Post.js
module.exports = {
  attributes: {
    title: 'string',
    content: 'text',
    comments: {
      collection:'comment',
      via: 'post'
    }
  }
};

//api/models/Comment.js
module.exports = {
  attributes: {
    name: 'string',
    message: 'text',
    post: {
      model: 'post'
    }
  }
};

```


```sh
sails lift
```

and go to http://localhost:1337/admin to see auto generate admin

## customize form with [newforms-bootstrap](https://github.com/insin/newforms-bootstrap)
see components/admin/partials/admin-models.js and update this.
