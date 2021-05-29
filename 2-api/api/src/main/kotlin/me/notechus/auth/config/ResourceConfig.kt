package me.notechus.auth.config

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer

@Configuration
@EnableWebSecurity
class ResourceConfig : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http.authorizeHttpRequests { auth ->
            auth.anyRequest().authenticated()
        }.oauth2ResourceServer { oauth2 ->
            oauth2.jwt()
        }
    }
}