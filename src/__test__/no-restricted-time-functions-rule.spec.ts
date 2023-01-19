import { RuleTester } from 'eslint'

import { rule, ruleMessage } from '../rules/no-restricted-time-functions-rule'

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } })

ruleTester.run('no-restricted-time-functions', rule, {
  valid: [
    {
      code: 'time.getZonedEndOfDay()',
    },
    {
      code: 'time.endOfDay',
    },
    {
      code: 'startOfDay',
    },
    {
      code: 'test(startOfDay)',
    },
  ],
  invalid: [
    {
      code: 'time.endOfMonth(argument)',

      errors: [
        {
          message: ruleMessage,
        },
      ],
    },
    {
      code: 'endOfMonth(argument)',

      errors: [
        {
          message: ruleMessage,
        },
      ],
    },
    {
      code: 'add(endOfMonth(argument), date())',

      errors: [
        {
          message: ruleMessage,
        },
      ],
    },
  ],
})
