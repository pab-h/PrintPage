var PrintPage = /** @class */ (function () {
    function PrintPage(content) {
        this.content = content;
        this.page = window.open("", "Your printable page");
    }
    PrintPage.prototype.build = function () {
        this.page.document.write(this.content);
        return this;
    };
    PrintPage.prototype.update = function (newContent) {
        this.content = newContent;
        this.build();
        return this;
    };
    PrintPage.prototype.print = function () {
        this.build();
        this.page.print();
        return this;
    };
    PrintPage.prototype.close = function () {
        if (this.page) {
            this.page.close();
        }
    };
    return PrintPage;
}());
