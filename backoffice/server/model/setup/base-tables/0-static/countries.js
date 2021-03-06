Meteor.startup(function() {
  Countries.remove({});

  if (Countries.find().count() === 0) {
    var countries = [
      {name: 'ITALIA'},
      {name: 'AFGHANISTAN'},
      {name: 'ALBANIA'},
      {name: 'ALGERIA'},
      {name: 'ANDORRA'},
      {name: 'ANGOLA'},
      {name: 'ANGUILLA'},
      {name: 'ANTIGUA E BARBUDA'},
      {name: 'ANTILLE OLANDESI'},
      {name: 'ARABIA SAUDITA'},
      {name: 'ARGENTINA'},
      {name: 'AUSTRALIA'},
      {name: 'AUSTRIA'},
      {name: 'BAHAMAS'},
      {name: 'BAHREIN'},
      {name: 'BANGLADESH'},
      {name: 'BARBADOS'},
      {name: 'BELGIO'},
      {name: 'BELIZE'},
      {name: 'BENIN'},
      {name: 'BERMUDA'},
      {name: 'BHUTAN'},
      {name: 'BIRMANIA'},
      {name: 'BOLIVIA'},
      {name: 'BOTSWANA'},
      {name: 'BRASILE'},
      {name: 'BRUNEI'},
      {name: 'BULGARIA'},
      {name: 'BURKINA'},
      {name: 'BURUNDI'},
      {name: 'CAMBOGIA'},
      {name: 'CAMERUN'},
      {name: 'CANADA'},
      {name: 'CAPO VERDE'},
      {name: 'CAYMAN'},
      {name: 'CECOSLOVACCHIA'},
      {name: 'CENTRAFRICANA (REPUBBLICA)'},
      {name: 'CEUTA E MELILLA'},
      {name: 'CIAD'},
      {name: 'CILE'},
      {name: 'CINA'},
      {name: 'CIPRO'},
      {name: 'COLOMBIA'},
      {name: 'COMORE'},
      {name: 'CONGO'},
      {name: 'COOK'},
      {name: 'COREA DEL NORD'},
      {name: 'COREA DEL SUD'},
      {name: 'COSTA D\'AVORIO'},
      {name: 'COSTA RICA'},
      {name: 'CUBA'},
      {name: 'DANIMARCA'},
      {name: 'DOMINICA'},
      {name: 'DOMINICANA (REPUBBLICA)'},
      {name: 'ECUADOR'},
      {name: 'EGITTO'},
      {name: 'EL SALVADOR'},
      {name: 'EMIRATI ARABI UNITI'},
      {name: 'ETIOPIA'},
      {name: 'FALKLAND'},
      {name: 'FIGI'},
      {name: 'FILIPPINE'},
      {name: 'FINLANDIA'},
      {name: 'FRANCIA'},
      {name: 'GABON'},
      {name: 'GAMBIA'},
      {name: 'GERMANIA'},
      {name: 'GHANA'},
      {name: 'GIAMAICA'},
      {name: 'GIAPPONE'},
      {name: 'GIBILTERRA'},
      {name: 'GIBUTI'},
      {name: 'GIORDANIA'},
      {name: 'GRAN BRETAGNA'},
      {name: 'GRECIA'},
      {name: 'GRENADA'},
      {name: 'GUADALUPA'},
      {name: 'GUAM'},
      {name: 'GUATEMALA'},
      {name: 'GUERNSEY E ALDERNEY'},
      {name: 'GUIANA FRANCESE'},
      {name: 'GUINEA'},
      {name: 'GUINEA BISSAU'},
      {name: 'GUINEA EQUATORIALE'},
      {name: 'GUYANA'},
      {name: 'HAITI'},
      {name: 'HONDURAS'},
      {name: 'HONG KONG'},
      {name: 'INDIA'},
      {name: 'INDIE OCCIDENTALI'},
      {name: 'INDONESIA'},
      {name: 'IRAN'},
      {name: 'IRAQ'},
      {name: 'IRLANDA'},
      {name: 'ISLANDA'},
      {name: 'ISRAELE'},
      {name: 'JERSEY'},
      {name: 'JUGOSLAVIA'},
      {name: 'KENIA'},
      {name: 'KIRIBATI'},
      {name: 'KUWAIT'},
      {name: 'LAOS'},
      {name: 'LESOTHO'},
      {name: 'LIBANO'},
      {name: 'LIBERIA'},
      {name: 'LIBIA'},
      {name: 'LIECHTENSTEIN'},
      {name: 'LUSSEMBURGO'},
      {name: 'MACAO'},
      {name: 'MADAGASCAR'},
      {name: 'MALAWI'},
      {name: 'MALAYSIA'},
      {name: 'MALDIVE'},
      {name: 'MALI'},
      {name: 'MALTA'},
      {name: 'MAN'},
      {name: 'MARCUS'},
      {name: 'MARIANNE SETTENTRIONALI'},
      {name: 'MAROCCO'},
      {name: 'MARSHALL'},
      {name: 'MARTINICA'},
      {name: 'MAURITANIA'},
      {name: 'MAURITIUS'},
      {name: 'MESSICO'},
      {name: 'MONACO (PRINCIPATO DI)'},
      {name: 'MONGOLIA'},
      {name: 'MONTE SANTO'},
      {name: 'MOZAMBICO'},
      {name: 'NAMIBIA'},
      {name: 'NAURU'},
      {name: 'NEPAL'},
      {name: 'NICARAGUA'},
      {name: 'NIGER'},
      {name: 'NIGERIA'},
      {name: 'NIUE'},
      {name: 'NORVEGIA'},
      {name: 'NUOVA CALEDONIA'},
      {name: 'NUOVA ZELANDA'},
      {name: 'OMAN'},
      {name: 'PAESI BASSI'},
      {name: 'PAKISTAN'},
      {name: 'PANAMA'},
      {name: 'PAPUASIA-NUOVA GUINEA'},
      {name: 'PARAGUAY'},
      {name: 'PERU\''},
      {name: 'PITCAIRN'},
      {name: 'POLINESIA FRANCESE'},
      {name: 'POLONIA'},
      {name: 'PORTOGALLO'},
      {name: 'PUERTO RICO'},
      {name: 'QATAR'},
      {name: 'RIUNIONE'},
      {name: 'ROMANIA'},
      {name: 'RUANDA'},
      {name: 'RYU KYU'},
      {name: 'S.ELENA'},
      {name: 'SAHARA'},
      {name: 'SAINT KITTS E NEVIS'},
      {name: 'SAINT LUCIA'},
      {name: 'SAINT PIERRE E MIQUELON'},
      {name: 'SAINT VINCENT E GRENADINE'},
      {name: 'SALOMONE'},
      {name: 'SAMOA AMERICANE'},
      {name: 'SAMOA OCCIDENTALI'},
      {name: 'SAN MARINO (REPUBBLICA DI)'},
      {name: 'SAO TOME\' E PRINCIPE'},
      {name: 'SENEGAL'},
      {name: 'SEYCHELLES'},
      {name: 'SIERRA LEONE'},
      {name: 'SINGAPORE'},
      {name: 'SIRIA'},
      {name: 'SOMALIA'},
      {name: 'SPAGNA'},
      {name: 'SRI LANKA'},
      {name: 'STATI UNITI'},
      {name: 'SUDAFRICA'},
      {name: 'SUDAN'},
      {name: 'SURINAME'},
      {name: 'SVEZIA'},
      {name: 'SVIZZERA'},
      {name: 'SWAZILAND'},
      {name: 'TAIWAN'},
      {name: 'TANZANIA'},
      {name: 'TERR.BRITANNICO OCEANO INDIANO'},
      {name: 'THAILANDIA'},
      {name: 'TOGO'},
      {name: 'TONGA'},
      {name: 'TRINIDAD E TOBAGO'},
      {name: 'TUNISIA'},
      {name: 'TURCHIA'},
      {name: 'TUVALU'},
      {name: 'U.R.S.S.'},
      {name: 'UGANDA'},
      {name: 'UNGHERIA'},
      {name: 'URUGUAY'},
      {name: 'VANUATU'},
      {name: 'VATICANO (CITTA\' DEL)'},
      {name: 'VENEZUELA'},
      {name: 'VERGINI AMERICANE'},
      {name: 'VIETNAM'},
      {name: 'WALLIS E FUTUNA'},
      {name: 'YEMEN'},
      {name: 'ZAIRE'},
      {name: 'ZAMBIA'},
      {name: 'ZIMBABWE'},
      {name: 'ANTILLE BRITANNICHE'},
      {name: 'ARMENIA'},
      {name: 'AZERBAIGIAN'},
      {name: 'BIELORUSSIA'},
      {name: 'BOSNIA-ERZEGOVINA'},
      {name: 'CROAZIA'},
      {name: 'DUBAI'},
      {name: 'ERITREA'},
      {name: 'ESTONIA'},
      {name: 'FAROER'},
      {name: 'GEORGIA'},
      {name: 'GERUSALEMME'},
      {name: 'ISOLE CANARIE'},
      {name: 'KAZAKISTAN'},
      {name: 'KHIRGIZIA'},
      {name: 'LETTONIA'},
      {name: 'LITUANIA'},
      {name: 'LUOGO SCONOSCIUTO'},
      {name: 'MACEDONIA'},
      {name: 'MALESIA'},
      {name: 'MYANMAR'},
      {name: 'MICRONESIA'},
      {name: 'MOLDAVIA'},
      {name: 'MOLDOVA'},
      {name: 'OLANDA'},
      {name: 'REP. CECA'},
      {name: 'REP. SLOVACCA'},
      {name: 'RUSSIA'},
      {name: 'SLOVENIA'},
      {name: 'TAGIKISTAN'},
      {name: 'TURKMENISTAN'},
      {name: 'UCRAINA'},
      {name: 'UZBEKISTAN'},
      {name: 'NUOVE EBRIDI'},
      {name: 'SARAWAK'},
      {name: 'NUOVE EBRIDI'},
      {name: 'SARAWAK'},
    ];

    var countryId = 0;
    countries.forEach(function(country) {
      country.id = ++countryId;
      Countries.insert(country);
    });

    console.log('added', Countries.find().count(), 'countries.');
  }
});
