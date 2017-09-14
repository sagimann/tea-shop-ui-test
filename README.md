# Tea Shop UI

Post-fork Fixes
---------------

* All controllers are digested twice, causing every controller to initialize twice, load data twice from the server, etc. This was because they were specified both in the routerProvider and in the template file. All references from the template files were removed, all referenes in the routerProvider were left as-is

* Seems like ngCart also depends on bower being available. I've mentioned this in my readme fork.

* Also seems like webpack needs to be manually configured to include the popper.js plugin, otherwise the main page doesn't load and sends a "Bootstrap requires popper.js" error. I've updated the webpack plugin config to fix this.

* The given swagger.yaml file says /teas/id instead of /tea/id as in the readme.md file. I've fixed the swagger file accordingly.

Install
-------

* [`node`](https://nodejs.org/)
* [`bower`](https://bower.io/)

Start
-----

Run `npm i` to install project dependencies 

Run `npm start` to start

The Exercise
------------

Create a Ruby API compatible with the below SPEC or [swagger section](#API)

> The API *base url* should be `http://localhost:3000` 

`/teas`

return array json of [`teaItem`](#`teaItem`)
all teas

`/tea/:id`

return json object of [`teaItem`](#`teaItem`)
by id

`/teas/featured`

return array json of [`teaItem`](#`teaItem`)
which price is > 50

### `teaItem`

```json
{
    "id": 1, // int
    "name": "Golden Orchid",
    "description": "Pure decadence, this black tea blend is packed full of deep creamy cocoa notes! My goal for this tea was to bring the ice cream shop on Mackinac Island into your cup! I began with North Winds – our black tea with dessert notes inspired by the island’s famous fudge.",
    "image": "https://media.steepster.com/api/file/WRjUCwsPRaizfhwgIdML/convert?fit=crop&h=200&w=350",
    "link": "http://steepster.com/teas/whispering-pines-tea-company/43095-golden-orchid",
    "price": 1.5, // float
    "type": "string" //enum of [ Black, Chai ,Flowering ,Food ,Fruit ,Green ,Guayusa ,Herbal ,Honeybush ,Matcha ,Oolong ,Pu-Erh ,Rooibos ,White ,Yellow ,Yerba Maté ]
}
```

Please create the Ruby API in a **separate project** you may use the below seed data.
The Ruby Project should consist of a database containing tea products and the above endpoints.


In addition to the API please complete the following files:
- `src/teas/teas.html`
- `src/teas/teas.js`

`/teas` should render the teas from `/teas` endpoint.
the rendered teas should be filtered by (client or server filter is your choice): 
- free text
- type

order by:
- name
- price asc/desc

render the teas in 2 options:
- table
- grid (of cards like in the main route `/`)

Seed Data
---------

You may use the file `./steepster_teas.json` as seed data (it is taken from [steepster.com](http://steepster.com)) 

API *Swagger*
---

load `swagger.yaml` to [swagger Editor](http://editor.swagger.io/#/) to see API spec
or see on [swagger hub](https://app.swaggerhub.com/apis/wildcard/tea-shop/1.0.0)
