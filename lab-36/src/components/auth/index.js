import { useAuth } from '../../contexts/auth';

export default function Auth(props) {
    const { children, permission } = props;
    const { user } = useAuth();

    if (!user) return null;

    // Restrict to specific permission
    //   if (permission) {
    //     if (user.permissions.includes(permission)) {
    //       return children;
    //     } else {
    //       return null;
    //     }
    //   }

    else return children;
}