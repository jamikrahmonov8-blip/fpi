# Что такое overviev 

### это процесы каторие было создана самим создателям чтобы упростит нам работу в js
### У нас они три вида 
- String 
- Methonds
- Number
## № 1
- Получение символов

charAt(index)

Возвращает символ по указанному индексу.
```cpp
"Hello".charAt(1); // "e"

at(index)
```
Современный способ — поддерживает отрицательные индексы.
```cpp
"Hello".at(-1); // "o"
```

---

- Преобразование в строку

toString()

Преобразует значение в строку.
```cpp
(123).toString(); // "123"
```

---

- Объединение строк

concat()

Объединяет две или более строк.
```cpp
"Hello".concat(" ", "World"); // "Hello World"
```

---

- Удаление пробелов
```cpp
trim()
```
Удаляет пробелы в начале и конце строки.
```cpp
"   hi   ".trim(); // "hi"
```

---

- Проверка наличия подстроки

includes(substring)

Проверяет, содержит ли строка указанную подстроку.
```cpp
"Hello".includes("ell"); // true
```

---

- Поиск подстроки

indexOf(substring)

Возвращает индекс первого вхождения подстроки.
```cpp
"banana".indexOf("a"); // 1
```
lastIndexOf(substring)

Возвращает индекс последнего вхождения.
```cpp
"banana".lastIndexOf("a"); // 5
```

---

- Замена текста

replace(old, new)

Заменяет первое вхождение подстроки.
```cpp
"Hello world".replace("world", "JS"); // "Hello JS"

replaceAll(old, new)
```
Заменяет все вхождения подстроки.
```cpp
"aaa".replaceAll("a", "b"); // "bbb"
```

---
- Извлечение подстроки

substring(start, end)

Возвращает часть строки между start и end.
```cpp
"JavaScript".substring(0, 4); // "Java"

slice(start, end)
```
Похож на substring(), но поддерживает отрицательные индексы.
```cpp
"JavaScript".slice(-6); // "Script"
```

---

- Разделение строки

split(separator)

Разделяет строку на массив подстрок.
```cpp

"one,two,three".split(","); // ["one", "two", "three"]
```

---

- Изменение регистра

toLowerCase()

Преобразует все символы в нижний регистр.
```cpp
"HELLO".toLowerCase(); // "hello"
```
toUpperCase()

Преобразует все символы в верхний регистр.
```cpp
"hello".toUpperCase(); // "HELLO"
```

---
# Methond 

### Вне него входять команди как 

- Math.floor - удаляет десятичние 
```cpp
 let a = 43.3
    console.log(Math.floor(a));  //43
```
- Math.ceil - прибавляет число если десятични выше одного
```cpp
 let a = 43.3
    console.log(Math.ceil(a));  //44
```
- Math.round - увеличивает число на до целного если десятичние выше 4
```cpp
 let a = 43.3
    console.log(Math.round(a));  //44
```
- MAth.abs - делает из минусвого числа делает плюсовим 
```cpp
 let a = - 43
    console.log(Math.abs(a));  //43
```
- Math (min) и (max) - Находять минималный и максисалный
```cpp
 let a = 1,2,3,4,5
    console.log(Math.min(a));  //1

 let a = 1,2,3,4,5
    console.log(Math.max(a));  //5
```
- Math.pow - умножает число столько раз сколко дадим число
```cpp
 let a = 2
    console.log(Math.pow(a,3));  //8
```
    