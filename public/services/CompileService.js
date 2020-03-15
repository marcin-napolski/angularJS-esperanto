esperantoApp.service('CompileService', ['$rootScope', '$compile',
    function ($rootScope, $compile) {
        this.compileDirective = function (dirName, elemName) {
            var destinationElement = $(elemName);
            var html = "<" + dirName + "></" + dirName + ">";
            $compile(html)($rootScope, function (cloned) {
                destinationElement.html(cloned);
            });
            console.log("directive <" + dirName + "> compiled");
        }
    }
]);