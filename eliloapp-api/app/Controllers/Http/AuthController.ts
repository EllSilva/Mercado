import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

    public async login({ auth, request, response }: HttpContextContract) {

        const email = request.input('email')
        const password = request.input('password')

        try {
            const usuario = await User.findBy('email', email)

            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '30 mins' ,
                name: usuario?.serialize().email,
            })
            response.status(201)
            return {
                message: 'Usuario logado',
                token,
                usuario: usuario?.serialize(),
            }
        } catch (error) {
            return response.unauthorized(
                {
                    error: true,
                    message: 'Autenticação não pode ser efetuada, Verifique seus dados'
                }
            )
        }

    }

}
