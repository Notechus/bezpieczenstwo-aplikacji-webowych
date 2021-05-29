package me.notechus.auth.config

import me.notechus.auth.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.factory.PasswordEncoderFactories
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer
import org.springframework.security.oauth2.provider.token.TokenStore
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore

@Configuration
@EnableAuthorizationServer
class AuthorizationServerConfig : AuthorizationServerConfigurerAdapter() {

    @Autowired
    lateinit var authenticationManager: AuthenticationManager

    @Autowired
    lateinit var userService: UserService

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    override fun configure(clients: ClientDetailsServiceConfigurer) {
        clients
            .inMemory()
            .withClient("my-client")
            .secret(passwordEncoder().encode("secret"))
            .scopes("read", "write")
            .authorizedGrantTypes("authorization_code", "password", "client_credentials")
            .redirectUris("http://localhost:8090/login/oauth2/code/custom")
            .accessTokenValiditySeconds(3600)
            .refreshTokenValiditySeconds(36000)
    }

    override fun configure(security: AuthorizationServerSecurityConfigurer) {
        security.tokenKeyAccess("permitAll()")
            .checkTokenAccess("isAuthenticated()")
    }

    override fun configure(endpoints: AuthorizationServerEndpointsConfigurer) {
        endpoints.authenticationManager(authenticationManager)
            .tokenStore(InMemoryTokenStore())
            .userDetailsService(userService)
    }
}