# Tarjeta de Crédito Válida

## Indice

- [1. Presentació del producto](#1-presentacion)
- [2. Contexto](#2-contexto)
- [3. Consideraciones Técnicas](#3-consideraciones-tecnicas)

## 1. Presentación

Esta página fue el primer proyecto construído dentro del bootcamp de Laboratoria cohort 009. El bjetivo principal es realizar la verificación de una tarjeta de crédito y en caso de que la tarjeta sea válida enmascar sus dígitos menos los cuatro últimos.

## 2. Contexto

Para crear una experiencia de usuario inmersiva, la validación de la tarjeta está creada como parte de una página en la cual se pueden hacer donaciones para una fundación sin ánimo de lucro dedicada a cuidar gatitos:

![Alt text](interfaz-ppl.png)

Como puede verse en esta interfaz el usuario puede escoger el tipo de donación bien sea mensual o por una sola vez, igualmente la aplicación le ofrece unos montos predefinidos para su donación pero igualmente le brinda la opción de ingresar un valor diferente.

En la parte inferior aparecen los campos necesarios para llenar toda la información de facturación. Para los campos que reciben información numérica se codificaron capturas de error de manera tal que sólo se puedan ingresar caracteres numéricos y de determinada longitud.

Cuando el usuario ha ingresado toda la información y hace click en el botón "Donar" el script verifica que el número de la tarjeta de crédito contenga todos los dígitos completos y entonces procede a realizar la verificación y el posterior enmascarado de los 12 primeros dígitos.

Si todo sale correctamente la página le muestra un mensaje agradecimiento personalizado al donador en el cual se especifica su nombre, tipo de donación, monto y franquicia (la página solo acepta Visa y MasterCard)

![Alt text](thanksAlert-1.png)

### Usuarios potenciales del producto

Este tipo de aplicación le puede resultar muy útil a cualquier tipo de oraganización que necesite recaudar fondos a partir de donaciones.

Esta aplicación en particular le ofrece al usuario una interfaz de fácil interacción y a prueba de los errores típicos.

## 3. Consideraciones Técnicas

El script de la página está escrito en JavaScript y cuenta con un módulo en cual contiene un objeto denominado validator; este objeto a su vez cuenta con dos métodos:

### Método isValid.

En este método se implementa el algoritmo de Luhn, el cual fue creado por Hans Peter Luhn, un científico de IBM, y se utiliza para validar tarjetas de crédito o SIM. Los pasos a seguir para implemtar este algoritmo son los siguientes:

- Se lee un string que contiene los dígitos de la tarjeta de crédito
- Se invierte el orden de los elementos del string
- Se duplican los dígitos que se encuentran en posiciones impares

- Se suman los dígitos de cada número considerando que si la multiplicación anterior dió como resultado un valor mayor que 10 entonces primero se deben sumar los dígitos de dicho resultado.

- Si la sumatoria anterior es múltiplo de 10 entonces el número es válido

### Método maskify

Este método se utiliza en la aplicación para enmascarar los dígitos de la tarjeta de crédito a excepción de los 4 últimos; este método solo se ejecuta cuando el número de la tarjeta de crédita es válido
