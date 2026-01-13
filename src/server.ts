import fastify from 'fastify';
import cors from '@fastify/cors'

const server = fastify({ logger: true });

// Para deixar qualquer pessoa consumir a api, ou mais de um domínio
server.register(cors, {
        origin: "127.0.0.1:3333",
        methods: ["GET", "POST"],
    }

    // qualquer um pode consumir
    // origin: "*"

    // mais de um domínio
    // origin: ["gabrielsadev.com.br", "blablabla.com"]
);

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 7, name: "Williams", base: "Grove, United Kingdom" },
    { id: 8, name: "RB (Visa Cash App RB)", base: "Faenza, Italy" },
    { id: 9, name: "Sauber", base: "Hinwil, Switzerland" },
    { id: 10, name: "Haas", base: "Kannapolis, United States" },

    { id: 11, name: "Lotus F1 Team", base: "Enstone, United Kingdom" },
    { id: 12, name: "Force India", base: "Silverstone, United Kingdom" },
    { id: 13, name: "Toro Rosso", base: "Faenza, Italy" },
    { id: 14, name: "Brawn GP", base: "Brackley, United Kingdom" },
    { id: 15, name: "Benetton", base: "Enstone, United Kingdom" },
    { id: 16, name: "Renault F1", base: "Enstone, United Kingdom" },
    { id: 17, name: "BMW Sauber", base: "Hinwil, Switzerland" },
    { id: 18, name: "Toyota F1", base: "Cologne, Germany" },
    { id: 19, name: "Honda F1", base: "Brackley, United Kingdom" },
    { id: 20, name: "Jaguar Racing", base: "Milton Keynes, United Kingdom" },

    { id: 21, name: "Arrows", base: "Leafield, United Kingdom" },
    { id: 22, name: "Minardi", base: "Faenza, Italy" },
    { id: 23, name: "Ligier", base: "Abrest, France" },
    { id: 24, name: "Tyrrell", base: "Surrey, United Kingdom" },
    { id: 25, name: "Brabham", base: "Surrey, United Kingdom" },
    { id: 26, name: "Jordan", base: "Silverstone, United Kingdom" },
    { id: 27, name: "March", base: "Bicester, United Kingdom" },
    { id: 28, name: "HRT", base: "Murcia, Spain" },
    { id: 29, name: "Manor Racing", base: "Banbury, United Kingdom" },
    { id: 30, name: "Caterham", base: "Leafield, United Kingdom" },

    { id: 31, name: "Pacific Racing", base: "Norfolk, United Kingdom" },
    { id: 32, name: "Simtek", base: "Banbury, United Kingdom" },
    { id: 33, name: "Prost GP", base: "Guyancourt, France" },
    { id: 34, name: "Super Aguri", base: "Leafield, United Kingdom" },
    { id: 35, name: "Footwork", base: "Milton Keynes, United Kingdom" },
    { id: 36, name: "Coloni", base: "Perugia, Italy" },
    { id: 37, name: "Andrea Moda", base: "Milan, Italy" },
    { id: 38, name: "Onyx", base: "Chipping Norton, United Kingdom" },
    { id: 39, name: "Osella", base: "Turin, Italy" },
    { id: 40, name: "Shadow", base: "Northamptonshire, United Kingdom" },

    { id: 41, name: "Eagle", base: "California, United States" },
    { id: 42, name: "Penske", base: "Poole, United Kingdom" },
    { id: 43, name: "BRM", base: "Bourne, United Kingdom" },
    { id: 44, name: "Vanwall", base: "Acton, United Kingdom" },
    { id: 45, name: "Cooper", base: "Surbiton, United Kingdom" },
    { id: 46, name: "Lola", base: "Huntingdon, United Kingdom" },
    { id: 47, name: "Matra", base: "Vélizy-Villacoublay, France" },
    { id: 48, name: "ATS", base: "Bad Dürkheim, Germany" },
    { id: 49, name: "Zakspeed", base: "Niederzissen, Germany" },
    { id: 50, name: "Life Racing Engines", base: "Modena, Italy" }
];

