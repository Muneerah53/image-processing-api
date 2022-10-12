# Image Processing API
The Image Processing API displays images stored in the disk and, if specified, resizes them to the set size (width and height).

## End Points
 **Welcome Page** : http://localhost:3000/api 
 
The welcome page which contains instructions on how to use the api, with examples.

 **Images Page** :  http://localhost:3000/api/images
  - Arguments: 
     - file name (*required*)
     - width and height (*optional*)
  - Examples:
     1. http://localhost:3000/api/images?filename=encenadaport
     2. http://localhost:3000/api/images?filename=fjord&width=200&height=200
 

## Installation
To install and run this project, Run `npm install`

## Build Project
- to build the project, Run `npm run build`
- To start the app, Run `node build/.`


## Run Server
To start the server at a local host, Run `npm run start`

## Run tests
To run tests on the end points and the image processing functionality, Run `npm run test` 

## Formatting and Linting
To run prettier and lint scripts:
  - `npm run lint`
  - `npm run prettier`
  
  ## Notes
  * Avaible images are found under the folder `assets/full`
  * Resized images are saved under the folder `assets/thumb`;If deleted the images will be recreated upon succeeding API calls on the same endpoint.
  * Only wokring with .jpg extension. 
  * Error handling is added on missing inputs, invalid inputs, and image processing failure.
