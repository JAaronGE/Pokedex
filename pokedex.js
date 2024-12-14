import { LitElement,html,css } from "lit";
import './card.js';

export class myPokedex extends LitElement{

        static get properties() {
          return {
            nombre: { type: String },
            imagen: {type:String},
            tipo:   {type:String},
            esconder: {type:Boolean},
            data: {type:Object},
            ide:{type:String},
            nameSearch:{type:String}
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
                gap: 5rem;
            }

            #instructionsSearch{
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                text-align: center;
                margin:1rem;
                gap:0.8rem;
            }

            .buttonsPage{
                font-size: 4rem;
                width: 5rem;
                height: 5rem;
                border-radius: 90px;
                background-color: white;
            }

            #titulo{
                margin:1rem;
            }
        `; 
        }

        constructor() {
          super();
            this.nombre="";
            this.nameSearch="";
            this.imagen="";
            this.tipo="";
            this.esconder=true;
            this.ide="";
        }

        render() {
          return html`

            <header id="titulo">
                <h1>POKEDEX</h1>
            </header>

            <div id="globalContainer">
                
                <button @click=${this.aleatorio} class="buttonsPage"><</button>
                <div id="containerPokemons">
                    <ol id="listPokemons">
                        <pokemon-card .nombre="${this.nombre}" .nameSearch="${this.nameSearch}" .imagen="${this.imagen}" .ide="${this.ide}" .tipo="${this.tipo}" ?hidden="${this.esconder}"></pokemon-card>
                    </ol>
                </div>
                <button @click=${this.aleatorio} class="buttonsPage">></button>
                
                
            </div>

            <div id="instructionsSearch">
                <p>Presiona las flechas para obtener un Pokemon aleatorio...</p>
                <p @click=${this.mostrarData} >o escribe su nombre exacto:</p>
                <input type="text" id ="nameText" type="text"  @input = "${this.nameObtain}">
            </div>
            
          `;
        }


        nameObtain(e){
            const value = e.target.value;
            this.nameSearch = value;
            this.promesa(value)
            console.log(this.nameSearch)
        }

        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        aleatorio(){
            let random = this.getRandomInt(1,151);
            this.id=random;
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
