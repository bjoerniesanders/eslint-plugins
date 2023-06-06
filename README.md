# ESLint Plugin: No Restricted Time Functions

This ESLint plugin aids in avoiding potential timezone-related issues in JavaScript applications. A number of JavaScript's built-in time functions such as `endOfDay` or `endOfMonth` operate on the local timezone. If your application server is in a different timezone than your users, this could potentially lead to bugs. 

This plugin provides ESLint rules to highlight the usage of such functions and encourages developers to consider the implications of timezones in their applications.

<p align="center">
    <img src="YOUR_IMAGE_LINK" width="600" max-width="90%" alt="No Restricted Time Functions" />
</p>

## :wrench: Installation

Install this plugin via npm:

```bash
npm i @bsand/eslint-plugin-time-functions@latest --save-dev
```

## :gear: Usage

After installation, you can configure this plugin in your ESLint configuration file (.eslintrc).

## :mag_right: Rules

- `no-restricted-time-functions`: This rule prevents the use of certain JavaScript time functions that could lead to timezone-related bugs.

## :books: Solution 

For handling timezone-sensitive functions, consider utilizing timezone-aware methods or libraries. For example, [here's a solution](https://stackoverflow.com/questions/67819591/how-to-use-startofday-from-date-fns-with-timezones/72372517#72372517) provided on Stack Overflow.

## :handshake: Contributing

We value and appreciate contributions from the community. If you have suggestions for improvements or notice any bugs, please feel free to create a pull request or open an issue in our repository.

## :balance_scale: License 

This project is licensed under the MIT license.

## :bust_in_silhouette: About 

This project is maintained by [@bsand](https://github.com/bsand), a JavaScript enthusiast who is passionate about building better and safer JavaScript applications.
