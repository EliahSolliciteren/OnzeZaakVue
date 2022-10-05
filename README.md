# OnzeZaakVue

Er is een menukaart, de gast kan deze gebruiken om een bestelling te plaatsen.
Er is een eenvoudige server voorzien, die gebruik maakt van een Mongo database. Er is van Mongo Atlas gebruik gemaakt om een online database te voorzien (https://www.mongodb.com/cloud/atlas)
De gast kan zich registreren en krijgt dan een korting van 10%. Daarbij worden ook zijn adres gegevens voor hem ingevuld als hij een bestelling plaatst.
Betreffende javascript is het zeer eenvoudig optellen en aftrekken. De agenda App was op dat vlak (voor mij) een stuk moeilijker. Voor de sport is er een JWT gezien en heb ik axios (interceptor) zover gekregen om het token terug te sturen via de header.
De applicatie is niet voorzien voor kleine schermen. Met enkele media queries zou je bvb het gridrooster voorzien om aan te melden vervangen door een enkele knop en een modaal.
Een page refresh kan de applicatie verwarren. Een array met objecten in waarvan properties verranderen zou eigenlijk voorzien moeten worden van een watcher met optie deep: true.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# VueOnsZaakje
