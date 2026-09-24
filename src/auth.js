import { PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: "00000000402b5328", // Public PrismarineJS Client ID
    authority: "https://login.microsoftonline.com/consumers",
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
  scopes: ["XboxLive.signin", "XboxLive.offline_access"]
};

// 4-step Minecraft Auth Flow
export async function authenticateMinecraft(msToken) {
  try {
    // 1. XBL Auth
    const xblResponse = await fetch("https://user.auth.xboxlive.com/user/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Properties: {
          AuthMethod: "RPS",
          SiteName: "user.auth.xboxlive.com",
          RpsTicket: `d=${msToken}`
        },
        RelyingParty: "http://auth.xboxlive.com",
        TokenType: "JWT"
      })
    });
    const xblData = await xblResponse.json();
    if (!xblResponse.ok) throw new Error("XBL Auth Failed");
    const xblToken = xblData.Token;
    const userHash = xblData.DisplayClaims.xui[0].uhs;

    // 2. XSTS Auth
    const xstsResponse = await fetch("https://xsts.auth.xboxlive.com/xsts/authorize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Properties: {
          SandboxId: "RETAIL",
          UserTokens: [xblToken]
        },
        RelyingParty: "rp://api.minecraftservices.com/",
        TokenType: "JWT"
      })
    });
    const xstsData = await xstsResponse.json();
    if (!xstsResponse.ok) throw new Error("XSTS Auth Failed");
    const xstsToken = xstsData.Token;

    // 3. Minecraft Auth
    const mcAuthResponse = await fetch("https://api.minecraftservices.com/authentication/login_with_xbox", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        identityToken: `XBL3.0 x=${userHash};${xstsToken}`
      })
    });
    const mcAuthData = await mcAuthResponse.json();
    if (!mcAuthResponse.ok) throw new Error("Minecraft Auth Failed");
    const mcToken = mcAuthData.access_token;

    // 4. Get Minecraft Profile
    const profileResponse = await fetch("https://api.minecraftservices.com/minecraft/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${mcToken}`
      }
    });
    const profileData = await profileResponse.json();
    if (!profileResponse.ok) throw new Error("Minecraft Profile Failed");

    return profileData; // { id, name, skins, capes }
  } catch (error) {
    console.error("Minecraft Authentication Error:", error);
    throw error;
  }
}
