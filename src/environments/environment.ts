// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiFiles: 'http://localhost:8080/administracion-de-archivos/rest-v1/archivos',
  filesAPIToken: "ZGFpcm1leC1yZXBvcnRlcy1hcGk6MTIzbGZveC0x",
  apiProyects: 'http://codehaus.mx/crm/ProyectosAPI', /** local */
  apiSession: 'http://codehaus.mx/crm/login', /** local */
  bucketURL: 'http://localhost/contenedor',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
