import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            subcategoria_id: "",
            categoria_id: "",
            nome: "",
            preco: "",
            descricao: "",
            quantidade: "",
            categoria: "",
            img: "",
            file: "",
            imagemVer: null,
            todos_categoria: [],
            todos_subcategoria: [],
            textImagem: "Encolha a imagem",

            codigoCat: "",
        }

    },


    computed: {
        filteredSubCategoria() {
            let sub = [];
            sub = this.todos_subcategoria.filter((item) => {
                return (
                    item.ref == this.codigoCat
                );
            })
            return sub;
        },
    },

    methods: {

        escolher(elementos) { 

            this.todos_categoria.filter(elemento => {
                if (elementos == elemento.id) { 
                    this.codigoCat = elemento.id 
                    this.categoria == elemento.nome
                }
            })
            this.lista_subcat()
        },

        updatePreview(e) {
            var file,
                files = e.target.files;
            if (files.length === 0) {
                alert("foto nao foi escolhido ");
            }
            console.log(files);
            var imgTamanho = files[0].size;
            if (imgTamanho < 2035028) {
                file = new FileReader();
                file.onload = (e) => {
                    this.imagemVer = e.target.result;
                    this.textImagem = files[0].name;
                };
            } else {
                alert("o tamanho da imagem deve ser menor que 2MBs");
            }

            file.readAsDataURL(files[0]);
        },

        async sendFile() {

            let dataForm = new FormData();
            dataForm.append("nome", this.nome);
            dataForm.append("preco", this.preco);
            dataForm.append("descricao", this.descricao);
            dataForm.append("quantidade", this.quantidade);
            dataForm.append("categoria", this.categoria);
            dataForm.append("img", this.$refs.img.files[0]);
            dataForm.append("subcategoria_id", this.subcategoria_id);

            let res = await fetch(
                `http://localhost:3333/api/subcategorias/` + this.subcategoria_id + `/produtos`,
                {
                    method: "POST",
                    body: dataForm,
                }
            );

            let data = await res.json();

            if (!data) {
                this.error = data.message;
                iziToast.error({
                    title: "Error",
                    message: this.error,
                    position: "bottomCenter",
                });
                return null;
            }

            this.msg = data.message;
            iziToast.success({
                title: "OK",
                message: this.msg,
                position: "bottomCenter",
            });
        },


        async lista_subcat() {
            let res = await api.lista_subcategorias();

            this.todos_subcategoria = res.data
        //    console.log(this.todos_subcategoria)
            return res;
        },


        async lista_categ() {
            let res = await api.lista_categorias();

            this.todos_categoria = res.data
           // console.log(this.todos_categoria)
            return res;
        },

    },

    async mounted() {
        this.lista_categ()
        this.lista_subcat()
    },
    template: await get_template('./assets/js/view/paginas/produto_cad')
}
