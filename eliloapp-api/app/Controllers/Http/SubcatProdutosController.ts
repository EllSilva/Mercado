 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext' 
 import Sub_Categoria from 'App/Models/Subcategoria' 

export default class SubcatProdutosController {
 
    //mostrar todos AS  publicacao 
    async index() {
        const publicidade = await Sub_Categoria.query().preload('produtos')
        return {
            message: 'Lista dos Produtos',
            data: publicidade,
        }
    }

    //mostrar varias categoria e os seus produtos 
    async show({ params }: HttpContextContract) {
        const publicidade = await Sub_Categoria.findOrFail(params.id)

        await publicidade.load('produtos')

        return {
            message: 'Lista dos Produtos pelo id',
            data: publicidade,
        }
    }

    //mostrar apenas uma publicacao e os seus produtos  
       //  async show({ params }: HttpContextContract) {
       //      const publicidade = await Sub_Categoria.findOrFail(params.id)
     //            await publicidade.load('produtos')
      //           return {
      //           message: 'Lista da publicidade pelo id',
      //           data: publicidade,
       //      }
      //   }

}
