import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application' 
import Sub_Categoria from 'App/Models/Subcategoria' 
//import { cuid } from '@adonisjs/core/helpers'

export default class SubcategoriasController {

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
                const imgName = `${"3333"}.${img!.extname}`

                await img.move(Application.tmpPath('uploads'), {
                    name: imgName,
                })
                body.img = imgName
            } 

            const subcategoria = await Sub_Categoria.create(body)

            response.status(201)

            return {
                message: 'Nova subcategoria criada com sucesso',
                data: subcategoria,
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
        const subcategoria = await Sub_Categoria.all()

        return {
            data: subcategoria,
        }
    }

    public async show({ request }: HttpContextContract) {
        const categ_id = request.param('id')
        const subcategoria = await Sub_Categoria.find(categ_id)
        return {
            data: subcategoria,
        }
    }

    public async update({ request }: HttpContextContract) {
        const categ_id = request.param('id')
        const body = request.only(['nome', 'img'])
        const subcategoria = await Sub_Categoria.find(categ_id)
        await subcategoria?.merge(body).save()

        return subcategoria
    }

    public async destroy({ request, response }: HttpContextContract) {
        const categ_id = request.param('id')
        try {
            const subcategoria = await Sub_Categoria.findOrFail(categ_id)
            await subcategoria.delete()
            return "subcategoria eliminado"
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
