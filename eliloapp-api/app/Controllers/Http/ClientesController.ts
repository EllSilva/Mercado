import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Produto from 'App/Models/Produto'

export default class ClientesController {

    public async store({ request, response }: HttpContextContract) {

        const body = request.body() 

        const cliente = await Cliente.create(body) 

        return cliente
        // Performs insert query inside the pivot table
        // await cliente.related('produtos').attach([skill.id])

    }



    /**
       public async store({ request, response }: HttpContextContract) {
      const body = request.body()

      const produtos = await Cliente.create(body)
      response.status(201)

      return {
          message: 'Produto criado com sucesso',
          data: produtos,
      }
  }
     */



    //  async index() {
    //   const publicidade = await Cliente.query().preload('produto')
    //   return {
    //     message: 'Lista dos Produtos',
    //     data: publicidade,
    //   }
    //  }




    async index() {
        const clientes = await Cliente
            .query()
            .preload('produtos', (query) => {
                query.pivotColumns(['estado'])
            })
       return {
       message: 'Lista dos Produtos',
        data: clientes,
      }

        clientes.forEach((cliente) => {
            cliente.produtos.forEach((produto) => {
                console.log(produto.$extras.pivot_estado)
                console.log(produto.$extras.pivot_cliente_id)
                console.log(produto.$extras.pivot_produto_id)
                console.log(produto.$extras.pivot_created_at)
            })
        })
    }


    public async show({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const comentario = await Cliente.find(comentario_id)
        return comentario
    }

    public async update({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const body = request.only(['usuario'])
        const comentario = await Cliente.find(comentario_id)
        await comentario?.merge(body).save()

        return comentario
    }

    public async destroy({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const comentario = await Cliente.findOrFail(comentario_id)
        await comentario.delete()
        return "Comentario eliminado"
    }

}
