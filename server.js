var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('User');
mobileApp.tables.add('Deliverer');
mobileApp.tables.add('Employee');
mobileApp.tables.add('Operation');
mobileApp.tables.add('Report'); // Create a table for 'User' with default settings
mobileApp.tables.add('Adress');
mobileApp.tables.add('Supply');
app.use(mobileApp);
app.listen(process.env.PORT || 3000);