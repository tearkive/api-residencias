var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {createConnectionPool} = require('./config/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var alumnosRouter = require('./routes/alumnos');
var maestrosRouter = require('./routes/maestros');
var empresaRouter = require('./routes/empresaControlador');
var residenciasRouter = require('./routes/residencias');
var residenciasDocsRouter = require('./routes/residenciasDocumentos');
var periodosRouter = require('./routes/periodos');
var documentosRouter = require('./routes/documentos');
var proyectosRouter = require('./routes/proyectos');
var carreraRouter = require('./routes/carrera');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
createConnectionPool();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/alumnos', alumnosRouter);
app.use('/maestros', maestrosRouter);
app.use('/empresa', empresaRouter);
app.use('/residencias', residenciasRouter);
app.use('/residenciasDocs', residenciasDocsRouter);
app.use('/periodos', periodosRouter);
app.use('/documentos', documentosRouter);
app.use('/proyectos', proyectosRouter);
app.use('/carrera', carreraRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
