const express = require("express");
const BlogController = require('../Controllers/blogController.js');
const CommentController = require('../Controllers/commentController.js');
const MessageController = require('../Controllers/messageController.js');
const PortfolioController = require('../Controllers/portfolioController.js');
const PorductController = require('../Controllers/productController.js');

const router = express.Router();

// Blog Routes
router.get('/manage-blog',BlogController.read);
router.get('/add-blog',BlogController.create);
router.get('/update-blog',BlogController.update);
router.get('/delete-blog',BlogController.delete);

// Comment Routes
router.get('/manage-comment',CommentController.read);
router.get('/add-comment',CommentController.create);
router.get('/update-comment',CommentController.update);
router.get('/delete-comment',CommentController.delete);

// Message Routes
router.get('/manage-message',MessageController.read);
router.get('/add-message',MessageController.create);
router.get('/update-message',MessageController.update);
router.get('/delete-message',MessageController.delete);


// Portfoio Routes
router.get('/manage-portfolio',PortfolioController.read);
router.get('/add-portfolio',PortfolioController.create);
router.get('/update-portfolio',PortfolioController.update);
router.get('/delete-portfolio',PortfolioController.delete);

// Product Routes
router.get('/manage-product',PorductController.read);
router.get('/add-product',PorductController.create);
router.get('/update-product',PorductController.update);
router.get('/delete-product',PorductController.delete);


module.exports = router;