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
 
        async sendFile() {
            this.error = null;
            // localStorage.removeItem('token')
            let res = await api.cadastra_subcategoria(this.ref, this.nome);

            if (res.error) {
                this.error = res.message;
                iziToast.error({
                    title: "Error",
                    message: this.error,
                    position: "bottomCenter",
                });
                return null;
            }

            this.msg = res.message;
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
