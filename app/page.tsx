import VerbsTable from '@/components/IrregularVerbsBoard';
;

export type VerbType = {
  index:number,
  verb: string,
  pastSimple: string,
  pastParticiple: string,
  frenchTranslation: string
}

const irregularVerbs: VerbType[] = [
  {
    verb: 'arise',
    pastSimple: 'arose',
    pastParticiple: 'arisen',
    frenchTranslation: 'survenir',
    index: 0
  },
  {
    verb: 'awake',
    pastSimple: 'awoke',
    pastParticiple: 'awoken',
    frenchTranslation: 'se réveiller',
    index: 1
  },
  {
    verb: 'be',
    pastSimple: 'was/were',
    pastParticiple: 'been',
    frenchTranslation: 'être',
    index: 2
  },
  {
    verb: 'bear',
    pastSimple: 'bore',
    pastParticiple: 'borne',
    frenchTranslation: 'supporter',
    index: 3
  },
  {
    verb: 'beat',
    pastSimple: 'beat',
    pastParticiple: 'beaten',
    frenchTranslation: 'battre',
    index: 4
  },
  {
    verb: 'become',
    pastSimple: 'became',
    pastParticiple: 'become',
    frenchTranslation: 'devenir',
    index: 5
  },
  {
    verb: 'begin',
    pastSimple: 'began',
    pastParticiple: 'begun',
    frenchTranslation: 'commencer',
    index: 6
  },
  {
    verb: 'bend',
    pastSimple: 'bent',
    pastParticiple: 'bent',
    frenchTranslation: 'plier',
    index: 7
  },
  {
    verb: 'bet',
    pastSimple: 'bet',
    pastParticiple: 'bet',
    frenchTranslation: 'parier',
    index: 8
  },
  {
    verb: 'bind',
    pastSimple: 'bound',
    pastParticiple: 'bound',
    frenchTranslation: 'lier',
    index: 9
  },
  {
    verb: 'bite',
    pastSimple: 'bit',
    pastParticiple: 'bitten',
    frenchTranslation: 'mordre',
    index: 10
  },
  {
    verb: 'bleed',
    pastSimple: 'bled',
    pastParticiple: 'bled',
    frenchTranslation: 'saigner',
    index: 11
  },
  {
    verb: 'blow',
    pastSimple: 'blew',
    pastParticiple: 'blown',
    frenchTranslation: 'souffler',
    index: 12
  },
  {
    verb: 'break',
    pastSimple: 'broke',
    pastParticiple: 'broken',
    frenchTranslation: 'casser',
    index: 13
  },
  {
    verb: 'breed',
    pastSimple: 'bred',
    pastParticiple: 'bred',
    frenchTranslation: 'élever',
    index: 14
  },
  {
    verb: 'bring',
    pastSimple: 'brought',
    pastParticiple: 'brought',
    frenchTranslation: 'apporter',
    index: 15
  },
  {
    verb: 'broadcast',
    pastSimple: 'broadcast',
    pastParticiple: 'broadcast',
    frenchTranslation: 'diffuser',
    index: 16
  },
  {
    verb: 'build',
    pastSimple: 'built',
    pastParticiple: 'built',
    frenchTranslation: 'construire',
    index: 17
  },
  {
    verb: 'burn',
    pastSimple: 'burnt',
    pastParticiple: 'burnt',
    frenchTranslation: 'brûler',
    index: 18
  },
  {
    verb: 'buy',
    pastSimple: 'bought',
    pastParticiple: 'bought',
    frenchTranslation: 'acheter',
    index: 19
  },
  {
    verb: 'catch',
    pastSimple: 'caught',
    pastParticiple: 'caught',
    frenchTranslation: 'attraper',
    index: 20
  },
  {
    verb: 'choose',
    pastSimple: 'chose',
    pastParticiple: 'chosen',
    frenchTranslation: 'choisir',
    index: 21
  },
  {
    verb: 'come',
    pastSimple: 'came',
    pastParticiple: 'come',
    frenchTranslation: 'venir',
    index: 22
  },
  {
    verb: 'cost',
    pastSimple: 'cost',
    pastParticiple: 'cost',
    frenchTranslation: 'coûter',
    index: 23
  },
  {
    verb: 'creep',
    pastSimple: 'crept',
    pastParticiple: 'crept',
    frenchTranslation: 'ramper',
    index: 24
  },
  {
    verb: 'cut',
    pastSimple: 'cut',
    pastParticiple: 'cut',
    frenchTranslation: 'couper',
    index: 25
  },
  {
    verb: 'deal',
    pastSimple: 'dealt',
    pastParticiple: 'dealt',
    frenchTranslation: 'traiter',
    index: 26
  },
  {
    verb: 'dig',
    pastSimple: 'dug',
    pastParticiple: 'dug',
    frenchTranslation: 'creuser',
    index: 27
  },
  {
    verb: 'do',
    pastSimple: 'did',
    pastParticiple: 'done',
    frenchTranslation: 'faire',
    index: 28
  },
  {
    verb: 'draw',
    pastSimple: 'drew',
    pastParticiple: 'drawn',
    frenchTranslation: 'dessiner',
    index: 29
  },
  {
    verb: 'dream',
    pastSimple: 'dreamt',
    pastParticiple: 'dreamt',
    frenchTranslation: 'rêver',
    index: 30
  },
  {
    verb: 'drink',
    pastSimple: 'drank',
    pastParticiple: 'drunk',
    frenchTranslation: 'boire',
    index: 31
  },
  {
    verb: 'drive',
    pastSimple: 'drove',
    pastParticiple: 'driven',
    frenchTranslation: 'conduire',
    index: 32
  },
  {
    verb: 'eat',
    pastSimple: 'ate',
    pastParticiple: 'eaten',
    frenchTranslation: 'manger',
    index: 33
  },
  {
    verb: 'fall',
    pastSimple: 'fell',
    pastParticiple: 'fallen',
    frenchTranslation: 'tomber',
    index: 34
  },
  {
    verb: 'feed',
    pastSimple: 'fed',
    pastParticiple: 'fed',
    frenchTranslation: 'nourrir',
    index: 35
  },
  {
    verb: 'feel',
    pastSimple: 'felt',
    pastParticiple: 'felt',
    frenchTranslation: 'ressentir',
    index: 36
  },
  {
    verb: 'fight',
    pastSimple: 'fought',
    pastParticiple: 'fought',
    frenchTranslation: 'se battre',
    index: 37
  },
  {
    verb: 'find',
    pastSimple: 'found',
    pastParticiple: 'found',
    frenchTranslation: 'trouver',
    index: 38
  },
  {
    verb: 'fly',
    pastSimple: 'flew',
    pastParticiple: 'flown',
    frenchTranslation: 'voler',
    index: 39
  },
  {
    verb: 'forget',
    pastSimple: 'forgot',
    pastParticiple: 'forgotten',
    frenchTranslation: 'oublier',
    index: 40
  },
  {
    verb: 'forgive',
    pastSimple: 'forgave',
    pastParticiple: 'forgiven',
    frenchTranslation: 'pardonner',
    index: 41
  },
  {
    verb: 'freeze',
    pastSimple: 'froze',
    pastParticiple: 'frozen',
    frenchTranslation: 'geler',
    index: 42
  },
  {
    verb: 'get',
    pastSimple: 'got',
    pastParticiple: 'got/gotten',
    frenchTranslation: 'obtenir',
    index: 43
  },
  {
    verb: 'give',
    pastSimple: 'gave',
    pastParticiple: 'given',
    frenchTranslation: 'donner',
    index: 44
  },
  {
    verb: 'go',
    pastSimple: 'went',
    pastParticiple: 'gone',
    frenchTranslation: 'aller',
    index: 45
  },
  {
    verb: 'grow',
    pastSimple: 'grew',
    pastParticiple: 'grown',
    frenchTranslation: 'pousser',
    index: 46
  },
  {
    verb: 'hang',
    pastSimple: 'hung',
    pastParticiple: 'hung',
    frenchTranslation: 'pendre',
    index: 47
  },
  {
    verb: 'have',
    pastSimple: 'had',
    pastParticiple: 'had',
    frenchTranslation: 'avoir',
    index: 48
  },
  {
    verb: 'hear',
    pastSimple: 'heard',
    pastParticiple: 'heard',
    frenchTranslation: 'entendre',
    index: 49
  },
  {
    verb: 'hide',
    pastSimple: 'hid',
    pastParticiple: 'hidden',
    frenchTranslation: 'cacher',
    index: 50
  },
  {
    verb: 'hit',
    pastSimple: 'hit',
    pastParticiple: 'hit',
    frenchTranslation: 'frapper',
    index: 51
  },
  {
    verb: 'hold',
    pastSimple: 'held',
    pastParticiple: 'held',
    frenchTranslation: 'tenir',
    index: 52
  },
  {
    verb: 'hurt',
    pastSimple: 'hurt',
    pastParticiple: 'hurt',
    frenchTranslation: 'blesser',
    index: 53
  },
  {
    verb: 'keep',
    pastSimple: 'kept',
    pastParticiple: 'kept',
    frenchTranslation: 'garder',
    index: 54
  },
  {
    verb: 'know',
    pastSimple: 'knew',
    pastParticiple: 'known',
    frenchTranslation: 'savoir',
    index: 55
  },
  {
    verb: 'lay',
    pastSimple: 'laid',
    pastParticiple: 'laid',
    frenchTranslation: 'poser',
    index: 56
  },
  {
    verb: 'lead',
    pastSimple: 'led',
    pastParticiple: 'led',
    frenchTranslation: 'mener',
    index: 57
  },
  {
    verb: 'leave',
    pastSimple: 'left',
    pastParticiple: 'left',
    frenchTranslation: 'quitter',
    index: 58
  },
  {
    verb: 'lend',
    pastSimple: 'lent',
    pastParticiple: 'lent',
    frenchTranslation: 'prêter',
    index: 59
  },
  {
    verb: 'let',
    pastSimple: 'let',
    pastParticiple: 'let',
    frenchTranslation: 'laisser',
    index: 60
  },
  {
    verb: 'lie',
    pastSimple: 'lay',
    pastParticiple: 'lain',
    frenchTranslation: 's’allonger',
    index: 61
  },
  {
    verb: 'light',
    pastSimple: 'lit',
    pastParticiple: 'lit',
    frenchTranslation: 'allumer',
    index: 62
  },
  {
    verb: 'lose',
    pastSimple: 'lost',
    pastParticiple: 'lost',
    frenchTranslation: 'perdre',
    index: 63
  },
  {
    verb: 'make',
    pastSimple: 'made',
    pastParticiple: 'made',
    frenchTranslation: 'faire',
    index: 64
  },
  {
    verb: 'mean',
    pastSimple: 'meant',
    pastParticiple: 'meant',
    frenchTranslation: 'vouloir dire',
    index: 65
  },
  {
    verb: 'meet',
    pastSimple: 'met',
    pastParticiple: 'met',
    frenchTranslation: 'rencontrer',
    index: 66
  },
  {
    verb: 'pay',
    pastSimple: 'paid',
    pastParticiple: 'paid',
    frenchTranslation: 'payer',
    index: 67
  },
  {
    verb: 'put',
    pastSimple: 'put',
    pastParticiple: 'put',
    frenchTranslation: 'mettre',
    index: 68
  },
  {
    verb: 'read',
    pastSimple: 'read',
    pastParticiple: 'read',
    frenchTranslation: 'lire',
    index: 69
  },
  {
    verb: 'ride',
    pastSimple: 'rode',
    pastParticiple: 'ridden',
    frenchTranslation: 'monter',
    index: 70
  },
  {
    verb: 'ring',
    pastSimple: 'rang',
    pastParticiple: 'rung',
    frenchTranslation: 'sonner',
    index: 71
  },
  {
    verb: 'rise',
    pastSimple: 'rose',
    pastParticiple: 'risen',
    frenchTranslation: 'se lever',
    index: 72
  },
  {
    verb: 'run',
    pastSimple: 'ran',
    pastParticiple: 'run',
    frenchTranslation: 'courir',
    index: 73
  },
  {
    verb: 'say',
    pastSimple: 'said',
    pastParticiple: 'said',
    frenchTranslation: 'dire',
    index: 74
  },
  {
    verb: 'see',
    pastSimple: 'saw',
    pastParticiple: 'seen',
    frenchTranslation: 'voir',
    index: 75
  },
  {
    verb: 'sell',
    pastSimple: 'sold',
    pastParticiple: 'sold',
    frenchTranslation: 'vendre',
    index: 76
  },
  {
    verb: 'send',
    pastSimple: 'sent',
    pastParticiple: 'sent',
    frenchTranslation: 'envoyer',
    index: 77
  },
  {
    verb: 'set',
    pastSimple: 'set',
    pastParticiple: 'set',
    frenchTranslation: 'mettre',
    index: 78
  },
  {
    verb: 'shake',
    pastSimple: 'shook',
    pastParticiple: 'shaken',
    frenchTranslation: 'secouer',
    index: 79
  },
  {
    verb: 'shine',
    pastSimple: 'shone',
    pastParticiple: 'shone',
    frenchTranslation: 'briller',
    index: 80
  },
  {
    verb: 'shoot',
    pastSimple: 'shot',
    pastParticiple: 'shot',
    frenchTranslation: 'tirer',
    index: 81
  },
  {
    verb: 'show',
    pastSimple: 'showed',
    pastParticiple: 'shown',
    frenchTranslation: 'montrer',
    index: 82
  },
  {
    verb: 'shut',
    pastSimple: 'shut',
    pastParticiple: 'shut',
    frenchTranslation: 'fermer',
    index: 83
  },
  {
    verb: 'sing',
    pastSimple: 'sang',
    pastParticiple: 'sung',
    frenchTranslation: 'chanter',
    index: 84
  },
  {
    verb: 'sit',
    pastSimple: 'sat',
    pastParticiple: 'sat',
    frenchTranslation: 's’asseoir',
    index: 85
  },
  {
    verb: 'sleep',
    pastSimple: 'slept',
    pastParticiple: 'slept',
    frenchTranslation: 'dormir',
    index: 86
  },
  {
    verb: 'speak',
    pastSimple: 'spoke',
    pastParticiple: 'spoken',
    frenchTranslation: 'parler',
    index: 87
  },
  {
    verb: 'spend',
    pastSimple: 'spent',
    pastParticiple: 'spent',
    frenchTranslation: 'dépenser',
    index: 88
  },
  {
    verb: 'spin',
    pastSimple: 'spun',
    pastParticiple: 'spun',
    frenchTranslation: 'tourner',
    index: 89
  },
  {
    verb: 'stand',
    pastSimple: 'stood',
    pastParticiple: 'stood',
    frenchTranslation: 'se tenir',
    index: 90
  },
  {
    verb: 'steal',
    pastSimple: 'stole',
    pastParticiple: 'stolen',
    frenchTranslation: 'voler',
    index: 91
  },
  {
    verb: 'stick',
    pastSimple: 'stuck',
    pastParticiple: 'stuck',
    frenchTranslation: 'coller',
    index: 92
  },
  {
    verb: 'strike',
    pastSimple: 'struck',
    pastParticiple: 'struck',
    frenchTranslation: 'frapper',
    index: 93
  },
  {
    verb: 'swear',
    pastSimple: 'swore',
    pastParticiple: 'sworn',
    frenchTranslation: 'jurer',
    index: 94
  },
  {
    verb: 'sweep',
    pastSimple: 'swept',
    pastParticiple: 'swept',
    frenchTranslation: 'balayer',
    index: 95
  },
  {
    verb: 'swim',
    pastSimple: 'swam',
    pastParticiple: 'swum',
    frenchTranslation: 'nager',
    index: 96
  },
  {
    verb: 'swing',
    pastSimple: 'swung',
    pastParticiple: 'swung',
    frenchTranslation: 'se balancer',
    index: 97
  },
  {
    verb: 'take',
    pastSimple: 'took',
    pastParticiple: 'taken',
    frenchTranslation: 'prendre',
    index: 98
  },
  {
    verb: 'teach',
    pastSimple: 'taught',
    pastParticiple: 'taught',
    frenchTranslation: 'enseigner',
    index: 99
  },
 
  { index:100, verb: 'tear', pastSimple: 'tore', pastParticiple: 'torn', frenchTranslation: 'déchirer' },
  { index:101, verb: 'tell', pastSimple: 'told', pastParticiple: 'told', frenchTranslation: 'dire' },
  { index:102,verb: 'think', pastSimple: 'thought', pastParticiple: 'thought', frenchTranslation: 'penser' },
  { index:103,verb: 'throw', pastSimple: 'threw', pastParticiple: 'thrown', frenchTranslation: 'jeter' },
  { index:104,verb: 'understand', pastSimple: 'understood', pastParticiple: 'understood', frenchTranslation: 'comprendre' },
  { index:105,verb: 'wake', pastSimple: 'woke', pastParticiple: 'woken', frenchTranslation: 'se réveiller' },
  { index:106,verb: 'wear', pastSimple: 'wore', pastParticiple: 'worn', frenchTranslation: 'porter' },
  { index:107,verb: 'win', pastSimple: 'won', pastParticiple: 'won', frenchTranslation: 'gagner' },
  { index:108,verb: 'write', pastSimple: 'wrote', pastParticiple: 'written', frenchTranslation: 'écrire' }
]
  ;


export default function Page() {
  return (
      <VerbsTable verbs={irregularVerbs} />
  );
}


