class ToolBox {
    constructor() {
        this.initPrototypes();
        this.initElements();
        alert(1);
    }

    get(element) {
        return this.el[element];
    }

    getCamelCase(text) {
        let div = document.createElement('div');
        div.innerHTML = `<div data-${text}="id"></div>`;
        return Object.keys(div.firstChild.dataset);
    }

    initElements() {
        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {
            this.el[this.getCamelCase(element.id)] = element;
        });
    }

    initPrototypes() {
        Element.prototype.hide = function() {
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function() {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function() {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
            return this;
        }

        Element.prototype.off = function (events, fn, useCapture = false) {
            events.split(' ').forEach(event => {
                this.removeEventListener(event, fn, useCapture);
            });
            return this;
        }

        Element.prototype.css = function(styles) {
            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function(name) {
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function(name) {
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function(name) {
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function(name) {
            return this.classList.contais(name);
        }

        HTMLFormElement.prototype.getForm = function() {
            return new FormData(this);
        }

        HTMLFormElement.prototype.toJSON = function() {
            let json = {};

            this.getForm().forEach((value, key) => {
                json[key] = value;
            });

            return json;
        }
    }
}

window.toolbox = new ToolBox();