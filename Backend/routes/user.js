const express = require("express");

const {GetHtmlContent , PostDetails ,  GetLoginContent , GetHiContent , AddDetails} = require('../controllers/user');

const router = express.Router();

router.route('/order').post(GetHtmlContent);
router.route('/details').get(PostDetails);
router.route('/details').post(AddDetails);
router.route('/login').post(GetLoginContent);
router.route('/hi').get(GetHiContent);

module.exports = router