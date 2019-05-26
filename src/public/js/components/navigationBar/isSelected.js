const Paths = require('../../conf/paths');

const isSelected = (pathname, path) => {
  const isRootPath = path === Paths.inbox && pathname === Paths.root;
  return path === pathname || isRootPath;
};

module.exports = isSelected;
