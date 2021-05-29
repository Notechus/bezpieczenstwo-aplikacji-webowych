package me.notechus.auth.config

import nz.net.ultraq.thymeleaf.LayoutDialect
import org.springframework.boot.autoconfigure.security.SecurityProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.config.web.servlet.invoke
import org.thymeleaf.extras.java8time.dialect.Java8TimeDialect
import org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect
import org.thymeleaf.spring5.SpringTemplateEngine
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver

@Configuration
@EnableWebSecurity
@Order(SecurityProperties.BASIC_AUTH_ORDER)
class SecurityConfig : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http {
            authorizeRequests {
                authorize("/", permitAll)
                authorize("/app/**", fullyAuthenticated)
            }
            exceptionHandling {
                accessDeniedPage = "/app/403"
            }
            csrf {
                disable()
            }
            formLogin { }
        }
    }

    @Bean
    override fun authenticationManagerBean(): AuthenticationManager {
        return super.authenticationManagerBean()
    }

    @Bean
    fun templateEngine(templateResolver: SpringResourceTemplateResolver): SpringTemplateEngine {
        val templateEngine = SpringTemplateEngine()
        templateEngine.setTemplateResolver(templateResolver)
        templateEngine.addDialect(LayoutDialect())
        templateEngine.addDialect(SpringSecurityDialect())
        templateEngine.addDialect(Java8TimeDialect())
        return templateEngine
    }
}