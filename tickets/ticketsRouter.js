const router = require('express').Router();
const db = require("../auth/auth-model")
const auth = require("../auth/authenicate-middleware")
  router.get('/', auth,(req, res) => {
   db.openTickets()
   .then(i => {
   res.status(200).json(i);
   })
   .catch(err => {
   res.status(500).json({ message: 'Failed to get schemes' });
   });
   });
   router.post('/', auth,(req, res) => {
       req.body.helper_id = null
       req.body.completed = false
       req.body.open = true
       req.body.answer = null

    db.createTicket(req.body)
    .then(i => {
    res.status(201).json(i);
    })
    .catch(err => {
    res.status(500).json({ message: err });
    });
    });
    router.put('/', auth,(req, res) => {
        db.editTicket(req.body.id,req.body)
        .then(i => {
        res.status(200).json(i);
        })
        .catch(err => {
        res.status(500).json({ message: 'Failed to get schemes' });
        });
        });
        router.delete('/', auth,(req, res) => {
            db.deleteTicket(req.body.id)
            .then(i => {
            res.status(200).json(i);
            })
            .catch(err => {
            res.status(500).json({ message: 'Failed to get schemes' });
            });
            });
  module.exports = router;