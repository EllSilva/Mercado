import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "home",
            nome: "",
            img: "",
            file: "",
            imagemVer: null
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
            dataForm.append("nome", this.nome);
            dataForm.append("img", this.$refs.img.files[0]);

            let res = await fetch(
                `http://localhost:3333/api/categorias`,
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


    },

    async mounted() {


    },
    template: await get_template('./assets/js/view/paginas/categoria_cad')
}
