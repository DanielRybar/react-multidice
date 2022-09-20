# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Háky demo

### useState
```javascript
const [promenna, metoda_pro_nastaveni_promenne] = useState(vychozi_hodnota_promenne);
```

### useEffect
1) spouští se neustále dokola (NEdoporučeno!) - bez závislostí
```javascript
useEffect(() => {
    // kód
});
```

2) spustí se jen při připojení komponenty do stromu - funkce konstruktoru, prázdné závislosti
```javascript
useEffect(() => {
    // kód
}, []);
```

3) spustí se při změně hodnot v závislostech
```javascript
useEffect(() => {
    // kód
}, [nejaky_nesmysly]);
```

4) cleanup efekt - spustí se při odpojení komponenty ze stromu - funkce destruktoru
```javascript
useEffect(() => {
    // kód
    return () => clearTimeout(); // cleanup
}, [nejaky_nesmysly]);
```

### useCallback
* v podstatě jako useEffect, funkci pak můžeme předat do pole závislostí
#### Porovnání
1) useEffect
```javascript
// funkci napíšeme v useEffectu a rovnou ji v něm zavoláme
useEffect(() => {
  const fetchData = () => {
    // kód
  }
  fetchData();
}, [searchString]);
```
2) useCallback + useEffect
```javascript
// pro vytvoření fce použijeme useCallback
const fetchData = useCallback(() => {
  // kód
}, [searchString]);

// a použijeme ji v useEffectu
useEffect(() => {
  fetchData();
}, [fetchData]);
```