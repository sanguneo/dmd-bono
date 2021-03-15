const slugs = require('github-slugger')();

exports.anchorName = function ({ data }) {
  return data.name ? slugs.slug(data.name.toLowerCase(), true) : null;
};
