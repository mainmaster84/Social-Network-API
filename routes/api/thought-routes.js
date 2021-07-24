const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/users
router
  .route('/')
  .get(getAllThought)
  .post(addThought);

// /api/users/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/reactions/:id
router
  .route('/:id/reactions/:reactionId')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;