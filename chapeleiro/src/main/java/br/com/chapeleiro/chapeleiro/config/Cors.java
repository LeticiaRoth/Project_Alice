package br.com.chapeleiro.chapeleiro.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Cors {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // todas as rotas da API
                        .allowedOrigins("*") // permite todas as portas/origens
                        .allowedMethods("*") // permite todos os métodos HTTP
                        .allowedHeaders("*") // permite todos os headers
                        .allowCredentials(false); // se precisar enviar cookies/jwt via header, troque para true
            }
        };
    }
}
