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
import aliramlan from '../assets/images/candidate/AliRamlan.png'
import allisaputri from '../assets/images/candidate/AllisaPutri.png';
import ayulestari from '../assets/images/candidate/AyuLestari.png';
import christianabimanyu from '../assets/images/candidate/ChristianAbimanyu.png';
import muhammadaji from '../assets/images/candidate/MuhammadAji.png';
import putriagung from '../assets/images/candidate/PutriAgung.png';
import putriayu from '../assets/images/candidate/PutriAyu.png';
import putriramdani from '../assets/images/candidate/PutriRamdani.png';

const candidates = [
    {
        number: 1,
        name: 'Ali Ramlan',
        city: 'Malang',
        partai: gerindra,
        image: aliramlan
    },
    {
        number: 2,
        name: 'Abdu Rahman',
        city: 'Jakarta',
        partai: nasdem,
        image: abdurahman
    },
    {
        number: 3,
        name: 'Allisa Putri',
        city: 'Bandung',
        partai: pdip,
        image: allisaputri
    },
    {
        number: 4,
        name: 'Ayu Lestari',
        city: 'Surabaya',
        partai: pkb,
        image: ayulestari
    },
    {
        number: 5,
        name: 'Christian Abimanyu',
        city: 'Yogyakarta',
        partai: golkar,
        image: christianabimanyu
    },
    {
        number: 6,
        name: 'Muhammad Aji',
        city: 'Semarang',
        partai: perindo,
        image: muhammadaji
    },
    {
        number: 7,
        name: 'Putri Agung',
        city: 'Denpasar',
        partai: pks,
        image: putriagung
    },
    {
        number: 8,
        name: 'Putri Ayu',
        city: 'Medan',
        partai: pan,
        image: putriayu
    },
    {
        number: 9,
        name: 'Putri Ramdani',
        city: 'Makassar',
        partai: gelora,
        image: putriramdani
    }
];

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

export { candidates, parties };