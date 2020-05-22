import ghpages from 'gh-pages';
ghpages.publish('dist', {
  user: {
    name: 'FilipeNavas',
    email: 'filipenavas@hotmail.com'
  }
}, callback);