sap.ui.define([
  'sap/ui/core/Fragment',
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "constants/1_3_0/FragConst130",
  "constants/1_4_0/FragConst140",
  "model/DocumentationModel",
  "model/DocumentationModel130",
  "sap/base/util/deepExtend",
  "constants/GeneralConstants"
],function(Fragment,Controller,JSONModel,FragConst130,FragConst140,DocumentationModel,DocumentationModel130,deepExtend,GeneralConstants){
   "use strict";
   
   
  return Controller.extend("sap.ui.buplat.controller.App",{

      _version: null,
      
    
      onInit: function(){

        const oGeneralData = {
          title : "",
          version : ""
        }

        this.getView().setModel(new JSONModel(oGeneralData),"generalData");

        // var oModel = deepExtend({},DocumentationModel);
        // this.getView().setModel(new JSONModel(oModel),"TreeModel");
        this.getView().setModel(new JSONModel({}),"TreeModel");


        this._oRouter = this.getOwnerComponent().getRouter();
        this._oRouter.getRoute("documentation").attachPatternMatched(this._onMatchedRoute, this);
      },
  
      _onMatchedRoute: function(oEvent){
        
        const version = oEvent.getParameter("arguments").version;
        let query = oEvent.getParameter("arguments")["?query"];
        this._formFragments = {};
        var oLabel = this.byId("textVersion");


        if(version != this._version){
          this._version = version;
          if(this._version == "1.3.0" ){
            this.getView().getModel("TreeModel").setProperty("/",DocumentationModel130);
            oLabel.setText("1.3.0")
          }else{
            this.getView().getModel("TreeModel").setProperty("/",DocumentationModel);
            oLabel.setText("1.4.0")
          }
        }

        const versionModify = this._version.replaceAll(".","_");
        var fragment = null

        if(query && query?.key && query?.key != "undefined"){
          if(this._version == "1.3.0" ){
            fragment= FragConst130.routes.find(r => r.key == query.key);
          }else{
            fragment = FragConst140.routes.find(r => r.key == query.key);
          }
        }
        var title = "Bienvenido a Buplat";

        if(fragment){
          this._showFormFragment(fragment.route);
          title = fragment.title;
        }else{
          this._showFormFragment("sap.ui.buplat.fragments."+versionModify+".Welcome");
        }
        this.getView().getModel("generalData").setProperty("/title",title)
      },

      onRowChange : function(oEvent){

        const versionModify = this._version.replaceAll(".","_");
        var oContext = oEvent.getParameter('rowContext');
        var sPath = oContext.getPath();
        var oModelRow = this.getView().getModel("TreeModel").getProperty(sPath);
        var keyFragment = oModelRow.key
        // var oTitle = this.byId("title");
        this._setValueBreadCrumbs(sPath)
      

        this.getOwnerComponent().getRouter().navTo("documentation",{
          version:this._version, 
          query:{key: keyFragment}
        },true);


      },

      // onLinkPress: function (keyFragment,title) {
        
      //   var oTitle = this.byId("title");
      //   oTitle.setText(title);
      //   this.getOwnerComponent().getRouter().navTo("documentation",{
      //     version:this._version, 
      //     query:{key: keyFragment}
      //   },true);

      // },

      onCollapseAll: function() {
        var oTreeTable = this.byId("TreeTableBasic");
        oTreeTable.collapseAll();
      },

      onExpandFirstLevel: function() {
        var oTreeTable = this.byId("TreeTableBasic");
        oTreeTable.expandToLevel(1);
      },

      onLinkPress: function (oEvent) {
        const oLink = oEvent.getSource();
        const name = oLink.data("nameNode");
        const key = oLink.data("nameKey");
        let sPath = oLink.data("path");
        this._setValueBreadCrumbs(sPath)

        this.getOwnerComponent().getRouter().navTo("documentation",{
          version:this._version, 
          query:{key: key}
        },true);

      },

      _setValueBreadCrumbs : function(sPath){
        const oModelRow = this.getView().getModel("TreeModel").getProperty(sPath);
        var oBreadCrumbs = this.byId("bread");
        oBreadCrumbs.removeAllLinks();

        while (sPath.includes("categories")) {
          let iLastIndex = sPath.lastIndexOf("/categories");
          sPath = sPath.substr(0, iLastIndex);
          
          
          if (sPath != "/documentation") {
            var oNode = this.getView().getModel("TreeModel").getProperty(sPath);
            let oLink = new sap.m.Link({
              text: oNode.name,
              press: this.onLinkPress.bind(this)                
            });
            oLink.addStyleClass("linkNoTextDecoration");
            oLink.data("nameNode",oNode.name);
            oLink.data("namekey",oNode.key);
            oLink.data("path",sPath);
            // oLink.attachPress(this.onLinkPress,bind(this));
            oBreadCrumbs.insertLink(oLink,-1);
          }
        }
        
        


        oBreadCrumbs.setCurrentLocationText(oModelRow.name);
      },

      onSelectTab : function(oEvent){
        var oBreadCrumbs = this.byId("bread");
        oBreadCrumbs.removeAllLinks();
        
        var oKey = oEvent.getParameter('item').getKey();
        this.getOwnerComponent().getRouter().navTo("documentation",{version:oKey});
      },

      onSearch: function(oEvent) {
        let query = oEvent.getParameter("newValue").trim();
        this.byId("TreeTableBasic").getBinding("rows").filter(query ? new sap.ui.model.Filter({
            path: "name",
            operator: "Contains",
            value1: query,
        }) : null);
      },

      _getFormFragment: function (sFragmentName) {
        var pFormFragment = this._formFragments[sFragmentName],
          oView = this.getView();

        if (!pFormFragment) {
          pFormFragment = Fragment.load({
            id: oView.getId(),
            name: sFragmentName
          });
          this._formFragments[sFragmentName] = pFormFragment;
        }

        return pFormFragment;
      },

      _showFormFragment : function (sFragmentName) {
        var oPage = this.byId("page");
        oPage.setContent();
        this._getFormFragment(sFragmentName).then(function(oVBox){
          oPage.setContent(oVBox);
        });
      }

   });
});