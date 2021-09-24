# js_logs


let log = new LoggerMethodsV1();

.
.

log.add(window);

log.add(window, "имя мое");

.
.

log.beginGroup("группа 2");

log.add(window);

log.add(window, "имя мое");

log.add(1, 1, new Error());

log.endGroup();

.
.

console.log( log.help("ru") );
