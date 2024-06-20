import get_template from '../../components/get_template.js'
import api from "../../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            title: "home",
            nome: "",
            img: "",
            file: "",
            ref: "",
            imagemVer: null,
            todos_categoria: [],
 
        }

    },

    methods: {

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
                    //this.nome = files[0].name;
                };
            } else {
                alert("o tamanho da imagem deve ser menor que 2MBs");
            }

            file.readAsDataURL(files[0]);
        },

        async sendFile() {

            let dataForm = new FormData();
            dataForm.append("ref", this.ref);
            dataForm.append("nome", this.nome);
            dataForm.append("img", this.$refs.img.files[0]);

            let res = await fetch(
                `http://localhost:3333/api/subcategorias`,
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
 
        escolher(elementos) {
            let nomesCertos = []

            this.todos_categoria.filter(elemento => {
                if (elementos == elemento.id) {
                    nomesCertos.push(elemento.nome);
                    this.estado = elemento.nome
                }
            })

        },
 
        async lista_cat() {
            let res = await api.lista_categorias();

            this.todos_categoria = res.data
            console.log(this.todos_categoria)
            return res;
        },
 

    },

    async mounted() {
        this.lista_cat()
    },
    template: await get_template('./assets/js/view/paginas/subcategoria_cad')
}
