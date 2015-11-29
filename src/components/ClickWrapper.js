import React from 'react';
import localLinks from 'local-links';

export default React.createClass({
  onClick(event) {
    console.log(event.rawEvent);
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
      <div onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }
});
