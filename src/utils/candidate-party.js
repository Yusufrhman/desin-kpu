import gelora from '../assets/images/party/gelora.png';
import gerindra from '../assets/images/party/gerindra.png';
import nasdem from '../assets/images/party/nasdem.png';
import pdip from '../assets/images/party/pdip.png';
import pkb from '../assets/images/party/pkb.png';
import golkar from '../assets/images/party/golkar.png';
import perindo from '../assets/images/party/perindo.png';
import pks from '../assets/images/party/pks.png';
import pan from '../assets/images/party/pan.png';
import abdurahman from '../assets/images/candidate/AbduRahman.png';
// import aliramlan from '../assets/images/candidate/AliRamlan.png'
import allisaputri from '../assets/images/candidate/AllisaPutri.png';
import ayulestari from '../assets/images/candidate/AyuLestari.png';
import christianabimanyu from '../assets/images/candidate/ChristianAbimanyu.png';
import muhammadaji from '../assets/images/candidate/MuhammadAji.png';
import putriagung from '../assets/images/candidate/PutriAgung.png';
import putriayu from '../assets/images/candidate/PutriAyu.png';
import putriramdani from '../assets/images/candidate/PutriRamdani.png';

const parties = [
    {
        logo: gelora,
        name: 'Gelora',
        description: 'Description for Gelora'
    },
    {
        logo: gerindra,
        name: 'Gerindra',
        description: 'Description for Gerindra'
    },
    {
        logo: nasdem,
        name: 'Nasdem',
        description: 'Description for Nasdem'
    },
    {
        logo: pdip,
        name: 'PDIP',
        description: 'Description for PDIP'
    },
    {
        logo: pkb,
        name: 'PKB',
        description: 'Description for PKB'
    },
    {
        logo: golkar,
        name: 'Golkar',
        description: 'Description for Golkar'
    },
    {
        logo: perindo,
        name: 'Perindo',
        description: 'Description for Perindo'
    },
    {
        logo: pks,
        name: 'PKS',
        description: 'Description for PKS'
    },
    {
        logo: pan,
        name: 'PAN',
        description: 'Description for PAN'
    }
];


