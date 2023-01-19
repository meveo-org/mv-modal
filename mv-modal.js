import { LitElement, html, css } from "lit";
import "@meveo-org/mv-button";
import "@meveo-org/mv-font-awesome";

export class MvModal extends LitElement {
    static get properties() {
        return {
            open: { type: Boolean, reflect: true },
            //  valid theme values are: "light", "dark"
            //    default: "light"
            theme: { type: String, attribute: true },
        };
    }

    static get styles() {
        return css`
        :host {
            --mv-modal-font-family: var(--font-family, "Open Sans",MuseoSans);
            --mv-modal-title-font-size: var(--font-size-xl, 12pt);
            --mv-modal-close-icon-font-size: 11px;
            --light-color: var(--mv-modal-color, #02657E);
            --dark-color: var(--mv-modal-dark-color, #02657E);
            --modal-z-index: var(--mv-modal-z-index, 99);
            /**
            ** Modal container
            */
            --light-background: var(--mv-modal-background-color, linear-gradient(359.71deg, #AFCCD2 0.51%, #D4EBF0 99.89%));
            --dark-background: var(--mv-modal-dark-background, linear-gradient(359.71deg, #AFCCD2 0.51%, #D4EBF0 99.89%));
            --width: var(--mv-modal-width, 360px);
            --modal-height: var(--mv-modal-height, 230px);
            --max-height: var(--mv-modal-max-height, 230px);
            --modal-box-shadow: var(--mv-modal-box-shadow, 10.57px 16.07px 20.93px -1.11px rgba(71, 57, 154, 0.3));
            --border-radius: var(--mv-modal-border-radius, 10px);
            --mv-modal-content-font-size: var(--font-size-m, 10pt);
            --box-shadow: 10.57px 16.07px 20.93px -1.11px rgba(71, 57, 154, 0.3);
            
            /**
            ** Modal header
            */
            --header-height: var(--mv-modal-header-height, 42px);
            --header-box-shadow: var(--mv-modal-header-box-shadow, none);
            --header-border-radius: var(--mv-modal-header-border-radius, 10px);
            --header-background: var(--mv-modal-header-background, transparent);

            /**
            ** Modal body
            */
            --modal-body-width: var(--mv-modal-content-width, 315px);
            --modal-body-height-not-slotted: calc(var(--max-height) - 49px);
            --modal-body-height-slotted: calc(var(--max-height) - 62px);
            --body-border-radius: var(--mv-modal-border-radius, 10px);
            --body-background: var(--mv-modal-body-background, #E7F5F8);

            /**
            ** Modal section
            */
            --modal-section-width: var(--mv-modal-section-width, 35px);
            --modal-section-height: var(--mv-modal-section-height, calc(var(--max-height)- 36px));

            /**
            ** Modal footer
            */
            --footer-min-height: var(--mv-modal-min-height, 7px);
            --footer-background: var(--mv-modal-footer-background, transparent);
            --footer-box-shadow: var(--mv-modal-footer-box-shadow, none);
            --modal-footer-height: var(--mv-modal-foot-height, 7px);

            --fa-right-position: var(--mv-modal-fa-right-position, 6px);
            --fa-top-position: var(--mv-modal-fa-top-position, 2px);
            --color-close-icon: var(--mv-modal-color-close-icon, #000000);
            --opacity-close-icon: var(--mv-modal-opacity-close-icon, 0.4);
            --title-font-weight: var(--mv-modal-title-font-weight, 500);
            --title-left-position: var(--mv-modal-title-left-position, 30px);
            --footer-border-top: var(--mv-modal-footer-border-top, 1px solid rgba(0, 0, 0, 0.12));
            --footer-padding: var(--mv-modal-footer-padding, 0 30px 0 30px);
            --modal-body-padding: var(--mv-modal-body-padding, 0 30px 0 30px);
        }

        .modal {
            display: flex;
            flex-flow: row wrap;
            background: var(--background-color);
            width: var(--width);
            height: var(--modal-height);
            max-height: var(--max-height);
            position: fixed;
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
            font-family: var(--mv-modal-font-family);
            font-size: var(--mv-modal-content-font-size);
            color: var(--text-color);
        }
        .header {
            width: 100%;
            height: var(--header-height);
            box-shadow: var(--header-box-shadow);
            border-radius: var(--header-border-radius) var(--header-border-radius) 0 0;
            background: var(--header-background);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }
        .header_container {
            display: block;
            width: 100%;
            position: absolute;
            top: 0px;
            height: 34px;
            max-height: 34px;
        }
        .body {
            overflow-y: inherit;
            width: var(--modal-body-width);
            //height: var(--modal-body-height);
            background: var(--body-background);
            border-radius: var(--body-border-radius) var(--body-border-radius) var(--body-border-radius) var(--body-border-radius);
            box-sizing: border-box;
        }

        .body.slotted {
            height: var(--modal-body-height-slotted)
        }
        .body:not(.slotted) {
            height: var(--modal-body-height-not-slotted)
        }

        .section {
            overflow-y: hidden;
            width: var(--modal-section-width);
            height:var(--modal-section-height);
        }

        .footer {
            width: var(--width);
            min-height: var(--footer-min-height);
            //height: var(--footer-height, 7px);
            background: var(--footer-background);
            box-shadow: var(--footer-box-shadow);
            border-radius: 0 0 var(--border-radius) var(--border-radius);
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--footer-padding);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }

        .separator {
            height: 0px;
            display: inline-block;
            border: 1px solid #FFFFFF;
            width: calc(var(--modal-body-width) - 35px);
            vertical-align: bottom;
            position: absolute;
            right: 25px;
            top: 35px;
        }

        .footer.slotted {
            height: 23px !important;
        }

        .footer:not(.slotted) {
            height: 7px !important;
        }

        .mv-container-modal {
            opacity: 0;
            transition: visibility 0s, opacity 0.25s ease-in;
            z-index: var(--modal-z-index);
        }
        .overlay-modal {
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            opacity: 0.3;
            background-color: #000000;
        }
        .opened {
            align-items: center;
            display: flex;
            justify-content: center;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 1;
            visibility: visible;
        }
        .closed {
            visibility: hidden;
        }
        mv-fa {
            font-size: var(--mv-modal-close-icon-font-size);
            color: var(--color-close-icon);
            opacity: var(--opacity-close-icon);
            position: absolute;
            right: var(--fa-right-position);
            top: var(--fa-top-position);
            cursor: pointer;
        }

        .light {
            --background-color: var(--light-background);
            --text-color: var(--light-color);
        }
        .dark {
            --background-color: var(--dark-background);
            --text-color: var(--dark-color);
        }

    `;
    }

