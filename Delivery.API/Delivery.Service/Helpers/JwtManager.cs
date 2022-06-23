using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Delivery.Service.Helpers
{
    public static class JwtManager
    {
        private const string Secret = "Ob3OIsj+BXE9NZDy0t8W3TcN1RrF+2d/1sFn3G4HnV8PZY30iTOdtTWJG8rbWvB1GlOgZuQZdcF2LuqR/hccOw9=";

        public static string GetToken(string email, string role, int id, string adminPermissions, string username, int expireMinutes = 1440)
        {
            if (adminPermissions == null)
                adminPermissions = "[]";
            // symmetric security key
            var symemtricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Secret));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("email", email),
                    new Claim(ClaimTypes.Role, role),
                    new Claim("id", id.ToString()),
                    new Claim("username", username),
                    new Claim("permissions", adminPermissions)
                }),

                Expires = DateTime.UtcNow.AddMinutes(Convert.ToInt32(expireMinutes)),

                SigningCredentials = new SigningCredentials(symemtricSecurityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var jwtHander = new JwtSecurityTokenHandler();

            var token = jwtHander.CreateToken(tokenDescriptor);

            // return token

            return jwtHander.WriteToken(token);
        }

        public static TokenValidationParameters GetTokenValidationParameters()
        {
            return new TokenValidationParameters
            {
                // what to validate
                RequireExpirationTime = true,
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                // setup validate data
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Secret))
            };
        }

        public static int? GetLoggedUserID(string parameter)
        {
            var identity = GetPrincipal(parameter)?.Identity as ClaimsIdentity;
            if (identity == null)
                return null;
            return Int32.Parse(identity.FindFirst("id")?.Value);
        }

        public static List<int> GetUserPermissions(string parameter)
        {
            var identity = GetPrincipal(parameter)?.Identity as ClaimsIdentity;
            if (identity == null)
                return null;
            List<int> retval = new List<int>();
            var permissionsStr = identity.FindFirst("permissions")?.Value;
            if (!string.IsNullOrWhiteSpace(permissionsStr))
            {
                try
                {
                    retval = JsonConvert.DeserializeObject<List<int>>(permissionsStr);
                }
                catch { }
            }
            return retval;
        }

        public static ClaimsPrincipal GetPrincipal(string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var jwtToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

                if (jwtToken == null)
                    return null;

                var symmetricKey = Convert.FromBase64String(Secret)
;

                var principal = tokenHandler.ValidateToken(token, GetTokenValidationParameters(), out _);

                return principal;
            }

            catch (Exception e)
            {
                return null;
            }
        }
    }
}
