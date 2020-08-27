### Problema
Dado varios contenedores, cada uno con un numero determinado de bolas de diferentes tipos. Se necesita ordenar cada contenedor con bolas del mismo tipo, todas ellas deben estar en el tipo de contenedor que le corresponde. 

Como ejemplo, tenemos n=2 contenedores y 2 diferentes tipos de bolas, numeradas de 0 a n-1 = 1. Siempre hay la misma cantidad de contenedores que tipos de bola.

La distribución de tipos de bolas por contenedor son descritas por una matriz de enteros n x n. M[contenedor][tipo] 
Por ejemplo el diagrama siguiente para M = [[1,4], [2,3]] es:

![](https://s3.amazonaws.com/hr-challenge-images/0/1485811368-9e78c98652-swapping-balls.png)

En una operación se puede intercambiar dos bolas localizadas en diferentes contenedores, el diagrama a continuación muestra la operación:

![](https://s3.amazonaws.com/hr-challenge-images/0/1485811849-e97b84e218-swapping-balls-ps-1.png)

Se requiere realizar las operaciones necesarias para que:
* Cada contenedor contenga bolas del mismo tipo
* No haya dos bolas del mismo tipo localizadas en diferentes contenedores.

Si es posible retornar la cadena "Possible" en caso que no sea posible retornoar "Impossible" 
Ejemplos:

> inputs: [[1,1],[1,1]]
>
> output: Possible
> 
> input: [[0,2],[1,1]]
> 
> output: Impossible