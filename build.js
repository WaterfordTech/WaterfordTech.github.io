'use strict'

const Metalsmith  = require('metalsmith');
const Markdown    = require('metalsmith-markdown');
const Layouts     = require('metalsmith-layouts');
const Permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({ 
    sitename: "Waterford tech community",
    siteurl: "http://waterfordtech.org/",
    description: "Waterford tech community hub.",
    generatorname: "Metalsmith",
    generatorurl: "http://metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(Markdown())
  .use(Permalinks())
  .use(Layouts('handlebars'))
  .build((err, files) => {
    if (err) {
      throw err
    }
  })