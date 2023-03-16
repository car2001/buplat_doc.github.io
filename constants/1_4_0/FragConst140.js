sap.ui.define([
  'constants/GeneralConstants'
],
  function (GeneralConstants) {
      "use strict";
      const FragmentConstants = {
          routes: [
          {
            key: "INDEX",
            title : "Bienvenido a Buplat",
            route: GeneralConstants.root + ".fragments.1_4_0.Welcome",
            default : true
          },
          {
            key: "GLOSARIO",
            title : "Glosario de Términos",
            route: GeneralConstants.root + ".fragments.1_4_0.Glosario",
            default : true
          },
          {
            key: "INTRO",
            title : "Introducción",
            route: GeneralConstants.root + ".fragments.1_4_0.Introduction"
          },
          {
            key: "INTRO_BPT",
            title : "Conociendo BUPLAT", 
            route: GeneralConstants.root + ".fragments.1_4_0.ConociendoBPT"
          },
          {
            key: "INTRO_HOME",
            title : "Home de Aplicaciones",
            route: GeneralConstants.root + ".fragments.1_4_0.Home"
          },
          {
            key : "APP",
            title : "Aplicaciones",
            route: GeneralConstants.root + ".fragments.1_4_0.App"
          },
          {
            key:"INTRO_MENU",
            title: "Menú de Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.MenuUsuario"
          },
          {
          key:"INTRO_MENU_ABOUT",
          title: "About",
          route: GeneralConstants.root + ".fragments.1_4_0.About"
          },
          {
            key:"INTRO_MENU_USERPROFILE",
            title: "User Profile",
            route: GeneralConstants.root + ".fragments.1_4_0.UserProfile"
          },
          {
            key:"INTRO_MENU_PREFERENCES",
            title: "Preferences",
            route: GeneralConstants.root + ".fragments.1_4_0.Preferences"
          },
          {
            key:"INTRO_MENU_CHANGEPASSWORD",
            title: "Change Password",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangePassword"
          },
          {
            key:"INTRO_MENU_MYLOCKS",
            title: "My Locks",
            route: GeneralConstants.root + ".fragments.1_4_0.MyLocks"
          },
          {
            key:"INTRO_MENU_MYTIMESHEET",
            title: "My Timesheet",
            route: GeneralConstants.root + ".fragments.1_4_0.MyTimesheet"
          },
          {
            key:"INTRO_MENU_DISCONNECT",
            title: "Disconnect",
            route: GeneralConstants.root + ".fragments.1_4_0.Disconnect"
          },

          {
            key : "SEC",
            title : "Security Manager",
            route: GeneralConstants.root + ".fragments.1_4_0.Security"       
          },
          {
            key : "ROL",
            title : "Roles",
            route: GeneralConstants.root + ".fragments.1_4_0.Roles"       
          },
          {
            key : "CREAR_ROL",
            title : "Crear Roles",
            route: GeneralConstants.root + ".fragments.1_4_0.Croles"       
          },
          {
            key : "ELIMINAR_ROL",
            title : "Eliminar Roles",
            route: GeneralConstants.root + ".fragments.1_4_0.Eroles"       
          },
          {
            key : "EDITAR_ROL",
            title : "Editar Roles",
            route: GeneralConstants.root + ".fragments.1_4_0.Edroles"       
          },
          {
            key : "COMPUESTO_ROL",
            title : "Roles Compuesto",
            route: GeneralConstants.root + ".fragments.1_4_0.Coroles"       
          },
          {
            key : "PERMISO_ROL",
            title : "Asignar Permisos a un Role",
            route: GeneralConstants.root + ".fragments.1_4_0.Proles"       
          },
          {
            key : "USER",
            title : "Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.User"       
          },
          {
            key : "CREAR_USER",
            title : "Crear Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.Cuser"       
          },
          {
            key : "ELIMINAR_USER",
            title : "Eliminar Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.Euser"       
          },
          {
            key : "ASIGNACION_USER",
            title : "Asignacion Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.Alluser"       
          },
          {
            key : "REASIGNACION_USER",
            title : "Reasignacion Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.ALWuser"       
          },
          {
            key : "NOTIFICAR_USER",
            title : "Notificar Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.NOTuser"       
          },
          {
            key : "GRUPOS_USER",
            title : "Asignar Grupos Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.GRUuser"       
          },
          {
            key : "ROLES_USER",
            title : "Asignar Roles Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.ROLuser"       
          },
          {
            key : "CAMBIAR_USER",
            title : "Cambiar Contraseña  Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.CAMuser"       
          },
          {
            key : "GROUP_USER",
            title : "Grupo de Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearGroup"       
          },
          {
            key : "ELIMINAR_GROUP_USER",
            title : "Eliminar Grupo de Usuario",
            route: GeneralConstants.root + ".fragments.1_4_0.EliminarGroup"       
          },
          {
            key : "OSM",
            title : "Administracion Estructural",
            route: GeneralConstants.root + ".fragments.1_4_0.OSM"       
          },
          {
            key : "COMPANY",
            title : "Crear Company",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearCompany"       
          },
          {
            key : "ORGANIZATIONAL",
            title : "Crear Organizational Unit",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearOrganizational"       
          },
          {
            key : "POSITION",
            title : "Crear Position",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearPosition"       
          },
          {
            key : "LOCATION",
            title : "Crear Location",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearLocation"       
          },
          {
            key : "REUSABLE",
            title : "Componente Reusable",
            route: GeneralConstants.root + ".fragments.1_4_0.Reusable"       
          },
          {
            key : "CONTADOR",
            title : "Contador",
            route: GeneralConstants.root + ".fragments.1_4_0.Contador"       
          },
          {
            key : "CREAR_CONTADOR",
            title : "Crear Contador",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearCounter"       
          },
          {
            key : "ELIMINAR_CONTADOR",
            title : "Eliminar Contador",
            route: GeneralConstants.root + ".fragments.1_4_0.EliminarCounter"       
          },
          {
            key : "INS",
            title : "Deficion INS",
            route: GeneralConstants.root + ".fragments.1_4_0.INS"       
          },
          {
            key : "CREAR_INS",
            title : "Crear INS",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearIns"       
          },
          {
            key : "ELIMINAR_INS",
            title : "Eliminar INS",
            route: GeneralConstants.root + ".fragments.1_4_0.EliminarIns"       
          },
          {
            key : "VALORES_INS",
            title : "Valores No Permitidos INS",
            route: GeneralConstants.root + ".fragments.1_4_0.ValoresIns"       
          },
          {
            key : "SLA",
            title : "Definicion SLA",
            route: GeneralConstants.root + ".fragments.1_4_0.SLA"       
          },
          {
            key : "CREAR_SLA",
            title : "Crear SLA",
            route: GeneralConstants.root + ".fragments.1_4_0.CrearSla"       
          },
          {
            key : "FIX_SLA",
            title : "SLA Fix Value",
            route: GeneralConstants.root + ".fragments.1_4_0.FixSla"       
          },
          {
            key : "DYC_SLA",
            title : "SLA Dynamic Based on Attribute",
            route: GeneralConstants.root + ".fragments.1_4_0.DynamicSla"       
          },
          {
            key : "DPS_SLA",
            title : "SLA Depends on a Conditions",
            route: GeneralConstants.root + ".fragments.1_4_0.DependsSla"       
          },
          {
            key: "COLLABORATION_INBOX",
            title: "Inbox",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.Inbox"  
          },
          {
            key: "INBOX_INGRESARACTIVIDAD",
            title: "Ingresar a una Actividad",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.IngresarActividad"  
          },
          {
            key: "INBOX_REFRESCARTABLA",
            title: "Refrescar Tabla de Workitems",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.RefrescarTabla"  
          },
          {
            key: "INBOX_ORDENARTABLA",
            title: "Ordenar Tabla de Workitems",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.OrdenarTabla"  
          },
          {
            key: "INBOX_AGRUPARTABLA",
            title: "Agrupar Tabla de Workitems",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.AgruparTabla"  
          },
          {
            key: "INBOX_FILTRARFECHAS",
            title: "Filtrar por fechas",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.FiltrarFechas"  
          },
          {
            key: "INBOX_ELIMINARFILTROS",
            title: "Eliminar filtros",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.EliminarFiltros"  
          },
          {
            key: "INBOX_INGRESARTIMELINE",
            title: "Ingresar al Timeline del proceso",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.IngresarTimeline"  
          },
          {
            key: "INBOX_CAMBIARDUEDATE",
            title: "Cambiar Due Date desde la propia actividad",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.CambiarDueDate"  
          },
          {
            key: "INBOX_CANCELARINSTANCIA",
            title: "Cancelar la instancia desde la propia actividad",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.CancelarInstancia"  
          },
          {
            key: "INBOX_REASIGNARPERFORMER",
            title: "Reasignar performer desde la propia actividad",
            route: GeneralConstants.root + ".fragments.1_4_0.Inbox.ReasignarPerformer"  
          },
          {
            key: "ADMIN_ESTADOSINSTANCIA",
            title: "Estados de las Instancias",
            route: GeneralConstants.root + ".fragments.1_4_0.Administration.EstadosInstancia"  
          },
          {
            key: "IN_CONFIGURARHOME",
            title: "Configurar un Home Configuration",
            route: GeneralConstants.root + ".fragments.1_4_0.HomeConfiguration.ConfigurarHome"  
          },
          {
            key: "NEW_CREARNEW",
            title: "Crear un New",
            route: GeneralConstants.root + ".fragments.1_4_0.News.CrearNew"  
          },
          {
            key: "NEW_CREARNEWOUT",
            title: "Crear un New Outstading",
            route: GeneralConstants.root + ".fragments.1_4_0.News.CrearNewOutstading"  
          },
          {
            key: "CALENDARS_CREARCALENDAR",
            title: "Crear un Calendar",
            route: GeneralConstants.root + ".fragments.1_4_0.Calendars.CrearCalendar"  
          },
          {
            key: "EVENTS_CREAREVENTO",
            title: "Crear un Evento",
            route: GeneralConstants.root + ".fragments.1_4_0.Events.CrearEvento"  
          },
          {
            key: "RELEASEMANAGER",
            title: "Release Manager",
            route: GeneralConstants.root + ".fragments.1_4_0.ReleaseManager"  
          },
          {
            key: "PROJECT_CREARPROJECT",
            title: "Crear Project",
            route: GeneralConstants.root + ".fragments.1_4_0.Project.CrearProject"  
          },
          {
            key: "PROJECT_ESTADOSPROJECT",
            title: "Estados de un Project",
            route: GeneralConstants.root + ".fragments.1_4_0.Project.EstadosProject"  
          },
          {
            key: "RELEASE_CREARRELEASE",
            title: "Crear Releases",
            route: GeneralConstants.root + ".fragments.1_4_0.Release.CrearRelease"  
          },
          {
            key: "RELEASE_ESTADOSRELEASE",
            title: "Estados de un Release",
            route: GeneralConstants.root + ".fragments.1_4_0.Release.EstadoRelease"  
          },
          {
            key: "CHANGE_CONTAINER",
            title: "Change Container",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangeContainer.ChangeContainer"  
          },
          {
            key: "CREAR_CHANGE",
            title: "Crear Change Container",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangeContainer.CrearChange"  
          },
          {
            key: "EDITAR_CHANGE",
            title: "Editar Change Container",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangeContainer.EditarChange"  
          },
          {
            key: "ACTIVAR_CHANGE",
            title: "Activar Change Container",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangeContainer.ActivarChange"  
          },
          {
            key: "DEPLOYER_CHANGE",
            title: "Deployer Change Container",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangeContainer.DeployerChange"  
          },
          {
            key: "LIBERAR_CHANGE",
            title: "Liberar un Change Container Director a un Deployment Request",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangeContainer.LiberarChange"  
          },
          {
            key: "ELIMINAR_CHANGE",
            title: "Eliminar Change Container",
            route: GeneralConstants.root + ".fragments.1_4_0.ChangeContainer.EliminarChange"  
          },
          {
            key: "CREAR_DPACK",
            title: "Crear un Deployment Package",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentPackage.CrearDPack"  
          },
          {
            key: "EDITAR_DPACK",
            title: "Editar un Deployment Package",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentPackage.EditarDPack"  
          },
          {
            key: "LIBERAR_DPACK",
            title: "Liberar un Deployment Package List",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentPackage.LiberarDPack"  
          },
          {
            key: "ELIMINAR_DPACK",
            title: "Eliminar un Deployment Package",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentPackage.EliminarDPack"  
          },
          {
            key: "DEPLOY_REQUEST",
            title: "Deployment Request",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentRequest.DeploymentRequest"  
          },
          {
            key: "CREAR_DREQ",
            title: "Crear un Deployment Request",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentRequest.CrearDReq"  
          },
          {
            key: "EDITAR_DREQ",
            title: "Editar un Deployment Request",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentRequest.EditarDReq"  
          },
          {
            key: "SEND_DREQ",
            title: "Send For to Deployment Request",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentRequest.SendDReq"  
          },
          {
            key: "ESTADOS_DREQ",
            title: "Estados de un Deployment Request",
            route: GeneralConstants.root + ".fragments.1_4_0.DeploymentRequest.EstadosDReq"  
          },
          {
            key: "VERSIONCOMPO",
            title: "Versionamiento de Componentes",
            route: GeneralConstants.root + ".fragments.1_4_0.Versionamiento.VersionComponentes"  
          },
          {
            key: "CREAR_VERSIONES",
            title: "Crear Versiones",
            route: GeneralConstants.root + ".fragments.1_4_0.Versionamiento.CrearVersiones"  
          },
          {
            key: "HISTORIAL_VERSIONES",
            title: "Historial de Versiones",
            route: GeneralConstants.root + ".fragments.1_4_0.Versionamiento.HistorialVersiones"  
          },
          {
            key: "RESTAURAR_VERSIONES",
            title: "Restaurar Versiones",
            route: GeneralConstants.root + ".fragments.1_4_0.Versionamiento.RestaurarVersiones"  
          },
          {
            key: "VER_DEPENDENCIAS",
            title: "Ver Dependencias",
            route: GeneralConstants.root + ".fragments.1_4_0.Versionamiento.VerDependencias"  
          },
          {
            key: "AUDITING",
            title: "Auditing",
            route: GeneralConstants.root + ".fragments.1_4_0.Auditing"  
          }
        ]
      }
      return FragmentConstants;
  }
);