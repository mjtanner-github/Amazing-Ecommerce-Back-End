# Amazing-Ecommerce-Back-End
This is an exercise for a Georgia Tech Full Stack Development Bootcamp Section

## Video Demonstration   
[![Demonstration Video Thumbnail](./ReadMe/demo_thumbnail.jpg)](https://youtu.be/iC5MR6ARu-I)   

## Video Requirements  
Time |   Requirement
-----|----------------
0:31 | The walkthrough video must demonstrate how to create the schema from the MySQL shell.
0:55 | The walkthrough video must demonstrate how to seed the database from the command line.
1:12 | The walkthrough video must demonstrate how to start the application’s server.
1:35 | The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.
2:05 | The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.
2:55 | The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.
4:27 | Products...
6:05 | Tags...

## What's In The Box  

  File                          | Content
  ------------------------------|-----------------------------------------------
  README.md                     | This document.
  config/connection.js          | Sequalize mySQL connection handler.
  db/schema.sql                 | mySQL source code to initialize mySQL database
  models/Category.js            | Schema for declaring table columns and constraint for Category.
  models/Product.js             | Schema for declaring table columns and constraint for Product.
  models/ProductTag.js          | Schema for declaring table columns and constraint for ProductTag.
  models/Tag.js                 | Schema for declaring table columns and constraint for Tag
  models/index.js               | Defines relations btween table types and columns.
  routes/api/category-routes.js | Evokes handlers on URL templates for categories.
  routes/api/index.js           | Directs incoming URL templates to category, product, and tag handlers. 
  routes/api/product-routes.js  | Evokes handlers on URL templates for products.
  routes/api/tag-routes.js      | Evokes handlers on URL templates for tag.
  routes/index.js               | Directs incoming API URL template types to the api/ folder.
  seeds/category-seeds.js       | DB seed utility for category.
  seeds/index.js                | DB seed utility master.
  seeds/product-seeds.js        | DB seed utility for product.
  seeds/product-tag-seeds.js    | DB seed utility for productTag.
  seeds/tag-seeds.js            | DB seed utility for tag.
  server.js                     | Evokes and initializes the server.
