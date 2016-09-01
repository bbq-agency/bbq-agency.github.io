import ReactGA from 'react-ga';
ReactGA.initialize('UA-78997024-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
