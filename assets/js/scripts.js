(function() {
    
    const body = document.body;

    //  Manejo de la Carga Inicial 

    const removePreload = () => {
        
        setTimeout(() => {
            body.classList.remove('is-preload');
            console.log("Sistema de gestión de carga inicial activado");
        }, 100); 
    };


    //  Smooth Scrolling para la navegación interna del Sidebar
    const setupSmoothScroll = () => {
        
        const links = document.querySelectorAll('#sidebar a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault(); 
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    

    //  Animación 'fade-up' al hacer scroll (Scroll-Reveal)
    const setupScrollReveal = () => {
        // Seleccionamos todos los  'fade-up'
        const elementsToReveal = document.querySelectorAll('.fade-up');
        
        if (elementsToReveal.length === 0) return;

        // Mostrar Documento
        const observerOptions = {
            root: null, 
            rootMargin: '0px 0px -15% 0px', 
            threshold: 0.15 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Si la sección entra en el viewport
                if (entry.isIntersecting) {
                    // Añadimos la clase 'visible' para disparar la animación CSS
                    entry.target.classList.add('visible');
                    // Dejamos de observarla (solo se anima una vez)
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Empezamos a observar cada elemento
        elementsToReveal.forEach(element => {
            observer.observe(element);
        });
    };

    
    //  Inicialización de los scripts
    const initQuipux = () => {
        setupSmoothScroll();
        setupScrollReveal(); 
        removePreload(); 
    };

    //DOM
    document.addEventListener('DOMContentLoaded', initQuipux);
    
}
)();