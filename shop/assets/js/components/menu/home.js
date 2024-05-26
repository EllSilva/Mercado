import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {

            isActive1: false,
            isActive2: false,
            isActive3: false,

            title: "home",
            activo: false,
            activoService: false,
            activoSite: false,
            activoDesign: false,
            activoMarketig: false,
            activoOutros: false,
            activo1: true,
            activo2: false,
            activo3: false,
            activo4: false,
            activo5: false,
        }
    },

    methods: {
        mostrar() {
            this.isActive2 = !this.isActive2;
            this.isActive3 = !this.isActive3;
        },
 


        mostrarMenu() {
            this.activo = !this.activo;
        },
 
        mostrarSite() {
            this.activoSite = !this.activoSite;
        },

        mostrarDesign() {
            this.activoDesign = !this.activoDesign;
        },

        mostrarMarketig() {
            this.activoMarketig = !this.activoMarketig;
        },

        mostrarOutros() {
            this.activoOutros = !this.activoOutros;
        },

        fechaTodosMenu() {
            this.activo = !this.activo;
            this.activoService = !this.activoService;
        },

        homeMenu() {
            this.activo5 = false,
                this.activo4 = false,
                this.activo3 = false,
                this.activo2 = false,
                this.activo1 = true,
                this.activo = !this.activo;
        },

        sobreMenu() {
            this.activo5 = false,
                this.activo4 = false,
                this.activo3 = false,
                this.activo2 = true,
                this.activo1 = false
            this.activo = !this.activo;
        },

        servicoMenu() {
            this.activo5 = false,
                this.activo4 = false,
                this.activo3 = true,
                this.activo2 = false,
                this.activo1 = false,
                this.activo = !this.activo;
        },

        galeriaMenu() {
            this.activo5 = false,
                this.activo4 = true,
                this.activo3 = false,
                this.activo2 = false,
                this.activo1 = false,
                this.activo = !this.activo;
        },

        contactoMenu() {
            this.activo5 = true,
                this.activo4 = false,
                this.activo3 = false,
                this.activo2 = false,
                this.activo1 = false,
                this.activo = !this.activo;
        },



    },

    async mounted() {

 

    },
    template: await get_template('./assets/js/components/menu/home')
}