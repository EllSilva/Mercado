import type { HttpContext } from '@adonisjs/core/http'
import SubCategoria from '#models/subcategoria'

export default class SubcatProdutosController {

    //mostrar todos AS  publicacao 
    async index() {
        const publicidade = await SubCategoria.query().preload('produtos')
        return {
            message: 'Lista da publicidade',
            data: publicidade,
        }
    }

    
    //mostrar apenas uma publicacao e os seus produtos 
    async show({ params }: HttpContext) {
        const publicidade = await SubCategoria.findOrFail(params.id)

        await publicidade.load('produtos')

        return {
            message: 'Lista da publicidade pelo id',
            data: publicidade,
        }
    }

}