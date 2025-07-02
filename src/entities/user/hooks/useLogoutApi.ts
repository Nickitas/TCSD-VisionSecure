import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next/client';
import { queryClient } from '@/shared/api/query/queryClient';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { useUserStore } from '../store';


export function useLogout() {
    const { replace } = useRouter();

    const clearUser = useUserStore(store => store.clearUser);

    const handleLogout = () => {
        setCookie('token', '');
        clearUser();
        queryClient.removeQueries();
        replace(appRouting.signIn.path);
    };

    return {
        handleLogout,
    };
}
