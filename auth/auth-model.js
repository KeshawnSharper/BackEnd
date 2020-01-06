const db = require('../dbConfig');

    function getUsers(){
    return db("users").select("id","username")
    }
    function register(user){
    return db("users").insert(user)
    }
    function login(user)
   { 
       return db("users").select("id","username").where(user.username)
   }
   function getUser(user){
       return db("users").select("id","username","role").where({"username":user})
   }
   function assignTicket(id,helper){
       return db("tickets").where({"id":id}).update({"helper_id":helper})
   }
   function openTickets(){
       return db("tickets").select("*")
       .then(tickets => {
        return tickets.map(ticket => {
            ticket.completed = ticket.completed ? true :false
            ticket.open = ticket.open ? true :false
            return ticket
        })
    })
   }
   function helperTickets(id){
       return db("tickets").select("*").where({"helper_id":id})
       .then(tickets => {
        return tickets.map(ticket => {
            ticket.completed = ticket.completed ? true :false
            ticket.open = ticket.open ? true :false
            return ticket
        })
    })
   }
   function studentTickets(id){
    return db("tickets").select("*").where({"student_id":id})
    .then(tickets => {
        return tickets.map(ticket => {
            ticket.completed = ticket.completed ? true :false
            ticket.open = ticket.open ? true :false
            return ticket
        })
    })
  }
  function editTicket(id,body){
      return db("tickets").where({"id":id}).update(body)
  }
  function createTicket(ticket){
    return db("tickets").insert(ticket)
  }
  function deleteTicket(ticket){
    return db("tickets").where({"id":ticket}).del()
  }

module.exports = {
    getUsers,
    getUser,
    register,
    login,
    assignTicket,
    openTickets,
    helperTickets,
    studentTickets,
    createTicket,
    editTicket,
    deleteTicket
}