import VerbsTable from '@/components/IrregularVerbsBoard';
import IrregularVerbsBoard from '@/components/IrregularVerbsBoard';
import QuizzApp from '@/components/QuizApp';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export type VerbType = {
  verb: string,
  pastSimple: string,
  pastParticiple: string,
  frenchTranslation: string
}

const irregularVerbs: VerbType[] = [
  { verb: 'arise', pastSimple: 'arose', pastParticiple: 'arisen', frenchTranslation: 'survenir' },
  { verb: 'awake', pastSimple: 'awoke', pastParticiple: 'awoken', frenchTranslation: 'se réveiller' },
  { verb: 'be', pastSimple: 'was/were', pastParticiple: 'been', frenchTranslation: 'être' },
  { verb: 'bear', pastSimple: 'bore', pastParticiple: 'borne', frenchTranslation: 'supporter' },
  { verb: 'beat', pastSimple: 'beat', pastParticiple: 'beaten', frenchTranslation: 'battre' },
  { verb: 'become', pastSimple: 'became', pastParticiple: 'become', frenchTranslation: 'devenir' },
  { verb: 'begin', pastSimple: 'began', pastParticiple: 'begun', frenchTranslation: 'commencer' },
  { verb: 'bend', pastSimple: 'bent', pastParticiple: 'bent', frenchTranslation: 'plier' },
  { verb: 'bet', pastSimple: 'bet', pastParticiple: 'bet', frenchTranslation: 'parier' },
  { verb: 'bind', pastSimple: 'bound', pastParticiple: 'bound', frenchTranslation: 'lier' },
  { verb: 'bite', pastSimple: 'bit', pastParticiple: 'bitten', frenchTranslation: 'mordre' },
  { verb: 'bleed', pastSimple: 'bled', pastParticiple: 'bled', frenchTranslation: 'saigner' },
  { verb: 'blow', pastSimple: 'blew', pastParticiple: 'blown', frenchTranslation: 'souffler' },
  { verb: 'break', pastSimple: 'broke', pastParticiple: 'broken', frenchTranslation: 'casser' },
  { verb: 'breed', pastSimple: 'bred', pastParticiple: 'bred', frenchTranslation: 'élever' },
  { verb: 'bring', pastSimple: 'brought', pastParticiple: 'brought', frenchTranslation: 'apporter' },
  { verb: 'broadcast', pastSimple: 'broadcast', pastParticiple: 'broadcast', frenchTranslation: 'diffuser' },
  { verb: 'build', pastSimple: 'built', pastParticiple: 'built', frenchTranslation: 'construire' },
  { verb: 'burn', pastSimple: 'burnt', pastParticiple: 'burnt', frenchTranslation: 'brûler' },
  { verb: 'buy', pastSimple: 'bought', pastParticiple: 'bought', frenchTranslation: 'acheter' },
  { verb: 'catch', pastSimple: 'caught', pastParticiple: 'caught', frenchTranslation: 'attraper' },
  { verb: 'choose', pastSimple: 'chose', pastParticiple: 'chosen', frenchTranslation: 'choisir' },
  { verb: 'come', pastSimple: 'came', pastParticiple: 'come', frenchTranslation: 'venir' },
  { verb: 'cost', pastSimple: 'cost', pastParticiple: 'cost', frenchTranslation: 'coûter' },
  { verb: 'creep', pastSimple: 'crept', pastParticiple: 'crept', frenchTranslation: 'ramper' },
  { verb: 'cut', pastSimple: 'cut', pastParticiple: 'cut', frenchTranslation: 'couper' },
  { verb: 'deal', pastSimple: 'dealt', pastParticiple: 'dealt', frenchTranslation: 'traiter' },
  { verb: 'dig', pastSimple: 'dug', pastParticiple: 'dug', frenchTranslation: 'creuser' },
  { verb: 'do', pastSimple: 'did', pastParticiple: 'done', frenchTranslation: 'faire' },
  { verb: 'draw', pastSimple: 'drew', pastParticiple: 'drawn', frenchTranslation: 'dessiner' },
  { verb: 'dream', pastSimple: 'dreamt', pastParticiple: 'dreamt', frenchTranslation: 'rêver' },
  { verb: 'drink', pastSimple: 'drank', pastParticiple: 'drunk', frenchTranslation: 'boire' },
  { verb: 'drive', pastSimple: 'drove', pastParticiple: 'driven', frenchTranslation: 'conduire' },
  { verb: 'eat', pastSimple: 'ate', pastParticiple: 'eaten', frenchTranslation: 'manger' },
  { verb: 'fall', pastSimple: 'fell', pastParticiple: 'fallen', frenchTranslation: 'tomber' },
  { verb: 'feed', pastSimple: 'fed', pastParticiple: 'fed', frenchTranslation: 'nourrir' },
  { verb: 'feel', pastSimple: 'felt', pastParticiple: 'felt', frenchTranslation: 'ressentir' },
  { verb: 'fight', pastSimple: 'fought', pastParticiple: 'fought', frenchTranslation: 'se battre' },
  { verb: 'find', pastSimple: 'found', pastParticiple: 'found', frenchTranslation: 'trouver' },
  { verb: 'fly', pastSimple: 'flew', pastParticiple: 'flown', frenchTranslation: 'voler' },
  { verb: 'forget', pastSimple: 'forgot', pastParticiple: 'forgotten', frenchTranslation: 'oublier' },
  { verb: 'forgive', pastSimple: 'forgave', pastParticiple: 'forgiven', frenchTranslation: 'pardonner' },
  { verb: 'freeze', pastSimple: 'froze', pastParticiple: 'frozen', frenchTranslation: 'geler' },
  { verb: 'get', pastSimple: 'got', pastParticiple: 'got/gotten', frenchTranslation: 'obtenir' },
  { verb: 'give', pastSimple: 'gave', pastParticiple: 'given', frenchTranslation: 'donner' },
  { verb: 'go', pastSimple: 'went', pastParticiple: 'gone', frenchTranslation: 'aller' },
  { verb: 'grow', pastSimple: 'grew', pastParticiple: 'grown', frenchTranslation: 'pousser' },
  { verb: 'hang', pastSimple: 'hung', pastParticiple: 'hung', frenchTranslation: 'pendre' },
  { verb: 'have', pastSimple: 'had', pastParticiple: 'had', frenchTranslation: 'avoir' },
  { verb: 'hear', pastSimple: 'heard', pastParticiple: 'heard', frenchTranslation: 'entendre' },
  { verb: 'hide', pastSimple: 'hid', pastParticiple: 'hidden', frenchTranslation: 'cacher' },
  { verb: 'hit', pastSimple: 'hit', pastParticiple: 'hit', frenchTranslation: 'frapper' },
  { verb: 'hold', pastSimple: 'held', pastParticiple: 'held', frenchTranslation: 'tenir' },
  { verb: 'hurt', pastSimple: 'hurt', pastParticiple: 'hurt', frenchTranslation: 'blesser' },
  { verb: 'keep', pastSimple: 'kept', pastParticiple: 'kept', frenchTranslation: 'garder' },
  { verb: 'know', pastSimple: 'knew', pastParticiple: 'known', frenchTranslation: 'savoir' },
  { verb: 'lay', pastSimple: 'laid', pastParticiple: 'laid', frenchTranslation: 'poser' },
  { verb: 'lead', pastSimple: 'led', pastParticiple: 'led', frenchTranslation: 'mener' },
  { verb: 'leave', pastSimple: 'left', pastParticiple: 'left', frenchTranslation: 'quitter' },
  { verb: 'lend', pastSimple: 'lent', pastParticiple: 'lent', frenchTranslation: 'prêter' },
  { verb: 'let', pastSimple: 'let', pastParticiple: 'let', frenchTranslation: 'laisser' },
  { verb: 'lie', pastSimple: 'lay', pastParticiple: 'lain', frenchTranslation: 's’allonger' },
  { verb: 'light', pastSimple: 'lit', pastParticiple: 'lit', frenchTranslation: 'allumer' },
  { verb: 'lose', pastSimple: 'lost', pastParticiple: 'lost', frenchTranslation: 'perdre' },
  { verb: 'make', pastSimple: 'made', pastParticiple: 'made', frenchTranslation: 'faire' },
  { verb: 'mean', pastSimple: 'meant', pastParticiple: 'meant', frenchTranslation: 'vouloir dire' },
  { verb: 'meet', pastSimple: 'met', pastParticiple: 'met', frenchTranslation: 'rencontrer' },
  { verb: 'pay', pastSimple: 'paid', pastParticiple: 'paid', frenchTranslation: 'payer' },
  { verb: 'put', pastSimple: 'put', pastParticiple: 'put', frenchTranslation: 'mettre' },
  { verb: 'read', pastSimple: 'read', pastParticiple: 'read', frenchTranslation: 'lire' },
  { verb: 'ride', pastSimple: 'rode', pastParticiple: 'ridden', frenchTranslation: 'monter' },
  { verb: 'ring', pastSimple: 'rang', pastParticiple: 'rung', frenchTranslation: 'sonner' },
  { verb: 'rise', pastSimple: 'rose', pastParticiple: 'risen', frenchTranslation: 'se lever' },
  { verb: 'run', pastSimple: 'ran', pastParticiple: 'run', frenchTranslation: 'courir' },
  { verb: 'say', pastSimple: 'said', pastParticiple: 'said', frenchTranslation: 'dire' },
  { verb: 'see', pastSimple: 'saw', pastParticiple: 'seen', frenchTranslation: 'voir' },
  { verb: 'sell', pastSimple: 'sold', pastParticiple: 'sold', frenchTranslation: 'vendre' },
  { verb: 'send', pastSimple: 'sent', pastParticiple: 'sent', frenchTranslation: 'envoyer' },
  { verb: 'set', pastSimple: 'set', pastParticiple: 'set', frenchTranslation: 'mettre' },
  { verb: 'shake', pastSimple: 'shook', pastParticiple: 'shaken', frenchTranslation: 'secouer' },
  { verb: 'shine', pastSimple: 'shone', pastParticiple: 'shone', frenchTranslation: 'briller' },
  { verb: 'shoot', pastSimple: 'shot', pastParticiple: 'shot', frenchTranslation: 'tirer' },
  { verb: 'show', pastSimple: 'showed', pastParticiple: 'shown', frenchTranslation: 'montrer' },
  { verb: 'shut', pastSimple: 'shut', pastParticiple: 'shut', frenchTranslation: 'fermer' },
  { verb: 'sing', pastSimple: 'sang', pastParticiple: 'sung', frenchTranslation: 'chanter' },
  { verb: 'sit', pastSimple: 'sat', pastParticiple: 'sat', frenchTranslation: 's’asseoir' },
  { verb: 'sleep', pastSimple: 'slept', pastParticiple: 'slept', frenchTranslation: 'dormir' },
  { verb: 'speak', pastSimple: 'spoke', pastParticiple: 'spoken', frenchTranslation: 'parler' },
  { verb: 'spend', pastSimple: 'spent', pastParticiple: 'spent', frenchTranslation: 'dépenser' },
  { verb: 'spin', pastSimple: 'spun', pastParticiple: 'spun', frenchTranslation: 'tourner' },
  { verb: 'stand', pastSimple: 'stood', pastParticiple: 'stood', frenchTranslation: 'se tenir' },
  { verb: 'steal', pastSimple: 'stole', pastParticiple: 'stolen', frenchTranslation: 'voler' },
  { verb: 'stick', pastSimple: 'stuck', pastParticiple: 'stuck', frenchTranslation: 'coller' },
  { verb: 'strike', pastSimple: 'struck', pastParticiple: 'struck', frenchTranslation: 'frapper' },
  { verb: 'swear', pastSimple: 'swore', pastParticiple: 'sworn', frenchTranslation: 'jurer' },
  { verb: 'sweep', pastSimple: 'swept', pastParticiple: 'swept', frenchTranslation: 'balayer' },
  { verb: 'swim', pastSimple: 'swam', pastParticiple: 'swum', frenchTranslation: 'nager' },
  { verb: 'swing', pastSimple: 'swung', pastParticiple: 'swung', frenchTranslation: 'se balancer' },
  { verb: 'take', pastSimple: 'took', pastParticiple: 'taken', frenchTranslation: 'prendre' },
  { verb: 'teach', pastSimple: 'taught', pastParticiple: 'taught', frenchTranslation: 'enseigner' },
  { verb: 'tear', pastSimple: 'tore', pastParticiple: 'torn', frenchTranslation: 'déchirer' },
  { verb: 'tell', pastSimple: 'told', pastParticiple: 'told', frenchTranslation: 'dire' },
  { verb: 'think', pastSimple: 'thought', pastParticiple: 'thought', frenchTranslation: 'penser' },
  { verb: 'throw', pastSimple: 'threw', pastParticiple: 'thrown', frenchTranslation: 'jeter' },
  { verb: 'understand', pastSimple: 'understood', pastParticiple: 'understood', frenchTranslation: 'comprendre' },
  { verb: 'wake', pastSimple: 'woke', pastParticiple: 'woken', frenchTranslation: 'se réveiller' },
  { verb: 'wear', pastSimple: 'wore', pastParticiple: 'worn', frenchTranslation: 'porter' },
  { verb: 'win', pastSimple: 'won', pastParticiple: 'won', frenchTranslation: 'gagner' },
  { verb: 'write', pastSimple: 'wrote', pastParticiple: 'written', frenchTranslation: 'écrire' }
]
  ;


export default function Page() {

  return (
    <>
     
            <VerbsTable verbs={irregularVerbs} />
     
       
     

      <QuizzApp verbs={irregularVerbs} />
    </>

  );
}


