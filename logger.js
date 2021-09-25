/*
*   create: 2021-09-24
*   autor: SUNsung
*   comtact: git@embedded.biz.ua
*
*/

class LoggerMethodsV1 {

    m3uh26h2x49bhe57 = {};
    f8435ezxr6k95xc8 = {};
    up87ua925a5zst58 = [];

    mxrn39ed7rt65325 = true;
    vt2svj89m96u86p6 = true;
    d5fbi5y5378m4k5j = true;

    b2anipr342h345c4 = function (){};
    c323gm3negr833m7 = function (){};
    b386bn8zre76z7d2 = function (){};

    constructor(func_point_call, func_group_call, func_error_call) {

        if( typeof func_point_call === 'function' ) this.b2anipr342h345c4 = func_point_call;
        if( typeof func_group_call === 'function' ) this.c323gm3negr833m7 = func_group_call;
        if( typeof func_error_call === 'function' ) this.b386bn8zre76z7d2 = func_error_call;

        this.__addLang("en",{
            ini: {
                name: "Class Initialization",
                description: {
                    func_point_call: "A reference to a function that will be called every time a new entry is added",
                    func_group_call: "A reference to the function that will be called every time the group is closed",
                    func_error_call: "A reference to a function that will be called every time an error is caught"
                }
            },
            beginGroup: {
                name: "Initializing a new group",
                description: {
                    name_group: "The name of the group. Shown in the console"
                },
                return: "Returns or FALSE on error or group name on success"
            },
            endGroup: {
                name: "Close the group level",
                description: {},
                return: "Returns the name of the closed group and an array with the objects added to the stack group"
            },
            add: {
                name: "Adding an entry to the stack",
                description: {
                    print_val: "Variable of the added record. Absolutely any types are accepted.",
                    name: "Name or short comment for the entry",
                    catch_error: "Error interceptor. Accepts only objects of type Error"
                },
                return: true
            },
            printErrors: {
                name: "Controlling error output to the console",
                description: {
                    status: "Whether to output to the console"
                },
                return: "Current output status"
            },
            printLogs: {
                name: "Controlling the output of normal output to the console",
                description: {
                    status: "Whether to output to the console"
                },
                return: "Current output status"
            },
            printInfo: {
                name: "Controlling the output of informational messages to the console",
                description: {
                    status: "Whether to output to the console"
                },
                return: "Current output status"
            }
        });
        this.__addLang("ru", {
            ini:{
                name: "Инициализация Класса",
                description:{
                    func_point_call: "Ссылка на функцию которая будет вызыватся каждый раз после добавления новой записи",
                    func_group_call: "Ссылка на функцию которая будет вызыватся каждый раз после закрытия группы",
                    func_error_call: "Ссылка на функцию которая будет вызыватся каждый раз после отлова ошибки"
                }
            },
            beginGroup:{
                name: "Инициализация новой группы",
                description: {
                    name_group: "Имя группы. Показывается в консоль"
                },
                return: "Возвращает или FALSE в случае ошибки или имя группы в случае успеха"
            },
            endGroup:{
                name: "Закрытие уровня угруппы",
                description: {},
                return: "Возвращает имя закрытой группы и массив с добавлекнными в группу стека обьектами"
            },
            add:{
                name: "Добавление записи в стек",
                description: {
                    print_val: "Переменная добавляемой записи. Принимаются абсолютно любые типы.",
                    name: "Имя или короткий коментарий к записи",
                    catch_error: "Перехватчик ошибок. Принимает только обьекты типа Error"
                },
                return: true
            },
            printErrors:{
                name: "Управление выводом ошибок в консоль",
                description: {
                    status: "Выводить ли в консоль"
                },
                return: "Текущий статус вывода"
            },
            printLogs:{
                name: "Управление выводом обычной выдачи в консоль",
                description: {
                    status: "Выводить ли в консоль"
                },
                return: "Текущий статус вывода"
            },
            printInfo:{
                name: "Управление выводом информационных сообщений в консоль",
                description: {
                    status: "Выводить ли в консоль"
                },
                return: "Текущий статус вывода"
            }
        });

    }
    __toString(str){
        if(typeof str === 'string')
            str = str.replace(/ /g,"_");
        //  str = str.replace(/[^ -~]+/g, "");

        return str;
    }
    __addLang(lang, tree_lang){
        this.m3uh26h2x49bhe57[lang] = {
            ini: {
                name: tree_lang.ini.name,
                metod: "new LoggerMethodsV1( func_point_call, func_group_call, func_error_call )",
                values:{
                    func_point_call:{
                        type: "function",
                        required: false,
                        description: tree_lang.ini.description.func_point_call
                    },
                    func_group_call:{
                        type: "function",
                        required: false,
                        description: tree_lang.ini.description.func_group_call
                    },
                    func_error_call:{
                        type: "function",
                        required: false,
                        description: tree_lang.ini.description.func_error_call
                    }
                },
                return: {}
            },
            beginGroup: {
                name: tree_lang.beginGroup.name,
                metod: "beginGroup( name_group )",
                values: {
                    name_group:{
                        type: "string",
                        required: false,
                        description: tree_lang.beginGroup.description.name_group
                    }
                },
                return: {
                    type: "string | boolean",
                    description: tree_lang.beginGroup.return
                }
            },
            endGroup: {
                name: tree_lang.endGroup.name,
                metod: "endGroup()",
                values: {},
                return: {
                    type: "object ( {name: 'name group', stack: {stack element groups} } )",
                    description: tree_lang.endGroup.return
                }
            },
            add: {
                name: tree_lang.add.name,
                metod: "add( print_val, name, catch_error )",
                values: {
                    print_val:{
                        type: "mixed",
                        required: true,
                        description: tree_lang.add.description.print_val
                    },
                    name:{
                        type: "string",
                        required: false,
                        description: tree_lang.add.description.name
                    },
                    catch_error:{
                        type: "error",
                        required: false,
                        description: tree_lang.add.description.catch_error
                    }
                },
                return: {
                    type: "boolean",
                    description: tree_lang.add.return
                }
            },
            printErrors: {
                name: tree_lang.printErrors.name,
                metod: " printErrors( status )",
                values: {
                    status:{
                        type: "boolean",
                        required: false,
                        description: tree_lang.printErrors.description.status
                    }
                },
                return: {
                    type: "boolean",
                    description: tree_lang.printErrors.return
                }
            },
            printLogs: {
                name: tree_lang.printLogs.name,
                metod: " printErrors( status )",
                values: {
                    status:{
                        type: "boolean",
                        required: false,
                        description: tree_lang.printLogs.description.status
                    }
                },
                return: {
                    type: "boolean",
                    description: tree_lang.printLogs.return
                }
            },
            printInfo: {
                name: tree_lang.printInfo.name,
                metod: " printErrors( status )",
                values: {
                    status:{
                        type: "boolean",
                        required: false,
                        description: tree_lang.printInfo.description.status
                    }
                },
                return: {
                    type: "boolean",
                    description: tree_lang.printInfo.return
                }
            }
        };

        this.m3uh26h2x49bhe57[lang].keys_arr = Object.keys(this.m3uh26h2x49bhe57[lang]);
        return true;
    }

