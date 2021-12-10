const dotenv = require('dotenv');
dotenv.config();

const config = {
    'development': {
        'canvasApiUrl': process.env.CANVAS_API_URL,
        'canvasApiToken': process.env.CANVAS_API_TOKEN
    },
    'production': {
        'canvasApiUrl': process.env.CANVAS_API_URL,
        'canvasApiToken': process.env.CANVAS_API_TOKEN
    },
};

const env = process.env.NODE_ENV || 'development';
module.exports = config[env];
