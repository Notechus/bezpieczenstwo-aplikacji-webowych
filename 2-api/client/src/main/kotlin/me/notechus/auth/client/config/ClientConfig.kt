package me.notechus.auth.client.config

import nz.net.ultraq.thymeleaf.LayoutDialect
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.thymeleaf.extras.java8time.dialect.Java8TimeDialect
import org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect
import org.thymeleaf.spring5.SpringTemplateEngine
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver

@Configuration
class ClientConfig {

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