    constructor() {
        super();
        this.open = false;
        this.theme = "light";
        this.isSlotted = false;
    }

    render() {
        let footerSlot = this.shadowRoot.querySelector('#footer')
        if(footerSlot){
        footerSlot.assignedNodes().length > 0 ? this.isSlotted = true : this.isSlotted = false}
        const modalClass = this.open ? "opened" : "closed";
        return html`
            <div class="mv-container-modal ${modalClass} ${this.theme}">
                <div class="overlay-modal" @click="${this.handleClose}"></div>
                <div class="modal">
                    <div class="header">
                        <div class="header_container">
                            <slot id="header" name="header"></slot>
                            <mv-fa icon="times" @click="${this.handleClose}"></mv-fa>
                        </div>
                        <span class="separator"> </span>
                    </div>
                    <div class="section">
                        <slot name="section"></slot>
                    </div>
                    <div class="body ${this.isSlotted ? "slotted" : ""}">
                        <slot name="body"></slot>
                    </div>
                    <div class="footer ${this.isSlotted ? "slotted" : ""}">
                        <slot id="footer" name="footer">
                            <div style="height: 7px"></div>
                        </slot>
                    </div>
                </div>
            </div>
    `;
    }

    handleClose(event) {
        event && event.stopImmediatePropagation();
        this.dispatchEvent(new CustomEvent("close-modal"));
    }

}

customElements.define("mv-modal", MvModal);