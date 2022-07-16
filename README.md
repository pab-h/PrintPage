# PrintPage
Facilitando a impressão de conteúdo HTML nos navegadores.
## Instalação 
~~~bash
git clone https://github.com/pab-h/PrintPage.git
~~~
_Em seu código html_
~~~html
<script src="/path/to/PrintPage/PrintPage.js"></script>
~~~
Pronto! Instalação completa. =)

## Guia de uso

### Exemplo rápido
~~~javascript
const printPage = new PrintPage("Hello, World!");
printPage
    .build() // Cria a nova Window para ser impressa
    .print() // Executa o comando de imprimir
    .close(); // Fecha a Window criada
~~~
*Sempre* chame o método `close()` ao final da execução 

### Utilizando conteúdo html
Em seu `<html>`
~~~html 
<button>Imprimir</button>
<main data-print>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam at lectus.
    </p>
</main>
~~~

Em seu `<script>`
~~~javascript
const printButton = document.querySelector('button');

printButton.addEventListener('click', () => {
    const { outerHTML: printContent } = document
        .querySelector('[data-print]');
        
    const printPage = new PrintPage(printContent);

    printPage
        .build()
        .print()
        .close();
});
~~~

### Utilizando conteúdo html + assets
Em seu `<html>`
~~~html 
<link rel="stylesheet" href="/path/to/style.css" data-print>
<script src="/path/to/script.js" data-print></script>
...
<button>Imprimir</button>
<main data-print>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam at lectus.
    </p>
</main>
~~~

Em seu `<script>`
~~~javascript
const contents = [... document.querySelectorAll("[data-print]")];
const printContent = contents
    .map(content => content.outerHTML)
    .join('');
    
    
const printButton = document.querySelector('button');

printButton.addEventListener('click', () => {
    const printPage = new PrintPage(printContent);

    printPage
        .build()
        .print()
        .close();
});    
~~~
#### Nota do desenvolvedor
Às vezes será necessário esperar um *intervalo de tempo* até que a `Window` esteja completamente carregada. 
