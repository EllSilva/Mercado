 import type { HttpContext } from '@adonisjs/core/http'
 import app from '@adonisjs/core/services/app'
 
export default class ImgsController {

    async show({response, params }: HttpContext) {

        console.log(response)
        return response.download(app.makePath(`uploads/${params.file}`))

         

    }
}