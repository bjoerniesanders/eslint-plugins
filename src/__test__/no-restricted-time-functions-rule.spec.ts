import { RuleTester } from 'eslint';

import { rule, ruleMessage } from '../rules/no-restricted-time-functions-rule';

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-restricted-time-functions', rule, {
  valid: [
    {
      code: 'time.date',
    },
  ],
  invalid: [
    {
      code: 'time.endOfDay',

      errors: [
        {
          message: ruleMessage,
        },
      ],
    },
    {
      code: 'time.endOfMonth()',

      errors: [
        {
          message: ruleMessage,
        },
      ],
    },
  ],
});
