import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import Categoria from '#models/categoria'

export default class CategoriasController {

    async store({request, response }: HttpContext) {

        //const body = request.body()
        const body = request.body()

        const image = request.file('img', {
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg']
        })
        if (!image.isValid) {
            return response.badRequest({
                errors: image.errors
            })
        }

        await image.move(app.makePath('uploads'), {
            name: `${cuid()}.${image.extname}`,

        })

        body.img = image.fileName
        try {
            //FIM ENVIO DE IMAGEM
            const categorias = await Categoria.create(body)

            response.status(201)

            return {
                message: 'certo categorias criado com sucesso',
                data: categorias,
            }
        } catch (error) {
            return response.unauthorized(
                {
                    error: true,
                    message: 'Erro no cadastro, Verifique seus dados « Erroo »'
                }
            )
        }
    }

    async index({ }: HttpContext) {
        const categorias = await Categoria.all()

        return {
            data: categorias,
        }
    }

    async show({ request }: HttpContext) {
        const categ_id = request.param('id')
        const categorias = await Categoria.find(categ_id)
        return {
            data: categorias,
        }
    }

    async update({ request }: HttpContext) {
        const categ_id = request.param('id')
        const body = request.only(['nome', 'img'])
        const categorias = await Categoria.find(categ_id)
        await categorias?.merge(body).save()

        return categorias
    }

    async destroy({ request, response }: HttpContext) {
        const categ_id = request.param('id')
        try {
            const categorias = await Categoria.findOrFail(categ_id)
            await categorias.delete()
            return "Usuario eliminado"
        } catch (error) {
            return response.unauthorized(
                {
                    error: true,
                    message: 'Dados nao encontrado  « Erroo »'
                }
            )
        }
    }

}

