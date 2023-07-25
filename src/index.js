import app from './app.js';
import {conectarDB} from './db.js'

conectarDB();
app.listen(5001, () => console.log('server om PORT 5001'));