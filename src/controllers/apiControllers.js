const users = require("../../models").usuarios;
const messages = require("../../models").messages;
const bcrypt = require('bcrypt')


const api = {
  getusers(req, res){
    return users.findAll()
    .then(users => res.send(users))
    .catch(error => res.send(error))
  },

  postUser:(req, res) => {
    // console.log(req.body);
     return users.findOrCreate({
      where: {
        username: req.body.username,
      },
      defaults: {
				firstname: req.body.firstname,
				lastname: req.body.lastname,
        password: req.body.password,
        country: req.body.country,
				city: req.body.city
			}
    })
.then(([creado , existe]) => {
      if (!existe) {
        console.log('usuario creado con exito');
        return res.send(creado)
      } else {
        console.log('usuario ya existe');
        return res.send('Usuario ya existe')
      }
    })
    .catch(e => res.send(e))
  },

  // messages
  postMessage: async (req, res) => {

    try {
      const data = await users.findOne({
        where: {
          username: req.body.receiverId,
        }
      })

      messages.create({
        receiverId: data.id,
        text: req.body.text
      })

      res.json(data)
    } catch (error) {
      console.log(error);
    }
  }

  
}


module.exports = api
