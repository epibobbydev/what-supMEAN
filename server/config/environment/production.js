'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://heroku:yp1h6y_noEI2VGpMV__72Wo0PT-KBT-sZozRK386NGeijyke43AiUb1XaUpi9dJ4GjeP1t7fmBHbVjDm_aj9Ow@lamppost.3.mongolayer.com:10625,lamppost.2.mongolayer.com:10666/app36099459',
   options: { 
      replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
      server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } } 
   } 
  },
  seedDB: true
};