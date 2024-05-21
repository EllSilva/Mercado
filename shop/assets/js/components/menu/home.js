import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
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
 
        mostrarMenu() {  
            this.activo = !this.activo; 
        },
      
        mostrarMenuService() {  
            this.activoService = !this.activoService;  
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
      

 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }



      },
    template: await get_template('./assets/js/components/menu/home')
}