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