package br.com.chapeleiro.chapeleiro.aplicacao.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class TokenService {

    // ⚠️ Chave simplificada. Não use assim em produção!
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Valor padrão de 1 hora (3600000 ms)
    @Value("${token.expiration.ms:3600000}")
    private long expirationMs;

    public String generateToken(Integer userId) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
                .setSubject(userId.toString()) // Define o ID do usuário como Subject
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key)
                .compact();
    }

    public Integer getUserIdFromToken(String token) {
        try {
            String userIdStr = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();

            return Integer.parseInt(userIdStr);
        } catch (Exception e) {
            // Token inválido ou expirado
            return null;
        }
    }

    public String extractToken(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            return authorizationHeader.substring(7);
        }
        return null;
    }
}