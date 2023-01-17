import { LitElement, html, css } from 'lit';
import './mv-modal.js';
import "@meveo-org/mv-button";
import "@meveo-org/mv-font-awesome";

export class MvModalDemo extends LitElement {
    static get properties() {
        return {
            isOpen: { type: Boolean },
            isOpen2: { type: Boolean },
            isOpen3: { type: Boolean },
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return css`
            :host {
                font-family: var(--font-family, Arial);
                font-size: var(--font-size-m, 10pt);
            }

            [slot="body"] {
                font-size: 10px;
                text-align: justify;
                padding: 10px 4px;
            }

            [slot="header"] {
                display: inline;
                position: absolute;
                left: 50px;
                font-weight: 900;
                text-align: left;
                padding-left: 6px;
                padding-top: 4px;
            }

            [slot="footer"] {
                font-size: 10px;
                padding: 6px;
            }

            [slot="section"] {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-evenly;
                font-size: 14px;
            }

            mv-fa:hover {
                cursor: pointer;
            }

            .container {
                text-align: center;
                width: 100%;
                margin-top: 200px;
                display: flex;
                justify-content: center;
            }
            
            p {
                text-indent: 30px;
                text-align: initial;
            }
            
            mv-fa[icon="times-circle"] {
                font-size: 20px;
                color: #48C5B9;
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
            }

            .title {
                font-size: 20px;
                font-weight: 500;
                position: absolute;
                left: 30px;
                top: 50%;
                transform: translateY(-50%);
                cursor: default;
            }

            .left-button {
                position: absolute;
                left: 30px;
                top: 50%;
                transform: translateY(-50%);
            }

            .right-button {
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
            }

            .custom-size {
                --mv-modal-width: 500px;
                --mv-modal-max-height: 300px;
            }

            fieldset > label, label > input {
                cursor: pointer;
            }

            fieldset {
                width: 120px;
                margin-left: 10px;
                border:2px solid red;
                -moz-border-radius:8px;
                -webkit-border-radius:8px;	
                border-radius:8px;
                color: #818181;
            }

            legend {
                font-weight: 500;
                color: red;
            }
        `;
    }

    constructor() {
        super();
        this.isOpen = false;
        this.isOpen2 = false;
        this.isOpen3 = false;
        this.theme = "light";
    }

    render() {
    const { theme } = this;
    return html`
        <fieldset>
            <legend>Theme</legend>
            <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
            <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
        </fieldset>
        <div class="container">
            <mv-button @button-clicked="${this.openModal}" button-style="info" .theme="${theme}">Modal</mv-button>
            <mv-modal
                ?open="${this.isOpen}"
                @close-modal="${this.closeModal}"
                closeable
                .theme="${theme}"
            >
                <div slot="header">
                    Lorem ipsum !
                </div>
                <p slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla eu malesuada aliquet, metus lorem interdum ipsum, id congue purus enim id ipsum. Donec euismod tincidunt ipsum, id ullamcorper neque pellentesque a. Sed vel velit vel velit iaculis congue.
                </p>
            </mv-modal>

            <mv-button @button-clicked="${this.openModal2}" button-style="info" .theme="${theme}">Modal with footer</mv-button>
            <mv-modal
                ?open="${this.isOpen2}"
                @close-modal="${this.closeModal2}"
                closeable
                .theme="${theme}"
            >
                <div slot="header">
                    Lorem ipsum !
                </div>
                <p slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla eu malesuada aliquet, metus lorem interdum ipsum, id congue purus enim id ipsum. Donec euismod tincidunt ipsum, id ullamcorper neque pellentesque a. Sed vel velit vel velit iaculis congue.
                </p>
                <p slot="footer">
                    Sed vel velit vel velit iaculis congue.
                </p>
            </mv-modal>

            <mv-button @button-clicked="${this.openModal3}" button-style="info" .theme="${theme}">Modal with menu</mv-button>
            <mv-modal
                ?open="${this.isOpen3}"
                @close-modal="${this.closeModal3}"
                closeable
                .theme="${theme}"
            >
                <div slot="header">
                    Lorem ipsum !
                </div>
                <div slot="section">
                    <mv-fa icon="home" regular></mv-fa>
                    <mv-fa icon="chevron-left" regular></mv-fa>
                    <mv-fa icon="beer" regular></mv-fa>
                    <mv-fa icon="envelope" regular></mv-fa>
                </div>
                <p slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla eu malesuada aliquet, metus lorem interdum ipsum, id congue purus enim id ipsum. Donec euismod tincidunt ipsum, id ullamcorper neque pellentesque a. Sed vel velit vel velit iaculis congue.
                </p>
                <p slot="footer">
                    Sed vel velit vel velit iaculis congue.
                </p>
            </mv-modal>
        </div>`;
}

openModal() {
    this.isOpen = true;
}

closeModal() {
    this.isOpen = false;
}

openModal2() {
    this.isOpen2 = true;
}

closeModal2() {
    this.isOpen2 = false;
}

openModal3() {
    this.isOpen3 = true;
}

closeModal3() {
    this.isOpen3 = false;
}

changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
};
}

customElements.define('mv-modal-demo', MvModalDemo);