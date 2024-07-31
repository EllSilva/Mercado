import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

  public async store({ request, response }: HttpContextContract) {
    const body = request.body() 

    try {
      const users = await User.create(body)

      response.status(201)

      return {
        message: 'Usuario criado com sucesso',
        data: users,
      }
    } catch (error) {
      return response.unauthorized(
        {
          error: true,
          message: 'Erro no cadastro, Verifique seus dados « Este email ja existe »'
        }
      )
    }
  }


  //mostrar todos AS  Usuario e ecomenda
  async index() {

    const users = await User
  .query()
  .preload('encomendas', (postsQuery) => {
    postsQuery.preload('produtos')
  })

     
    return {
      message: 'Lista dos Encomendas',
      data: users,
    }
  }

 // async index() {
 //   const publicidade = await User.query().preload('encomendas')
 //   return {
 //     message: 'Lista dos Encomendas',
 //     data: publicidade,
 //   }
 // }

  //mostrar varias categoria e os seus Encomendas 
  async show({ params }: HttpContextContract) {
    const users = await User.findOrFail(params.id)

    await users.load('encomendas')

    return {
      message: 'Lista dos Encomendas pelo id',
      data: users,
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const user_id = request.param('id')
    const body = request.only(['usuario', 'email', 'password', 'telefone1', 'telefone2', 'provincia', 'municipio', 'bairro', 'rua' ])
    
    try {
      const user = await User.find(user_id)
      await user?.merge(body).save()
      response.status(201)

      return {
        message: 'Usuario Atualizado com sucesso',
        data: user,
      }
    } catch (error) {
      return response.unauthorized(
        {
          error: true,
          message: 'Erro no Atualizar, Verifique seus dados '
        }
      )
    }


  }
 

  public async destroy({ request }: HttpContextContract) {
    const user_id = request.param('id')
    const user = await User.findOrFail(user_id)
    await user.delete()
    return "Usuario eliminado"
  }

}
