local utils = import 'utils.libjsonnet';

{
  uses_user_defaults: true,
  project_type: 'typescript',
  keep_dist: true,
  want_man: true,
  project_name: 'itunesnp',
  version: '0.1.1',
  security_policy_supported_versions: { '0.1.x': ':white_check_mark:' },
  description: "Print the currently playing Music.app track in 'Now Playing' format.",
  keywords: ['applescript', 'irc', 'itunes', 'jxa', 'macos', 'music', 'now-playing', 'typescript'],
  // TypeScript only
  package_json+: {
    bin: './dist/index.js',
    devDependencies+: {
      'globals': utils.latestNpmPackageVersionCaret('globals'),
      'jxa-types': utils.latestNpmPackageVersionCaret('jxa-types'),
      'ts-loader': utils.latestNpmPackageVersionCaret('ts-loader'),
      'webpack-cli': utils.latestNpmPackageVersionCaret('webpack-cli'),
      'webpack-shebang-plugin': utils.latestNpmPackageVersionCaret('webpack-shebang-plugin'),
      webpack: utils.latestNpmPackageVersionCaret('webpack'),
    },
    files+: ['dist/index.js'],
    main: 'dist/index.js',
  },
  eslint+: [{ rules: { '@typescript-eslint/no-unused-expressions': 'off' } }],
  pre_commit_config+: {
    ci+: {
      skip: std.sort(super.skip + ['fix-eslint']),
    },
  },
  github+: {
    workflows+: {
      publish_npm_any+: {
        build_command: 'yarn webpack',
      },
      release_gate_workflows: ['Upload dist'],
    },
  },
  tsconfig+: {
    compilerOptions+: {
      module: 'commonjs',
      emitDecoratorMetadata: true,
      lib: ['es2018'],
      newLine: 'LF',
      noEmitOnError: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      outDir: './dist/',
      strict: true,
      strictBindCallApply: true,
      strictFunctionTypes: false,
      strictNullChecks: true,
      strictPropertyInitialization: true,
      target: 'es2018',
      types: ['jxa-types', 'node'],
    },
    exclude: ['src/**/*.test.ts'],
    include: ['src'],
  },
}
