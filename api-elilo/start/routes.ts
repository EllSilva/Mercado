/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'

const UsersController = () => import('#controllers/users_controller')
const CategoriasController = () => import('#controllers/categorias_controller')
const SubcategoriasController = () => import('#controllers/subcategorias_controller')
const ProdutosController = () => import('#controllers/produtos_controller')
const ProdutosXController = () => import('#controllers/produtos_controller')
const SubcatProdutoController = () => import('#controllers/subcat_produtos_controller')
const ImgController = () => import('#controllers/imgs_controller')



router.group(() => {


  router.get('/uploads/:file', [ImgController, 'show']).as('avatars.show')

  router.resource('users', UsersController).apiOnly()
  router.resource('categorias', CategoriasController).apiOnly()
  router.resource('subcategorias', SubcategoriasController).apiOnly()
  router.resource('produtos', ProdutosController).apiOnly()
  router.resource('subcategorias-produtos', SubcatProdutoController).apiOnly()
  router.post('/subcategorias/:subcategoriaId/produtos', [ProdutosXController, 'store'])

  //router.get('users', [UsersController, 'index']) 
 

  router.get('/uploads/:url_img?', ({ params }) => {
    if (params.url_img) {
      return `get all posts for specific url_img: ${params.url_img}`
    }
    return `get all url_imgs`
  })

}).prefix('/api')