const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Sergio Perez", team: "Red Bull Racing" },
    { id: 3, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 4, name: "Charles Leclerc", team: "Ferrari" },
    { id: 5, name: "George Russell", team: "Mercedes" },
    { id: 6, name: "Lando Norris", team: "McLaren" },
    { id: 7, name: "Oscar Piastri", team: "McLaren" },
    { id: 8, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 9, name: "Lance Stroll", team: "Aston Martin" },
    { id: 10, name: "Esteban Ocon", team: "Alpine" },

    { id: 11, name: "Pierre Gasly", team: "Alpine" },
    { id: 12, name: "Alex Albon", team: "Williams" },
    { id: 13, name: "Logan Sargeant", team: "Williams" },
    { id: 14, name: "Yuki Tsunoda", team: "RB (Visa Cash App RB)" },
    { id: 15, name: "Daniel Ricciardo", team: "RB (Visa Cash App RB)" },
    { id: 16, name: "Valtteri Bottas", team: "Sauber" },
    { id: 17, name: "Zhou Guanyu", team: "Sauber" },
    { id: 18, name: "Kevin Magnussen", team: "Haas" },
    { id: 19, name: "Nico Hulkenberg", team: "Haas" },
    { id: 20, name: "Carlos Sainz", team: "Ferrari" },

    { id: 21, name: "Sebastian Vettel", team: "Aston Martin" },
    { id: 22, name: "Michael Schumacher", team: "Ferrari" },
    { id: 23, name: "Ayrton Senna", team: "McLaren" },
    { id: 24, name: "Alain Prost", team: "McLaren" },
    { id: 25, name: "Kimi Raikkonen", team: "Ferrari" },
    { id: 26, name: "Felipe Massa", team: "Ferrari" },
    { id: 27, name: "Rubens Barrichello", team: "Ferrari" },
    { id: 28, name: "Nigel Mansell", team: "Williams" },
    { id: 29, name: "Nelson Piquet", team: "Williams" },
    { id: 30, name: "Jenson Button", team: "Brawn GP" },

    { id: 31, name: "Jacques Villeneuve", team: "Williams" },
    { id: 32, name: "Mika Hakkinen", team: "McLaren" },
    { id: 33, name: "David Coulthard", team: "McLaren" },
    { id: 34, name: "Juan Pablo Montoya", team: "Williams" },
    { id: 35, name: "Ralf Schumacher", team: "Williams" },
    { id: 36, name: "Mark Webber", team: "Red Bull Racing" },
    { id: 37, name: "Heinz-Harald Frentzen", team: "Jordan" },
    { id: 38, name: "Giancarlo Fisichella", team: "Renault F1" },
    { id: 39, name: "Jarno Trulli", team: "Renault F1" },
    { id: 40, name: "Nico Rosberg", team: "Mercedes" },

    { id: 41, name: "Robert Kubica", team: "BMW Sauber" },
    { id: 42, name: "Pastor Maldonado", team: "Williams" },
    { id: 43, name: "Daniel Kvyat", team: "Toro Rosso" },
    { id: 44, name: "Felipe Nasr", team: "Sauber" },
    { id: 45, name: "Marcus Ericsson", team: "Sauber" },
    { id: 46, name: "Nick Heidfeld", team: "BMW Sauber" },
    { id: 47, name: "Timo Glock", team: "Toyota F1" },
    { id: 48, name: "Kamui Kobayashi", team: "Sauber" },
    { id: 49, name: "Antonio Giovinazzi", team: "Ferrari" },
    { id: 50, name: "Oliver Bearman", team: "Ferrari" }
];

server.get('/teams', async (req, res) => {
    res.type("application/json").code(200)
    return { teams };
})

server.get('/drivers', async (req, res) => {
    res.type("application/json").code(200)
        return {drivers}
})

interface DriveParams {
    id: string,
}

// <{Params: DriveParams}> Serve para definir a tipagem do parâmetro.
server.get<{Params: DriveParams}>('/drivers/:id', async (req,res) => {
    const id = parseInt(req.params.id)
    const drive = drivers.find(d => d.id === id)
    console.log(req.params)
    if(!drive){
        res.type('application/json').code(404);
        return { message: "Driver not found"}
    } else {
        res.type('application/json').code(202);
        return {drive}
    }

    console.log(drive)
})

server.listen({ port: Number(process.env.PORT) }, () => {
    console.log(`Servidor Iniciado na Porta ${process.env.PORT}`)
})