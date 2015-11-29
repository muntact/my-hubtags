import app from 'ampersand-app';
import React from 'react';
import localLinks from 'local-links';

export default React.createClass({
  displayName: 'NavHelper',

  onClick(event) {
    const pathname = localLinks.getLocalPathname(event);
    // If the click was on a link with no modifiers, use the router to change our location.
      // ^ only case pathname will not be null.
    if (pathname) {
      event.preventDefault();
      app.router.history.navigate(pathname);
    }
  },

  render() {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }
});
