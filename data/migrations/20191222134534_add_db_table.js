exports.up = function(knex) {
    return knex.schema.createTable('categories', t =>{
// category id
        t.increments();
 // category name
        t.string('category_name', 128).notNullable();
    })

// roles table 
    .createTable('roles', t =>{
        // roles id
        t.increments();
// role name 
        t.string('role_name',255).notNullable();
    })

// users table
    .createTable('users', t =>{
        // users id 
        t.increments();
// username 
        t.string('username',128).notNullable();
// password
        t.string('password',128).notNullable();
    })





// tickets table 
    .createTable('tickets', t =>{
        //tickets id
        t.increments();
//refernces who the ticket was submitted by from the user's id
        t.integer('submitted_by')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
// a description of the ticket 
        t.string('description',255)
// refernces a category by id 
        t.integer('category')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
// is the ticket answered or not (might return a 1 or 0)
        t.boolean("completed").notNullable()
// ticket title
        t.string('title', 128).notNullable()
    })




// user to tickets table
    .createTable('user_tickets', t =>{
        // users tickets id
        t.increments();

        // references the ticket id 
        t.integer('ticket_id')
        .unsigned()
        .references('id')
        .inTable('tickets')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
// references the user id 
        t.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })





// users roles 
    .createTable('user_roles', t=>{
        // user roles id
        t.increments();
// references the role id 
        t.integer('role_id')
        .unsigned()
        .references('id')
        .inTable('roles')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

// references the users id 
        t.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
        
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("user_tickets")
    .dropTableIfExists('tickets')
    .dropTableIfExists('users')
    .dropTableIfExists('user-roles')
    .dropTableIfExists('roles')
    .dropTableIfExists('categories')
};
