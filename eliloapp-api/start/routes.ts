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

Route.group(() => {

  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.resource('users', 'UsersController').apiOnly()
  Route.resource('cliente', 'ClientesController').apiOnly()
  Route.resource('encomenda', 'EncomendasController').apiOnly()

  Route.resource('cliente-produtos', "ClienteProdutosController").apiOnly()
  Route.resource('categorias', 'CategoriasController').apiOnly()
  Route.resource('subcategorias', "SubcategoriasController").apiOnly()
  Route.resource('produtos', "ProdutosController").apiOnly()
  //  router.get('/uploads/:file', [ImgController, 'show']).as('avatars.show')
  Route.post('/subcategorias/:subcategoriaId/produtos', "ProdutosController.store")
  Route.resource('subcategorias-produtos', "SubcatProdutosController").apiOnly()

  Route.post('/login', 'AuthController.login')

  Route.get('/uploads_categoria/:file?', ({ response, params }) => {
    return response.download(Application.makePath(`/tmp/imgcategoria/${params.file}`))
  })

  Route.get('/uploads_produto/:file?', ({ response, params }) => {
    return response.download(Application.makePath(`/tmp/imgproduto/${params.file}`))
  })

  Route.get('dashboard', async ({ auth, response }) => {
 
    try {
      await auth.use('api').authenticate()
      console.log(auth.use('api').user!)
      console.log(auth.use)
      auth.use('api').isLoggedIn // true

      response.status(201) 
      return {
        message: 'Usuario logado',
        usuario: auth.use('api').user!,
        estaLogado: auth.use('api').isLoggedIn // true
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


}).prefix('/api')