const express = require('express');
const fs = require('fs');

const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
    let name = removeExtension(file);
    if (name !== 'index') {
        console.log(`Loading route: ${name}`);
        router.use(`/${name}`,require(`./${file}`));
    }
});

module.exports = router;