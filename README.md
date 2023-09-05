# Analizador de texto

## Índice

* [1. Instrucciones de uso de "Text Analyzer"](#1-instrucciones)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Decisiones de diseño](#3-decisiones-de-diseño)

***

## 1. Instrucciones de uso de "Text Analyzer"

Esta aplicación hace posible que extraigas información útil de textos, la 
cual te ayudará a comprenderlos de manera más profunda.


## 2. Funcionalidades

![Una lupa sobre texto de libro](https://github.com/Laboratoria/bootcamp/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_


1. La aplicación te permite ingresar un texto escribiéndolo o pegándola en 
un cuadro de texto.

2. Una vez ingresada la información el Text Analyzer calculará y actualizará en
tiempo real las siguientes métricas:

    - **Recuento de palabras**: número de palabras en el texto de entrada.
    - **Recuento de caracteres**: número de caracteres, incluidos espacios 
    y signos de puntuación.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    número de caracteres excluyendo espacios y signos de puntuación.  
    - **Recuento de números**: conteo de números, incluyendo decimales.
    - **Suma total de números**: resultado de la suma de todos los números que
    hay en el texto de entrada.
    - **Longitud media de las palabras**: calcula la longitud media de las palabras. 

3. Puedes limpiar el contenido de la caja de texto y las métricas haciendo clic en 
el botón "Borrar Texto".

![Text analyzer demo](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650556-988dcd6f-bc46-473b-894c-888a66c9fe2d.gif "Text analyzer demo")

## 5. Decisiones de diseño

En el diseño se buscó que tanto los colores como los elementos de la aplicación fueran visualmente amigables para las usuarias, es por esto que se eligieron colores que no fueran muy brillantes y predominan las esquinas redondeadas. 
Al botón se le añadió una sombra inferior para que le diera un efecto de relieve que 
indique que es posible dar clic en él. Se añadió un hover al botón para que la usuaria detecte con facilidad cuando el puntero se encuentre sobre el mismo.