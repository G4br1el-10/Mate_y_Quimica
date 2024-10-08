const elements = [
        { name: 'Hidrógeno', symbol: 'H', atomicNumber: 1, category: 'nonmetal', position: [1, 1] },
        { name: 'Helio', symbol: 'He', atomicNumber: 2, category: 'noble-gas', position: [1, 18] },
        { name: 'Litio', symbol: 'Li', atomicNumber: 3, category: 'alkali-metal', position: [2, 1] },
        { name: 'Berilio', symbol: 'Be', atomicNumber: 4, category: 'alkaline-earth-metal', position: [2, 2] },
        { name: 'Boro', symbol: 'B', atomicNumber: 5, category: 'metalloid', position: [2, 13] },
        { name: 'Carbono', symbol: 'C', atomicNumber: 6, category: 'nonmetal', position: [2, 14] },
        { name: 'Nitrógeno', symbol: 'N', atomicNumber: 7, category: 'nonmetal', position: [2, 15] },
        { name: 'Oxígeno', symbol: 'O', atomicNumber: 8, category: 'nonmetal', position: [2, 16] },
        { name: 'Flúor', symbol: 'F', atomicNumber: 9, category: 'nonmetal', position: [2, 17] },
        { name: 'Neón', symbol: 'Ne', atomicNumber: 10, category: 'noble-gas', position: [2, 18] },
        { name: 'Sodio', symbol: 'Na', atomicNumber: 11, category: 'alkali-metal', position: [3, 1] },
        { name: 'Magnesio', symbol: 'Mg', atomicNumber: 12, category: 'alkaline-earth-metal', position: [3, 2] },
        { name: 'Aluminio', symbol: 'Al', atomicNumber: 13, category: 'metal', position: [3, 13] },
        { name: 'Silicio', symbol: 'Si', atomicNumber: 14, category: 'metalloid', position: [3, 14] },
        { name: 'Fósforo', symbol: 'P', atomicNumber: 15, category: 'nonmetal', position: [3, 15] },
        { name: 'Azufre', symbol: 'S', atomicNumber: 16, category: 'nonmetal', position: [3, 16] },
        { name: 'Cloro', symbol: 'Cl', atomicNumber: 17, category: 'nonmetal', position: [3, 17] },
        { name: 'Argón', symbol: 'Ar', atomicNumber: 18, category: 'noble-gas', position: [3, 18] },
        { name: 'Potasio', symbol: 'K', atomicNumber: 19, category: 'alkali-metal', position: [4, 1] },
        { name: 'Calcio', symbol: 'Ca', atomicNumber: 20, category: 'alkaline-earth-metal', position: [4, 2] },
        { name: 'Escandio', symbol: 'Sc', atomicNumber: 21, category: 'transition-metal', position: [4, 3] },
        { name: 'Titanio', symbol: 'Ti', atomicNumber: 22, category: 'transition-metal', position: [4, 4] },
        { name: 'Vanadio', symbol: 'V', atomicNumber: 23, category: 'transition-metal', position: [4, 5] },
        { name: 'Cromo', symbol: 'Cr', atomicNumber: 24, category: 'transition-metal', position: [4, 6] },
        { name: 'Manganeso', symbol: 'Mn', atomicNumber: 25, category: 'transition-metal', position: [4, 7] },
        { name: 'Hierro', symbol: 'Fe', atomicNumber: 26, category: 'transition-metal', position: [4, 8] },
        { name: 'Cobalto', symbol: 'Co', atomicNumber: 27, category: 'transition-metal', position: [4, 9] },
        { name: 'Níquel', symbol: 'Ni', atomicNumber: 28, category: 'transition-metal', position: [4, 10] },
        { name: 'Cobre', symbol: 'Cu', atomicNumber: 29, category: 'transition-metal', position: [4, 11] },
        { name: 'Zinc', symbol: 'Zn', atomicNumber: 30, category: 'transition-metal', position: [4, 12] },
        { name: 'Galio', symbol: 'Ga', atomicNumber: 31, category: 'metal', position: [4, 13] },
        { name: 'Germanio', symbol: 'Ge', atomicNumber: 32, category: 'metalloid', position: [4, 14] },
        { name: 'Arsénico', symbol: 'As', atomicNumber: 33, category: 'metalloid', position: [4, 15] },
        { name: 'Selenio', symbol: 'Se', atomicNumber: 34, category: 'nonmetal', position: [4, 16] },
        { name: 'Bromo', symbol: 'Br', atomicNumber: 35, category: 'nonmetal', position: [4, 17] },
        { name: 'Kriptón', symbol: 'Kr', atomicNumber: 36, category: 'noble-gas', position: [4, 18] },
        { name: 'Rubidio', symbol: 'Rb', atomicNumber: 37, category: 'alkali-metal', position: [5, 1] },
        { name: 'Estroncio', symbol: 'Sr', atomicNumber: 38, category: 'alkaline-earth-metal', position: [5, 2] },
        { name: 'Itrio', symbol: 'Y', atomicNumber: 39, category: 'transition-metal', position: [5, 3] },
        { name: 'Zirconio', symbol: 'Zr', atomicNumber: 40, category: 'transition-metal', position: [5, 4] },
        { name: 'Niobio', symbol: 'Nb', atomicNumber: 41, category: 'transition-metal', position: [5, 5] },
        { name: 'Molibdeno', symbol: 'Mo', atomicNumber: 42, category: 'transition-metal', position: [5, 6] },
        { name: 'Tecnicio', symbol: 'Tc', atomicNumber: 43, category: 'transition-metal', position: [5, 7] },
        { name: 'Rutenio', symbol: 'Ru', atomicNumber: 44, category: 'transition-metal', position: [5, 8] },
        { name: 'Rodio', symbol: 'Rh', atomicNumber: 45, category: 'transition-metal', position: [5, 9] },
        { name: 'Paladio', symbol: 'Pd', atomicNumber: 46, category: 'transition-metal', position: [5, 10] },
        { name: 'Plata', symbol: 'Ag', atomicNumber: 47, category: 'transition-metal', position: [5, 11] },
        { name: 'Cadmio', symbol: 'Cd', atomicNumber: 48, category: 'transition-metal', position: [5, 12] },
        { name: 'Indio', symbol: 'In', atomicNumber: 49, category: 'metal', position: [5, 13] },
        { name: 'Estaño', symbol: 'Sn', atomicNumber: 50, category: 'metal', position: [5, 14] },
        { name: 'Antimonio', symbol: 'Sb', atomicNumber: 51, category: 'metalloid', position: [5, 15] },
        { name: 'Telurio', symbol: 'Te', atomicNumber: 52, category: 'metalloid', position: [5, 16] },
        { name: 'Yodo', symbol: 'I', atomicNumber: 53, category: 'nonmetal', position: [5, 17] },
        { name: 'Xenón', symbol: 'Xe', atomicNumber: 54, category: 'noble-gas', position: [5, 18] },
        { name: 'Cesio', symbol: 'Cs', atomicNumber: 55, category: 'alkali-metal', position: [6, 1] },
        { name: 'Bario', symbol: 'Ba', atomicNumber: 56, category: 'alkaline-earth-metal', position: [6, 2] },
        { name: 'Lantano', symbol: 'La', atomicNumber: 57, category: 'inner-transition-metal', position: [6, 3] },
        { name: 'Cerio', symbol: 'Ce', atomicNumber: 58, category: 'inner-transition-metal', position: [8, 4] },
        { name: 'Praseodimio', symbol: 'Pr', atomicNumber: 59, category: 'inner-transition-metal', position: [8, 5] },
        { name: 'Neodimio', symbol: 'Nd', atomicNumber: 60, category: 'inner-transition-metal', position: [8, 6] },
        { name: 'Prometio', symbol: 'Pm', atomicNumber: 61, category: 'inner-transition-metal', position: [8, 7] },
        { name: 'Samario', symbol: 'Sm', atomicNumber: 62, category: 'inner-transition-metal', position: [8, 8] },
        { name: 'Europio', symbol: 'Eu', atomicNumber: 63, category: 'inner-transition-metal', position: [8, 9] },
        { name: 'Gadolinio', symbol: 'Gd', atomicNumber: 64, category: 'inner-transition-metal', position: [8, 10] },
        { name: 'Terbio', symbol: 'Tb', atomicNumber: 65, category: 'inner-transition-metal', position: [8, 11] },
        { name: 'Disprosio', symbol: 'Dy', atomicNumber: 66, category: 'inner-transition-metal', position: [8, 12] },
        { name: 'Holmio', symbol: 'Ho', atomicNumber: 67, category: 'inner-transition-metal', position: [8, 13] },
        { name: 'Erbio', symbol: 'Er', atomicNumber: 68, category: 'inner-transition-metal', position: [8, 14] },
        { name: 'Tulio', symbol: 'Tm', atomicNumber: 69, category: 'inner-transition-metal', position: [8, 15] },
        { name: 'Iterbio', symbol: 'Yb', atomicNumber: 70, category: 'inner-transition-metal', position: [8, 16] },
        { name: 'Lutecio', symbol: 'Lu', atomicNumber: 71, category: 'inner-transition-metal', position: [8, 17] },
        { name: 'Hafnio', symbol: 'Hf', atomicNumber: 72, category: 'transition-metal', position: [6, 4] },
        { name: 'Tántalo', symbol: 'Ta', atomicNumber: 73, category: 'transition-metal', position: [6, 5] },
        { name: 'Wolframio', symbol: 'W', atomicNumber: 74, category: 'transition-metal', position: [6, 6] },
        { name: 'Renio', symbol: 'Re', atomicNumber: 75, category: 'transition-metal', position: [6, 7] },
        { name: 'Osmio', symbol: 'Os', atomicNumber: 76, category: 'transition-metal', position: [6, 8] },
        { name: 'Iridio', symbol: 'Ir', atomicNumber: 77, category: 'transition-metal', position: [6, 9] },
        { name: 'Platino', symbol: 'Pt', atomicNumber: 78, category: 'transition-metal', position: [6, 10] },
        { name: 'Oro', symbol: 'Au', atomicNumber: 79, category: 'transition-metal', position: [6, 11] },
        { name: 'Mercurio', symbol: 'Hg', atomicNumber: 80, category: 'transition-metal', position: [6, 12] },
        { name: 'Talio', symbol: 'Tl', atomicNumber: 81, category: 'metal', position: [6, 13] },
        { name: 'Plomo', symbol: 'Pb', atomicNumber: 82, category: 'metal', position: [6, 14] },
        { name: 'Bismuto', symbol: 'Bi', atomicNumber: 83, category: 'metal', position: [6, 15] },
        { name: 'Polonio', symbol: 'Po', atomicNumber: 84, category: 'metalloid', position: [6, 16] },
        { name: 'Astato', symbol: 'At', atomicNumber: 85, category: 'nonmetal', position: [6, 17] },
        { name: 'Radón', symbol: 'Rn', atomicNumber: 86, category: 'noble-gas', position: [6, 18] },
        { name: 'Francio', symbol: 'Fr', atomicNumber: 87, category: 'alkali-metal', position: [7, 1] },
        { name: 'Radio', symbol: 'Ra', atomicNumber: 88, category: 'alkaline-earth-metal', position: [7, 2] },
        { name: 'Actinio', symbol: 'Ac', atomicNumber: 89, category: 'inner-transition-metal', position: [7, 3] },
        { name: 'Torio', symbol: 'Th', atomicNumber: 90, category: 'inner-transition-metal', position: [9, 4] },
        { name: 'Protactinio', symbol: 'Pa', atomicNumber: 91, category: 'inner-transition-metal', position: [9, 5] },
        { name: 'Uranio', symbol: 'U', atomicNumber: 92, category: 'inner-transition-metal', position: [9, 6] },
        { name: 'Neptunio', symbol: 'Np', atomicNumber: 93, category: 'inner-transition-metal', position: [9, 7] },
        { name: 'Plutonio', symbol: 'Pu', atomicNumber: 94, category: 'inner-transition-metal', position: [9, 8] },
        { name: 'Americio', symbol: 'Am', atomicNumber: 95, category: 'inner-transition-metal', position: [9, 9] },
        { name: 'Curio', symbol: 'Cm', atomicNumber: 96, category: 'inner-transition-metal', position: [9, 10] },
        { name: 'Berkelio', symbol: 'Bk', atomicNumber: 97, category: 'inner-transition-metal', position: [9, 11] },
        { name: 'Californio', symbol: 'Cf', atomicNumber: 98, category: 'inner-transition-metal', position: [9, 12] },
        { name: 'Einstenio', symbol: 'Es', atomicNumber: 99, category: 'inner-transition-metal', position: [9, 13] },
        { name: 'Fermio', symbol: 'Fm', atomicNumber: 100, category: 'inner-transition-metal', position: [9, 14] },
        { name: 'Mendelevio', symbol: 'Md', atomicNumber: 101, category: 'inner-transition-metal', position: [9, 15] },
        { name: 'Nobelio', symbol: 'No', atomicNumber: 102, category: 'inner-transition-metal', position: [9, 16] },
        { name: 'Laurencio', symbol: 'Lr', atomicNumber: 103, category: 'inner-transition-metal', position: [9, 17] },
        { name: 'Rutherfordio', symbol: 'Rf', atomicNumber: 104, category: 'transition-metal', position: [7, 4] },
        { name: 'Dubnio', symbol: 'Db', atomicNumber: 105, category: 'transition-metal', position: [7, 5] },
        { name: 'Seaborgio', symbol: 'Sg', atomicNumber: 106, category: 'transition-metal', position: [7, 6] },
        { name: 'Bohrio', symbol: 'Bh', atomicNumber: 107, category: 'transition-metal', position: [7, 7] },
        { name: 'Hassio', symbol: 'Hs', atomicNumber: 108, category: 'transition-metal', position: [7, 8] },
        { name: 'Meitnerio', symbol: 'Mt', atomicNumber: 109, category: 'transition-metal', position: [7, 9] },
        { name: 'Darmstadio', symbol: 'Ds', atomicNumber: 110, category: 'transition-metal', position: [7, 10] },
        { name: 'Roentgenio', symbol: 'Rg', atomicNumber: 111, category: 'transition-metal', position: [7, 11] },
        { name: 'Copernicio', symbol: 'Cn', atomicNumber: 112, category: 'transition-metal', position: [7, 12] },
        { name: 'Nihonium', symbol: 'Nh', atomicNumber: 113, category: 'metal', position: [7, 13] },
        { name: 'Flerovio', symbol: 'Fl', atomicNumber: 114, category: 'metal', position: [7, 14] },
        { name: 'Moscovium', symbol: 'Mc', atomicNumber: 115, category: 'metal', position: [7, 15] },
        { name: 'Livermorio', symbol: 'Lv', atomicNumber: 116, category: 'metal', position: [7, 16] },
        { name: 'Tenesino', symbol: 'Ts', atomicNumber: 117, category: 'nonmetal', position: [7, 17] },
        { name: 'Oganesón', symbol: 'Og', atomicNumber: 118, category: 'noble-gas', position: [7, 18] }
    ];
    
    const table = document.getElementById('periodic-table');
    
    elements.forEach(element => {
        const el = document.createElement('div');
        el.className = `element ${element.category}`;
        el.style.gridColumn = element.position[1];
        el.style.gridRow = element.position[0];
        el.setAttribute('data-atomic-number', element.atomicNumber); 
        el.innerHTML = `<span>${element.symbol}</span><br>${element.name}`;
        table.appendChild(el);
    });
    
