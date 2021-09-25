const { resolve, join } = require('path');

const SRC_PATH = resolve(__dirname, './src');

module.exports = {
  '~' : SRC_PATH,
  '@$' : SRC_PATH,
  '@src' : SRC_PATH,
  '@config' : join(SRC_PATH, 'config'),
  '@assets' : join(SRC_PATH, 'assets'),
  '@store' : join(SRC_PATH, 'store'),
  '@components' : join(SRC_PATH, 'components'),
  '@shaders' : join(SRC_PATH, 'shaders'),
  '@sections' : join(SRC_PATH, 'sections'),
  '@pages' : join(SRC_PATH, 'pages'),
  '@utils' : join(SRC_PATH, 'utils'),
  '@mixins' : join(SRC_PATH, 'mixins'),
  '@plugins' : join(SRC_PATH, 'plugins'),
  '@settings' : join(SRC_PATH, 'settings'),
  '@filters' : join(SRC_PATH, 'filters'),
  '@data' : join(SRC_PATH, 'data')
};
