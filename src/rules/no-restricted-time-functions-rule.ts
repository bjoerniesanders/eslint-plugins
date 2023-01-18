import { Rule } from 'eslint';

const ruleMessage =
  'restricted time functions should not be used. The Javascript time function only knows the local time zone. This leads to errors if a server is located in a different time zone.';

const rule: Rule.RuleModule = {
  create: context => ({
    Identifier: node => {
      if (
        node.type === 'Identifier' &&
        [
          'endOfDay',
          'startOfDay',
          'endOfWeek',
          'endOfMonth',
          'endOfYear',
          'startOf',
        ].includes(node.name)
      ) {
        context.report({
          node,
          message: ruleMessage,
        });
      }
    },
  }),
};

export { rule, ruleMessage };
