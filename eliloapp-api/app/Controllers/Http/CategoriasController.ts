 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import Application from '@ioc:Adonis/Core/Application' 
 import Categoria from 'App/Models/Categoria' 
 import { cuid } from '@ioc:Adonis/Core/Helpers'

 export default class CategoriasController {

    
    private validationOptions = {
        types: ['image'],
        size: '2mb',
    }
    //CADASTRO DE PUBLICACAO
    public async store({ request, response }: HttpContextContract) {
        const body = request.body()

        try {
            //ENVIO DE IMAGEM
            const img = request.file('img', this.validationOptions)
            if (img) {
                const imgName = `${cuid()}.${img!.extname}`

                await img.move(Application.tmpPath('imgcategoria'), {
                    name: imgName,
                })

                body.img = imgName
            }


            const publicidades = await Categoria.create(body)

            response.status(201)

            return {
                message: 'Nova Publicidade criada com sucesso',
                data: publicidades,
            }
        } catch (error) {
            return response.unauthorized(
                {
                    error: true,
                    message: 'Erro na criação , Verifique seus dados'
                }
            )
        }
    } 

    public async index({ }: HttpContextContract) {
        const categorias = await Categoria.all()

        return {
            data: categorias,
        }
    }

    public async show({ request }: HttpContextContract) {
        const categ_id = request.param('id')
        const categorias = await Categoria.find(categ_id)
        return {
            data: categorias,
        }
    }

    public async update({ request }: HttpContextContract) {
        const categ_id = request.param('id')
        const body = request.only(['nome', 'img'])
        const categorias = await Categoria.find(categ_id)
        await categorias?.merge(body).save()

        return categorias
    }

    public async destroy({ request, response }: HttpContextContract) {
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
