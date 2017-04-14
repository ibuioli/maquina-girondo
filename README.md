# Maquina Girondo
Versión Beta 1.2.4

Algortimo de Textos Generativos (Versos y Poemas) con partido estético del poeta argentino Oliverio Girondo.

Se parte de un verso generado de forma completamente aleatoria empleando datos de estructura y vocabulario del autor Oliverio Girondo. El sistema selecciona dicho verso y a partir de ahí los siguientes versos se construyen en relación al verso anterior, hasta completar la totalidad de versos elegidos. Las palabras se escogen acorde a uno de los cuatro temas de la poesía de Girondo: Calle, Noche, Plaza, Mar.
Presente en versiones:

* Versión Java-Android (Processing)
* Version JavaScript (P5.js)
* Versión JavaScript de bajos recursos (P5.js)

### clase Verso:

* Cantidad de Palabras [byte] [1 - 7]
* Estructura sintáctica del verso [byte] [0 - 2]

### clase Estrofa:

* Cantidad de Versos [byte] [mayor a 1]

### clase Titulo:

* Un String [El String de una Estrofa]

##### Testeada en Dispositivos:

* Samsung Galaxy Fame Lite
* Huawey SCL-L03

##### Testeada en Emuladores:

* Nexus 1 - Android 4.1.2
* Nexus 4 - Android 4.1.2


### TO-DO

* Optimización de la App para Android
* Categorías de temas asociadas a valores de entrada
