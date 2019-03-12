    (function (global) {

        if (typeof (global) == null) {
            return;
        }

        var _hash = "!";
        var isFirstLoad = true;
        var noBackPlease = function () {
            global.location.href += "#";

            global.setTimeout(function () {
                global.location.href += _hash ;
            }, 50);
        };

        global.onhashchange = function () {
            if (global.location.hash !== _hash) {

                if (global.location.hash === "#" + _hash  + _hash ) {
                    if (isFirstLoad === false) {
                        alert("TODO");
                    }
                    isFirstLoad = false;
                }

                global.location.hash = _hash;
            }
        };

        global.onload = function () {
            noBackPlease();

            document.body.onkeydown = function (e) {
                var elm = e.target.nodeName.toLowerCase();
                if (e.which === 8 && (elm !== 'input' && elm !== 'textarea')) {
                    e.preventDefault();
                }
                e.stopPropagation();
            };
        }

    })(window);