const permissions = 
{
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}

const hasPermission = (moduleName, role, permission_type) => {

    if (permissions[moduleName]['all'].includes(role)){     //Checks if the role has permissions for all
        return true;
    }
    else {
        if (permissions[moduleName][permission_type].includes(role)) {  //Checks if the role has specific permissions
            return true;
        }
        return false;
    }
}

console.log(hasPermission('getUsers','trainer','read'))
console.log(hasPermission('getUsers','head-trainer','write'))
