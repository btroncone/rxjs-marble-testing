module.exports = wallaby => ({
  files: [
    'src/**/*.ts',
    {pattern: 'helpers/*.ts', instrument: false}
  ],

  tests: ['specs/**/*-spec.ts'],
  compilers: {
    '**/*.ts': wallaby.compilers.typeScript({
      module: 1,  // commonjs
      target: 1,  // ES5
    })
  }, 
  env: {
    type: 'node'
  },
  testFramework: 'jasmine',
  setup: function (wallaby) {
    require('./helpers/test-helper'); 
    require('./helpers/ajax-helper');
  }
});