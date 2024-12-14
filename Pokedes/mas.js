import { LitElement,html,css } from "lit";

class masDatos extends LitElement{

        static get properties() {
          return {
            nombre: { type: String },
            imagen: {type:String},
            tipo:   {type:String}
          };
        }

        static get styles(){
          return css `

            *{
                margin:0;
                padding:0;
            }

            #cardBox{
                border: solid, black;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                text-align: center;
                //width: 30%;
            }
        `; 
        }

        constructor() {
          super();
          this.nombre="";
          this.imagen="";
          this.tipo="";
        }

        render() {
          return html`
            <div id="cardBox">
                <h1 id="nombre">${this.nombre}</h1>
                <img id="imagen" src="${this.imagen}">
                <p id="tipo" >${this.tipo}</p>
                <button>...más</button>
            </div>
          `;
        }

  }



customElements.define('mas-datos', masDatos);