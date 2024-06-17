/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const CategoriasController = () => import('#controllers/categorias_controller')
const SubcategoriasController = () => import('#controllers/subcategorias_controller')
const ProdutosController = () => import('#controllers/produtos_controller')
const SubcatProdutoController = () => import('#controllers/subcat_produtos_controller')

router.group(() => {

  router.resource('users', UsersController).apiOnly()
  router.resource('categorias', CategoriasController).apiOnly()
  router.resource('subcategorias', SubcategoriasController).apiOnly()
  router.resource('/subcategorias/:subcategoriaId/produtos', ProdutosController).apiOnly() 
  router.resource('subcategorias-produtos', SubcatProdutoController).apiOnly()
  //router.post('/subcategorias/:subcatId/produtos',[ProdutosController, 'store'])
 
  //router.get('users', [UsersController, 'index']) 
  router.get('/', async () => {
    return {
      hello: 'world',
    }
  })

}).prefix('/api')