const candidates = [
    {
        number: 1,
        name: 'Ali Ramlan',
        city: 'Surabaya',
        party: parties[1], // Gerindra
        image: muhammadaji
    },
    {
        number: 2,
        name: 'Abdu Rahman',
        city: 'Malang',
        party: parties[2], // Nasdem
        image: abdurahman
    },
    {
        number: 3,
        name: 'Allisa Putri',
        city: 'Kediri',
        party: parties[3], // PDIP
        image: allisaputri
    },
    {
        number: 4,
        name: 'Ayu Lestari',
        city: 'Blitar',
        party: parties[4], // PKB
        image: ayulestari
    },
    {
        number: 5,
        name: 'Christian Abimanyu',
        city: 'Jember',
        party: parties[5], // Golkar
        image: christianabimanyu
    },
    {
        number: 6,
        name: 'Muhammad Aji',
        city: 'Probolinggo',
        party: parties[6], // Perindo
        image: muhammadaji
    },
    {
        number: 7,
        name: 'Putri Agung',
        city: 'Banyuwangi',
        party: parties[7], // PKS
        image: putriagung
    },
    {
        number: 8,
        name: 'Putri Ayu',
        city: 'Madiun',
        party: parties[8], // PAN
        image: putriayu
    },
    {
        number: 9,
        name: 'Putri Ramdani',
        city: 'Mojokerto',
        party: parties[0], // Gelora
        image: putriramdani
    },
    {
        number: 10,
        name: 'Rina Sari',
        city: 'Pasuruan',
        party: parties[1], // Gerindra
        image: abdurahman
    },
    {
        number: 11,
        name: 'Dewi Anggraeni',
        city: 'Sidoarjo',
        party: parties[2], // Nasdem
        image: allisaputri
    },
    {
        number: 12,
        name: 'Budi Santoso',
        city: 'Lumajang',
        party: parties[3], // PDIP
        image: christianabimanyu
    },
    {
        number: 13,
        name: 'Siti Aminah',
        city: 'Tuban',
        party: parties[4], // PKB
        image: ayulestari
    },
    {
        number: 14,
        name: 'Agus Salim',
        city: 'Ngawi',
        party: parties[5], // Golkar
        image: muhammadaji
    },
    {
        number: 15,
        name: 'Dian Pertiwi',
        city: 'Ponorogo',
        party: parties[6], // Perindo
        image: putriagung
    },
    {
        number: 16,
        name: 'Rizky Maulana',
        city: 'Magetan',
        party: parties[7], // PKS
        image: putriayu
    },
    {
        number: 17,
        name: 'Nina Kurnia',
        city: 'Gresik',
        party: parties[8], // PAN
        image: putriramdani
    },
    {
        number: 18,
        name: 'Rina Wijaya',
        city: 'Bojonegoro',
        party: parties[0], // Gelora
        image: abdurahman
    },
    {
        number: 19,
        name: 'Dewi Sartika',
        city: 'Lamongan',
        party: parties[1], // Gerindra
        image: allisaputri
    },
    {
        number: 20,
        name: 'Bambang Tri',
        city: 'Bangkalan',
        party: parties[2], // Nasdem
        image: christianabimanyu
    },
    {
        number: 21,
        name: 'Siti Nurhaliza',
        city: 'Sumenep',
        party: parties[3], // PDIP
        image: ayulestari
    },
    {
        number: 22,
        name: 'Agung Prasetyo',
        city: 'Pamekasan',
        party: parties[4], // PKB
        image: muhammadaji
    },
    {
        number: 23,
        name: 'Dian Kusuma',
        city: 'Sampang',
        party: parties[5], // Golkar
        image: putriagung
    },
    {
        number: 24,
        name: 'Rizal Fahmi',
        city: 'Batu',
        party: parties[6], // Perindo
        image: putriayu
    },
    {
        number: 25,
        name: 'Nina Sari',
        city: 'Kediri',
        party: parties[7], // PKS
        image: putriramdani
    },
    {
        number: 26,
        name: 'Rina Anggraeni',
        city: 'Blitar',
        party: parties[8], // PAN
        image: abdurahman
    },
    {
        number: 27,
        name: 'Dewi Lestari',
        city: 'Jombang',
        party: parties[0], // Gelora
        image: allisaputri
    },
    {
        number: 28,
        name: 'Budi Prasetyo',
        city: 'Nganjuk',
        party: parties[1], // Gerindra
        image: christianabimanyu
    },
    {
        number: 29,
        name: 'Siti Aisyah',
        city: 'Madiun',
        party: parties[2], // Nasdem
        image: ayulestari
    },
    {
        number: 30,
        name: 'Agus Wijaya',
        city: 'Magetan',
        party: parties[3], // PDIP
        image: muhammadaji
    },
    {
        number: 31,
        name: 'Dian Anggraeni',
        city: 'Ngawi',
        party: parties[4], // PKB
        image: putriagung
    },
    {
        number: 32,
        name: 'Rizky Pratama',
        city: 'Pacitan',
        party: parties[5], // Golkar
        image: putriayu
    },
    {
        number: 33,
        name: 'Nina Wijaya',
        city: 'Ponorogo',
        party: parties[6], // Perindo
        image: putriramdani
    },
    {
        number: 34,
        name: 'Rina Kusuma',
        city: 'Trenggalek',
        party: parties[7], // PKS
        image: abdurahman
    },
    {
        number: 35,
        name: 'Dewi Prasetyo',
        city: 'Tulungagung',
        party: parties[8], // PAN
        image: allisaputri
    },
    {
        number: 36,
        name: 'Budi Anggraeni',
        city: 'Kediri',
        party: parties[0], // Gelora
        image: christianabimanyu
    },
    {
        number: 37,
        name: 'Siti Pratama',
        city: 'Blitar',
        party: parties[1], // Gerindra
        image: ayulestari
    },
    {
        number: 38,
        name: 'Agus Kusuma',
        city: 'Malang',
        party: parties[2], // Nasdem
        image: muhammadaji
    },
    {
        number: 39,
        name: 'Dian Wijaya',
        city: 'Pasuruan',
        party: parties[3], // PDIP
        image: putriagung
    },
    {
        number: 40,
        name: 'Rizky Sartika',
        city: 'Probolinggo',
        party: parties[4], // PKB
        image: putriayu
    },
    {
        number: 41,
        name: 'Nina Prasetyo',
        city: 'Situbondo',
        party: parties[5], // Golkar
        image: putriramdani
    },
    {
        number: 42,
        name: 'Rina Anggraeni',
        city: 'Bondowoso',
        party: parties[6], // Perindo
        image: abdurahman
    },
    {
        number: 43,
        name: 'Dewi Kusuma',
        city: 'Banyuwangi',
        party: parties[7], // PKS
        image: allisaputri
    },
    {
        number: 44,
        name: 'Budi Pratama',
        city: 'Jember',
        party: parties[8], // PAN
        image: christianabimanyu
    },
    {
        number: 45,
        name: 'Siti Anggraeni',
        city: 'Lumajang',
        party: parties[0], // Gelora
        image: ayulestari
    },
    {
        number: 46,
        name: 'Agus Prasetyo',
        city: 'Probolinggo',
        party: parties[1], // Gerindra
        image: muhammadaji
    },
    {
        number: 47,
        name: 'Dian Sartika',
        city: 'Pasuruan',
        party: parties[2], // Nasdem
        image: putriagung
    }
];

export { candidates, parties };