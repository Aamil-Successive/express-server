import { permissions } from '../constants';
const hasPermission = (moduleName: string, Role: string, PERMISSION_TYPE: string) => {

    if (permissions[moduleName].all.includes(Role)) {     // Checks if the role has permissions for all
        return true;
    }
    else {
        if (permissions[moduleName][PERMISSION_TYPE].includes(Role)) {  // Checks if the role has specific permissions
            return true;
        }
        return false;
    }
};
export default hasPermission;
