## Sintaxis de Expresiones Regulares

### Metacaracteres:

Los metacaracteres son caracteres con significados especiales en las expresiones regulares. Algunos de los metacaracteres más comunes son:

- `^`: Coincide con el inicio de una cadena.
- `$`: Coincide con el final de una cadena.
- `.`: Coincide con cualquier carácter excepto el salto de línea.
- `*`: Coincide con cero o más ocurrencias del elemento anterior.
- `+`: Coincide con una o más ocurrencias del elemento anterior.
- `?`: Coincide con cero o una ocurrencia del elemento anterior.
- `\`: Se utiliza para escapar metacaracteres.

### Conjuntos de Caracteres:

Los conjuntos de caracteres se encierran entre corchetes `[]` y permiten especificar un conjunto de caracteres posibles que coincidirían en esa posición en la cadena. Algunos ejemplos:

- `[abc]`: Coincide con cualquiera de los caracteres dentro de los corchetes.
- `[a-z]`: Coincide con cualquier letra minúscula.
- `[0-9]`: Coincide con cualquier dígito.
- `[^0-9]`: Coincide con cualquier carácter que no sea un dígito.

### Cuantificadores:

Los cuantificadores se utilizan para especificar cuántas veces debe coincidir un elemento. Algunos ejemplos son:

- `*`: Coincide con cero o más ocurrencias del elemento anterior.
- `+`: Coincide con una o más ocurrencias del elemento anterior.
- `?`: Coincide con cero o una ocurrencia del elemento anterior.
- `{n}`: Coincide exactamente con `n` ocurrencias del elemento anterior.
- `{n,}`: Coincide con al menos `n` ocurrencias del elemento anterior.
- `{n,m}`: Coincide con al menos `n` y como máximo `m` ocurrencias del elemento anterior.

### Grupos y Captura:

Los paréntesis `()` se utilizan para agrupar elementos y establecer el alcance de los cuantificadores y operadores. También se pueden utilizar para realizar capturas.

### Caracteres Especiales:

- `\d`: Coincide con un dígito (equivalente a `[0-9]`).
- `\w`: Coincide con cualquier carácter alfanumérico (equivalente a `[a-zA-Z0-9_]`).
- `\s`: Coincide con un carácter de espacio en blanco.
- `\b`: Coincide con un límite de palabra.