    beginGroup(name_group=""){    //Инициализация уровня группы

        if(typeof name_group != 'string'){
            this.add("Group initialization error", name_group, new Error());
            return false;
        }
        if(name_group === "") name_group = this.up87ua925a5zst58.length;

        name_group = this.__toString(name_group);

        if(this.f8435ezxr6k95xc8[name_group] === undefined){
            this.f8435ezxr6k95xc8[name_group] = [];
            this.up87ua925a5zst58.push(name_group);

            console.group(name_group);
            if(this.d5fbi5y5378m4k5j) console.info("LVL",name_group+"\n");

        }else
            this.add("Multiple group initialization", name_group, new Error());

        return name_group;
    }
    endGroup(){   //Закрытие уровня группы

        let name_group = this.up87ua925a5zst58.pop();
        let buf_group = {name:name_group, stack:this.f8435ezxr6k95xc8[name_group]};

        if(this.d5fbi5y5378m4k5j) console.info("END"+" "+name_group+"\n");
        console.groupEnd();
        this.c323gm3negr833m7(buf_group);

        return buf_group;
    }

    add(print_val, name="", catch_error=false){

        if(typeof name != 'string')
            name = name.toString();

        if (this.up87ua925a5zst58.length < 1) this.beginGroup();
        let name_group = this.up87ua925a5zst58[this.up87ua925a5zst58.length-1];

        let buf_tree = this.f8435ezxr6k95xc8[name_group];
        let log_buf = {name: name, val: print_val, error: catch_error, time: new Date()};
        buf_tree.push(log_buf);

        if(!catch_error) {
            if (this.vt2svj89m96u86p6) console.log(new Date().toLocaleTimeString(), " ", name + "\n", print_val);
        }else {

            if (this.mxrn39ed7rt65325) console.error(new Date().toLocaleTimeString(), " ", name + "\n", print_val, catch_error);
            this.b386bn8zre76z7d2(log_buf);
        }

        this.b2anipr342h345c4(log_buf);
        return true;
    }

    help(lang, metod) {
        if(lang === undefined)
            return this.m3uh26h2x49bhe57["en"];

        if(typeof lang != 'string')
            lang = lang.toString();

        if(this.m3uh26h2x49bhe57[lang] === undefined)
            lang = "en";

        if(metod === undefined)
            return this.m3uh26h2x49bhe57[lang];

        else if(this.m3uh26h2x49bhe57[lang][metod] === undefined)
            return {info: "ERROR!!", available_keys: Object.keys(this.m3uh26h2x49bhe57[lang]) };
        else
            return this.m3uh26h2x49bhe57[lang][metod];
    }
    printErrors(status){
        if(status != undefined)

            if(typeof status != 'boolean'){
                this.add("Status initialization print errors is broken", status, new Error());

            }else{

                this.mxrn39ed7rt65325 = status;
            }

        return this.mxrn39ed7rt65325;
    }
    printLogs(status){
        if(status != undefined)

            if(typeof status != 'boolean'){
                this.add("Status initialization print logs is broken", status, new Error());

            }else{

                this.vt2svj89m96u86p6 = status;
            }

        return this.vt2svj89m96u86p6;
    }
    printInfo(status){
        if(status != undefined)

            if(typeof status != 'boolean'){
                this.add("Status initialization print error is broken", status, new Error());

            }else{

                this.d5fbi5y5378m4k5j = status;
            }

        return this.d5fbi5y5378m4k5j;
    }

}
