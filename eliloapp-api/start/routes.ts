/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Application from '@ioc:Adonis/Core/Application' 
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.group(() => {

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('users', 'UsersController').apiOnly()
Route.resource('categorias', 'CategoriasController').apiOnly()
Route.resource('subcategorias', "SubcategoriasController").apiOnly()
Route.resource('produtos', "ProdutosController").apiOnly()
//  router.get('/uploads/:file', [ImgController, 'show']).as('avatars.show')
Route.post('/subcategorias/:subcategoriaId/produtos', "ProdutosController.store") 
Route.resource('subcategorias-produtos', "SubcatProdutosController").apiOnly()

Route.post('login', async ({ auth, request, response }) => {
 // const body = request.body()

  const email = request.input('email')
  const password = request.input('password')

  try {
    const usuario = await User.findBy('email', email)

    const token = await auth.use('api').attempt(email, password, {
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
})
 
Route.get('/uploads_categoria/:file?', ({ response, params }) => { 
  return response.download(Application.makePath(`/tmp/imgcategoria/${params.file}`))
})
Route.get('/uploads_produto/:file?', ({ response, params }) => { 
  return response.download(Application.makePath(`/tmp/imgproduto/${params.file}`))
})



}).prefix('/api')