import type { HttpContext } from '@adonisjs/core/http' 
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import Sub_Categoria from '#models/subcategoria'



export default class SubsubcategoriasController {

    async store({ params, request, response }: HttpContext) {

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
            const subcategorias = await Sub_Categoria.create(body)

            response.status(201)

            return {
                message: 'certo subcategorias criado com sucesso',
                data: subcategorias,
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
        const subcategorias = await Sub_Categoria.all()

        return {
            data: subcategorias,
        }
    }

    async show({ request }: HttpContext) {
        const categ_id = request.param('id')
        const subcategorias = await Sub_Categoria.find(categ_id)
        return {
            data: subcategorias,
        }
    }

    async update({ request }: HttpContext) {
        const categ_id = request.param('id')
        const body = request.only(['ref', 'nome', 'img'])
        const subcategorias = await Sub_Categoria.find(categ_id)
        await subcategorias?.merge(body).save()

        return subcategorias
    }

    async destroy({ request, response }: HttpContext) {
        const categ_id = request.param('id')
        try {
            const subcategorias = await Sub_Categoria.findOrFail(categ_id)
            await subcategorias.delete()
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

