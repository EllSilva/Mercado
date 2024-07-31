import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Encomenda from 'App/Models/Encomenda' 


export default class EncomendasController {

    public async store({ request }: HttpContextContract) {

        const { produtos, ...body } = request.only([
            'id',
            'cod_ref', 
            'telefone',
            'gorjeta',
            'tipo_pagamento',
            'total',
            'municipio',
            'bairro',
            'rua',
            'estado',
            'instrucoes', 
            'user_id', 
            'produtos',
  
        ])
        const encomenda = await Encomenda.create(body)

        if (produtos && produtos.length > 0) {

            //  const prod1 = await Produto.findOrFail(8)
            //   const prod2 = await Produto.findOrFail(9)

            await encomenda.related('produtos').attach(produtos)
            await encomenda.load('produtos')
        }

        return encomenda

    }

    public async update({ params, request }: HttpContextContract) {

        const encomendas = await Encomenda.findOrFail(params.id)

        const { produtos, ...body } = request.only([
            'codref',
            'usuario',
            'email',
            'telefone1',
            'telefone2',
            'provincia',
            'municipio',
            'bairro',
            'rua',
            'quantidade',
            'total',
            'estado',
            'produtos',
        ])

        encomendas.merge(body)
        await encomendas.save()

        if (produtos && produtos.length > 0) {

            await encomendas.related('produtos').sync(produtos)
            await encomendas.load('produtos')
        }

        return {
            message: 'Atualizado com sucesso',
            data: encomendas,
        }

    }




    //  async index() {
    //   const publicidade = await Cliente.query().preload('produto')
    //   return {
    //     message: 'Lista dos Produtos',
    //     data: publicidade,
    //   }
    //  }




    async index() {
        const encomenda = await Encomenda
            .query()
            .preload('produtos', (query) => {
                query.pivotColumns(['created_at'])
            })
        return {
            message: 'Lista das encomendas',
            data: encomenda,
        }
 
    }

    async show({ params }: HttpContextContract) {
        const encomenda = await Encomenda.findOrFail(params.id)

        await encomenda.load('produtos')

        return {
            message: 'Lista das encomendas pelo id',
            data: encomenda,
        }
    }



    public async destroy({ request, response }: HttpContextContract) {
        const encomenda_id = request.param('id')
        try {
            const encomenda = await Encomenda.findOrFail(encomenda_id)
            await encomenda.delete()
            return "encomenda eliminado"
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
