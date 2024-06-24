import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Produto from 'App/Models/Produto'
import Sub_Categoria from 'App/Models/Subcategoria'


export default class ProdutosController {

    private validationOptions = {
        types: ['image'],
        size: '2mb',
    }

    public async store({ request, params, response }: HttpContextContract) {
        const body = request.body()
        const subcategoriaId = params.subcategoriaId
        //const subcategoriaId = body.subcategoriaId

        //ENVIO DE IMAGEM
        const img = request.file('img', this.validationOptions)
        if (img) {
            const imgName = `${"455555"}.${img!.extname}`

            await img.move(Application.tmpPath('uploads'), {
                name: imgName,
            })
            body.img = imgName
        }

        await Sub_Categoria.findOrFail(subcategoriaId)
        body.subcategoriaId = subcategoriaId

        const produtos = await Produto.create(body)
        response.status(201)

        return {
            message: 'Produto criado com sucesso',
            data: produtos,
        }
    }


    async index({ }: HttpContextContract) {
        const comentario = await Produto.all()
        return comentario
    }

    public async show({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const comentario = await Produto.find(comentario_id)
        return comentario
    }

    public async update({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const body = request.only(['nome'])
        const comentario = await Produto.find(comentario_id)
        await comentario?.merge(body).save()

        return comentario
    }

    public async destroy({ request }: HttpContextContract) {
        const comentario_id = request.param('id')
        const comentario = await Produto.findOrFail(comentario_id)
        await comentario.delete()
        return "Comentario eliminado"
    }

}
