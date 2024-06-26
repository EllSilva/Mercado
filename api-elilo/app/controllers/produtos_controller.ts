import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import Produto from '#models/produto'
import SubCategoria from '#models/subcategoria'

export default class ProdutosController {

    async store({ request, params, response }: HttpContext) {
        const body = request.body()
        const subcategoriaId = body.subcategoriaId
     

        
 

        return  subcategoriaId
    }


    async index({ }: HttpContext) {
        const comentario = await Produto.all()
        return comentario
    }

    public async show({ request }: HttpContext) {
        const comentario_id = request.param('id')
        const comentario = await Produto.find(comentario_id)
        return comentario
    }

    public async update({ request }: HttpContext) {
        const comentario_id = request.param('id')
        const body = request.only(['nome'])
        const comentario = await Produto.find(comentario_id)
        await comentario?.merge(body).save()

        return comentario
    }

    public async destroy({ request }: HttpContext) {
        const comentario_id = request.param('id')
        const comentario = await Produto.findOrFail(comentario_id)
        await comentario.delete()
        return "Comentario eliminado"
    }
}