class Router {
    /**
     * Metodo inicial.
     *
     * @return {void}.
     */
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    /**
     * Permite inicializar el router
     *
     * @return {void}.
     */
    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
       /*
       *english: I saw your code and it is very interesting, today I tried to implement it but this line of code makes everything collapse so I suggest you comment it so that someone else does not waste hours trying to solve it.
       *spanish: vi tu codigo y esta muy interesante, hoy trate de implementarlo pero esta línea de código hace que todo colapse así que te sugiero que la comentes para que alguien más no pierda horas tratando de resolverlo.
       */
        //  =>>   this.load(URI);  <<=              this is the problem - este es el problema de todo el codigo
    }

    /**
     * Permite iniciar la carga de paginas.
     *
     * @return {void}.
     */
    load(page = "home") {
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#content");
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "Genial", path);
    }

}
