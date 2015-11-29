/* 3rd party */
import Router from 'ampersand-router';
import React from 'react';
import qs from 'qs';

/* Top level assets */
import Layout from './Layout';
/* pages */
import PublicPage from './pages/public';
import ReposPage from './pages/repos';

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback',
  },

  renderPage(page, opts = {layout: true}){
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      );
    }

    React.render(page, document.body);
  },

  public() {
    this.renderPage(<PublicPage/>, {layout: false});
  },

  repos() {
    this.renderPage(<ReposPage/>);
  },

  /*client_id	string	Required. The client ID you received from GitHub when you registered.
  redirect_uri	string	The URL in your app where users will be sent after authorization. See details below about redirect urls.
  scope	string	A comma separated list of scopes. If not provided, scope defaults to an empty list of scopes for users that don’t have a valid token for the app. For users who do already have a valid token for the app, the user won’t be shown the OAuth authorization page with the list of scopes. Instead, this step of the flow will automatically complete with the same scopes that were used last time the user completed the flow.
  state	string	An unguessable random string. It is used to protect against cross-site request forgery attacks.*/
  login() {
    window.location = "https://github.com/login/oauth/authorize?" + qs.stringify({
      client_id: "f8dd69187841cdd22a26",
      redirect_uri: window.location.origin + "/auth/callback",
      scope: 'user, repo',
    });
  },

  authCallback(query) {
    query = qs.parse(query);
    console.log(query);
  },

})
