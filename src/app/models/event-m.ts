export interface EventM {
 id: number;
  title: string;
  description: string;
  location: string;
  date: string;       // format ISO : 'AAAA-MM-JJ'
  price: number;      // 0 = gratuit
  nbPlaces: number;   // places restantes
}
