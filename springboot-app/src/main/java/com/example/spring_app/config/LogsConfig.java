package com.example.spring_app.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

@Configuration
public class RequestLoggingConfig {

    @Bean
    public CommonsRequestLoggingFilter requestLoggingFilter() {
        CommonsRequestLoggingFilter loggingFilter = new CommonsRequestLoggingFilter();
        loggingFilter.setIncludeClientInfo(true);      // IP, session id, user
        loggingFilter.setIncludeQueryString(true);     // query parameters
        loggingFilter.setIncludePayload(true);         // request body
        loggingFilter.setIncludeHeaders(true);         // headers
        loggingFilter.setMaxPayloadLength(10000);      // αν το body είναι μεγάλο
        loggingFilter.setAfterMessagePrefix("REQUEST DATA : "); // prefix στα logs
        return loggingFilter;
    }
}
