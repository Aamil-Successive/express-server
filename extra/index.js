import {diamond, equilateral} from './patterns';

import {hasPermission, validateUsers} from  './utils';

const users = [
    {
        traineeEmail: 'trainee@successive.tech',
        reviewerEmail: 'reviewer@successive.tech',
    },
    
    {
        traineeEmail: 'trainee1@gmail.com',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    
    {
        traineeEmail: 'trainee2@successive.tech',
        reviewerEmail: 'reviewer2@gmail.com',
    },
];

diamond(5);
equilateral(5);
diamond(10);
equilateral(10);

console.log();

console.log(hasPermission('getUsers','head-trainer','read')); 
console.log(hasPermission('getUsers','trainee','write')); 
console.log(hasPermission('getUsers','trainer','read')); 

validateUsers(users);
