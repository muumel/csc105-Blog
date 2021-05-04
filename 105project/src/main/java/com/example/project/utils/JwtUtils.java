package com.example.project.utils;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtils {
    private static final long VALIDITY = 3 * 24 * 60 * 60 * 1000; // 3 days
    private static final Key KEY = Keys.hmacShaKeyFor("imjustlikeyouyoujustlikemethereresomewhereelseisratherbesomewhereisoutsomewhereisdreamcometrue".getBytes());
    // While creating the token -
// 1. Define  claims of the token, like Issuer, Expiration, Subject, and the ID
// 2. Sign the JWT using the HS512 algorithm and secret key.
// 3. According to JWS Compact Serialization (https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
//    compaction of the JWT to a URL-safe string
    public static String generateToken(String subject) {
        return Jwts
                .builder()
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + VALIDITY))
                .signWith(KEY)
                .compact();
    }

    public static String parseToken(String jws) throws JwtException {
        // Check expiration
        if (Jwts.parserBuilder().setSigningKey(KEY).build().parseClaimsJws(jws).getBody().getExpiration().before(new Date()))
            throw new JwtException(jws); // สร้างerror
        return Jwts.parserBuilder().setSigningKey(KEY).build().parseClaimsJws(jws).getBody().getSubject();
    }
}
