import { useRouter } from 'expo-router';
import { useLocalSearchParams,useGlobalSearchParams } from 'expo-router';

// Helper to pass `router` into a class component
export function withRouter(Component) {
  return function Wrapper(props) {
    const router = useRouter();
    const localSearchParams = useLocalSearchParams();
    const globalSearchParams = useGlobalSearchParams();
    return <Component {...props} router={router} localQuery={localSearchParams} globalQuery={globalSearchParams}/>;
  };
}