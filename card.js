import { LitElement,html,css } from "lit";
import './mas.js';

class card extends LitElement{

        static get properties() {
          return {
            nombre: { type: String },
            imagen: {type:String},
            tipo:   {type:String},
            esconder: {type:Boolean},
            color:{type:String},
            ide:{type:String},
            nameSearch:{type:String},
            habili:{type:String},
            weight:{type:String}
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
                width: 20rem;
                height: 30rem;
                border-radius: 30px;
                gap:1rem;
                background-color: #3af988;
            }

            #imagen{
                width: 18rem;
                height: 15rem;
            }
            
            #nombre{
                color: white;
                font-size: 3rem;
            }
            
            #tipo{
                font-size: 3rem;
                color: white;
            }

            #showMore{
                width: 15rem;
                height: 2rem;
                border-radius: 30px;
            }
        `; 
        }

        constructor() {
          super();
          this.nombre="";
          this.imagen="";
          this.tipo="";
          this.esconder=true;
          this.color="";
          this.ide="";
          this.nameSearch="";
          this.habili="";
          this.weight="";
        }

        render() {
          return html`
            <div id="cardBox">
                <h1 id="nombre">${this.nombre}</h1>
                <img id="imagen" src="${this.imagen}">
                <p id="tipo" >${this.tipo}</p>
                <button id="showMore" ?hidden="${!this.esconder}" @click=${this.mostrarMas}>...más</button>

                <div ?hidden="${this.esconder}">
                    <mas-datos .habili="${this.habili}" .weight="${this.weight}" @cierre="${this.cerrar}"></mas-datos>
                </div>

            </div>
          `;
        }

        cerrar(){
            this.esconder=true;
        }

        mostrarMas(){
            this.esconder=false;
            if(this.ide){
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.ide}/`)
              .then(response => response.json())
              .then(response => this.habili=response.height)

              fetch(`https://pokeapi.co/api/v2/pokemon/${this.ide}/`)
              .then(response => response.json())
              .then(response => this.weight=response.weight)


            }

            fetch(`https://pokeapi.co/api/v2/pokemon/${this.nombre}/`)
            .then(response => response.json())
            .then(response => this.habili=response.height)

            fetch(`https://pokeapi.co/api/v2/pokemon/${this.nombre}/`)
            .then(response => response.json())
            .then(response => this.weight=response.weight)

        }

        

  }




customElements.define('pokemon-card', card);