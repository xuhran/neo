module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      tsx: true,
      jsx: true,
      legacyDecorators: true, // 支持装饰器
    },
  },
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-this-alias': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [2, 'never'], // function 的圆括号之前是否使用空格
    '@typescript-eslint/no-var-requires': 0,
    'array-bracket-spacing': 2,
    'no-var': 2,
    'no-eval': 2,
    'no-empty': 0,
    'no-unused-vars': 0,
    'arrow-spacing': 2,
    'block-spacing': 2,
    'key-spacing': 2,
    'brace-style': 2,
    'space-before-function-paren': 0,
    camelcase: 2,
    'comma-dangle': [2, 'always-multiline'],
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'object-curly-spacing': [2, 'always'],
    'nonblock-statement-body-position': 2, // if 语句后必须跟大括号
    'react/jsx-filename-extension': 'off',

    // 设置typescript-eslint规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none', // 'none' or 'semi' or 'comma'
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi', // 'semi' or 'comma'
          requireLast: false,
        },
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all', // 解构赋值时, 任意值不为const不报错
        ignoreReadBeforeAssign: false,
      },
    ],
    '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'], // 先忽略，但是尽量少用 any
    '@typescript-eslint/no-inferrable-types': ['off'], // 类型推断
    '@typescript-eslint/no-non-null-assertion': ['off'], // 不检测非空断言符 this.props.store!.num
    'react/no-array-index-key': 2,

    'react/display-name': 0, // React 组件中必须使用 displayName
    'react/jsx-key': 2, // key 不能使用 数组索引 index
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2, // 禁止重复的 props
    'react/jsx-no-target-blank': 2, // 禁止 target="_blank" 属性没有 rel="noopener noreferrer"
    'react/jsx-no-undef': 2, // 不允许未声明的变量
    'react/jsx-uses-react': 2, // 防止 React 被标记为未使用
    'react/jsx-uses-vars': 2, // 防止声明的变量未被使用
    'react/no-children-prop': 2, // 防止 子元素作为 props 通过
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2, // 防止使用被弃用的方法
    'react/no-direct-mutation-state': 2, // 防止状态直接突变
    'react/no-find-dom-node': 2, // 防止使用 findDomNode
    'react/no-is-mounted': 2, // 防止使用 isMounted
    'react/no-render-return-value': 2, // 禁止使用 response.render 的返回值
    'react/no-string-refs': 2, // 防止引用的字符串定义，并防止引用this.refs
    'react/no-unescaped-entities': 2, // 检测未转义的HTML实体，它们可能表示格式不正确的标记
    'react/no-unsafe': 0, // 防止使用不安全的生命周期方法 -- 关闭规则
    'react/prop-types': 0, // 防止 React 组件定义中缺少 propTypes
    'react/react-in-jsx-scope': 2, // 防止在使用 JSX 时丢失 React
    'react/require-render-return': 2, // 执行 ES5 或 ES6 类来返回 render 函数中的值
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
