permissions = 
{
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}

const hasPermission = (moduleName, role, permissionType) =>{
    
    let found = false
    const obj = permissions[moduleName]   
    const permission = obj[permissionType]    
    permission.forEach(element => {   
        if(element == role){
                found = true      
                return found
        }
    });

    return found          
}

console.log(hasPermission('getUsers','trainer','read'))
