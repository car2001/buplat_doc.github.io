sap.ui.define([
  "constants/GeneralConstants"
],
    function (GeneralConstants) {
        "use strict";

        const DocumentationModel = {
            "documentation": {
              "categories": [
                {"name":"Bienvenido a Buplat", "key":"INDEX","route": GeneralConstants.root + ".fragments.1_3_0.Welcome"},    
                {"name":"Glosario de Términos","key":"GLOSARIO"},
                {"name": "Introducción", "key":"INTRO",
                "categories": [
                  {"name":"Conociendo BUPLAT","key":"INTRO_BPT"},
                  {"name":"Home de Aplicaciones","key":"INTRO_HOME"},
                  {"name":"Menú de Usuario","key":"INTRO_MENU", "categories": [
                    {"name": "About", "key":"INTRO_MENU_ABOUT"},
                    {"name": "User Profile", "key":"INTRO_MENU_USERPROFILE"},
                    {"name": "Preferences","key":"INTRO_MENU_PREFERENCES"},
                    {"name": "Change Password","key":"INTRO_MENU_CHANGEPASSWORD"},
                    {"name": "My Locks","key":"INTRO_MENU_MYLOCKS"},
                    {"name": "My Timesheet","key":"INTRO_MENU_MYTIMESHEET"},
                    {"name": "Disconnect","key":"INTRO_MENU_DISCONNECT"}
                  ]}
                ]},
                {"name": "Aplicaciones", "key":"APP", "categories": [
                  {"name":"Security Manager","key":"SEC", "categories": [
                    {"name": "Roles","key":"ROL","categories":[
                      {"name":"Crear un Role","key":"CREAR_ROL"},
                      {"name":"Eliminar un Role","key":"ELIMINAR_ROL"},
                      {"name":"Editar un Role","key":"EDITAR_ROL"},
                      {"name":"Role Compuesto","key":"COMPUESTO_ROL"},
                      {"name":"Asignar Permisos a un Role","key":"PERMISO_ROL"}
                    ]},
                    {"name": "User","key":"USER", "categories": [
                      {"name": "Crear un User","key":"CREAR_USER"},
                      {"name": "Eliminar un User","key":"ELIMINAR_USER"},
                      {"name": "Activar Allocation a un User","key":"ASIGNACION_USER"},
                      {"name": "Activar Always Assign to me","key":"REASIGNACION_USER"},
                      {"name": "Activar Notificaciones a un User","key":"NOTIFICAR_USER"},
                      {"name": "Asignar Grupos a un User","key":"GRUPOS_USER"},
                      {"name": "Asignar Roles a un User","key":"ROLES_USER"},
                      {"name": "Cambiar Contraseña a User","key":"CAMBIAR_USER"}
                    ]},
                    {"name": "User Group" ,"categories": [
                      {"name": "Crear un User Group","key":"GROUP_USER"},
                      {"name": "Eliminar un User Group","key":"ELIMINAR_GROUP_USER"}
                    ]}
                  ]},
                  {"name":"Organizational Structure Manager","key":"OSM", "categories": [
                    {"name": "Crear un Company","key":"COMPANY"},
                    {"name": "Crear un Organizational Unit","key":"ORGANIZATIONAL"},
                    {"name": "Crear un Position","key":"POSITION"},
                    {"name":"Crear un Location","key":"LOCATION"}
                  ]},
                  {"name":"Configuration Manager", "categories": [
                    {"name": "Reusable Component","key":"REUSABLE", "categories":[
                      {"name":"Counter","key":"CONTADOR","categories":[
                        {"name":"Crear Counter","key":"CREAR_CONTADOR"},
                        {"name":"Eliminar Counter","key":"ELIMINAR_CONTADOR"},
                      ]},
                      {"name":"INS Definition","key":"INS","categories":[
                        {"name":"Crear INS","key":"CREAR_INS"},
                        {"name":"Eliminar INS","key":"ELIMINAR_INS"},
                        {"name":"Valores No Validos de un INS","key":"VALORES_INS"},
                      ]},
                      {"name":"SLA Definition","key":"SLA","categories":[
                        {"name":"Crear SLA","key":"CREAR_SLA"},
                        {"name":" Tipos SLA","categories":[
                          {"name":"SLA Fix Value","key":"FIX_SLA"},
                          {"name":"SLA Dynamic Based on Attribute","key":"DYC_SLA"},
                          {"name":"SLA Depends on a Conditions","key":"DPS_SLA"},
                        ]},
                      ]},
                      {"name":"Form UI Configuration","categories":[
                        {"name":"Crear un Form UI","key":""},
                        {"name":"Activar sección de Comentarios","key":""},
                        {"name":"Activar sección de Adjuntos","key":""},
                      ]},
                      {"name":"Performer Profile"},
                      {"name":"Risk Profile"}
                    ]},
                    {"name": "Settings","categories":[
                      {"name":"Global Settings"},
                      {"name":"Enviroment Configuration"}
                    ]}
                  ]},
                  {"name":"Process Manager", "categories": [
                      {"name": "Hierarchies", "categories":[
                        {"name":"Crear Jerarquías"},
                        {"name":"Crear Subjerarquías"},
                        {"name":"Editar Procesos en la sección de jerarquías"}
                      ]},
                      {"name": "Process","categories":[
                        {"name":"Crear un Proceso No Automatizado"},
                        {"name":"Crear un Proceso Automatizado"},
                        {"name":"Configurar Procesos Automatizado"}
                      ]},
                      {"name": "WIZARD","categories":[
                          {"name":"Cambiar de Jerarquía un proceso"},
                          {"name":"Process Diagram"},
                          {"name":"Activity Form"},
                          {"name":"Instance Form"},
                          {"name":"Data Entities en el PM"},
                          {"name":"Business Rules"}
                        ]}
                    ]},
                    {"name":"Data Entity Manager", "categories": [
                      {"name": "Crear Entidades Globales"},
                      {"name": "Crear Entidades Local"},
                      {"name": "Crear Entidades Cross","categories":[
                          {"name":"Configurar Atributo por defecto"}
                      ]},
                      {"name": "Crear Entidades Transaccionales"},
                      {"name": "Cambiar Jerarquía a una Entidad"}
                    ]},
                    {"name":"Data Record Manager", "categories": [
                      {"name": "Agregar registros a una entidad"}
                    ]},
                    {"name":"Collaboration Workspace", "categories": [
                      {"name": "InBUBLAT"},
                      {"name": "New Instance","categories":[
                        {"name": "Crear una Instancia"},
                        {"name": "Agrupar Procesos"},
                        {"name": "Reclamar una Actividad"},
                        {"name": "Liberar una Actividad"},
                        {"name": "Ver detalle de la Actividad"},
                        {"name": "Ver Diagrama del Proceso"},
                        {"name": "View Path"},
                        {"name": "Guardar Data de la Actividad"},
                        {"name": "Enviar Actividades"}
                      ]},
                      {"name":"Inbox","key":"COLLABORATION_INBOX","categories":[
                        {"name": "Ingresar a una Actividad", "key": "INBOX_INGRESARACTIVIDAD"},
                        {"name": "Refrescar Tabla de Workitems", "key": "INBOX_REFRESCARTABLA"},
                        {"name": "Ordenar Tabla de Workitems", "key": "INBOX_ORDENARTABLA"},
                        {"name": "Agrupar Tabla de Workitems", "key": "INBOX_AGRUPARTABLA"},
                        {"name": "Filtrar por fechas", "key": "INBOX_FILTRARFECHAS"},
                        {"name": "Eliminar filtros", "key": "INBOX_ELIMINARFILTROS"},
                        {"name": "Ingresar al Timeline del proceso", "key": "INBOX_INGRESARTIMELINE"},
                        {"name": "Ingresar al Diagrama del proceso"},
                        {"name": "Ingresar al Instance Form del proceso"},
                        {"name": "Cambiar Due Date desde la propia actividad", "key": "INBOX_CAMBIARDUEDATE"},
                        {"name": "Cancelar la instancia desde la propia actividad", "key": "INBOX_CANCELARINSTANCIA"},
                        {"name": "Reasignar performer desde la propia actividad", "key": "INBOX_REASIGNARPERFORMER"}
                      ]},
                      {"name": "My Instances","categories":[
                        {"name": "All"},
                        {"name": "All Open"},
                        {"name": "All Closed"},
                        {"name": "Creator Open"},
                        {"name": "Creator Closed"},
                        {"name": "Participant Open"},
                        {"name": "Participant Closed"}
                      ]},
                      {"name": "My Workitems","categories":[
                        {"name": "All"},
                        {"name": "Open"},
                        {"name": "Closed"},
                      ]},
                      {"name": "Query Viewer","categories":[
                        {"name": "Ejecutar Querys"},
                        {"name": "Exportar Resultados en Excel"}
                      ]},
                      {"name": "Analytics","categories":[
                        {"name": "Aplicar métricas"},
                        {"name": "Tipos de métricas"},
                        {"name": "Tipos de Dimensiones"},
                        {"name": "Tipos de Filtros"},
                        {"name": "Chart Types"}
                      ]},
                      {"name": "Reporting","categories":[
                        {"name": "Buscar Reportes simples"}
                      ]},
                      {"name": "Administration","categories":[
                        {"name": "Instances","categories":[
                          {"name": "Cancelar Instancias"},
                          {"name": "Estados de las Instancias", "key": "ADMIN_ESTADOSINSTANCIA"},
                        ]},
                        {"name": "Workitems", "categories":[
                          {"name": "Reasignar Actividades"},
                          {"name": "Cambiar Due Date de Actividades"},
                          {"name": "Estados de Workitems"}
                        ]}
                      ]}
                    ]},
                    {"name":"Analytics", "categories":[
                        {"name": "Data Source", "categories":[
                          {"name": "Crear un Data Source"},
                          {"name": "Tipos de Data Source"},
                          {"name": "Parsear una Query"}
                        ]},
                        {"name": "Custom Query", "categories":[
                          {"name": "Crear un Custom Query"}
                        ]}
                      ]
                    },
                    {"name": "Integration Studio"},
                    {"name":"InBUPLAT", "categories":[
                      {"name": "Home Configuration", "categories":[
                        {"name": "Configurar un Home Configuration", "key": "IN_CONFIGURARHOME"}
                      ]},
                      {"name": "News", "categories":[
                        {"name": "Crear un New", "key": "NEW_CREARNEW"},
                        {"name": "Crear un New Outstading", "key": "NEW_CREARNEWOUT"}
                      ]},
                      {"name": "Calendars", "categories":[
                        {"name": "Crear un Calendar", "key": "CALENDARS_CREARCALENDAR"}
                      ]},
                      {"name": "Events", "categories":[
                        {"name": "Crear un Evento", "key": "EVENTS_CREAREVENTO"}
                      ]}
                    ]},
                    {"name": "Project Manager", "categories":[
                      {"name": "Category","categories":[
                        {"name": "Crear Categoría"}
                      ]},
                      {"name":"Check List Configuration", "categories": [
                        {"name": "Crear un Chack List Configuration"},
                        {"name": "Tipos de selección"},
                        {"name": "Tipos de control"},
                        {"name": "Tipos de Loyout"}
                      ]},
                      {"name": "Check List","categories":[
                        {"name": "Crear un Check List"},
                        {"name": "Tipos de Validación"}
                      ]},
                    ]},
                    {"name": "Technical Administration", "categories": [
                      {"name": "Lock Management"},
                      {"name": "Segurity Management", "categories":[
                        {"name": "Encriptar Contraseñas"}
                      ]},
                      {"name": "License Management", "categories":[
                        {"name": "Generar Licencia"},
                        {"name": "Instalar Licencia"},
                        {"name": "Ver Licencia"},
                        {"name": "Monitorear Licencia"}
                      ]}
                    ]},
                    {"name": "Release Manager", "key": "RELEASEMANAGER", "categories": [
                      {"name": "Project", "categories":[
                        {"name": "Crear Project", "key": "PROJECT_CREARPROJECT"},
                        {"name": "Estados de un Project", "key": "PROJECT_ESTADOSPROJECT"},
                        {"name": "Usable In Process"},
                        {"name": "Usable In Releases"}
                      ]},
                      {"name": "Release", "categories": [
                        {"name": "Crear Releases", "key": "RELEASE_CREARRELEASE"},
                        {"name": "Estados de un Release", "key": "RELEASE_ESTADOSRELEASE"}
                      ]},
                      {"name": "Change Container", "key": "CHANGE_CONTAINER", "categories":[
                        {"name": "Crear Change Container", "key": "CREAR_CHANGE"},
                        {"name": "Editar Change Container", "key": "EDITAR_CHANGE"},
                        {"name": "Activar Change Container", "key": "ACTIVAR_CHANGE"},
                        {"name": "Deployer Change Container", "key": "DEPLOYER_CHANGE"},
                        {"name": "Liberar un Change Container Director a un Deployment Request", "key": "LIBERAR_CHANGE"},
                        {"name": "Refresch Tabla Change Container List"},
                        {"name": "Ver Detalle de un Change Container"},
                        {"name": "Eliminar Change Container", "key": "ELIMINAR_CHANGE"}
                      ]},
                      {"name": "Deployment Package", "categories":[
                        {"name": "Crear un Deployment Package", "key": "CREAR_DPACK"},
                        {"name": "Editar un Deployment Package", "key": "EDITAR_DPACK"},
                        {"name": "Liberar un Deployment Package List", "key": "LIBERAR_DPACK"},
                        {"name": "Refresh Tabla de Deployment Package List"},
                        {"name": "Ver Detalle de un Deployment Package"},
                        {"name": "Eliminar un Deployment Package", "key": "ELIMINAR_DPACK"}
                      ]},
                      {"name": "Deployment Request", "key": "DEPLOY_REQUEST", "categories":[
                        {"name": "Crear un Deployment Request", "key": "CREAR_DREQ"},
                        {"name": "Editar un Deployment Request", "key": "EDITAR_DREQ"},
                        {"name": "Send For to Deployment Request", "key": "SEND_DREQ"},
                        {"name": "View Log de un Deployment Request"},
                        {"name": "Refresh Tabla Deployment Request"},
                        {"name": "Ver detalle de un Deployment Request"},
                        {"name": "Cancelar un Deployment Request"},
                        {"name": "Estados de un Deployment Request", "key": "ESTADOS_DREQ"}
                      ]},
                    ]}

                  ]},
                  {"name": "Versionamiento de Componentes", "key": "VERSIONCOMPO", "categories": [
                    {"name":"Crear Versiones", "key": "CREAR_VERSIONES"},
                    {"name":"Historial de Versiones", "key": "HISTORIAL_VERSIONES"},
                    {"name":"Restaurar Versiones", "key": "RESTAURAR_VERSIONES"},
                    {"name":"Ver Dependencias", "key": "VER_DEPENDENCIAS"}
                  ]},
                  {"name": "Dependencias de Componentes"},
                  {"name": "Auditing", "key": "AUDITING"},
                  {"name":"Entornos Buplat"}
                ]
              }
          };

        return  DocumentationModel;
    }
);