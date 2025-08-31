// Utility functions for Clean Code Commenter

function isFunction(node) {
    return node.type === 'FunctionDeclaration';
}

function isClass(node) {
    return node.type === 'ClassDeclaration';
}

module.exports = { isFunction, isClass };