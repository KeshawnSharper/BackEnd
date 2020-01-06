const router = require('express').Router();
const db = require("../auth/auth-model")
const auth = require("../auth/authenicate-middleware")
router.put('/:id/tickets/', auth,(req, res) => {
   const ticket = req.body.ticket_id
  db.assignTicket(ticket,req.params.id)
  .then(i => {
  res.status(201).json(i);
  })
  .catch(err => {
  res.status(500).json({ message: 'Failed to get schemes' });
  });
  });
  router.get('/', auth,(req, res) => {
    
   db.getUser(req.body.username)
   .then(i => {
   res.status(200).json(i)
   })
   .catch(err => {
   res.status(500).json({ message: 'Failed to get schemes' });
   });
   });
   router.get('/helpertickets', auth,(req, res) => {
    
    db.helperTickets(req.body.helper_id)
    .then(i => {
    res.status(200).json(i);
    })
    .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
    });
    });
    router.get('/studenttickets', auth,(req, res) => {
    
      db.studentTickets(req.body.student_id)
      .then(i => {
      res.status(200).json(i);
      })
      .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
      });
      });
   


  module.exports = router;