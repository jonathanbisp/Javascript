const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }){
            return await db('users').where({ id }).first()
        },

        async getUsers(){
            return await db('users')
        }
    },

    Mutation: {
        async createUser(_, { input }){
            let id
            db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password 
            }).then( data => id = data)
            const res = await db('users').where({ id: id }).catch((err)=> {console.log(err);})
            
            return 'meu cu'
             
        }
    }
}