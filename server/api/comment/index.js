'use strict';
 
var express = require('express');
var controller = require('./comment.controller');
var auth = require('../../auth/auth.service');
 
var router = express.Router();
  
router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/a/:idArticle', auth.isAuthenticated(), controller.index);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.post('/', auth.isAuthenticated(), controller.create);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
 
module.exports = router;