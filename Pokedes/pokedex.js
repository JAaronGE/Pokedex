import { LitElement,html,css } from "lit";
import './card.js';

export class myPokedex extends LitElement{

        static get properties() {
          return {
            nombre: { type: String },
            imagen: {type:String},
            tipo:   {type:String},
            esconder: {type:Boolean}
          };
        }

        static get styles(){
          return css `
            *{
                margin:0;
                padding:0;
                text-align: center;
            }

            #globalContainer{
                display:flex;
                flex-direction: row;
                align-items: center;
                justify-content:center;
                text-align: center;
            }

            #instructionsSearch{
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                text-align: center;
            }
        `; 
        }

        constructor() {
          super();
            this.nombre="";
            this.imagen="";
            this.tipo="";
            this.esconder=true;
        }

        render() {
          return html`
            <div id="globalContainer">
                
                <button @click=${this.aleatorio} class="buttonsPage1"><</button>
                <div id="containerMovies">
                    <ol id="listMovies">
                        <pokemon-card .nombre="${this.nombre}" .imagen="${this.imagen}"  .tipo="${this.tipo}" ?hidden="${this.esconder}"></pokemon-card>
                    </ol>
                </div>
                <button @click=${this.aleatorio} class="buttonsPage2">></button>
                
                
            </div>

            <div id="instructionsSearch">
            <p>Presiona las flechas para obtener un Pokemon aleatorio...</p>
            <p>o escribe su nombre exacto:</p>
            <input>
            </div>
            
          `;
        }

        nameObtain(){
            
        }

        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        aleatorio(){
            let random = this.getRandomInt(1,151);
            console.log(random);
            this.promesa(random);
        }

        promesa(id){
                this.esconder=false;
              fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
              .then(response => response.json())
              .then(response => this.nombre=response.name)

              fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
              .then(response => response.json())
              .then(response => this.imagen=response.sprites.front_default)

              fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
              .then(response => response.json())
              .then(response => this.tipo=response.types[1].type.name)
              
              .catch(err => console.error(err));
        }

      }
