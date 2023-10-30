import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Scientist } from './scientists.model';

@Injectable({ providedIn: 'root' })
export class ScientistsService {
  scientists$ = of(scientistMock).pipe(delay(1500));
}
const scientistMock: Scientist[] = [
  {
    id: 1,
    name: 'Albert Einstein',
    photoUrl:
      'https://cdn.pixabay.com/photo/2016/12/27/06/38/albert-einstein-1933340_1280.jpg',
    description:
      'Albert Einstein was a German-born theoretical physicist, widely ranked among the greatest and most influential scientists of all time.',
  },
  {
    id: 2,
    name: 'Gabe Newell',
    photoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/The_International_2018_%2843263984845%29_%28cropped%29.jpg/220px-The_International_2018_%2843263984845%29_%28cropped%29.jpg',
    description:
      'Nicknamed Gaben, is an American businessman and the president of the video game company Valve',
  },
  {
    id: 3,
    name: 'Bugs Bunny',
    photoUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/180px-Bugs_Bunny.svg.png',
    description:
      'Best known for his featured roles in the Looney Tunes and Merrie Melodies series of animated short films,' +
      ' produced by Warner Bros',
  },
  {
    id: 4,
    name: 'Daffy Duck',
    photoUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/180px-Daffy_Duck.svg.png',
    description:
      'Styled as an anthropomorphic black duck, he has appeared in cartoon series such as Looney Tunes and Merrie Melodies',
  },
  {
    id: 5,
    name: 'Usain Bolt',
    photoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg/220px-Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg',
    description:
      'An eleven-time World Champion, he won consecutive World Championship 100 m, 200 m and 4 × 100 metres relay gold medals from 2009 to 2015',
  },
];
