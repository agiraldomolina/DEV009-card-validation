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

## 3. Consideraciones Técnicas

El script de la página está escrito en JavaScript y cuenta con un módulo en cual contiene un objeto denominado validator; este objeto a su vez cuenta con dos métodos:

### Método isValid.

En este método se implementa el algoritmo de Luhn, el cual fue creado por Hans Peter Luhn, un científico de IBM, y se utiliza para validar tarjetas de crédito o SIM. Los pasos a seguir para implemtar este algoritmo son los siguientes:

- Se lee un string que contiene los dígitos de la tarjeta de crédito
- Se invierte el orden de los elementos del string
- Se duplican los dígitos que se encuentran en posiciones impares

- Se suman los dígitos de cada número considerando que si la multiplicación anterior dió como resultado un valor mayor que 10 entonces primero se deben sumar los dígitos de dicho resultado.

- Si la sumatoria anterior es múltiplo de 10 entonces el número es válido
