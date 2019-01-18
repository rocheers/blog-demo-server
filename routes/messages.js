const express = require('express');
const router = express.Router({ mergeParams: true });

const { createMessage, getMessage, deleteMessage } = require('../handlers/messages');

router.route('/').post(createMessage);
router.route('/:messageId').get(getMessage);
router.route('/:messageId').delete(deleteMessage);

module.exports = router;
