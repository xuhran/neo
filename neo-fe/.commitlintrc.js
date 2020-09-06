/* 常用的type类别:
  build: 影响构建系统或外部依赖关系的更改（示例范围：gulp、broccoli、npm）
  ci: 对ci配置文件和脚本的更改（示例范围：Circle、BrowserStack、SauceLabs）
  docs: 仅文档更改
  feat: 新功能（feature）
  fix: 修补bug
  perf: 提高性能的代码更改
  refactor: 重构（既不修复错误也不添加功能的代码更改）
  style: 样式修改，不影响代码含义的更改
  test: 增加测试
*/

/*
rule配置说明:：rule由name和配置数组组成，如：'name:[0, 'always', 72]'，数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，第二位为应用与否，可选always|never，第三位该rule的值。具体配置例子如下：
*/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'revert', 'test']],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
