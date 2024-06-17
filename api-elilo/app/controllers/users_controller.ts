 import type { HttpContext } from '@adonisjs/core/http'
 import User from '#models/user'
 
export default class UsersController {

    public async store({ request, response }: HttpContext) {
        const body = request.only(['full_name', 'email', 'password'])
     
        try {
          const users = await User.create(body)
    
        response.status(201)
    
        return {
          message: 'Usuario criado com sucesso',
          data: users,
        }  
        } catch(error) {
          return response.unauthorized(
            {
              error: true,
              message: 'Erro no cadastro, Verifique seus dados « Este email ja existe »'
            }
          )
        }
      }


    async index(ctx: HttpContext) {
        return [
          {
            id: 1,
            username: 'virk',
          },
          {
            id: 2,
            username: 'romain',
          },
        ]
      }

}