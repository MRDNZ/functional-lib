export interface IUser{
  id:string;
  isActive:boolean;
  age:number;
  firstname:string;
  lastname:string;
  gender:string;
}

export const users:IUser[] = [
  {
    id: '59e354bcc67f5e0c2d586223',
    isActive: false,
    age: 19,
    firstname: 'Manuela',
    lastname: 'Joyce',
    gender: 'female',
  },
  {
    id: '59e354bc8104d29ad1527505',
    isActive: false,
    age: 19,
    firstname: 'Maritza',
    lastname: 'Mathews',
    gender: 'female',
  },
  {
    id: '59e354bc623d18c9f1aca850',
    isActive: false,
    age: 28,
    firstname: 'Jodi',
    lastname: 'Gilliam',
    gender: 'female',
  },
  {
    id: '59e354bcc67f5e0c2d586223',
    isActive: false,
    age: 19,
    firstname: 'Manuela',
    lastname: 'Joyce',
    gender: 'female',
  },
  {
    id: '59e354bc93f4b7a46a15139d',
    isActive: false,
    age: 38,
    firstname: 'Sampson',
    lastname: 'Hicks',
    gender: 'male',
  },
  {
    id: '59e354bc317f75d046f1571c',
    isActive: true,
    age: 34,
    firstname: 'Orr',
    lastname: 'Barrera',
    gender: 'male',
  },
  {
    id: '59e354bce49fda1663dbef01',
    isActive: true,
    age: 36,
    firstname: 'Marsha',
    lastname: 'Hendrix',
    gender: 'female',
  },
  {
    id: '59e354bc56f16d3240e07ef5',
    isActive: false,
    age: 32,
    firstname: 'Vonda',
    lastname: 'Schroeder',
    gender: 'female',
  },
  {
    id: '59e354bc37d8472d5d90bd56',
    isActive: true,
    age: 36,
    firstname: 'Jayne',
    lastname: 'Hopper',
    gender: 'female',
  },
  {
    id: '59e354bc42b974582f826093',
    isActive: false,
    age: 23,
    firstname: 'Whitney',
    lastname: 'Calderon',
    gender: 'male',
  },
  {
    id: '59e354bc8ad90deb82f30fca',
    isActive: false,
    age: 26,
    firstname: 'Chapman',
    lastname: 'Torres',
    gender: 'male',
  },
  {
    id: '59e354bcb2ebb017a43c3183',
    isActive: false,
    age: 27,
    firstname: 'Kay',
    lastname: 'Scott',
    gender: 'female',
  },
  {
    id: '59e354bcca47b1c6f8a081ba',
    isActive: false,
    age: 26,
    firstname: 'Kane',
    lastname: 'Landry',
    gender: 'male',
  },
  {
    id: '59e354bc7f75cef6d3227145',
    isActive: false,
    age: 26,
    firstname: 'Mayra',
    lastname: 'Joyner',
    gender: 'female',
  },
  {
    id: '59e354bcca5029c77bbcaf4e',
    isActive: false,
    age: 21,
    firstname: 'Weeks',
    lastname: 'Soto',
    gender: 'male',
  },
  {
    id: '59e354bcb8833f7d2aa6f0d3',
    isActive: true,
    age: 31,
    firstname: 'Mindy',
    lastname: 'Aguirre',
    gender: 'female',
  },
  {
    id: '59e354bc12083fa8f637cdf9',
    isActive: true,
    age: 34,
    firstname: 'Zamora',
    lastname: 'Kelly',
    gender: 'male',
  },
  {
    id: '59e354bc87fd5eea33d5cbab',
    isActive: true,
    age: 21,
    firstname: 'Georgina',
    lastname: 'Conner',
    gender: 'female',
  },
  {
    id: '59e354bc973ec6fb3f22b362',
    isActive: false,
    age: 32,
    firstname: 'Drake',
    lastname: 'Dean',
    gender: 'male',
  },
  {
    id: '59e354bcf3851a2e22161f33',
    isActive: true,
    age: 22,
    firstname: 'Lawanda',
    lastname: 'Elliott',
    gender: 'female',
  },
  {
    id: '59e354bc75ca61e22795ccd7',
    isActive: false,
    age: 26,
    firstname: 'Padilla',
    lastname: 'Velazquez',
    gender: 'male',
  },
];

export interface IBook{
  name:string;
  bookDetails:IBookDetail[];
}

export interface IBookDetail{
  id:number;
  title:string;
  author:string;
  rating:number[];
}

export const books:IBook[] = [
  {
    name: 'beginners',
    bookDetails: [
      {
        id: 111,
        title: 'C# 6.0',
        author: 'ANDREW TROELSEN',
        rating: [4.7],
      },
      {
        id: 222,
        title: 'Efficient Learning Machines',
        author: 'Rahul Khanna',
        rating: [4.5],
      },
    ],
  },
  {
    name: 'pro',
    bookDetails: [
      {
        id: 333,
        title: 'Pro AngularJS',
        author: 'Adam Freeman',
        rating: [4.0],
      },
      {
        id: 444,
        title: 'Pro ASP.NET',
        author: 'Adam Freeman',
        rating: [4.5],
      },
    ],
  },
];

export interface IReviewDetail{
  id:number;
  reviews:IReview[];
}

export interface IReview{
  good:number;
  excellent:number;
}

export const reviews:IReviewDetail[] = [
  {
    id: 111,
    reviews: [{ good: 4, excellent: 12 }],
  },
  {
    id: 222,
    reviews: [],
  },
  {
    id: 333,
    reviews: [],
  },
  {
    id: 444,
    reviews: [{ good: 14, excellent: 6 }],
  },
];
