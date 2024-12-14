import { LitElement,html,css } from "lit";

class masDatos extends LitElement{

        static get properties() {
          return {
            habili: { type: String },
            weight: {type:String},
          };
        }

        static get styles(){
          return css `

            *{
                margin:0;
                padding:0;
            }


        `; 
        }

        constructor() {
          super();
          this.habili="";
          this.weight="";
        }

        render() {
          return html`
            <div>
                <p>height:${this.habili}</p>
                <p>weight:${this.weight}</p>
                <button @click = "${this.handleClose}">ver Menos</button>
            </div>
          `;
        }

        handleClose(){
            this.dispatchEvent(new CustomEvent('cierre', {bubbles: true, composed: true}));
        }

  }



customElements.define('mas-datos', masDatos);