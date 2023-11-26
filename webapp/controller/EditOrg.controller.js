sap.ui.define(
    [
      // "sap/ui/core/mvc/Controller",
      // "sap/ui/core/routing/History",
      "sap/ui/core/UIComponent",
      "sap/ui/model/json/JSONModel",
      "sap/ui/core/mvc/Controller",
      "sap/ui/core/routing/History",
      "sap/m/MessageToast"   
    ],
    // function(UIComponent, JSONModel, BaseController, History) {
      function(UIComponent, JSONModel, Controller, History, MessageToast) {
      "use strict";
        
      // var pernr;

      // return BaseController.extend("zhcmorg1.controller.EditOrg", {
        return Controller.extend("zhcmorg1.controller.EditOrg", {        
      
        /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
        * Since the Controller is given to this method, its event handlers can be attached right away. 
        * @memberOf helloworldx.HelloWorld
        */ 
        // createContent : function(oController) {
        //     var myButton = new sap.ui.commons.Button("btn");
        //     myButton.setText("helloworld");
        //     myButton.attachPress(function(){$("#btn").fadeOut();});
        //     return myButton;
        // },
        
        onInit() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.getRoute("RouteNetworkGraphEdit").attachPatternMatched(this._onObjectMatched, this);          
        },
    
        _onObjectMatched: function(oEvent) {
          var laItem = oEvent.getParameter("arguments");
          // LvValReqid = laItem.ReqId;
          // pernr = laItem.idPath;
          this.pernr = laItem.idPath;

          const sMsg = this.pernr;
          MessageToast.show(sMsg);
          
          // //Bind the Context to Detail View
          // this.getView().bindElement({
          //   path: "/" + oEvent.getParameter("arguments").idPath,
          //   model: "graph"
          // });
        },
        
        onBack: function() {
          //Navigation Back
          // var oHistory = sap.ui.core.routing.History.getInstance();
          // var sPreviousHash = oHistory.getPreviousHash();
          // window.history.go(-1);

          const oHistory = sap.ui.core.routing.History.getInstance();
    			const sPreviousHash = oHistory.getPreviousHash();

          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteNetworkGraph", {}, true);
          }
        } 
      });
    }
  );