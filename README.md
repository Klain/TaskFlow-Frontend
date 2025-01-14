  TaskFlow Frontend

TaskFlow Frontend
=================

TaskFlow Frontend es una aplicación web desarrollada en Angular que proporciona una interfaz moderna e intuitiva para interactuar con la API de gestión de tareas [TaskFlow API](https://github.com/Klain/taskflow-api). Este proyecto muestra habilidades en desarrollo frontend utilizando Angular Material y ofrece una experiencia fluida para la gestión de tareas.

Características
---------------

*   **Autenticación:** Inicia sesión y registra nuevos usuarios utilizando JSON Web Tokens (JWT).
*   **Gestión de Tareas:** Crea, lee, actualiza y elimina tareas con soporte para paginación, búsqueda y validación de datos.
*   **Diseño Responsivo:** UI adaptada para dispositivos móviles y escritorio utilizando Angular Material.
*   **Experiencia de Usuario:** Navegación intuitiva con menú lateral y sistema de notificaciones.

Tecnologías Utilizadas
----------------------

*   **Frontend:** Angular 16
*   **UI Framework:** Angular Material
*   **Backend:** [TaskFlow API](https://github.com/Klain/taskflow-api)
*   **Despliegue:** Netlify/Vercel

Instalación
-----------

Asegúrate de tener instalados los siguientes requisitos en tu sistema:

*   [Node.js](https://nodejs.org/) (v16 o superior)
*   [Angular CLI](https://angular.io/cli)

### Pasos para Ejecutar Localmente

1.  **Clona el Repositorio:**
    
        
        git clone https://github.com/Klain/taskflow-frontend.git
        cd taskflow-frontend
              
    
2.  **Instala las Dependencias:**
    
        
        npm install
              
    
3.  **Configura el Entorno:**
    
    Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
    
        
        API_URL=https://tu-api-url.com
              
    
4.  **Inicia el Servidor de Desarrollo:**
    
        
        ng serve
              
    
    La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).
    

Despliegue
----------

1.  **Configura el Proyecto:**
    *   Sube el repositorio a GitHub.
    *   Asegúrate de que `API_URL` esté configurada correctamente en el entorno de producción.
2.  **Netlify:**
    1.  Crea un nuevo sitio en Netlify y conecta tu repositorio.
    2.  Configura las variables de entorno desde la configuración de Netlify.
3.  **Vercel:**
    1.  Crea un nuevo proyecto en Vercel y selecciona el repositorio.
    2.  Configura las variables de entorno desde la configuración de Vercel.

Uso
---

1.  **Registro/Iniciar Sesión:**
    *   Crea una cuenta o inicia sesión con tus credenciales.
    *   Obtendrás un token JWT para interactuar con la API.
2.  **Gestión de Tareas:**
    *   Accede al panel para crear, editar, buscar y eliminar tareas.

Recursos
--------

*   **API Backend:** [TaskFlow API](https://github.com/Klain/taskflow-api)
*   **Documentación de Angular:** [Angular.io](https://angular.io/)
*   **Angular Material:** [Material.angular.io](https://material.angular.io/)

Pruebas
-------

Ejecuta pruebas unitarias utilizando Karma:

    
    ng test