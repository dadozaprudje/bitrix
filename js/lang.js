function translate( crm, name ){

    var translations = {
        lead: {
            ID: 'ID',
            TITLE: 'Nosaukums',
            HONORIFIC: 'Augstvērtīgs',
            NAME: 'Vārds',
            SECOND_NAME: 'Otrs vārds',
            LAST_NAME: 'Uzvārds',
            BIRTHDATE: 'Dzimšanas datums',
            COMPANY_TITLE: 'Kompānija',
            SOURCE_ID: 'Avots',
            SOURCE_DESCRIPTION: 'Avota apraksts',
            STATUS_ID: 'Statusa ID',
            STATUS_DESCRIPTION: 'Statusa apraksts',
            POST: 'Amats',
            ADDRESS: 'Adrese',
            ADDRESS_2: 'Adrese 2',
            ADDRESS_CITY: 'Pilsēta',
            ADDRESS_POSTAL_CODE: 'Pasta indekss',
            ADDRESS_REGION: 'Reģions',
            ADDRESS_PROVINCE: 'Province',
            ADDRESS_COUNTRY: 'Valsts',
            ADDRESS_COUNTRY_CODE: 'Valsts kods',
            CURRENCY_ID: 'Valūtas kods',
            OPPORTUNITY: 'Peļņas iespēja',
            OPENED: 'Atvērts',
            COMMENTS: 'Komentāri',
            HAS_PHONE: 'Ir telefons?',
            HAS_EMAIL: 'Ir epasts?',
            ASSIGNED_BY_ID: 'Piesaistītājs ID',
            CREATED_BY_ID: 'Izveidotāja ID',
            MODIFY_BY_ID: 'Rediģētāja ID',
            DATE_CREATE: 'Izveides datums',
            DATE_MODIFY: 'Rediģēšanas datums',
            COMPANY_ID: 'Kompānijas ID',
            CONTACT_ID: 'Kontakta ID',
            DATE_CLOSED: 'Aizvēršanas datums',
            ORIGINATOR_ID: 'Iniciātora ID',
            ORIGIN_ID: 'Izcelšanās ID',
            PHONE: 'Telefons',
            EMAIL: 'Epasts',
            WEB: 'Web',
            IM: 'IM'
        },

        contact: {
            ID: 'ID',
            TITLE: 'Nosaukums',
            HONORIFIC: 'Augstvērtīgs',
            NAME: 'Vārds',
            SECOND_NAME: 'Otrs vārds',
            LAST_NAME: 'Uzvārds',
            PHOTO: 'Foto',
            BIRTHDATE: 'Dzimšanas datums',
            TYPE_ID: 'Tips',
            SOURCE_ID: 'Avots',
            SOURCE_DESCRIPTION: 'Avota apraksts',
            POST: 'Amats',
            ADDRESS: 'Adrese',
            ADDRESS_2: 'Adrese 2',
            ADDRESS_CITY: 'Pilsēta',
            ADDRESS_POSTAL_CODE: 'Pasta indekss',
            ADDRESS_REGION: 'Reģions',
            ADDRESS_PROVINCE: 'Province',
            ADDRESS_COUNTRY: 'Valsts',
            ADDRESS_COUNTRY_CODE: 'Valsts kods',
            COMMENTS: 'Komentāri',
            OPENED: 'Atvērts',
            EXPORT: 'Eksports',
            HAS_PHONE: 'Ir telefons?',
            HAS_EMAIL: 'Ir epasts?',
            ASSIGNED_BY_ID: 'Piesaistītājs ID',
            CREATED_BY_ID: 'Izveidotāja ID',
            MODIFY_BY_ID: 'Rediģētāja ID',
            DATE_CREATE: 'Izveides datums',
            DATE_MODIFY: 'Rediģēšanas datums',
            COMPANY_ID: 'Kompānijas ID',
            LEAD_ID: 'Līda ID',
            ORIGINATOR_ID: 'Iniciātora ID',
            ORIGIN_ID: 'Izcelšanās ID',
            ORIGIN_VERSION: 'Izcelšanās versija',
            PHONE: 'Telefons',
            EMAIL: 'Epasts',
            WEB: 'Web',
            IM: 'IM'
        },

        company: {
            ID: 'ID',
            TITLE: 'Nosaukums',
            COMPANY_TYPE: 'Kompānijas tips',
            LOGO: 'Logo',
            ADDRESS: 'Adrese',
            ADDRESS_2: 'Adrese 2',
            ADDRESS_CITY: 'Pilsēta',
            ADDRESS_POSTAL_CODE: 'Pasta indekss',
            ADDRESS_REGION: 'Reģions',
            ADDRESS_PROVINCE: 'Province',
            ADDRESS_COUNTRY: 'Valsts',
            ADDRESS_COUNTRY_CODE: 'Valsts kods',
            ADDRESS_LEGAL: 'Iela, māja, korpuss',
            REG_ADDRESS: 'Juridiskā drese',
            REG_ADDRESS2: 'Juridiskā adrese 2',
            REG_ADDRESS_CITY: 'Jur. adr. pilsēta',
            REG_ADDRESS_POSTAL_CODE: 'Jur. adr. pasta indekss',
            REG_ADDRESS_REGION: 'Jur. adr. reģions',
            REG_ADDRESS_PROVINCE: 'Jur. adr. province',
            REG_ADDRESS_COUNTRY: 'Jur. adr. valsts',
            REG_ADDRESS_COUNTRY_CODE: 'Jur. adr. valsts kods',
            BANKING_DETAILS: 'Bankas detaļas',
            INDUSTRY: 'Industrija',
            EMPLOYEES: 'Darbinieku skaits',
            CURRENCY_ID: 'Valūtas kods',
            REVENUE: 'Ieņēmumi',
            OPENED: 'Atvēra?',
            COMMENTS: 'Komentāri',
            HAS_PHONE: 'Ir telefons?',
            HAS_EMAIL: 'Ir epasts',
            IS_MY_COMPANY: 'Mana kompānija?',
            ASSIGNED_BY_ID: 'Piesaistītājs ID',
            CREATED_BY_ID: 'Izveidotāja ID',
            MODIFY_BY_ID: 'Rediģētāja ID',
            DATE_CREATE: 'Izveides datums',
            DATE_MODIFY: 'Rediģēšanas datums',
            LEAD_ID: 'Līda ID',
            ORIGINATOR_ID: 'Iniciātora ID',
            ORIGIN_ID: 'Izcelšanās ID',
            ORIGIN_VERSION: 'Izcelšanās versija',
            PHONE: 'Telefons',
            EMAIL: 'Epasts',
            WEB: 'Web',
            IM: 'IM'
        },

        deal: {
            ID: 'ID',
            TITLE: 'Nosaukums',
            TYPE_ID: 'Tips',
            STAGE_ID: 'Stadijas ID',
            PROBABILITY: 'Varbūtība',
            CURRENCY_ID: 'Valūtas kods',
            OPPORTUNITY: 'Peļņas iespēja',
            TAX_VALUE: 'PVN Summa',
            COMPANY_ID: 'Kompānijas ID',
            CONTACT_ID: 'Kontakta ID',
            QUOTE_ID: 'Piedāvājuma ID',
            BEGINDATE: 'Sākuma datums',
            CLOSEDATE: 'Aizvēršanas datums',
            OPENED: 'Atvērts?',
            CLOSED: 'Aizvērts?',
            COMMENTS: 'Komentāri',
            ASSIGNED_BY_ID: 'Piesaistītājs ID',
            CREATED_BY_ID: 'Izveidotāja ID',
            MODIFY_BY_ID: 'Rediģētāja ID',
            DATE_CREATE: 'Izveides datums',
            DATE_MODIFY: 'Rediģēšanas datums',
            LEAD_ID: 'Līda ID',
            ADDITIONAL_INFO: 'Papildus informācija',
            LOCATION_ID: 'Atrašanās ID',
            ORIGIN_ID: 'Izcelšanās ID',
            ORIGIN_VERSION: 'Izcelšanās versija',
        },

        quote: {
            ASSIGNED_BY_ID: 'Piesaistītājs ID',
            BEGINDATE: 'Sākuma datums',
            CLIENT_ADDR: 'Klienta adrese',
            CLIENT_CONTACT: 'Klienta kontakts',
            CLIENT_EMAIL: 'Klienta epasts',
            CLIENT_PHONE: 'Klienta telefons',
            CLIENT_TITLE: 'Klienta nosaukums',
            CLIENT_TPA_ID: 'CLIENT_TPA_ID',
            CLIENT_TP_ID: 'CLIENT_TP_ID',
            CLOSED: 'Aizvērts?',
            CLOSEDATE: 'Aizvēršanas datums',
            COMMENTS: 'Komentāri',
            COMPANY_ID: 'Kompānijas ID',
            CONTACT_ID: 'Kontakta ID',
            CONTENT: 'Saturs',
            MODIFY_BY_ID: 'Rediģētāja ID',
            DATE_CREATE: 'Izveides datums',
            DATE_MODIFY: 'Rediģēšanas datums',
            CURRENCY_ID: 'Valūtas kods',
            DEAL_ID: 'Darījuma ID',
            ID: 'ID',
            LEAD_ID: 'Līda ID',
            LOCATION_ID: 'Atrašanās ID',
            OPENED: 'Atvērts?',
            OPPORTUNITY: 'Peļņas iespēja',
            PERSON_TYPE_ID: 'Personas tips',
            QUOTE_NUMBER: 'Piedāvājuma numurs',
            STATUS_ID: 'Statusa ID',
            TAX_VALUE: 'PVN Summa',
            TERMS: 'Vienošanās',
            TITLE: 'Nosaukums'
        },

        invoice: {
            ACCOUNT_NUMBER: 'Numurs',
            COMMENTS: 'Komentāri',
            CURRENCY: 'Valūta',
            DATE_BILL: 'Izlikšanas datums',
            DATE_INSERT: 'Izveides datums',
            DATE_MARKED: 'Iezīmēšanas datums',
            DATE_PAY_BEFORE: 'Apmaksāt līdz',
            DATE_PAYED: 'Apmaksāts',
            DATE_STATUS: 'Datuma statuss',
            DATE_UPDATE: 'Atjaunošanas datums',
            EMP_PAYED_ID: 'EMP_PAYED_ID',
            EMP_STATUS_ID: 'EMP_STATUS_ID',
            ID: 'ID',
            LID: 'LID',
            ORDER_TOPIC: 'Nosaukums',
            PAY_SYSTEM_ID: 'Maksājma sistēmas ID',
            PAY_VOUCHER_DATE: 'Apmaksas kvīts datums',
            PAY_VOUCHER_NUM:  'Apmaksas kvīts numurs',
            PAYED: 'Apmaksāts',
            PERSON_TYPE_ID: 'Personas tips',
            PRICE: 'Summa',
            REASON_MARKED: 'Marķējuma iemesls',
            RESPONSIBLE_EMAIL: 'Atbildīgā epasts',
            RESPONSIBLE_ID: 'Atbildīgā ID',
            RESPONSIBLE_LAST_NAME: 'Atbildīgā uzvārds',
            RESPONSIBLE_LOGIN: 'Atbildīgā logins',
            RESPONSIBLE_NAME: 'Atbildīgā vārds',
            RESPONSIBLE_PERSONAL_PHOTO: 'Atbildīgā foto',
            RESPONSIBLE_SECOND_NAME: 'Atbildīgā otrs vārds',
            RESPONSIBLE_WORK_POSITION: 'Atbildīgā amats',
            STATUS_ID: 'Statusa ID',
            TAX_VALUE: 'PVN Summa',
            UF_COMPANY_ID: 'Kompānijas ID',
            UF_CONTACT_ID: 'Kontakta ID',
            UF_MYCOMPANY_ID: 'Manas kompānijas ID',
            UF_DEAL_ID: 'Darījuma ID',
            USER_DESCRIPTION: 'Lietotāja apraksts',
            PR_LOCATION:  'Atrašanās'
        },

        productrow: {
            CUSTOMIZED: 'Pielāgots',
            DISCOUNT_RATE: 'Atlaide %',
            DISCOUNT_SUM: 'Atlaides summa',
            DISCOUNT_TYPE_ID: 'Atlaides tips',
            DISCOUNT_PRICE: 'Atlaides summa',
            ID: 'ID',
            MEASURE_CODE: 'Mērvienības kods',
            MEASURE_NAME: 'Mērvienība',
            OWNER_ID: 'Īpašnieka ID',
            OWNER_TYPE: 'Īpašnieka tips',
            PRICE: 'Cena',
            PRICE_BRUTTO: 'Brutto cena',
            PRICE_EXCLUSIVE: 'Summa ar atlaidi',
            PRICE_NETTO: 'Netto cena',
            PRODUCT_ID: 'Produkta ID',
            PRODUCT_NAME: 'Nosaukums',
            QUANTITY: 'Daudzums',
            SORT: 'SORT',
            TAX_INCLUDED: 'PVN iekļauts',
            TAX_RATE: 'PVN likme',
            VAT_INCLUDED: 'PVN iekļauts',
            VAT_RATE: 'PVN likme'
        },

        user: {
            ACTIVE: "Aktīvs",
            EMAIL: "Epasts",
            ID: "ID",
            LAST_NAME: "Uzvārds",
            NAME: "Vārds",
            PERSONAL_BIRTHDAY: "Dzimšanas datums",
            PERSONAL_CITY: "Pilsēta",
            PERSONAL_COUNTRY: "Valsts",
            PERSONAL_FAX: "Fakss",
            PERSONAL_GENDER: "Dzimums",
            PERSONAL_ICQ: "ICQ",
            PERSONAL_MOBILE: "Personīgais mobīlais nr.",
            PERSONAL_PAGER: "Peidžeris",
            PERSONAL_PHONE: "Personīgais telefons",
            PERSONAL_PHOTO: "Foto",
            PERSONAL_PROFESSION: "Profesija",
            PERSONAL_STATE: "Novads",
            PERSONAL_STREET: "Iela",
            PERSONAL_WWW: "Mājaslapa",
            PERSONAL_ZIP: "Pasta indekss",
            SECOND_NAME: "Otrs vārds",
            UF_DEPARTMENT: "Apakšnodaļa",
            UF_DISTRICT: "Rajons",
            UF_FACEBOOK: "Facebook",
            UF_INTERESTS: "Intereses",
            UF_LINKEDIN: "LinkedIn",
            UF_PHONE_INNER: "Telefons",
            UF_SKILLS: "Prasmes",
            UF_SKYPE: "Skype",
            UF_TWITTER: "Twitter",
            UF_WEB_SITES: "Citas mājaslapas",
            UF_XING: "Xing",
            WORK_COMPANY: "Uzņēmums",
            WORK_PHONE: "Uzņēmuma telefons",
            WORK_POSITION: "Pozīcija"
        }
    };

    return translations[crm] !== undefined || translations[crm][name] !== undefined ? translations[crm][name] : name ;
}
