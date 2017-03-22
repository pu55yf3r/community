// Copyright 2016 Documize Inc. <legal@documize.com>. All rights reserved.
//
// This software (Documize Community Edition) is licensed under
// GNU AGPL v3 http://www.gnu.org/licenses/agpl-3.0.en.html
//
// You can operate outside the AGPL restrictions by purchasing
// Documize Enterprise Edition and obtaining a commercial license
// by contacting <sales@documize.com>.
//
// https://documize.com

import Ember from 'ember';
import constants from '../utils/constants';

export default Ember.Mixin.create({
	appMeta: Ember.inject.service(),
	isAuthProviderDocumize: true,
	IsAuthProviderKeycloak: false,

	init() {
		this._super(...arguments);
		this.set('isAuthProviderDocumize', this.get('appMeta.authProvider') === constants.AuthProvider.Documize);
		this.set('isAuthProviderKeycloak', this.get('appMeta.authProvider') === constants.AuthProvider.Keycloak);
	}
});