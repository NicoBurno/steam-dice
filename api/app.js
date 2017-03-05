
// Bibliy
// https://www.terlici.com/2014/08/25/best-practices-express-structure.html

import express from 'express';
import path from 'path';
import ejs from 'ejs';

import passport from './passport';
import routes from './routes';

const app = express();

// USE
app.use('/static/build', express.static(path.join(__dirname, '../front/static/build')));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

// SET
app.set('views', path.join(__dirname, '../front/static/build'));
app.set('view engine', 'html');

// ENGINE
app.engine('html', ejs.renderFile);

app.listen(3000);
