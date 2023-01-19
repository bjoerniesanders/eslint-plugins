import { Rule } from 'eslint'

const ruleMessage =
  'restricted time functions should not be used. Use a function that calculate the timezone'

const functionNames = [
  'endOfDay',
  'startOfDay',
  'endOfWeek',
  'endOfMonth',
  'endOfYear',
  'startOfWeek',
  'startOfMonth',
  'startOfYear',
]

const rule: Rule.RuleModule = {
  meta: {
    messages: {
      noRestrictedTimeFunctions: ruleMessage,
    },
    docs: {
      description:
        'Time functions like endOfDay or endOfMonth only use local time zones. If your server is in a different time zone, it is very likely to cause bugs.',
      url:
        'https://stackoverflow.com/questions/67819591/how-to-use-startofday-from-date-fns-with-timezones/72372517#72372517',
    },
  },
  create: context => ({
    CallExpression: node => {
      if (
        (node.type === 'CallExpression' &&
          node.callee.type === 'MemberExpression' &&
          node.callee.property.type === 'Identifier' &&
          functionNames.includes(node.callee.property.name)) ||
        (node.type === 'CallExpression' &&
          node.callee.type === 'Identifier' &&
          functionNames.includes(node.callee.name))
      ) {
        context.report({
          node,
          messageId: 'noRestrictedTimeFunctions',
        })
      }
    },
  }),
}

export { rule, ruleMessage }
