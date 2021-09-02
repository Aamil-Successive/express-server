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
    
    const validateEmail=(email)=>{
        
        var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;

        return validRegex.test(email)
            
    }
    
    var validUsers = []     
    var invalidUsers = []   
    
    const validateUsers=(users)=>{
    
        users.forEach(element => {
            const {traineeEmail} = element      
            const {reviewerEmail} = element     
            
            validateEmail(traineeEmail)==true?validUsers.push(traineeEmail):invalidUsers.push(traineeEmail)
            validateEmail(reviewerEmail)==true?validUsers.push(reviewerEmail):invalidUsers.push(reviewerEmail)
            }
        );
    }
    
    console.log();
    validateUsers(users)
    
    console.log('Valid users:')
    validUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Valid users: \n', validUsers.length)
    
    console.log();
    
    console.log('Invalid users:')
    invalidUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Invalid users: \n', invalidUsers.length)
