# Maquina Girondo
Versión Beta 1.0.1

Algortimo de Textos Generativos (Versos y Poemas) con partido estético del poeta argentino Oliverio Girondo.

El sistema selecciona un verso al azar y a partir de ahí los siguientes versos se construyen en relación al verso anterior, hasta completar la totalidad de versos elegidos. Las palabras se escogen acorde a uno de los cuatro temas de la poesía de Girondo: Calle, Noche, Plaza, Mar.

### clase Verso:

* Cantidad de Palabras [byte] [1 - 7]
* Estructura sintáctica del verso [byte] [0 - 2]

### clase Estrofa:

* Cantidad de Versos [byte] [mayor a 1]

### TO-DO

* Optimización de la App para Android
* Categorías de temas asociadas a valores de entrada
