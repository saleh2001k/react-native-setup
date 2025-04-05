/**
 * Custom ESLint rule to detect console.log statements
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow console.log statements",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    schema: [],
    messages: {
      unexpected:
        "Unexpected console.log statement. Use a proper logging library instead.",
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        // Check if the call is to console.log
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          node.callee.object.name === "console" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            messageId: "unexpected",
          });
        }
      },
    };
  },
};
