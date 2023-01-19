# mv-modal

MvModal is a Meveo modal component (based on lit-element) that renders a modal window

## Features
Display modal with 4 slots : 
    * header
    * menu (left section)
    * body
    * footer

## Dependencies
* [mv-button](https://github.com/meveo-org/mv-button)
* [mv-font-awesome](https://github.com/meveo-org/mv-font-awesome)

## Quick Start

To experiment with the MvModal component.

1. Clone this repo.
2. Serve the project from the root directory with some http server (best served with meveo itself) 
3. Update the table in the demo.js file

You can also check this [demo](https://modal.meveo.org/index.html)

## Sample usage
```html
<mv-modal
    ?open="${this.isOpen}"              // boolean to set if modal is open or close
    @close-modal="${this.closeModal}"   // function called on click on close cross or on overlay
>
    <div slot="slotName">               // replace slotName by : header / body / section / footer
        Lorem ipsum dolor sit amet.
    </div>
</mv-modal>
```

