import useSWR from "swr";

export const useUser = () => {
  const { data: user, mutate: setUser } = useSWR("/api/user", null, {
    fallbackData: false,
  });

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  return { user, login, logout };
};
