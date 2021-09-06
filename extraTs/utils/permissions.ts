import { permissions } from '../constants';
const hasPermission = (moduleName: string, role: string, permissionType: string): Boolean => {

    if (permissions[moduleName].all.includes(role)) {     // Checks if the role has permissions for all
        return true;
    }
    else {
        if (permissions[moduleName][permissionType].includes(role)) {  // Checks if the role has specific permissions
            return true;
        }
        return false;
    }
};
export default hasPermission;
