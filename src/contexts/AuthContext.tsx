import { Box } from "native-base";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "_services/user";

export function AuthContextProvider() {
  const [user, setUser] = useState({});
  const [refreshedToken, setRefreshedToken] = useState("");
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function userAndTokenUpdate(userData: any, token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(userData);
  }

  async function storageUserAndTokenSave(userData: any, token: string) {
    try {
      setIsLoadingUserStorageData(true);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function singIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token);
        userAndTokenUpdate(data.user, data.token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({});
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function updateUserProfile(userUpdated: any) {
    try {
      setUser(userUpdated);
    } catch (error) {
      throw error;
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);

      //   const userLogged = await storageUserGet();
      //   const token = await storageAuthTokenGet();

      //   if (token && userLogged) {
      //     userAndTokenUpdate(userLogged, token);
      //   }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  function refreshTokenUpdated(newToken: string) {
    setRefreshedToken(newToken);
  }

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager({
      signOut,
      refreshTokenUpdated,
    });

    return () => {
      subscribe();
    };
  }, []);

  return <Box />;
}
