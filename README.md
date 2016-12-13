To run the app:
* First start up the backend.
  * `sudo mvn spring-boot:run -Drun.jvmArguments='-Dserver.port=8080'`
* Then start the Angular app.
  * `npm start`


To test the app:
* `npm test`

To run functional end to end tests:
* First start the backend.
  * `sudo mvn spring-boot:run -Drun.jvmArguments='-Dserver.port=8080'`
* Then start the Angular app.
  * `npm start`
* Then start the Selenium server.
  * `webdriver-manager start`
* Finally, run the Protractor tests.
  * `protractor protractor.conf.js`
