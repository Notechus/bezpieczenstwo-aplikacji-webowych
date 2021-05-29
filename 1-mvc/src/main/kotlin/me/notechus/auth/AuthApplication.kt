package me.notechus.auth

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cache.annotation.EnableCaching

@SpringBootApplication
@EnableCaching(proxyTargetClass = true)
class AuthApplication

fun main(args: Array<String>) {
    runApplication<AuthApplication>(*args)
}
