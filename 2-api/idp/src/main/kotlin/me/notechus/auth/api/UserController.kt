package me.notechus.auth.api

import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal
import javax.servlet.http.HttpServletRequest


@RestController
@RequestMapping("/auth")
class UserController {

    @GetMapping("/userinfo")
    fun user(@AuthenticationPrincipal user: User?, request: HttpServletRequest): User? {
        println("got user $user")
        val context = SecurityContextHolder.getContext()
        return user
    }
}