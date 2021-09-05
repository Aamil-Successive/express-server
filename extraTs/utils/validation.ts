import { validateEmail } from './helpers';

    const validateUsers = (users) => {
    const validUsers = [];
    const invalidUsers = [];

        users.forEach(element => {
            const {traineeEmail} = element;
            const {reviewerEmail} = element;

            validateEmail(traineeEmail) === true ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail);
            validateEmail(reviewerEmail) === true ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail);
            }
        );
        console.log('Valid users:');
        validUsers.forEach(element => {
            console.log(element);
        });
        console.log('Number of Valid users: \n', validUsers.length);

        console.log();

        console.log('Invalid users:');
        invalidUsers.forEach(element => {
            console.log(element);
        });
        console.log('Number of Invalid users: \n', invalidUsers.length);
    };

    export default validateUsers;
