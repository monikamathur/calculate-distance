# voting-management


### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  

## Installation

```sh
$ npm install --save calculate-distance
```
## Usage

```javascript
var guestList = require('calculate-distance')

### Task Information
We have some customer records in a text file (customers.txt) -- one customer per line, JSON lines formatted. We want to invite any customer within 100km of Dublin for some food and drinks on us. Write a program that will read the full list of customers and output the names and user ids of matching customers (within 100km), sorted by User ID (ascending). 
