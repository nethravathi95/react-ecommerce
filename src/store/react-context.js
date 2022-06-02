import React, { useState ,useEffect,useCallback } from 'react';

async function refreshAccessToken(tokenObject) {
    try {
        const formData = new URLSearchParams()
    
        formData.append('grant_type', 'refresh_token');
        formData.append('client_id', '7ef57b4a-7ae3-42cf-b9aa-f873e1d11184');
        formData.append('client_secret', 12345);
        formData.append("refresh_token", token);
    
        const response = await fetch(
          `http://localhost/reactjs/oauth/token`,
          {
            method: "POST",
            body: formData,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
    
        const data = await response.json()
    
        if (!response.ok) {
          throw new Error()
        }
    
        return {
          ...token,
          accessToken: data.access_token,
          accessTokenExpires: Date.now() + data.expires_in * 1000,
          refreshToken: data.refresh_token ?? token.refreshToken,
        }
      } catch (error) {
        return {
          ...token,
          error: "RefreshAccessTokenError",
        }
      }
}
 async (credentials) => {
            try {
                // Authenticate user with credentials
                const user = await fetch(
                    `http://localhost/reactjs/oauth/token`,
                    {
                        method: "POST",
                        mode:'cors',
                        body: formData,
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                    }
                  );

                if (user.data.accessToken) {
                    return user.data;
                }

                return null;
            } catch (e) {
                throw new Error(e);
            }
        }
   

const callbacks = {
    async jwt({ token, user }) {
        // Forward the access token, refresh token and expiration date from user.
        // We'll use to handle token refresh.
        if (user) {
          token.accessToken = user.access_token
          token.accessTokenExpires =
            Date.now() + (user.expires_in) * 1000
          token.refreshToken = user.refresh_token
        }
  
        // If token has not expired, return it,
        if (Date.now() < token.accessTokenExpires) {
          return token
        }
  
        // Otherwise, refresh the token.
        return refreshAccessToken(token)
      },
      async session({ session, token }) {
        if (token?.accessToken) {
          session.accessToken = token.accessToken
  
          // Decode token and pass info to session.
          // This is used for the Password Grant.
          const decoded = jwt_decode(token.accessToken)
          session.user.id = decoded.id
        //   session.user.email = decoded.email
        //   session.user.username = decoded.username
        //   session.user.name = decoded.field_name
        //   session.error = token.error
        }
        return session
      },
    
}

export const options = {
    providers,
    callbacks,
    pages: {},
    secret: 'your_secret'
}

const Auth = (req, res) => ReactContext(req, res, options)
export default Auth;