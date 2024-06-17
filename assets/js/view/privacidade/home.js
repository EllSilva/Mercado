import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            title: "Contato",
            qdd: 3
        }
    },
    template: await get_template('./assets/js/view/privacidade/home')
}