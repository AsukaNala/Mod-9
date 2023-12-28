"use strict";

const User = require("./user");

async function init() {
  await User.sync(); // sync the model
  //also sync any extra models here
}

init();

module.exports = {
  User, // export the model
  //also export any extra models here
};

//If we need to create relationships between models, we can also do that here after syncing them.
//When adding a new model, make sure to: ● require it, ● sync it, and ● export it.
