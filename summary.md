# 1. babel
stage-0包括以下插件
stage-0包括stage-1的插件，stage-1包括stage-2的插件.....
stage-0 {
    transform-do-expressions
    transform-function-bind
    // stage-1
    transform-class-constructor-call (Deprecated)
    transform-export-extensions
    // stage-2
    syntax-dynamic-import
    transform-class-properties
    transform-decorators – disabled pending proposal update (can use the legacy transform in the meantime)
    // stage-3
    transform-object-rest-spread
    transform-async-generator-functions
}
