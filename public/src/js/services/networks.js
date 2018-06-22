'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, RunebaseCoreLib) {
			return {
				getCurrentNetwork: function () {
					return RunebaseCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});