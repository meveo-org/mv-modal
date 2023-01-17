# mv-modal

MvModal is a Meveo modal component (based on lit-element) that renders a modal window

## Features
Display modal with 4 slots : 
    * header
    * menu (left section)
    * body
    * footer

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

