# eslint-plugins

No Restricted Time Functions
The use of some time functions of Javascript are critical.
Time functions like endOfDay or endOfMonth only use local time zones.
If your server is in a different time zone, it is very likely to cause bugs.


How to install
npm i @bsand/eslint-plugin@latest --save-dev


Solution
https://stackoverflow.com/questions/67819591/how-to-use-startofday-from-date-fns-with-timezones/72372517#72372517


