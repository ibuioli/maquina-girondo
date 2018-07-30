# Maquina Girondo

Algorithm of Generative Texts (Verses and Poems) with the aesthetic party of the argentine poet Oliverio Girondo.

It starts from a verse generated in a completely random way using data of structure and vocabulary from argentine author Oliverio Girondo. The system selects this verse and from there the following verses are constructed in relation to the previous verse, until completing the totality of chosen verses. The words are chosen according to one of the four themes of the Girondo's poetry: Street, Night, Plaza, Sea.
Present in versions:

* Java-Android Version (Processing) [**deprecated**]
* Mobile Version (TypeScript - Angular - Cordova)
* Web Version (TypeScript - Angular)
* Voice Version (P5.js - JS API)

### class Verso:

* Cantidad de Palabras [byte] [1 - 7]
* Estructura sintáctica del verso [byte] [0 - 2]

### class Estrofa:

* Cantidad de Versos [byte] [mayor a 1]

### class Titulo:

* Un String [El String de una Estrofa]

##### Testing on Devices:

* Samsung GT-S6790 - Android 4.1.2
* Huawey SCL-L03 - Android 5.1.1
* Motorola Moto G (3rd Gen) - Android 6.0.1

##### Testing on Emulators:

* Galaxy S5 - Generic Android (Google Chrome Webview)
* Nexus 1 - Android 4.1.2 (Android Virtual Device)
* Nexus 4 - Android 4.1.2 (Android Virtual Device)
* Generic Mobile - Android 4.2 (Manymo)
* Samsung Galaxy S6 - Android 5.1.0 (Genymotion)
* Generic Mobile - Android 5.0.0 (Genymotion)
* Generic Tablet - Android 5.0.0 (Genymotion)
