class PrintPage {
    
    content: string;
    page: Window;

    constructor(content: string) {
        this.content = content;
        this.page = window.open(
            "", "Your printable page"
        ) as Window;
    }

    build(): PrintPage {
        this.page.document.write(
            this.content
        );

        return this;
    }

    update(newContent: string): PrintPage {

        this.content = newContent;
        this.build();

        return this;

    }

    print(): PrintPage {
        this.build();
        this.page.print();

        return this;
    }

    close(): void {

        if (this.page) {
            this.page.close();
        }

    }

}


