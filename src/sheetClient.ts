import { google } from 'googleapis';
// import { client_email, private_key } from '../secrets.json' assert { type: 'json'}

export const SHEET_ID = '1OorXTpY8Rxw43oopnufJiggSxV1H_0DuHVZPkvLdFPc';

const client = new google.auth.JWT('node-wb@wildberries-test-441016.iam.gserviceaccount.com', 'null', "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDlSsarlDzeOXuI\nYwrfUf2MepWPfB2lpAmvm7ZSF/qIRTdgXMe2+f4YnZhvCsySkqPCP06EhWrSwYdt\n02qFgFCQQtrTCoVyEG6pnir4dlgkyq0/gd7eFBEqFXWK3NL8HpiD+ZiTTmWAffN1\nM0WIwy8bleasb2N92mZ01XwqkRuJp+DRLAh1Unb+1X3P4Q0Ke7pp3aZ+irhLGXPO\nvnG7uryMddTJB8u1OqCnKRXUE4Lbm03FO6q2jSxHNsdBVhwIcyxsEX9tvXyUrOT+\n0m7/4oCi/Ghwuw1zrylC8ACmxTT4VyunYli9ep6jAHdXSwZ1gEF3NiD0aqQpz8UU\nwYaw+bJTAgMBAAECggEABvQfFUoAFI8yt16lkEM4yL9Y9MqDTagtYQV8YH34q5RJ\nyyLVLa/kLFPvMQLnVFSdIcFwvKUdKboTxNliBB1xlAZrA3ZwuJZV/M/epr1UC/2X\nhnMGUr7SDHAtKeJrhZjZ8DqsDV+VxXFMZlQBOlYNAi2oGregEUuDyuxEgTf4WVLO\n0Peje8Reoo5gEDQokFVmToHzSDcBime+Gl7qoy0feeSiz12EWQ8Z/A3Z+L/56s0G\n+Z1044OEmA2SrKTpPqDUs+e6Xc9BOfqUD34lA/NbeDJluPm1hNpgp3CpDdjaJ73B\nrb+90Q/WDzOIfw8SIhdJM9vDYlbECjsnCJXh+8PYyQKBgQD9/VBBzh76RndVql/m\n5c0CpGNCzdoQnqfRFXOK2Q+2wmIQqkGEiegudcdVFnSzaOEqSUJqFQ6kRDHJF7hH\n5kHwDj9VFiWyQOjjZPOEBlwORUCE+1Hq/GPiV6AZBok2+kNH6/ojBa+Ve2cZG9tR\nLDM4NldNwRy696MG8PHYmnC7mQKBgQDnG2pelz+LBvADXMw1NunBxAczTXkbapaJ\nhx7Zek1tFsQjb468Tr/9N8dgciW2S6RVw6mWCEruVpesJnMk46XTfSEm/QcCQ03C\nF0zqk3atrIPu38/8deP5d2lYM1d94kRlHbISMW4F3YY3EEcsmnVg83aGrVPqfAUJ\nZVHDpNJwywKBgG0Hob0t42RifXW7toFi4neg469YuKRrxvRdNgVDmphEp14qCAgC\nPzY6fwAKrLwbaJUDb8wkD+36DDkbwpKyyFlpdExtPm9fp9l9i3+AT2Ic3k53qDms\ncKBIJ0S25o5ALkOgi/ceyLntiFth9urIg5A824tYO6ITDdu78MWfvob5AoGAbfvR\nGmUWe354uNDv6h9RDcLRvmuPSCnorFieqNcYg+MCwu5zWlCL8+EYxGBubBwBgENW\nsK0Po++XzPibcaHZKBXzsg9Wx4/qMIVQOI6nOy3Pt93RqI8eSHm4q537dFA7Rnfk\nZ94YQzhSiF/5z1NOqy4SaTORrRUKfJc4W0hUUhMCgYBct8s72q9J3HV2Eq6gaAwX\niKstWNdZKoWcgNlZUR86srGtIiMHCaLKIdjxPDr1Lq+lY/n7WzFmN808APSoslTq\nbnO6sxbaOMAvcOl003CuJBV94uoVKWCmqx2pU0jx0fpkxBE9FiDQFLnPIjf073CY\nU1zP+VFGQ+MqtdPPfhifWg==\n-----END PRIVATE KEY-----\n", ['https://www.googleapis.com/auth/spreadsheets'] )

const sheets = google.sheets({ version: 'v4', auth: client});

export default sheets;