package me.notechus.auth.client.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.config.web.servlet.invoke
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository
import org.springframework.security.oauth2.client.web.OAuth2AuthorizedClientRepository
import org.springframework.security.oauth2.client.web.reactive.function.client.ServletOAuth2AuthorizedClientExchangeFilterFunction
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client
import org.springframework.web.reactive.function.client.WebClient

@EnableOAuth2Client
@Configuration
class SecurityConfig : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http {
            authorizeRequests {
                authorize("/", permitAll)
                authorize("/login/**", permitAll)
                authorize("/app/**", fullyAuthenticated)
            }
            exceptionHandling {
                accessDeniedPage = "/app/403"
            }
            oauth2Login { }
            logout {
                logoutSuccessUrl = "/"
                permitAll
            }
        }
    }

    @Bean
    fun webClient(
        clientRegistrationRepository: ClientRegistrationRepository?,
        authorizedClientRepository: OAuth2AuthorizedClientRepository?
    ): WebClient? {
        val oauth2 = ServletOAuth2AuthorizedClientExchangeFilterFunction(
            clientRegistrationRepository,
            authorizedClientRepository
        )
        oauth2.setDefaultOAuth2AuthorizedClient(true)
        return WebClient.builder()
            .apply(oauth2.oauth2Configuration())
            .build()
    }
}