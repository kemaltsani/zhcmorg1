/*global QUnit*/

sap.ui.define([
	"zhcmorg1/controller/NetworkGraph.controller"
], function (Controller) {
	"use strict";

	QUnit.module("NetworkGraph Controller");

	QUnit.test("I should test the NetworkGraph controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
