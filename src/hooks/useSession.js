import useAuthStore from "@/stores/auth/authStore";
import { jwtDecode } from "jwt-decode";

function useSession() {
  const token = useAuthStore((state) => state.token);
  const decodedToken = jwtDecode(token);
  const id = decodedToken.id;
  const rolId = decodedToken.rolId;

  return { id, rolId };
}

export default useSession;
