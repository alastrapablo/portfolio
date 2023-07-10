class Imagen {
    constructor(src, proyect, type, plan, render, program, lamina) {
        this.src = src;
        this.proyect = proyect;
        this.type = type;
        this.plan = plan;
        this.render = render;
        this.program = program;
        this.lamina = lamina;
    }
}

const imagenes = [
    //Polideportivo
    new Imagen("../images/proyects/Polideportivo/0 - Polideportivo.jpg", "Polideportivo", "model", false, false, "v-ray", 0),
    new Imagen("../images/proyects/Polideportivo/1 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 1),
    new Imagen("../images/proyects/Polideportivo/2 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 2),
    new Imagen("../images/proyects/Polideportivo/3 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 3),
    new Imagen("../images/proyects/Polideportivo/4 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 4),
    new Imagen("../images/proyects/Polideportivo/5 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 5),
    new Imagen("../images/proyects/Polideportivo/6 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 6),
    new Imagen("../images/proyects/Polideportivo/7 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 7),
    new Imagen("../images/proyects/Polideportivo/8 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 8),
    new Imagen("../images/proyects/Polideportivo/9 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 9),
    new Imagen("../images/proyects/Polideportivo/10 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 10),
    new Imagen("../images/proyects/Polideportivo/11 - Polideportivo.jpg", "Polideportivo", "render", false, "exterior", "lumion", 11),
    new Imagen("../images/proyects/Polideportivo/12 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 12),
    new Imagen("../images/proyects/Polideportivo/13 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 13),
    new Imagen("../images/proyects/Polideportivo/14 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 14),
    new Imagen("../images/proyects/Polideportivo/15 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 15),
    new Imagen("../images/proyects/Polideportivo/16 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 16),
    new Imagen("../images/proyects/Polideportivo/17 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 17),
    new Imagen("../images/proyects/Polideportivo/18 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 18),
    new Imagen("../images/proyects/Polideportivo/19 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 19),
    new Imagen("../images/proyects/Polideportivo/20 - Polideportivo.jpg", "Polideportivo", "render", false, "interior", "lumion", 20),
    new Imagen("../images/proyects/Polideportivo/21 - Polideportivo.jpg", "Polideportivo", "render", false, "corte", "lumion", 21),
    new Imagen("../images/proyects/Polideportivo/P1 - Polideportivo.jpg", "Polideportivo", "plan", true, false, "autocad", 1),
    new Imagen("../images/proyects/Polideportivo/P2 - Polideportivo.jpg", "Polideportivo", "plan", true, false, "autocad", 2),
    new Imagen("../images/proyects/Polideportivo/P3 - Polideportivo.jpg", "Polideportivo", "plan", true, false, "autocad", 3),
    new Imagen("../images/proyects/Polideportivo/P4 - Polideportivo.jpg", "Polideportivo", "plan", true, false, "autocad", 4),
    //BHC
    new Imagen("../images/proyects/Biblioteca/0 - Biblioteca.jpg", "BHC", "model", false, false, "v-ray", 0),
    new Imagen("../images/proyects/Biblioteca/1 - Biblioteca.jpg", "BHC", "render", false, "exterior", "lumion", 1),
    new Imagen("../images/proyects/Biblioteca/2 - Biblioteca.jpg", "BHC", "render", false, "interior", "lumion", 1),
    new Imagen("../images/proyects/Biblioteca/P1 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 1),
    new Imagen("../images/proyects/Biblioteca/P2 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 2),
    new Imagen("../images/proyects/Biblioteca/P3 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 3),
    new Imagen("../images/proyects/Biblioteca/P4 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 4),
    new Imagen("../images/proyects/Biblioteca/P5 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 5),
    new Imagen("../images/proyects/Biblioteca/P6 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 6),
    new Imagen("../images/proyects/Biblioteca/P7 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 7),
    new Imagen("../images/proyects/Biblioteca/P8 - Biblioteca.jpg", "BHC", "plan", true, false, "autocad", 8),
    new Imagen("../images/proyects/Biblioteca/V1 - Biblioteca.mp4", "BHC", "video", false, false, "lumion", 1),
    //Oficinas
    new Imagen("../images/proyects/Oficinas/0 - Oficinas.jpg", "Oficinas", "model", false, false, "v-ray", 0),
    new Imagen("../images/proyects/Oficinas/1 - Oficinas.jpg", "Oficinas", "render", false, "exterior", "lumion", 1),
    new Imagen("../images/proyects/Oficinas/2 - Oficinas.jpg", "Oficinas", "render", false, "exterior", "lumion", 2),
    new Imagen("../images/proyects/Oficinas/3 - Oficinas.jpg", "Oficinas", "render", false, "exterior", "lumion", 3),
    new Imagen("../images/proyects/Oficinas/4 - Oficinas.jpg", "Oficinas", "render", false, "interior", "lumion", 4),
    new Imagen("../images/proyects/Oficinas/5 - Oficinas.jpg", "Oficinas", "render", false, "exterior", "lumion", 5),
    new Imagen("../images/proyects/Oficinas/6 - Oficinas.jpg", "Oficinas", "render", false, "interior", "lumion", 6),
    new Imagen("../images/proyects/Oficinas/7 - Oficinas.jpg", "Oficinas", "render", false, "interior", "lumion", 7),
    new Imagen("../images/proyects/Oficinas/8 - Oficinas.jpg", "Oficinas", "render", false, "interior", "lumion", 8),
    new Imagen("../images/proyects/Oficinas/9 - Oficinas.jpg", "Oficinas", "render", false, "interior", "lumion", 9),
    new Imagen("../images/proyects/Oficinas/10 - Oficinas.jpg", "Oficinas", "render", false, "corte", "lumion", 10),
    new Imagen("../images/proyects/Oficinas/11 - Oficinas.jpg", "Oficinas", "render", false, "corte", "lumion", 11),
    new Imagen("../images/proyects/Oficinas/12 - Oficinas.jpg", "Oficinas", "render", false, "corte", "lumion", 12),
    new Imagen("../images/proyects/Oficinas/P1 - Oficinas.jpg", "Oficinas", "plan", true, false, "autocad", 1),
    new Imagen("../images/proyects/Oficinas/P2 - Oficinas.jpg", "Oficinas", "plan", true, false, "autocad", 2),
    new Imagen("../images/proyects/Oficinas/P3 - Oficinas.jpg", "Oficinas", "plan", true, false, "autocad", 3),
    new Imagen("../images/proyects/Oficinas/P4 - Oficinas.jpg", "Oficinas", "plan", true, false, "autocad", 4),
    new Imagen("../images/proyects/Oficinas/P5 - Oficinas.jpg", "Oficinas", "plan", true, false, "autocad", 5),
    new Imagen("../images/proyects/Oficinas/P6 - Oficinas.jpg", "Oficinas", "plan", true, false, "autocad", 6),
    //Antifunicular
    // new Imagen("../images/proyects/Estructura E3/0 - Estructura E3.jpg", "Antifunicular", "model", false, false, "v-ray", 0),
    new Imagen("../images/proyects/Estructura E3/1 - Estructura E3.jpg", "Antifunicular", "render", false, "exterior", "lumion", 1),
    new Imagen("../images/proyects/Estructura E3/2 - Estructura E3.jpg", "Antifunicular", "render", false, "exterior", "lumion", 2),
    new Imagen("../images/proyects/Estructura E3/3 - Estructura E3.jpg", "Antifunicular", "render", false, "exterior", "lumion", 3),
    //Jardín
    new Imagen("../images/proyects/Jardín/0 - Jardín.jpg", "Jardín", "model", false, false, "v-ray", 0),
    new Imagen("../images/proyects/Jardín/1 - Jardín.jpg", "Jardín", "render", false, "exterior", "lumion", 1),
    new Imagen("../images/proyects/Jardín/2 - Jardín.jpg", "Jardín", "render", false, "exterior", "lumion", 2),
    new Imagen("../images/proyects/Jardín/3 - Jardín.jpg", "Jardín", "render", false, "interior", "lumion", 3),
    new Imagen("../images/proyects/Jardín/4 - Jardín.jpg", "Jardín", "render", false, "exterior", "lumion", 4),
    new Imagen("../images/proyects/Jardín/5 - Jardín.jpg", "Jardín", "render", false, "interior", "lumion", 5),
];